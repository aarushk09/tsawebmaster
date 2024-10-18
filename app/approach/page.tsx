import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Approach() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Farm-to-Table Approach</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">From Farm to Plate</h2>
          <p className="mb-4">
            At Green Plate, we believe that great food starts with great ingredients. Our farm-to-table 
            approach ensures that we serve only the freshest, most flavorful produce in our dishes.
          </p>
          <p>
            We work closely with local farmers and suppliers to source organic, sustainably grown 
            vegetables, fruits, and grains. This not only supports our local community but also 
            reduces our carbon footprint and ensures the highest quality ingredients for our customers.
          </p>
        </div>
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="Farm produce"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "1. Sourcing", description: "We carefully select local, organic farms and suppliers that align with our values." },
            { title: "2. Harvesting", description: "Ingredients are harvested at peak ripeness to ensure maximum flavor and nutritional value." },
            { title: "3. Delivery", description: "Fresh produce is delivered to our restaurant daily, often within hours of being harvested." },
            { title: "4. Inspection", description: "Our chefs personally inspect all incoming ingredients for quality and freshness." },
            { title: "5. Preparation", description: "Ingredients are prepared with care to preserve their natural flavors and nutrients." },
            { title: "6. Serving", description: "Dishes are crafted and served promptly to ensure the best possible dining experience." },
          ].map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Partnerships</h2>
        <p className="mb-4">
          We&apos;re proud to partner with local farms and suppliers who share our commitment to 
          sustainability and quality. Some of our key partners include:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Sunshine Organic Farm - vegetables and herbs</li>
          <li>Green Valley Orchard - fruits and nuts</li>
          <li>Pure Grains Bakery - artisanal breads and pastries</li>
          <li>Clear Springs Tofu - locally made tofu and tempeh</li>
        </ul>
        <p>
          These partnerships allow us to offer a diverse, seasonal menu while supporting our local 
          agricultural community.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Our Commitment to Quality</h2>
        <p className="mb-4">
          By controlling every step of the process from farm to table, we ensure that every dish we 
          serve meets our high standards for taste, nutrition, and sustainability. We believe that 
          this approach not only results in better food but also fosters a deeper connection between 
          our customers, our community, and the food we eat.
        </p>
        <p>
          We invite you to taste the difference that our farm-to-table approach makes in every bite 
          at Green Plate.
        </p>
      </div>
    </div>
  )
}