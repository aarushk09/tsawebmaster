'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'

interface MenuItem {
  id: number;
  name: string;
  price: number;
}

const menuItems: MenuItem[] = [
  { id: 1, name: "Vegan Buddha Bowl", price: 14.99 },
  { id: 2, name: "Plant-Based Burger", price: 12.99 },
  { id: 3, name: "Quinoa Stuffed Bell Peppers", price: 13.99 },
  { id: 4, name: "Vegan Mac and Cheese", price: 11.99 },
  { id: 5, name: "Roasted Vegetable Lasagna", price: 15.99 },
  { id: 6, name: "Mushroom Risotto", price: 14.99 },
]

export default function Order() {
  const [cart, setCart] = useState<MenuItem[]>([])
  const [address, setAddress] = useState('')

  const addToCart = (item: MenuItem) => {
    setCart([...cart, item])
  }

  const removeFromCart = (index: number) => {
    const newCart = [...cart]
    newCart.splice(index, 1)
    setCart(newCart)
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the order to your backend
    console.log('Order submitted:', { cart, address, total })
    // Reset cart or show confirmation message
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Order Online</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Menu</h2>
          <div className="grid gap-4">
            {menuItems.map(item => (
              <Card key={item.id}>
                <CardHeader>
                  <CardTitle className="flex justify-between">
                    <span>{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button onClick={() => addToCart(item)}>Add to Cart</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-2">
                  <span>{item.name}</span>
                  <div>
                    <span className="mr-4">${item.price.toFixed(2)}</span>
                    <Button variant="outline" size="sm" onClick={() => removeFromCart(index)}>Remove</Button>
                  </div>
                </div>
              ))}
              <div className="text-xl font-semibold mt-4">Total: ${total.toFixed(2)}</div>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Delivery Address</label>
              <Input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">Payment Method</label>
              <Select required>
                <option value="">Select payment method</option>
                <option value="credit">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cash">Cash on Delivery</option>
              </Select>
            </div>
            
            <Button type="submit" className="w-full" disabled={cart.length === 0}>
              Place Order
            </Button>
          </form>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Delivery Information</h2>
        <p>
          We offer delivery within a 5-mile radius of our restaurant. For orders outside this area, 
          please call us directly to arrange delivery. All our delivery packaging is eco-friendly 
          and compostable.
        </p>
      </div>
    </div>
  )
}