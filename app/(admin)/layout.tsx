import SidebarComponent from '@/components/sidebar/page';
import React from 'react'
import "@/app/globals.css";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>

      <body>
        <aside className=' h-screen '>
          <SidebarComponent />
        </aside>
        <main>
          <div>
            {children}
          </div>
        </main>

      </body>

    </html>
  )
}


