import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About Green Plate</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Green Plate was born from a passion for plant-based cuisine and a commitment to sustainability. 
            Founded in 2015 by Chef Maria Green, our restaurant has grown from a small cafe to a beloved 
            destination for vegans, vegetarians, and food enthusiasts alike.
          </p>
          <p>
            Our mission is to prove that vegan food can be exciting, satisfying, and accessible to everyone. 
            We strive to create dishes that not only nourish the body but also delight the senses and inspire 
            a more sustainable way of eating.
          </p>
        </div>
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="Green Plate restaurant interior"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Farm-to-Table Approach</h2>
        <p className="mb-4">
          At Green Plate, we believe that the best meals start with the best ingredients. That&apos;s why we&apos;ve 
          cultivated strong relationships with local organic farms and suppliers. Our menu changes with the 
          seasons, ensuring that we always serve the freshest, most flavorful produce available.
        </p>
        <p>
          By sourcing locally, we not only support our community&apos;s farmers but also reduce our carbon footprint. 
          It&apos;s part of our broader commitment to sustainability, which influences every aspect of our operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="Chef Maria Green"
          width={600}
          height={400}
          className="rounded-lg md:order-last"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Meet Chef Maria Green</h2>
          <p className="mb-4">
            Chef Maria Green brings over 20 years of culinary experience to Green Plate. Trained in traditional 
            French cuisine, Maria&apos;s journey to plant-based cooking began when she adopted a vegan lifestyle in 2010.
          </p>
          <p>
            Combining her classical training with her passion for plant-based ingredients, Maria creates dishes 
            that are both familiar and innovative. Her goal is to show that vegan cuisine can be just as rich, 
            complex, and satisfying as any other type of food.
          </p>
        </div>
      </div>
    </div>
  )
}