import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const blogPosts = [
  {
    id: 1,
    title: "5 Delicious Vegan Recipes for Summer",
    excerpt: "Discover refreshing and easy-to-make vegan dishes perfect for hot summer days.",
    image: "/placeholder.svg?height=200&width=400",
    date: "June 15, 2024",
  },
  {
    id: 2,
    title: "The Benefits of a Plant-Based Diet",
    excerpt: "Learn about the health and environmental benefits of adopting a plant-based lifestyle.",
    image: "/placeholder.svg?height=200&width=400",
    date: "May 28, 2024",
  },
  {
    id: 3,
    title: "Spotlight on Seasonal Ingredients: Spring Edition",
    excerpt: "Explore the vibrant flavors of spring with our guide to seasonal produce.",
    image: "/placeholder.svg?height=200&width=400",
    date: "April 10, 2024",
  },
  {
    id: 4,
    title: "Sustainable Practices in the Restaurant Industry",
    excerpt: "Discover how restaurants are reducing their environmental impact and promoting sustainability.",
    image: "/placeholder.svg?height=200&width=400",
    date: "March 5, 2024",
  },
]

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog & News</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map(post => (
          <Card key={post.id}>
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <p className="mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.id}`} className="text-green-600 hover:underline">
                Read more
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Recipe</h2>
        <Card>
          <CardHeader>
            <CardTitle>Vegan Mushroom Risotto</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/placeholder.svg?height=300&width=600"
              alt="Vegan Mushroom Risotto"
              width={600}
              height={300}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="font-semibold mb-2">Ingredients:</h3>
            <ul className="list-disc list-inside mb-4">
              <li>1 cup Arborio rice</li>
              <li>4 cups vegetable broth</li>
              <li>1 cup mixed mushrooms, sliced</li>
              <li>1 small onion, finely chopped</li>
              <li>2 cloves garlic, minced</li>
              <li>1/4 cup nutritional yeast</li>
              <li>2 tbsp olive oil</li>
              <li>Salt and pepper to taste</li>
              <li>Fresh parsley for garnish</li>
            </ul>
            <p>
              For the full recipe and cooking instructions, visit our restaurant or check out our 
              upcoming cookbook!
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Sustainability Tip of the Month</h2>
        <Card>
          <CardHeader>
            <CardTitle>Reduce Food Waste at Home</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Did you know that about one-third of all food produced globally goes to waste? Here are 
              some tips to reduce food waste in your home:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Plan your meals and make a shopping list</li>
              <li>Store food properly to extend its life</li>
              <li>Use leftovers creatively in new dishes</li>
              <li>Compost food scraps when possible</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}