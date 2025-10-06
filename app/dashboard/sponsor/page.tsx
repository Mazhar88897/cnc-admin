'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SponsorPage = () => {
  const SponsorLogo = ({ size = 'medium' }: { size?: 'large' | 'medium' | 'small' }) => {
    const sizeClasses = {
      large: 'h-20 w-32',
      medium: 'h-16 w-24',
      small: 'h-12 w-20'
    };

    return (
      <div className="flex flex-col items-center space-y-2">
        <Image
          src="/only-cnc.svg"
          alt="ONLY CNCs Logo"
          width={size === 'large' ? 160 : size === 'medium' ? 120 : 80}
          height={size === 'large' ? 100 : size === 'medium' ? 80 : 60}
          className={`w-auto ${sizeClasses[size]}`}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#004146] p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-left ">
          <p className="text-gray-200 text-sm sm:text-md font-semibold">Empowering Our Journey</p>
          <h1 className="text-2xl sm:text-3xl font-bold">
            <span className="text-white">Our Proud </span>
            <span className="text-[#14B8A6]">Sponsors</span>
          </h1>
        </div>

        {/* Body Text */}
        <div className="mb-10">;
          <p className="text-white font-semibold text-sm leading-relaxed max-w-3xl">
            We are grateful for the incredible support of our sponsors who make this mission possible. 
            Their partnership helps us grow, innovate, and deliver more value to our CNC community.
          </p>
        </div>

        {/* Sponsor Logos Grid */}
        <div className="space-y-4   ">
          {/* Row 1 - 2 Large Logos */}
          <div className="flex justify-center gap-12">
            <SponsorLogo size="large" />
            <SponsorLogo size="large" />
          </div>
          
          {/* Row 2 - 3 Medium Logos */}
          <div className="flex justify-center gap-12">
            <SponsorLogo size="medium" />
            <SponsorLogo size="medium" />
            <SponsorLogo size="medium" />
          </div>
          
          {/* Row 3 - 4 Small Logos */}
          <div className="flex justify-center gap-8">
            <SponsorLogo size="small" />
            <SponsorLogo size="small" />
            <SponsorLogo size="small" />
            <SponsorLogo size="small" />
          </div>
        </div>
        <div className="mt-10 m-0 sm:mt-4 sm:m-4">
        <Link href="/dashboard" onClick={()=>{console.log()}} className="rounded-mid  px-6 py-1 font-bold text-[#004146] hover:bg-[#D1D1D1]/80 bg-[#D1D1D1] ">Next</Link>

        </div>


</div>
        </div>
     
  );
};

export default SponsorPage;
