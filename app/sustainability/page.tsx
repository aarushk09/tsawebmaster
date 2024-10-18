import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Sustainability() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Commitment to Sustainability</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Eco-Friendly Initiatives</h2>
          <p className="mb-4">
            At Green Plate, sustainability isn&apos;t just a buzzword—it&apos;s a core part of our mission. 
            We believe that running a restaurant comes with a responsibility to minimize our 
            environmental impact and contribute positively to our community and the planet.
          </p>
          <p>
            From our ingredient sourcing to our waste management, every aspect of our operation 
            is designed with sustainability in mind. Here&apos;s how we&apos;re working to make a difference:
          </p>
        </div>
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="Eco-friendly practices"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Sustainability Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Local Sourcing", 
              description: "We source over 80% of our ingredients from local farms within a 100-mile radius, reducing transportation emissions and supporting local agriculture." 
            },
            { 
              title: "Waste Reduction", 
              description: "We compost all organic waste and have implemented a comprehensive recycling program. Our goal is to be a zero-waste restaurant by 2025." 
            },
            { 
              title: "Energy Efficiency", 
              description: "Our kitchen is equipped with energy-efficient appliances, and we use LED lighting throughout the restaurant to reduce our energy consumption." 
            },
            { 
              title: "Water Conservation", 
              description: "We've installed low-flow faucets and water-efficient dishwashers, and we collect rainwater for our herb garden." 
            },
            { 
              title: "Sustainable Packaging", 
              description: "All our takeout containers and utensils are made from compostable materials, and we encourage customers to bring their own reusable containers." 
            },
            { 
              title: "Plant-Based Menu", 
              description: "By focusing on vegan and vegetarian dishes, we significantly reduce our carbon footprint compared to restaurants that serve meat and dairy." 
            },
          ].map((practice, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{practice.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{practice.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Community Involvement</h2>
        <p className="mb-4">
          We believe that sustainability extends beyond environmental practices to include social 
          responsibility. That&apos;s why we&apos;re actively involved in our local community:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>We donate excess food to local food banks and shelters.</li>
          <li>We offer educational workshops on sustainable cooking and gardening.</li>
          <li>We participate in local beach and park clean-up events.</li>
          <li>We sponsor a community garden that provides fresh produce to local schools.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Our Ongoing Commitment</h2>
        <p className="mb-4">
          Sustainability is an ongoing journey, and we&apos;re constantly looking for ways to improve. 
          We regularly audit our practices and set new goals to reduce our environmental impact 
          even further.
        </p>
        <p>
          We welcome feedback and suggestions from our customers and community. If you have ideas 
          on how we can be even more sustainable, please don&apos;t hesitate to share them with us. 
          Together, we can make a positive impact on our planet, one meal at a time.
        </p>
      </div>
    </div>
  )
}