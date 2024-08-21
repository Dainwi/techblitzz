'use client';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Page() {
  
  return (
    <main className="min-h-screen flex flex-col">
      <div className="container mx-auto py-12 px-6 md:px-10 flex-grow">
          <div className="bg-white text-gray-900 rounded-lg shadow-lg p-8 ">
            <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
            <p className="text-gray-600 mb-8">
              Have a question or want to work with us? Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-900">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="mt-1 block w-full h-12 px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="mt-1 block w-full h-12 px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-gray-900">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter the subject"
                  className="mt-1 block w-full h-12 px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-gray-900">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows={5}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <Button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:bg-slate-900 h-12 px-4 py-2 w-full bg-slate-900 text-white"
              >
                Submit
              </Button>
            </form>
          </div>
         
      </div>
    </main>
  )
}