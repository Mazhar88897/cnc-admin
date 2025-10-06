"use client"
// import type React from "react"
// import type { Metadata } from "next"

import TopBar from "@/components/dashboardItems/topbar"
import { useEffect } from "react"
import { useRouter } from "next/navigation"


// export const metadata: Metadata = {
//   title: "Only CNC",
//   description: "Making CNC easy",
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (

//         <div className="min-h-screen flex bg-[#004851] text-white">
//            <div>
//              <TopBar />
//              </div> 
         
//           <main className="container mx-auto px-4 py-8 mt-16 ">{children}</main>
//         </div>
     
//   )
// }
// app/dashboard/layout.tsx



import type { ReactNode } from "react"
import { useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Image from "next/image"
import BottomBar from "@/components/dashboardItems/bottombar"
import SettingsModal from "@/components/dashboardItems/settingModal"

export default function Layout({
  children,
}: {
  children: ReactNode
}) {
  const [settingsOpen, setSettingsOpen] = useState(false)
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = sessionStorage.getItem('token');
      if (!token) {
        router.replace('/auth/sign-in');
      }
    }
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col bg-[#004146]">
      {/* Top - Logo */}
      <div className="fixed  top-0 left-0 right-0 z-[100] bg-[#004146]">
        <TopBar 
          settingsOpen={settingsOpen}
          setSettingsOpen={setSettingsOpen}
        />
      </div>

      {/* Middle - Content */}
      <main className="flex-1 w-full overflow-y-auto transition-all duration-300 pt-20 pb-16 relative z-0">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </main>

      {/* Bottom Bar Component */}
      <BottomBar />

      {/* Settings Modal - Now at layout level to cover entire screen */}
      <SettingsModal open={settingsOpen} onClose={() => setSettingsOpen(false)} />

    </div>  
  )
}
