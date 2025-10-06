"use client"

import { useState, useEffect } from "react"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface MachineOption {
  id: string;
  name: string;
}

// Fetch materials from API
const fetchMaterialOptions = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cnc/get-all/materials`);
    if (!response.ok) {
      throw new Error('Failed to fetch materials');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching materials:', error);
    return [];
  }
}

// Fetch bits from API
const fetchBitOptions = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cnc/get-all/bits`);
    if (!response.ok) {
      throw new Error('Failed to fetch bits');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching bits:', error);
    return [];
  }
}

export default function CncForm() {
  const [cncMachine, setCncMachine] = useState("")
  const [router, setRouter] = useState("")
  const [cncDropdownOpen, setCncDropdownOpen] = useState(false)
  const [routerDropdownOpen, setRouterDropdownOpen] = useState(false)
  const [machineSearch, setMachineSearch] = useState("")
  const [bitSearch, setBitSearch] = useState("")

  const [machineOptions, setMachineOptions] = useState<MachineOption[]>([])
  const [routerOptions, setRouterOptions] = useState<MachineOption[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  // Fetch data from API
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true)
      setError('')
      
      try {
        const materials = await fetchMaterialOptions()
        const bits = await fetchBitOptions()

        setMachineOptions(materials)
        setRouterOptions(bits)
        const sessionBit = sessionStorage.getItem('selectedBit')
        const sessionMaterial = sessionStorage.getItem('selectedMaterial')
       
        console.log('sessionBit', sessionBit)
        console.log('sessionMaterial', sessionMaterial)
        // Set selections (saved values or defaults)
        if (materials.length > 0 && !sessionMaterial) {
          setCncMachine(materials[0].name)
        } else if (materials.length > 0 && sessionMaterial) {
          setCncMachine(sessionMaterial)
        }
        if (bits.length > 0 && !sessionBit) {
          setRouter(bits[0].name)
        } else if (bits.length > 0 && sessionBit) {
          setRouter(sessionBit)
        }
      } catch (err) {
        setError('Failed to load material and bit data')
        console.error('Error loading data:', err)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  useEffect(() => {
    if (
      routerOptions.length > 0 &&
      !router
    ) {
      setRouter(routerOptions[0].name);
    }
  }, [routerOptions, router]);

  return (
    <div className="flex h-full pt-12  overflow-hidden items-center justify-center">

      <div className="w-full max-w-2xl p-8">
        <h1 className="mb-4 text-3xl font-bold text-white"></h1>

        <div className="mb-4">
          <label className="mb-4 font-bold text-xl text-white ">What material do you have?</label>
          <div className="relative mt-4">
            <button
              className="flex w-full  items-center justify-between rounded-mid bg-white px-4 py-3 text-left disabled:opacity-50"
              onClick={() => {setRouterDropdownOpen(false);
                              setCncDropdownOpen(!cncDropdownOpen)
              }
                            
                            

              }
              disabled={isLoading}
            >
              <span className=" font-bold text-sm">{cncMachine || "Select a material"}</span>
              {cncMachine && (
                <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-teal-500">
                  { cncDropdownOpen ? <ChevronUp strokeWidth={3} className="h-5 w-5 text-white" /> : <ChevronDown strokeWidth={3} className="h-5 w-5 text-white" />}
                  
                </span>
              )}
            </button>

                        {cncDropdownOpen && (
              <div className=" z-10 overflow-y-auto max-h-[300px] mt-1 w-full rounded-mid bg-white shadow-lg">
                {machineOptions.map((option) => (
                  <div
                    key={option.id}
                    className={cn(
                      "flex cursor-pointer items-center justify-between px-4 py-2 hover:bg-gray-100",
                      cncMachine === option.name && "bg-gray-50",
                    )}
                                          onClick={() => {
                        setCncMachine(option.name)
                    
                          sessionStorage.setItem('selectedMaterial', option.name)
                        
                        setCncDropdownOpen(false)
                      }}
                  >
                    <span className="font-bold text-sm">{option.name}</span>
                    {cncMachine === option.name && (
                      <span className="flex h-2 w-2 items-center justify-center rounded-full bg-teal-500">
                        {/* <Check className="h-4 w-4 text-white" /> */}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="my-6 pt-6">
          <p className="mb-4  text-xl font-bold text-white">What bit are you using?</p>
          <div className="relative">
            <button
              className="flex w-full items-center justify-between  rounded-mid bg-white px-4 py-3 text-left disabled:opacity-50"
              onClick={() => {setRouterDropdownOpen(!routerDropdownOpen);
                                  setCncDropdownOpen(false)
              }}
              disabled={isLoading}
            >
            <span className=" font-bold text-sm">{router || "Select a bit"}</span>
              {router && (
                <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-teal-500">
                  { routerDropdownOpen ? <ChevronUp strokeWidth={3} className="h-5 w-5 text-white" /> : <ChevronDown strokeWidth={3} className="h-5 w-5 text-white" />}
             
                </span>
              )} 
            </button>

            {routerDropdownOpen && (
              <div className=" z-10 overflow-y-auto max-h-[200px]  mt-1 w-full rounded-mid bg-white shadow-lg">
                {/* Search Bar */}
                <div className="p-2 border-b border-gray-200">
                  <input
                    type="text"
                    placeholder="Search bits..."
                    value={bitSearch}
                    onChange={(e) => setBitSearch(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
                
                {/* Filtered Options */}
                {routerOptions
                  .filter((option) =>
                    option.name.toLowerCase().includes(bitSearch.toLowerCase())
                  )
                  .map((option) => (
                    <div
                      key={option.id}
                      className={cn(
                        "flex cursor-pointer items-center justify-between px-4 py-2 hover:bg-gray-100",
                        router === option.name && "bg-gray-50",
                      )}
                      onClick={() => {
                        setRouter(option.name)
                       
                          sessionStorage.setItem('selectedBit', option.name)
                   
                        setRouterDropdownOpen(false)
                        setBitSearch("") // Clear search when selection is made
                      }}
                    >
                      <span className="font-bold text-sm">{option.name}</span>
                      {router === option.name && (
                        <span className="flex h-2 w-2 items-center justify-center rounded-full bg-teal-500">
                          
                        </span>
                      )}
                    </div>
                  ))}
                
                {/* No results message */}
                {routerOptions.filter((option) =>
                  option.name.toLowerCase().includes(bitSearch.toLowerCase())
                ).length === 0 && bitSearch && (
                  <div className="px-4 py-2 text-sm text-gray-500">
                    No bits found matching {bitSearch}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <Button 
          onClick={async () => {
            // Use current state values directly
            const selectedMachine = sessionStorage.getItem('selectedMachine');
            const selectedRouter = sessionStorage.getItem('selectedRouter');
            const remember = sessionStorage.getItem('rememberChoice');
            const selectedMaterial = cncMachine;
            const selectedBit = router;
            let token = null;
            if (typeof window !== 'undefined') {
              token = sessionStorage.getItem('token');
            }
            console.log('=== All Selected Values ===')
            console.log('Machine:', selectedMachine)
            console.log('Router/Spindle:', selectedRouter)
            console.log('Material:', selectedMaterial)
            console.log('Bit:', selectedBit)
            sessionStorage.setItem('selectedMaterial', selectedMaterial)
            sessionStorage.setItem('selectedBit', selectedBit)
            console.log('Remember:', remember)
            console.log('========================')

            try {
              const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/cnc/get-values`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                  machine: selectedMachine,
                  spindle: selectedRouter,
                  bit: selectedBit,
                  material: selectedMaterial,
                  remember: remember === 'true'
                })
              })

              console.log('Response status:', response.status)
              // console.log('Response headers:', Object.fromEntries(response.headers.entries()))
              
              if (response.ok) {
                const data = await response.json()
                console.log('API Response:', data)
                sessionStorage.setItem('multiplier', data.multiplier)
                // Store the response in session storage (only for token/warning/setting, not for bit/material)
                if (typeof window !== 'undefined') {
                  sessionStorage.setItem('setting', JSON.stringify(data))
                  sessionStorage.setItem('warning', data.warning)
                }
                console.log('warning', data.warning)
                // Redirect to settings page
                window.location.href = '/dashboard/setting'
            
              } else {
                console.error('API request failed:', response.status, response.statusText)
                
                alert(`Failed to save settings. Error: ${response.status} ${response.statusText}`)
              }


            } catch (error) {
              console.error('Error making API request:', error)
        
            }
          }}
          className="rounded-mid px-6 py-1 font-bold text-[#004146] hover:bg-[#D1D1D1]/80 bg-[#D1D1D1]"
        >
          Next
        </Button>
      </div>
    </div>
  )
}        