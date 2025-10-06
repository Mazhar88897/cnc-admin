import { type ReactNode } from 'react'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#004146]">
      {/* <header className="w-full">
        <div className="flex items-center gap-3 p-4">
          <img src="/only-cnc.svg" alt="OnlyCNCs" className="h-8 w-auto" />
          <span className="text-white font-semibold text-sm sm:text-base">Admin Panel</span>
        </div>
      </header> */}
      <main className="">
        {children}
      </main>
    </div>
  )
}



