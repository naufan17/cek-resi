'use client'

import { Provider } from 'react-redux';
import { store } from '@/store';
import '@/styles/globals.css'

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <main>
            {children}
          </main>
        </body>
      </html>
    </Provider>
  )
}

export default RootLayout;