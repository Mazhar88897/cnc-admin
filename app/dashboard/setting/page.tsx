"use client"

import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import AdjustMultiplierModal from "@/components/dashboardItems/adjustmultiplier"
import WarningModal from '@/components/dashboardItems/warningmodal';
import { useState, useEffect } from "react"
import Link from "next/link"

interface ApiResponse {
  multiplier: number;
  spindle: string;
  bit: string;
  material: string;
  rpm: number | null;
  feed: number | null;
  depth_of_cut: number | null;
  stepover: number | null;
  plunge: number | null;
  warning: string | null;
}

export default function SuggestedSettings() {
  const [isAdjustModalOpen, setIsAdjustModalOpen] = useState(false);
  const [apiData, setApiData] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [isMetric, setIsMetric] = useState(true); // false = inches, true = millimeters
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [warningMessage, setWarningMessage] = useState<string | null>(null);
  const [multiplier, setMultiplier] = useState<number>(1); // default 1 (no change)

  const openAdjustModal = () => setIsAdjustModalOpen(true);
  const closeAdjustModal = () => setIsAdjustModalOpen(false);

  const handleSaveMultiplier = (newMultiplier: number) => {
    setMultiplier(newMultiplier);
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const multiplierActual = sessionStorage.getItem('multiplier');
      if (multiplierActual) {
        setMultiplier(parseFloat(multiplierActual));
      }
    }
  }, []);

  // Conversion functions
  const mmToInches = (mm: number): number => mm / 25.4;
  const inchesToMm = (inches: number): number => inches * 25.4;
  const mmpmToIpm = (mmpm: number): number => mmpm / 25.4; // mm per minute to inches per minute
  const ipmToMmpm = (ipm: number): number => ipm * 25.4; // inches per minute to mm per minute

  // Format values based on current unit
  // API returns values in millimeters, so we need to convert to inches when isMetric is false
  const formatValue = (value: number | null, unit: 'length' | 'speed'): string => {
    if (value === null) return 'N/A';
    
    if (unit === 'length') {
      if (isMetric) {
        // API returns mm, display as mm
        return `${value.toFixed(2)} mm`;
      } else {
        // API returns mm, convert to inches
        const inches = mmToInches(value);
        return `${inches.toFixed(3)} in`;
      }
    } else if (unit === 'speed') {
      if (isMetric) {
        // API returns mm/min, display as mm/min
        return `${value.toFixed(1)} mm/min`;
      } else {
        // API returns mm/min, convert to inches/min
        const ipm = mmpmToIpm(value);
        return `${ipm.toFixed(1)} ipm`;
      }
    }
    
    return 'N/A';
  };

  const getMultiplied = (value: number | null) =>
    value === null ? null : value * multiplier;
 


  // Fetch settings from API or sessionStorage
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        setIsLoading(true);
        setError('');

        // Only run on client side
        if (typeof window === 'undefined') {
          setIsLoading(false);
          return;
        }

        // First, try to get data from sessionStorage
        const storedSettings = sessionStorage.getItem('setting');
        if (storedSettings) {
          try {
            const data: ApiResponse = JSON.parse(storedSettings);
            console.log('Using stored settings:', data);
            setApiData(data);
            setIsLoading(false);
            return;
          } catch (parseError) {
            console.error('Error parsing stored settings:', parseError);
            // Continue to API call if parsing fails
          }
        }

        // If no stored data, get selected values from sessionStorage and make API call
        const machine = sessionStorage.getItem('selectedMachine');
        const spindle = sessionStorage.getItem('selectedRouter');
        const bit = sessionStorage.getItem('selectedBit');
        const material = sessionStorage.getItem('selectedMaterial');
        const remember = sessionStorage.getItem('rememberChoices');
        

        // Check if all required values are available
        if (!machine || !spindle || !bit || !material) {
          setError('Please complete the previous steps to get settings');
          setIsLoading(false);
          return;
        }

        const requestBody = {
          machine: machine,
          spindle: spindle,
          bit: bit,
          material: material,
          remember: remember === 'true'
        };

        console.log('API Request Body:', requestBody);

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cnc/calculate-settings`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch settings');
        }

        const data: ApiResponse = await response.json();
        setApiData(data);
        console.log('API Response:', data);

      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching settings:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSettings();
  }, []);

  useEffect(() => {
    // Check for warning in sessionStorage
    if (typeof window !== 'undefined') {
      const warning = sessionStorage.getItem('warning');
      if (warning) {
        if (warning !== null && warning !== 'null') {
          setWarningMessage(warning);
          setShowWarningModal(true);
        }
      }
    }
  }, []);

  return (
    <div className="text-white p-6">
      {/* Print-specific styles */}
      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          .print-only {
            display: block !important;
          }
          body {
            background: #004146 !important;
            color: white !important;
          }
          .print-container {
            background: #004146 !important;
            color: white !important;
            padding: 20px !important;
          }
          .print-title {
            color: white !important;
            font-size: 24px !important;
            margin-bottom: 20px !important;
          }
          .print-section-title {
            color: #4cd3c2 !important;
            font-size: 18px !important;
            margin: 20px 0 10px 0 !important;
          }
          .print-card {
            background: white !important;
            color: black !important;
            border: 1px solid #ccc !important;
            padding: 15px !important;
            margin-bottom: 15px !important;
          }
        }
        @media screen {
          .print-only {
            display: none !important;
          }
        }
      `}</style>

      {/* Warning Modal */}
      <div className="no-print m-2">
        <WarningModal
          open={showWarningModal}
          onClose={() => setShowWarningModal(false)}
          onProceed={() => setShowWarningModal(false)}
          message={warningMessage || ''}
          title="Warning"
        />
      </div>
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-xl  sm:text-4xl font-bold mb-6 text-white print-title">Suggested Settings</h1>

        {/* {isLoading && (
          <div className="text-center py-8">
            <div className="text-white text-lg">Loading settings...</div>
          </div>
        )}

        {error && (
          <div className="text-red-400 text-center py-4 bg-red-900/20 rounded-lg">
            {error}
          </div>
        )} */}

        {apiData && (
          <>
            {/* Warning Message */}
            {/* {apiData.warning && (
              <div className="text-yellow-400 text-center py-4 bg-yellow-900/20 rounded-lg border border-yellow-500">
                ⚠️ {apiData.warning}
              </div>
            )} */}

            <div className="flex items-center gap-8 no-print">
              <span className={`font-medium ${!isMetric ? 'text-[#4cd3c2]' : 'text-white'}`}>Inches</span>
              <Switch 
                className="bg-green-500" 
                checked={isMetric}
                onCheckedChange={setIsMetric}
              />
              <span className={`font-medium ${isMetric ? 'text-[#4cd3c2]' : 'text-white'}`}>Millimeter</span>
            </div>

            {/* Print-only unit indicator */}
            <div className="print-only">
              <p className="print-section-title">Units: {isMetric ? 'Millimeter' : 'Inches'}</p>
            </div>

            
            <div>
              <h2 className="text-xl font-medium text-[#4cd3c2] mb-2 print-section-title">Selected Configuration:</h2>
              <Card className="bg-white text-black p-6 rounded-mid print-card">
                <div className="grid grid-cols-2 gap-y-2">
                  <p className="font-medium">Machine: </p>
                  <p className="font-medium">{sessionStorage.getItem('selectedMachine')}</p>
                  <p className="font-medium">Spindle: </p>
                  <p className="font-medium">{apiData.spindle}</p>
                  <p className="font-medium">Material: </p>
                  <p className="font-medium">{apiData.material}</p>
                  <p className="font-medium">Bit: </p>
                  <p className="font-medium">{apiData.bit}</p>
                 
                 
                </div>
              </Card>
            </div>
            <div className="no-print">
              <p className="my-4">These values are a safe starting point but always test them first. If 
you are doing a &quot;roughing&quot; pass, you can consider using the multiplier 
to increase the values by 10-20%.</p>

            </div>

            <div>
              <h2 className="text-xl font-medium text-[#4cd3c2] mb-2 print-section-title">Area Clearance (Pocket):</h2>
              <Card className="bg-white text-black p-6 rounded-mid print-card">
                <div className="grid grid-cols-2 gap-y-2">
                  <p className="font-medium">RPM: </p>
                  <p className="font-medium">{apiData.rpm ? apiData.rpm.toLocaleString() : 'N/A'}</p>
                  <p className="font-medium">Feed: </p>
                  <p className="font-medium">{formatValue(getMultiplied(apiData.feed), 'speed')}</p>
                  <p className="font-medium">DOC (Depth of Cut): </p>
                  <p className="font-medium">{formatValue(getMultiplied(apiData.depth_of_cut), 'length')}</p>
                  <p className="font-medium">Stepover: </p>
                  <p className="font-medium">{formatValue(apiData.stepover, 'length')}</p>
                  <p className="font-medium">Plunge: </p>
                  <p className="font-medium">{formatValue(getMultiplied(apiData.plunge), 'speed')}</p>
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#4cd3c2] mb-2 print-section-title">Profile</h2>
              <Card className="bg-white text-black p-6 rounded-mid print-card">
                <div className="grid grid-cols-2 gap-y-2">
                  <p className="font-medium">RPM:</p>
                  <p className="font-medium">{apiData.rpm ? apiData.rpm.toLocaleString() : 'N/A'}</p>
                  <p className="font-medium">Feed:</p>
                  <p className="font-medium">
                    {getMultiplied(apiData.feed) !== null
                      ? formatValue(getMultiplied(apiData.feed)! * 0.9, 'speed')
                      : 'N/A'}
                  </p>
                  <p className="font-medium">DOC:</p>
                  <p className="font-medium">
                    {getMultiplied(apiData.depth_of_cut) !== null
                      ? formatValue(getMultiplied(apiData.depth_of_cut)! * 0.9, 'length')
                      : 'N/A'}
                  </p>
                  <p className="font-medium">Plunge:</p>
                  <p className="font-medium">
                    {getMultiplied(apiData.plunge) !== null
                      ? formatValue(getMultiplied(apiData.plunge)! * 0.9, 'speed')
                      : 'N/A'}
                  </p>
                </div>
              </Card>
            </div>

            {/* Selected Configuration Summary */}
            {/* <div>
              <h2 className="text-xl font-medium text-[#4cd3c2] mb-2">Your Configuration:</h2>
              <Card className="bg-white text-black p-6 rounded-mid">
                <div className="grid grid-cols-2 gap-y-2">
                  <p className="font-medium">Machine:</p>
                  <p className="font-medium">{sessionStorage.getItem('selectedMachine')}</p>
                  <p className="font-medium">Spindle:</p>
                  <p className="font-medium">{apiData.spindle}</p>
                  <p className="font-medium">Bit:</p>
                  <p className="font-medium">{apiData.bit}</p>
                  <p className="font-medium">Material:</p>
                  <p className="font-medium">{apiData.material}</p>
                  <p className="font-medium">Multiplier:</p>
                  <p className="font-medium">{apiData.multiplier}</p>
                </div>
              </Card>
            </div> */}

            <p className="text-[#4cd3c2] text-lg no-print">
              If these settings were too slow or too aggressive, you can adjust them:
            </p>

            <div className="flex flex-col space-y-4 no-print">
              <div>
                <Button className="bg-[#0e9dd9] hover:bg-[#0b8bc2] rounded  text-white font-medium py-3" onClick={openAdjustModal}>
                  Adjust Multiplier
                </Button>
              </div>
              <div>
                <Button className="bg-[#0e9dd9] hover:bg-[#0b8bc2] rounded  text-white font-medium py-3" onClick={ () => {
                  window.print();
                }}>
                  Print
                </Button>
              </div>
              <div>
                <Link href="/dashboard" className="bg-white px-5 text-black hover:bg-gray-100 font-medium py-3">
                  Go back
                </Link>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Adjust Multiplier Modal */}
      <div className="no-print">
        <AdjustMultiplierModal
          open={isAdjustModalOpen}
          onClose={closeAdjustModal}
          initialValue={multiplier}
          onSaveMultiplier={handleSaveMultiplier}
        />
      </div>

    </div>
  )
}
