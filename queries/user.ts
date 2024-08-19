import { PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient()

export const getUserFromDb = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email
    }
  })

  return user;
}