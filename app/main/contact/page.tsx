"use client"
import Heading from '@/components/screens/customHeading'
import type React from "react"
import { useState } from 'react'
import Swal from 'sweetalert2'

const ContactPage = () => {
     const [formData, setFormData] = useState({
        name: "",
        subject: "",
        message: "",
        email: "",
      })
      const [isLoading, setIsLoading] = useState(false)
    
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
            setFormData({ name: "", subject: "", message: "", email: "" })
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
        } finally {
          setIsLoading(false)
        }
      }

  return (
    <div className="mt-4 sm:my-10 m-3  flex flex-col items-center justify-center">
         <Heading  
             color="black"
             heading1="Contact "
             heading2="Us"
             subheading="Got a question, or some feedback? Let us know. We love to 
hear from the our users."
           />
      <div className="w-full mb-24  mt-5  border-black border-2 my-4 rounded-mid max-w-3xl ">
        
      
        <div className="bg-white max-w-3xl rounded-mid p-8">
          <h2 className="text-xl font-bold mb-1">
          <span className="text-black">Contact</span>   <span className="text-[#03BFB5]">us</span>
          </h2>
          <p className="text-sm font-semibold mb-6">If you’re logging an issue, make sure to give as much detail 
          as possible. </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Type your email here."
                className="w-full p-3 border border-slate-950 rounded focus:outline-none focus:ring-1 focus:ring-[#03BFB5]"
                required
                disabled={isLoading}
              />
            </div>

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

export default ContactPage;



