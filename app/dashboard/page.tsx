"use client"

import { useState, useEffect } from "react"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
// import SponsorModal from "@/components/pages/modal"

interface MachineOption {
  id: string;
  name: string;
}

// Fetch machines from API
const fetchMachineOptions = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cnc/get-all/machines`);
    if (!response.ok) {
      throw new Error('Failed to fetch machines');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching machines:', error);
    return [];
  }
}

// Fetch spindles from API
const fetchRouterOptions = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cnc/get-all/spindles`);
    if (!response.ok) {
      throw new Error('Failed to fetch spindles');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching spindles:', error);
    return [];
  }
}

export default function CncForm() {
  const [token, setToken] = useState<string | null>(null);
  const [cncMachine, setCncMachine] = useState("");
  const [router, setRouter] = useState("");

  const [cncDropdownOpen, setCncDropdownOpen] = useState(false)
  const [routerDropdownOpen, setRouterDropdownOpen] = useState(false)
  const [machineSearch, setMachineSearch] = useState("")

  const [machineOptions, setMachineOptions] = useState<MachineOption[]>([])
  const [routerOptions, setRouterOptions] = useState<MachineOption[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [rememberChoice, setRememberChoice] = useState(false);
  const [isSponsorModalOpen, setIsSponsorModalOpen] = useState(false);

  // Get token from sessionStorage in browser only
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setToken(sessionStorage.getItem('token'));
      // Show sponsor modal on page load/refresh
      setIsSponsorModalOpen(true);
    }
  }, []);

  // Fetch user preference if token is available
  const fetchPreference = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cnc/get-preference`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    if (data.machine) {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('selectedMachine', data.machine);
        sessionStorage.setItem('selectedRouter', data.spindle);
        sessionStorage.setItem('selectedMaterial', data.material);
        sessionStorage.setItem('selectedBit', data.bit);
        sessionStorage.setItem('rememberChoice', 'true');
        setCncMachine(data.machine);
        setRouter(data.spindle);
      }
      setRememberChoice(true);
    } else {
      setRememberChoice(false);
    }
    console.log('Preference:', data);
  };
  
  // Fetch data from API
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError('');
      try {
        const machines = await fetchMachineOptions();
        const routers = await fetchRouterOptions();
        setMachineOptions(machines);
        setRouterOptions(routers);
        // On load, check sessionStorage for previous selection
        let initialMachine = '';
        let initialRouter = '';
        if (typeof window !== 'undefined') {
          const savedMachine = sessionStorage.getItem('selectedMachine');
          const savedRouter = sessionStorage.getItem('selectedRouter');
          if (savedMachine && machines.some((m: MachineOption) => m.name === savedMachine)) {
            initialMachine = savedMachine;
          } else if (machines.length > 0) {
            initialMachine = machines[0].name;
            sessionStorage.setItem('selectedMachine', machines[0].name);
          }
          if (savedRouter && routers.some((r: MachineOption) => r.name === savedRouter)) {
            initialRouter = savedRouter;
          } else if (routers.length > 0) {
            initialRouter = routers[0].name;
            sessionStorage.setItem('selectedRouter', routers[0].name);
          }
        } else {
          if (machines.length > 0) initialMachine = machines[0].name;
          if (routers.length > 0) initialRouter = routers[0].name;
        }
        setCncMachine(initialMachine);
        setRouter(initialRouter);
      } catch (err) {
        setError('Failed to load machine and spindle data');
        console.error('Error loading data:', err);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  
  }, []);

  // Only run fetchPreference when token is set
  useEffect(() => {
    if (!token) return;
    fetchPreference();
  }, [token]);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('rememberChoice');
      if (saved === 'true') {
        setRememberChoice(true);
      } else {
        setRememberChoice(false);
      }
    }
  }, []);

  const handleRememberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setRememberChoice(isChecked);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('rememberChoice', isChecked.toString());
    }
  };

  return (
    <div className="flex h-full pt-16 s items-center justify-center">

      <div className="w-full max-w-2xl p-8">
        <h1 className="mb-6 text-3xl font-bold text-white">Lets get started!</h1>

        {isLoading && (
          <div className="text-white text-center mb-6">
            Loading machines and spindles...
          </div>
        )}

        {/* {error && (
          <div className="text-red-400 text-center mb-6">
            {error}
          </div>
        )} */}

        <div className="mb-6">
          <p className="mb-2 font-bold text-lg text-white">What CNC machine do you have?</p>
          <div className="relative">
            <button
              className="flex w-full  items-center justify-between rounded-mid bg-white px-4 py-3 text-left disabled:opacity-50"
              onClick={() => {setRouterDropdownOpen(false);
                              setCncDropdownOpen(!cncDropdownOpen)
              }
                            
                            

              }
              disabled={isLoading}
            >
              <span className=" font-bold text-sm">{cncMachine || "Select a machine"}</span>
              {cncMachine && (
                <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-teal-500">
                  { cncDropdownOpen ? <ChevronUp strokeWidth={3} className="h-5 w-5 text-white" /> : <ChevronDown strokeWidth={3} className="h-5 w-5 text-white" />}
                  
                </span>
              )}
            </button>

            {cncDropdownOpen && (
              <div className="absolute z-10 mt-2 w-full rounded-mid bg-white shadow-lg max-h-[300px] overflow-y-auto">
                {/* Search Bar */}
                <div className="p-2 border-b border-gray-200">
                  <input
                    type="text"
                    placeholder="Search machines..."
                    value={machineSearch}
                    onChange={(e) => setMachineSearch(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
                
                {/* Filtered Options */}
                {machineOptions
                  .filter((option) =>
                    option.name.toLowerCase().includes(machineSearch.toLowerCase())
                  )
                  .map((option) => (
                    <div
                      key={option.id}
                      className={cn(
                        "flex cursor-pointer items-center justify-between px-4 py-2 hover:bg-gray-100",
                        cncMachine === option.name && "bg-gray-50",
                      )}
                      onClick={() => {
                        setCncMachine(option.name)
                        if (typeof window !== 'undefined') {
                          sessionStorage.setItem('selectedMachine', option.name)
                        }
                        setCncDropdownOpen(false)
                        setMachineSearch("") // Clear search when selection is made
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
                
                {/* No results message */}
                {machineOptions.filter((option) =>
                  option.name.toLowerCase().includes(machineSearch.toLowerCase())
                ).length === 0 && machineSearch && (
                  <div className="px-4 py-2 text-sm text-gray-500">
                    No machines found matching {machineSearch}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 pt-12">
          <p className="mb-2  text-lg font-bold text-white">What spindle or router are you using?</p>
          <div className="relative">
            <button
              className="flex w-full items-center justify-between  rounded-mid bg-white px-4 py-3 text-left disabled:opacity-50"
              onClick={() => {setRouterDropdownOpen(!routerDropdownOpen);
                                  setCncDropdownOpen(false)
              }}
              disabled={isLoading}
            >
            <span className=" font-bold text-sm">{router || "Select a router"}</span>
              {router && (
                <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-teal-500">
                  { routerDropdownOpen ? <ChevronUp strokeWidth={3} className="h-5 w-5 text-white" /> : <ChevronDown strokeWidth={3} className="h-5 w-5 text-white" />}
             
                </span>
              )}
            </button>

            {routerDropdownOpen && (
              <div className=" z-10 mt-1 w-full rounded-mid bg-white shadow-lg">
                {routerOptions.map((option) => (
                  <div
                    key={option.id}
                    className={cn(
                      "flex cursor-pointer items-center justify-between px-4 py-2 hover:bg-gray-100",
                      router === option.name && "bg-gray-50",
                    )}
                    onClick={() => {
                      setRouter(option.name)
                      if (typeof window !== 'undefined') {
                        sessionStorage.setItem('selectedRouter', option.name)
                      }
                      setRouterDropdownOpen(false)
                    }}
                  >
                     <span className=" font-bold text-sm">{option.name}</span>
                    {router === option.name && (
                      <span className="flex h-2 w-2 items-center justify-center rounded-full bg-teal-500">
                       
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="my-6 pt-4"> <label className="flex items-center gap-2 text-md text-white font-bold cursor-pointer">
      <input
        type="checkbox"
        checked={rememberChoice}
        onChange={handleRememberChange}
        className="w-4 h-4"
      />
      Remember my choice
    </label></div>

        {/* Remove Remember my choices checkbox UI */}
        {/* <div className="mb-8 flex items-center"> ... </div> */}
      
        <Link href="/dashboard/next" onClick={()=>{console.log(routerOptions)}} className="rounded-mid px-6 py-1 font-bold text-[#004146] hover:bg-[#D1D1D1]/80 bg-[#D1D1D1] ">Next</Link>
      </div>

      {/* Sponsor Modal */}
      {/* <SponsorModal 
        isOpen={isSponsorModalOpen} 
        onClose={() => setIsSponsorModalOpen(false)} 
      /> */}
    </div>
  )
}
