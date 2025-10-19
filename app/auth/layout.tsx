'use client'

import type { ReactNode } from "react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { ThemeProvider } from "@/components/theme-provider"
import Image from "next/image"
import Link from "next/link"
export default function Layout({
  children,
}: {
  children: ReactNode
}) {
  const router = useRouter();



  return (
   
     <div className="min-h-screen bg-[#004146] flex flex-col justify-between">
  {/* Top - Logo */}

  <Link href="/" className="">
           <div className="p-5">
    <Image
      className="hidden sm:block"
      src="/only-cnc.svg"
      alt="Logo"
      width={140}
      height={140}
    />
    <Image
      className="block sm:hidden"
      src="/only-cnc.svg"
      alt="Logo"
      width={80}
      height={80}
    />
  </div>
    </Link>


  {/* Middle - Content */}
  <main className="flex-1 overflow-auto transition-all duration-300">
    {children}
  </main>

  {/* Bottom - Report */}
  
</div>

 
  )
}
