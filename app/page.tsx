"use client"
import Navbar from "@/components/screens/Navbar"
import Hero from "@/components/screens/hero"
import Footer from "@/components/screens/Footer"
import Accords from "@/components/screens/Accords"
import Testimonials from "@/components/screens/owner"
import Image from "next/image"
import Heading, { HeadingReverse } from "@/components/screens/customHeading"
import { ButtonsFAQ, ButtonsTable } from "@/components/pages/buutons"
import Newsletter from "@/components/screens/newsletter"
import Table from "@/components/screens/table"
import Sponsor from "@/components/screens/sponsor"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Description from "@/components/screens/description"

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />











    {/* <div className="my-20">
      <Heading  
          color="black"
          heading1="Any"
          heading2="Heading"
          subheading="when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <div className="w-full  h-32 sm:h-[60vh] relative">
  <Image
    src="/any.svg"
    alt="Logo"
    fill
    className="object-contain"
  />
</div>

        </div> */}


      <div>
        <Description />
      </div>


        {/* <div className="m-0 sm:m-6 my-20">
          <Sponsor />
        </div> */}




















      {/* <div className="bg-[#004146] mb-14  py-20">
      <HeadingReverse  
          color="white"
          heading1="Platform "
          heading2="Guide"
          subheading="when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <div className="flex w-full text-center rounded-mid justify-center my-9 items-center">
         <div className="mt-4 hidden sm:block ">
            <iframe className="rounded-mid" width="974" height="514" src="https://www.youtube.com/embed/BHACKCNDMW8" title="sample"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
         <div className="mt-4 block sm:hidden">
            <iframe className="rounded-mid" width="350" height="210" src="sample" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div> </div>
        <Buttons />

      </div> */}

      <div className="bg-[#004146] mb-10 py-10 relative" style={{ backgroundImage: 'url(/step-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <HeadingReverse  
          color="white"
          heading1="3 "
          heading2="Simple "
          heading3="Steps..."
          subheading=""
        />
        <div className="py-5">
        <div className="max-w-6xl mx-auto">
        <div className="flex flex-row justify-center items-center gap-1 sm:gap-12">
          {/* Step 1 */}
          <div className="flex-1 min-w-[40px] sm:min-w-[120px] flex flex-col items-center">
            {/* <span className="text-lg sm:text-4xl font-bold text-white mb-1 sm:mb-2">3</span>
            <div className="w-12 h-12 sm:w-40 sm:h-40 flex items-center justify-center mb-1 sm:mb-4">
              <Image src="/image3.svg" alt="Your material" width={60} height={40} className="object-contain sm:w-[180px] sm:h-[120px]" />
            </div>
            <span className="mt-1 sm:mt-2 text-center text-white font-bold leading-tight text-[10px] sm:text-base">
              AND YOUR<br />MATERIAL
            </span> */}
          </div>
          <div className="flex-1 min-w-[40px] sm:min-w-[120px] flex flex-col items-center">
            <span className="text-lg sm:text-4xl font-bold text-white mb-1 sm:mb-2">1</span>
            <div className="w-12 h-12 sm:w-40 sm:h-40 flex items-center justify-center mb-1 sm:mb-4">
              <Image src="/image.svg" alt="Pick your machine" width={60} height={50} className="object-contain sm:w-[180px] sm:h-[150px]" />
            </div>
            <span className="mt-1 sm:mt-2 text-center text-white font-bold leading-tight text-[10px] sm:text-base">
              PICK YOUR MACHINE<br /><span className="hidden sm:block">& SPINDLE</span>
            </span>
          </div>
          {/* Step 2 */}
          <div className="flex-1 min-w-[40px] sm:min-w-[120px] flex flex-col items-center">
            <span className="text-lg sm:text-4xl font-bold text-white mb-1 sm:mb-2">2</span>
            <div className="w-12 h-12 sm:w-40 sm:h-40 flex items-center justify-center mb-1 sm:mb-4">
              <Image src="/image2.svg" alt="Your bit" width={30} height={35} className="object-contain sm:w-[120px] sm:h-[130px]" />
            </div>
            <span className="mt-1 sm:mt-2 text-center text-white font-bold leading-tight text-[10px] sm:text-base">
              YOUR<br />BIT
            </span>
          </div>
          {/* Step 3 */}
          <div className="flex-1 min-w-[40px] sm:min-w-[120px] flex flex-col items-center">
            <span className="text-lg sm:text-4xl font-bold text-white mb-1 sm:mb-2">3</span>
            <div className="w-12 h-12 sm:w-40 sm:h-40 flex items-center justify-center mb-1 sm:mb-4">
              <Image src="/image3.svg" alt="Your material" width={65} height={55} className="object-contain sm:w-[200px] sm:h-[160px]" />
            </div>
            <span className="mt-1 sm:mt-2 text-center text-white font-bold leading-tight text-[10px] sm:text-base">
              AND YOUR<br />MATERIAL
            </span>
          </div>
          <div className="flex-1 min-w-[40px] sm:min-w-[120px] flex flex-col items-center">
            {/* <span className="text-lg sm:text-4xl font-bold text-white mb-1 sm:mb-2">3</span>
            <div className="w-12 h-12 sm:w-40 sm:h-40 flex items-center justify-center mb-1 sm:mb-4">
              <Image src="/image3.svg" alt="Your material" width={60} height={40} className="object-contain sm:w-[180px] sm:h-[120px]" />
            </div>
            <span className="mt-1 sm:mt-2 text-center text-white font-bold leading-tight text-[10px] sm:text-base">
              AND YOUR<br />MATERIAL
            </span> */}
          </div>
        </div>
      </div>
        </div>
      

        <div>
          <p className="text-white px-6 py-5 pt-5 text-center text-xl sm:text-3xl font-bold">
            GET THE <span className="text-[#03BFB5]">SPEEDS AND FEEDS</span> YOU NEED
          </p>
          <div className="flex justify-center items-center">
            <Link href="/main/about" className="bg-[#03BFB5] hover:bg-[#03BFB5]/80 text-white  font-bold px-8 py-1 rounded-[20px] text-lg transition-colors duration-200">
          Learn More
        </Link>
          </div>
        </div>
      

      </div>














      <>
      <Heading  
          color="black"
          heading1="Frequently "
          heading2="Asked Questions"
          subheading="Some of the most common questions users may ask all in one place."
        />
    
     
      <Accords />
      <ButtonsFAQ/>
      </>
   






     <div className="sm:py-10">
      <div className="py-10 ">
      <HeadingReverse  
          color="black"
          heading1="What Our "
          heading2="Users"
          heading3=" Have To Say... "
          subheading=""
        />

      </div>
      <Testimonials /> 
      </div>





      <>
      <div className="bg-[#004146] pt-10">
      <Heading  
          color="white"
          heading1=" Sign up "
          heading2="for newsletter"
          subheading="Join the OnlyCNCs Newsletter for Exclusive Industry Updates!"
        />
        <Newsletter />

      </div>

      </>








      <>
      <div className="py-10"> 

      <div className="pt-10 er py-8">
      <HeadingReverse  
          color="black"
          heading1="Why use"
          heading2="OnlyCNC's ?"
          heading3=""
          subheading=""
        />

      </div>
      {/* <Qouatation /> */}

      <Table />
      <ButtonsTable/>
      </div>
      </>















      <Footer />

    </main>
  )
}
