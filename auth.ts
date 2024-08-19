import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth, { NextAuthConfig } from "next-auth"
import "next-auth/jwt"
import Credentials from "next-auth/providers/credentials"
import { getUserFromDb, prisma } from "./queries/user"
import bcrypt from 'bcryptjs'
import { signInSchema } from "./lib/zod"

const config: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        let user = null

        const { email, password } = await signInSchema.parseAsync(credentials)

        // logic to verify if the user exists
        user = await getUserFromDb(email)

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.")
        }

        const authenticatedUser = await bcrypt.compare(user.password, password)

        console.log('authenticatedUser :>> ', authenticatedUser);

        if (!authenticatedUser) { throw new Error('Invalid login credentials!') }

        // return user object with their profile data
        return user
      }
    })
  ],
  basePath: "/auth",
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname === "/middleware-example") return !!auth
      return true
    },
    jwt({ token, trigger, session }) {
      if (trigger === "update") token.name = session.user.name
      return token
    },
    async session({ session, token }) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken
      }
      return session
    }
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth(config)

declare module "next-auth" {
  interface Session {
    accessToken?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
  }
}