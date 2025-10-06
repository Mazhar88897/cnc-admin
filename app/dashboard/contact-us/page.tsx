"use client"

import React, { useState, useEffect } from "react"
import Swal from 'sweetalert2'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
    email: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  // Set email from sessionStorage after component mounts (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const email = sessionStorage.getItem("email") || "";
      setFormData(prev => ({ ...prev, email }));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Show success alert
        await Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#03BFB5'
        })
        
        // Reset form after successful submission
        const email = typeof window !== 'undefined' ? sessionStorage.getItem("email") || "" : "";
        setFormData({ name: "", subject: "", message: "", email })
      } else {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to send message')
      }
    } catch (error) {
      // Show error alert
      await Swal.fire({
        title: 'Error!',
        text: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#03BFB5'
      })
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mt-4 sm:mt-10 flex items-center justify-center">
      <div className="w-full max-w-3xl px-4 ">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white">
            Contact <span className="text-[#03BFB5]">Us</span>
          </h1>
          <p className="text-sm text-white mt-2">
            
          </p>
        </div>
       
        <div className="bg-white max-w-3xl rounded-mid p-8">
          <h2 className="text-xl font-bold mb-1">
          <span className="text-black">Contact</span>   <span className="text-[#03BFB5]">us</span>
          </h2>
          <p className="text-sm font-semibold mb-6">Let us know what your are think.</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Type your name here."
                className="w-full p-3 border border-slate-950 rounded focus:outline-none focus:ring-1 focus:ring-[#03BFB5]"
                required
                disabled={isLoading}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Brief Description of your message"
                className="w-full p-3 border border-slate-950 rounded focus:outline-none focus:ring-1 focus:ring-[#03BFB5]"
                required
                disabled={isLoading}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here."
                className="w-full p-3 border border-slate-950 rounded focus:outline-none focus:ring-1 focus:ring-[#03BFB5] min-h-[120px]"
                required
                disabled={isLoading}
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#03BFB5] hover:bg-[#029e96] text-white font-medium py-2 px-6 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      
      </div>
    </div>
  )
}
