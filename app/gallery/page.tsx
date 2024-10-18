import Image from 'next/image'

const galleryImages = [
  { src: "/placeholder.svg?height=300&width=400", alt: "Colorful vegan salad" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Plant-based burger" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Vegan dessert platter" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Restaurant interior" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Chef preparing a dish" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Organic vegetable display" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Vegan pizza" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Sustainable packaging" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Farm partnership" },
]

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  )
}