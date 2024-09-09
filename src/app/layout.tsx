import { ReactNode } from 'react';
import { Metadata } from 'next';
import ReduxProvider from './providers';
import '@/styles/globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Cek Resi',
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <ReduxProvider>
      <html lang="en">
        <body>
          <main>
            {children}
          </main>
        </body>
      </html>
    </ReduxProvider>
  )
}

export default RootLayout;