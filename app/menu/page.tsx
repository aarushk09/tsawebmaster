import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const menuItems = [
  {
    category: "Appetizers",
    items: [
      { name: "Crispy Cauliflower Wings", description: "Served with vegan ranch dressing", price: 12, isVegan: true, allergens: ["Soy", "Gluten"] },
      { name: "Stuffed Mushrooms", description: "With herbed cashew cheese", price: 10, isVegan: true, allergens: ["Nuts"] },
      { name: "Seasonal Soup", description: "Ask your server for today's selection", price: 8, isVegan: true, allergens: [] },
    ]
  },
  {
    category: "Main Courses",
    items: [
      { name: "Jackfruit Pulled 'Pork' Sandwich", description: "With coleslaw and sweet potato fries", price: 16, isVegan: true, allergens: ["Gluten"] },
      { name: "Eggplant Parmesan", description: "Served with zucchini noodles", price: 18, isVegetarian: true, allergens: ["Dairy"] },
      { name: "Mushroom and Lentil Shepherd's Pie", description: "Topped with mashed potatoes", price: 17, isVegan: true, allergens: [] },
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Chocolate Avocado Mousse", description: "With fresh berries", price: 9, isVegan: true, allergens: [] },
      { name: "Apple Crumble", description: "Served with vegan vanilla ice cream", price: 10, isVegan: true, allergens: ["Gluten", "Nuts"] },
      { name: "Lemon Cheesecake", description: "Cashew-based with a gluten-free crust", price: 11, isVegan: true, allergens: ["Nuts"] },
    ]
  },
]

export default function Menu() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Menu</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Seasonal Specials</h2>
        <p className="mb-4">
          Ask your server about our current seasonal dishes, featuring the freshest local produce.
        </p>
      </div>

      {menuItems.map((category, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.items.map((item, itemIndex) => (
              <Card key={itemIndex}>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{item.name}</span>
                    <span className="text-lg">${item.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.isVegan && <Badge variant="secondary">Vegan</Badge>}
                    {item.isVegetarian && <Badge variant="secondary">Vegetarian</Badge>}
                    {item.allergens.map((allergen, allergenIndex) => (
                      <Badge key={allergenIndex} variant="outline">{allergen}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Allergen Information</h2>
        <p>
          We take allergies seriously. If you have any specific dietary requirements or allergies, 
          please inform your server. We'll do our best to accommodate your needs.
        </p>
      </div>
    </div>
  
  )
}