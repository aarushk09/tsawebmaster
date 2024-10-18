import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="/placeholder.svg" // Ensure this image exists in your public folder
          alt="Signature dish"
          fill // Replaces layout="fill"
          style={{ objectFit: 'cover' }} // Replaces objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Green Plate</h1>
          <p className="text-xl mb-8">Experience the finest vegan cuisine in a sustainable setting</p>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/reservations">Make a Reservation</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/order">Order Online</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Philosophy</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            At Green Plate, we believe in the power of plant-based cuisine to nourish both our bodies and the planet. 
            Our farm-to-table approach ensures that every dish is crafted with the freshest, locally-sourced ingredients, 
            prepared with care and creativity to bring out the best flavors nature has to offer.
          </p>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Seasonal Harvest Bowl", description: "A vibrant mix of roasted seasonal vegetables, quinoa, and our signature herb dressing." },
              { title: "Mushroom Wellington", description: "Flaky pastry filled with a savory blend of mushrooms, nuts, and herbs." },
              { title: "Raw Vegan Cheesecake", description: "Creamy cashew-based cheesecake with a date and nut crust, topped with fresh berries." }
            ].map((dish, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{dish.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{dish.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Experience Green Plate Today</h2>
          <div className="space-x-4">
            <Button asChild variant="secondary">
              <Link href="/reservations">Reserve a Table</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/order">Order Takeout</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
