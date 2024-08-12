import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <UserProvider>
      <main id="app" className="d-flex flex-column h-100" data-testid="layout">
        {children}
      </main>
    </UserProvider>
  );
}
