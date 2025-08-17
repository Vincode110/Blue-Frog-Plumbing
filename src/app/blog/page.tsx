import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, User, Clock, ArrowRight, Search } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Plumbing Maintenance Tips for Homeowners",
    excerpt: "Learn the most important plumbing maintenance tasks every homeowner should know to prevent costly repairs and keep your plumbing system running smoothly.",
    content: "As a homeowner, maintaining your plumbing system is crucial for preventing costly repairs and ensuring everything runs efficiently. Here are 10 essential maintenance tips that can save you time and money...",
    author: "John Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Maintenance",
    image: "https://images.unsplash.com/photo-1620712943543-bc4638e3efb6?w=600&h=400&fit=crop&crop=center",
    tags: ["maintenance", "DIY", "homeowner", "prevention"]
  },
  {
    id: 2,
    title: "How to Prevent Frozen Pipes This Winter",
    excerpt: "Frozen pipes can cause extensive damage to your home. Discover effective strategies to prevent pipes from freezing and what to do if they do freeze.",
    content: "Winter brings many challenges for homeowners, and frozen pipes are among the most destructive. When water freezes, it expands, potentially causing pipes to burst and leading to costly water damage...",
    author: "Sarah Mitchell",
    date: "February 28, 2024",
    readTime: "7 min read",
    category: "Seasonal",
    image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=400&fit=crop&crop=center",
    tags: ["winter", "frozen pipes", "prevention", "seasonal"]
  },
  {
    id: 3,
    title: "Tankless vs. Traditional Water Heaters: Which is Right for You?",
    excerpt: "Compare tankless and traditional water heaters to make an informed decision for your home. Learn about efficiency, costs, and installation requirements.",
    content: "Choosing between a tankless and traditional water heater is a significant decision that impacts your home's energy efficiency and your monthly utility bills. Both options have their advantages...",
    author: "Mike Chen",
    date: "February 14, 2024",
    readTime: "8 min read",
    category: "Water Heaters",
    image: "https://images.unsplash.com/photo-1620712943543-bc4638e3efb6?w=600&h=400&fit=crop&crop=center",
    tags: ["water heater", "efficiency", "comparison", "installation"]
  },
  {
    id: 4,
    title: "5 Signs You Need to Call a Plumber Immediately",
    excerpt: "Don't ignore these warning signs that indicate serious plumbing problems. Learn when to DIY and when it's time to call a professional plumber.",
    content: "While some minor plumbing issues can be handled with DIY solutions, certain signs indicate serious problems that require immediate professional attention. Ignoring these warning signs can lead to extensive damage...",
    author: "Emily Rodriguez",
    date: "January 30, 2024",
    readTime: "6 min read",
    category: "Emergency",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&h=400&fit=crop&crop=center",
    tags: ["emergency", "warning signs", "professional help", "damage prevention"]
  },
  {
    id: 5,
    title: "The Ultimate Guide to Kitchen Drain Maintenance",
    excerpt: "Keep your kitchen drains flowing freely with these proven maintenance techniques and learn how to handle common clogs safely and effectively.",
    content: "Kitchen drains are among the most frequently used plumbing fixtures in your home, making them prone to clogs and buildup. Proper maintenance can prevent most common issues and extend the life of your plumbing system...",
    author: "David Thompson",
    date: "January 15, 2024",
    readTime: "4 min read",
    category: "Maintenance",
    image: "https://images.unsplash.com/photo-1556911222-b189b8c64b43?w=600&h=400&fit=crop&crop=center",
    tags: ["kitchen", "drains", "maintenance", "clogs"]
  },
  {
    id: 6,
    title: "Understanding Water Pressure: Causes and Solutions",
    excerpt: "Low water pressure can be frustrating. Learn about common causes of water pressure issues and how to diagnose and fix them effectively.",
    content: "Water pressure issues can turn simple daily tasks into frustrating experiences. Whether you're dealing with low pressure in the shower or inconsistent flow throughout your home, understanding the causes can help you find the right solution...",
    author: "Lisa Park",
    date: "December 28, 2023",
    readTime: "6 min read",
    category: "Troubleshooting",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&h=400&fit=crop&crop=center",
    tags: ["water pressure", "troubleshooting", "solutions", "diagnosis"]
  }
]

const categories = [
  "All",
  "Maintenance",
  "Emergency",
  "Water Heaters",
  "Seasonal",
  "Troubleshooting"
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Plumbing Tips & Insights
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Expert advice, maintenance tips, and industry insights to help you keep your plumbing system in top condition.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className="hover:bg-blue-600 hover:text-white"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>
          
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative aspect-video">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="h-4 w-4 mr-1" />
                    {blogPosts[0].author}
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                    <a href={`/blog/${blogPosts[0].id}`}>
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Stay informed with our latest plumbing tips, maintenance guides, and expert advice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-shadow">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                    <Button variant="outline" size="sm" className="hover:bg-blue-600 hover:text-white" asChild>
                      <a href={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with Plumbing Tips
            </h2>
            <p className="text-lg mb-8">
              Subscribe to our newsletter for expert plumbing advice, maintenance tips, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}