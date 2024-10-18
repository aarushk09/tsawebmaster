import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted')
    // Reset form or show confirmation message
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <Textarea id="message" name="message" rows={4} required />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <p>
              <strong>Address:</strong><br />
              123 Vegan Street, Eco City, EC 12345
            </p>
            <p>
              <strong>Phone:</strong><br />
              (555) 123-4567
            </p>
            <p>
              <strong>Email:</strong><br />
              info@greenplate.com
            </p>
            <p>
              <strong>Hours:</strong><br />
              Monday - Friday: 11am - 10pm<br />
              Saturday - Sunday: 10am - 11pm
            </p>
          </div>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-green-600 hover:text-green-800">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-green-600 hover:text-green-800">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-green-600 hover:text-green-800">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}