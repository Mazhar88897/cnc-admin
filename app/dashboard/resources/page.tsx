import Heading from '@/components/screens/customHeading'
import React from 'react'

const page = () => {
  return (
    <div className='my-12'>
         <Heading  
             color="white"
             heading1="More CNC "
             heading2="Resources"
             subheading="A selection of great CNC resources to purchase from and excellent CNC related channels."
           />
           <div>
            <Component />
           </div>
          
    </div>
  )
}

export default page


import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
function Component() {
  return (
    <div className="min-h-screen my-10 ">
      {/* Header Section */}
      <div className="px-6 py-8 max-w-7xl mx-auto">
        <h1 className="text-3xl  text-white font-bold mb-6">
          Welcome to <span style={{ color: "#03BFB5" }}>CNCs Only</span>
        </h1>

        <p className="font-semibold text-white leading-relaxed mb-8">
          Frustrated with poor material with breaking bits, ruining stock, and time wasted on unreliable feeds and
          speeds charts, we built the ultimate CNC machining calculator. Whether you&apos;re cutting for fun, profit, or
          both, we believe you deserve pro-level results without needing a machining degree. Built for hobbyists,
          refined for precision.
        </p>

        {/* Mission Section */}
        <div className="mb-8">
          <h2 className="text-lg text-white font-semibold mb-2">
            Our <span style={{ color: "#03BFB5" }}>Mission</span>
          </h2>
          <p className="font-semibold text-white">
            To empower the desktop CNC community with tools that take the guesswork out of machining — and put the
            creativity back in.
          </p>
        </div>

        {/* Key Points Section */}
        <div className="mb-8">
          <div className='my-12'>
          <Heading  
             color="white"
             heading1=" Stores and resource "
             heading2="platforms"
             subheading=" A selection of great CNC resources to purchase from and excellent CNC related channels."
           />
          </div>
       

                     <div className="grid md:grid-cols-2 gap-4 mb-6">
             <Link href="https://cncwithme.com" target='_blank' className="block h-full">
               <Card className="border-2 bg-transparent relative cursor-pointer hover:border-[#03BFB5] transition-colors duration-200 h-full flex flex-col" style={{ borderColor: "white" }}>
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#03BFB5] rounded-l-full"></div>
                 <div className="py-4 text-center flex-shrink-0">
                   <p className="text-xl text-white font-bold">CNCWITHME</p>
                   <p className="text-md font-bold text-[#03BFB5]">Weekly project files and tutorials.</p>
                 </div>
                 <CardContent className="flex-grow">
                   <p className="text-sm text-white">
                     The easiest way to expand your project library, get 
                     support, and streamline shop time. Sharpen your skills 
                     no matter your level.
                   </p>
                 </CardContent>
                 <CardFooter className='text-white w-full flex-shrink-0'>
                   <p className='text-sm w-full text-center font-bold'>DISCOUNT CODE: JAMESDEANDESIGNS</p>
                 </CardFooter>
               </Card>
             </Link>

             <Link href="https://account.carveco.com/purchase/MAK-S-12D?promoCode=PROMO-JamesDean90" target='_blank' className="block h-full">
               <Card className="border-2 bg-transparent relative cursor-pointer hover:border-[#03BFB5] transition-colors duration-200 h-full flex flex-col" style={{ borderColor: "white" }}>
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#03BFB5] rounded-l-full"></div>
                 <div className="py-4 text-center flex-shrink-0">
                   <p className="text-xl text-white font-bold">Carveco CNC Software</p>
                   <p className="text-md font-bold text-[#03BFB5]">90 Day free trial of Carveco Maker</p>
                 </div>
                 <CardContent className="flex-grow">
                   <p className="text-sm text-white">
                     Unlimited use for 90 days of one of the best CAD/CAM 
                     softwares available for CNC and makers.
                   </p>
                   <p className='text-sm text-white mt-2'>(Note: You will NOT be charged during your trial)</p>
                 </CardContent>
               </Card>
             </Link>

             <Link href="https://www.cadencemfgdesign.com/?ref=JDDesigns" target='_blank' className="block h-full">
               <Card className="border-2 bg-transparent relative cursor-pointer hover:border-[#03BFB5] transition-colors duration-200 h-full flex flex-col" style={{ borderColor: "white" }}>
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#03BFB5] rounded-l-full"></div>
                 <div className="py-4 text-center flex-shrink-0">
                   <p className="text-xl text-white font-bold">Jenny Bits</p>
                   <p className="text-md font-bold text-[#03BFB5]">Best CNC bits available!</p>
                 </div>
                 <CardContent className="flex-grow">
                   <p className="text-sm text-white">
                     A selection of some of the best and innovative CNC bits 
                     on the market from Cadence Manufacturing.
                   </p>
                 </CardContent>
                 <CardFooter className='text-white w-full flex-shrink-0'>
                   <p className='text-sm w-full text-center font-bold'>DISCOUNT CODE: JAMESDEANDESIGNS</p>
                 </CardFooter>
               </Card>
             </Link>

             <Link href="https://idcwoodcraft.com/" target='_blank' className="block h-full">
               <Card className="border-2 bg-transparent relative cursor-pointer hover:border-[#03BFB5] transition-colors duration-200 h-full flex flex-col" style={{ borderColor: "white" }}>
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#03BFB5] rounded-l-full"></div>
                 <div className="py-4 text-center flex-shrink-0">
                   <p className="text-xl text-white font-bold">IDC Woodcraft</p>
                   <p className="text-md font-bold text-[#03BFB5]">CNC accessories and bits</p>
                 </div>
                 <CardContent className="flex-grow">
                   <p className="text-sm text-white">
                     A wide selection of CNC related accessories and bits for 
                     beginners.
                   </p>
                 </CardContent>
                 <CardFooter className='text-white w-full flex-shrink-0'>
                   <p className='text-sm w-full text-center font-bold'>DISCOUNT CODE: *COMING SOON*</p>
                 </CardFooter>
               </Card>
             </Link>
           </div>
        </div>

        {/* Getting Started Section */}
        <div className=" mt-14 w-full text-center">
          <h2 className="text-2xl text-white font-bold ">
          Best <span style={{ color: "#03BFB5" }}>CNC YouTube channels</span> for tutorials and projects 
          </h2>

          

          <ol className="list-decimal text-white list-inside space-y-2 mt-4 font-semibold">
            <li className="break-words">
              Hamilton Dilbeck - <span className='text-[#03BFB5]'><Link target='_blank' href="https://www.youtube.com/@HamiltonDilbeck" className="break-all hover:underline">https://www.youtube.com/@HamiltonDilbeck</Link></span>
            </li>
            <li className="break-words">
              James Dean Designs - <span className='text-[#03BFB5]'><Link target='_blank' href="https://www.youtube.com/@JamesDeanDesigns" className="break-all hover:underline">https://www.youtube.com/@JamesDeanDesigns</Link></span>
            </li>
            <li className="break-words">
              IDC Woodcraft - <span className='text-[#03BFB5]'><Link target='_blank' href="https://www.youtube.com/@IDCWoodcraft" className="break-all hover:underline">https://www.youtube.com/@IDCWoodcraft</Link></span>
            </li>
            <li className="break-words">
              TechyDIY - <span className='text-[#03BFB5]'><Link target='_blank' href="https://www.youtube.com/@techydiy" className="break-all hover:underline">https://www.youtube.com/@techydiy</Link></span>
            </li>
            <li className="break-words">
              Cutting It Close - <span className='text-[#03BFB5]'><Link target='_blank' href="https://www.youtube.com/@cutting-it-close" className="break-all hover:underline">https://www.youtube.com/@cutting-it-close</Link></span>
            </li>
            <li className="break-words">
              Southpaw CNC & Woodworking - <span className='text-[#03BFB5]'><Link target='_blank' href="https://www.youtube.com/@SothpawDesigns" className="break-all hover:underline">https://www.youtube.com/@SothpawDesigns</Link></span>
            </li>
            <li className="break-words">
              STL Woodworking - <span className='text-[#03BFB5]'><Link target='_blank' href="https://www.youtube.com/@stlwoodworking" className="break-all hover:underline">https://www.youtube.com/@stlwoodworking</Link></span>
            </li>
          </ol>
        </div>

        {/* Footer Quote */}
        
      </div>
    </div>
  )
}
