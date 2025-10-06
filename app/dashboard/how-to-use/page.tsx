"use client"

import { useState, useEffect } from "react"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

// Video data interface
interface VideoData {
  type: string
  url: string
  updated_at: string
}

// Function to convert YouTube URL to embed URL
const getYouTubeEmbedUrl = (url: string) => {
  const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1]
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url
}

export default function CncForm() {
  const [videoData, setVideoData] = useState<VideoData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch video data from API
  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/videos/how-to-use`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data: VideoData = await response.json()
        setVideoData(data)
      } catch (err) {
        console.error('Error fetching video data:', err)
        setError(err instanceof Error ? err.message : 'Failed to fetch video data')
      } finally {
        setLoading(false)
      }
    }

    fetchVideoData()
  }, [])

  // if (loading) {
  //   return (
  //     <div className="flex h-full flex-col pt-8 sm:pt-10 items-center justify-center">
  //       <div className="max-w-3xl mx-4 flex flex-col justify-center items-center">
  //         <p className="text-2xl font-bold text-white">
  //           <span className="text-[#03BFB5]">How to</span> Use
  //         </p>
  //         <p className="text-sm font-semibold mt-3 text-white">Loading video...</p>
  //       </div>
  //     </div>
  //   )
  // }

  if (error) {
    return (
      <div className="flex h-full flex-col pt-8 sm:pt-10 items-center justify-center">
        <div className="max-w-3xl mx-4 flex flex-col justify-center items-center">
          <p className="text-2xl font-bold text-white">
            <span className="text-[#03BFB5]">How to</span> Use
          </p>
          <p className="text-sm font-semibold mt-3 text-red-400">Error loading video: {error}</p>
        </div>
      </div>
    )
  }

  const embedUrl = videoData ? getYouTubeEmbedUrl(videoData.url) : ''

  return (
    <div className="flex h-full flex-col pt-8 sm:pt-10 items-center justify-center">  
      <div className="max-w-3xl mx-4 flex flex-col justify-center items-center">
        <p className="text-2xl font-bold text-white">
          <span className="text-[#03BFB5]">How to</span> Use
        </p>
        <p className="text-sm font-semibold mt-3 text-white">
        A quick video running through the simple steps 
        of using this app.
        </p>
      </div>
      
      {videoData && (
        <>
          {/* Desktop version */}
          <div className="mt-4 hidden sm:block">
  <iframe
    width="914"
    height="514"
    src="https://www.youtube.com/embed/9PdPAza1zEg"
    title="Testing Phase - OnlyCNCs Getting started"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>

          
          {/* Mobile version */}
          <div className="mt-4 block sm:hidden">
            <iframe 
              className="rounded-mid" 
              width="350" 
              height="210" 
              // src={embedUrl}
              src="https://www.youtube.com/embed/9PdPAza1zEg"
              title="How to Use Only CNCs"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            />
          </div>
        </>
      )}
    </div>
  )
}
