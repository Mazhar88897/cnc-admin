import {HeadingReverse} from '@/components/screens/customHeading'
import React from 'react'

const page = () => {
  return (
    <div className='my-12'>
         <HeadingReverse  
             color="black"
             heading1="About "
             heading2="OnlyCNCs"
             subheading="An essential tool we needed make for the community."
           />
           <div>
            <Component />
           </div>
          
    </div>
  )
}

export default page


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRightToLine } from 'lucide-react'
import Link from 'next/link'
function Component() {
  return (
    <div className="min-h-screen my-10 bg-white">
      {/* Header Section */}
      <div className="px-6 py-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Welcome to <span style={{ color: "#03BFB5" }}>CNCs Only</span>
        </h1>

        <p className="font-semibold leading-relaxed mb-8">
          Frustrated with poor material with breaking bits, ruining stock, and time wasted on unreliable feeds and
          speeds charts, we built the ultimate CNC machining calculator. Whether you&apos;re cutting for fun, profit, or
          both, we believe you deserve pro-level results without needing a machining degree. Built for hobbyists,
          refined for precision.
        </p>

        {/* Mission Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">
            Our <span style={{ color: "#03BFB5" }}>Mission</span>
          </h2>
          <p className="font-semibold">
            To empower the desktop CNC community with tools that take the guesswork out of machining — and put the
            creativity back in.
          </p>
        </div>

        {/* Key Points Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">
            Key <span style={{ color: "#03BFB5" }}>Points</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card className="border-2 p-[-2]" style={{ borderColor: "black" }}>
            <div className="pb-1 px-5 py-3">
                
                <p className="text-lg font-bold">Making CNC easy</p>
                <p className="text-md my-[-1] font-bold text-[#03BFB5]">Lets take away the stress</p>
              </div>
              <CardContent>
                <p className="text-xs text-gray-700">
                One of the top two reasons people give 
up on CNC woodworking with desktop 
machines is because they struggle with 
dialling their machine in. This takes the 
stress out of that part of the process and 
gives you a starting point to dial your 
settings in.   </p>
              </CardContent>
            </Card>

            <Card className="border-2 p-[-2]" style={{ borderColor: "black" }}>
            <div className="pb-1 px-5 py-3">
                
                <p className="text-lg font-bold">For the makers community</p>
                <p className="text-md my-[-1] font-bold text-[#03BFB5]">Its not about the money</p>
              </div>
              <CardContent>
                <p className="text-xs text-gray-700">
                The makers community gives so much to 
so many people. And we understand that 
buying a machine, software and bits can be 
expensive so wanted to develop a tool that 
was free and available to all.     </p>
              </CardContent>
            </Card>

            <Card className="border-2 p-[-2]" style={{ borderColor: "black" }}>
              <div className="pb-1 px-5 py-3">
                
                <p className="text-lg font-bold">Supported by great CNC brands</p>
                <p className="text-md my-[-3] font-bold text-[#03BFB5]">They want to see you succeed!</p>
              </div>
              <CardContent>
                <p className="text-xs text-gray-700">
                The brands of the CNC world know the 
struggles of makers - because most of 
them are makers themselves. Which is why 
they have been kind enough to sponsor 
this project and bring it to life - Thank you 
to the sponsors.  </p>
              </CardContent>
            </Card>

            <Card className="border-2 p-[-2]" style={{ borderColor: "black" }}>
            <div className="pb-1 px-5 py-3">
                
                <p className="text-lg font-bold">Made better by the users</p>
                <p className="text-md my-[-1] font-bold text-[#03BFB5]">Your feedback is essential </p>
              </div>
              <CardContent>
                <p className="text-xs text-gray-700">
                Its taken a lot of effort to build up this 
platform and data, but the reality is 
that its very difficult to try and account 
for every machine, every setup, every 
variable. That’s where we need your help. 
If something feels too slow or too fast, use 
the feedback function and let us know. 
Your feedback helps everyone else.    </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Getting <span style={{ color: "#03BFB5" }}>Started</span>
          </h2>

          <p className=" mb-4">
          We’ve made this as simple as we can:
          </p>

          <ol className="list-decimal list-inside space-y-2 font-semibold">
            <li>Sign up and create your account</li>
            <li>Select your machine and spindle</li>
            <li>Select your bit and material</li>
            <li>Get this feeds and speeds you need!</li>
          </ol>
        </div>
        <div>
  <Link
    href="/auth/sign-up"
    className="inline-flex items-center justify-center h-10 sm:h-[2.5rem] px-4 rounded-md border-2 border-black bg-white text-sm text-black font-bold hover:bg-gray-50 transition-colors"
  >
    Sign Up <ArrowRightToLine className="ml-2 h-3 sm:h-4 w-3 sm:w-4" />
  </Link>
</div>

        

        {/* Footer Quote */}
        <div className="text-center py-8">
           <h1 className="text-xl mt-5 sm:mt-10 md:text-3xl lg:text-3xl  font-bold ">
   <span className='text-[#03BFB5]'>Optimized feeds and speeds Your hobby CNC machines.</span> Just select and cut
    </h1>
        </div>
      </div>
    </div>
  )
}
