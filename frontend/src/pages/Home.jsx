import Image from "next/image";
import { ArrowRight, Eye } from "lucide-react";

const articles = [
  {
    image: "/images/pollution.jpg",
    title: "Human activities are pushing countless species toward extinction",
  },
  {
    image: "/images/ocean-plastic.jpg",
    title: "The average person consumes nearly a credit card's worth of microplastics every week through food, water and air",
  },
  {
    image: "/images/deforestation.jpg",
    title: "More direct action needed to stop pollution and climate change",
  },
];

const stats = [
  { value: "69 k+", label: "Trees Planted" },
  { value: "8 +", label: "Rivers Cleaned" },
  { value: "467kg +", label: "Trash Picked" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section with Overlapping Articles */}
      <section className="relative">
        {/* Hero Image Container */}
        <div className="relative h-[85vh] w-full">
          <Image
            src="/images/elephants-hero.jpg"
            alt="Elephants in African savanna"
            fill
            className="object-cover"
            priority
          />
          {/* Left gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-2xl">
            <span className="inline-block w-fit px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-black bg-amber-500 uppercase">
              Act Now
            </span>
            
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-8">
              This Earth Season, stand with nature and restore a planet rapidly losing its balance
            </h1>
            
            <button className="flex items-center gap-2 w-fit px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-full transition-colors">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Overlapping Articles Section */}
        <div className="relative -mt-32 z-10 px-6 md:px-12 lg:px-20">
          {/* See More Label */}
          <div className="flex items-center gap-2 text-white mb-4">
            <Eye className="w-4 h-4" />
            <span className="text-xs font-medium uppercase tracking-wider">See More</span>
          </div>
          
          {/* Divider Line */}
          <div className="w-full h-px bg-white/30 mb-6" />
          
          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-48 w-full overflow-hidden rounded-lg mb-3">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-xs md:text-sm text-neutral-700 leading-relaxed">
                  {article.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-24" />

      {/* Stats Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/images/forest-stats.jpg"
          alt="Forest conservation"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-12 lg:px-20">
          <div className="flex flex-wrap gap-12 md:gap-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-amber-500 mb-2">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Misty Image */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/images/misty-landscape.jpg"
          alt="Misty mountain landscape"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      </section>
    </main>
  );
}
