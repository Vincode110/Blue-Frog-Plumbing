import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Star, 
  Quote, 
  Users, 
  Home, 
  Wrench, 
  Droplets,
  Phone,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Springfield",
    service: "Emergency Repair",
    rating: 5,
    date: "March 2024",
    content: "FlowMaster Plumbing saved our home! We had a burst pipe at 2 AM and they were here within 30 minutes. The technician was professional, explained everything clearly, and fixed the problem quickly. Highly recommend!",
    highlights: ["Fast response", "Professional service", "Clear communication"]
  },
  {
    name: "Michael Chen",
    location: "Riverside",
    service: "Water Heater Installation",
    rating: 5,
    date: "February 2024",
    content: "Excellent service from start to finish. The team helped us choose the right water heater for our needs, installed it perfectly, and cleaned up thoroughly. The new system works great and we're saving money on our energy bills.",
    highlights: ["Expert advice", "Quality installation", "Energy efficient"]
  },
  {
    name: "Emily Rodriguez",
    location: "Downtown",
    service: "Bathroom Remodel",
    rating: 5,
    date: "January 2024",
    content: "We completely remodeled our bathroom and FlowMaster Plumbing was fantastic. They handled everything from plumbing layout to fixture installation. The attention to detail was impressive and the final result exceeded our expectations.",
    highlights: ["Attention to detail", "Complete service", "Exceeded expectations"]
  },
  {
    name: "David Thompson",
    location: "Westside",
    service: "Drain Cleaning",
    rating: 5,
    date: "December 2023",
    content: "Had a stubborn clog that other plumbers couldn't fix. FlowMaster used their camera inspection to find the exact problem and cleared it with hydro-jetting. No more issues and they showed me the before and after videos.",
    highlights: ["Advanced technology", "Thorough service", "Problem solved"]
  },
  {
    name: "Lisa Park",
    location: "North Hills",
    service: "Leak Detection",
    rating: 5,
    date: "November 2023",
    content: "Mysterious water bill increase led me to call FlowMaster. They found a hidden leak under our slab without tearing up the whole floor. Saved us thousands in potential damage. Very professional and honest.",
    highlights: ["Non-invasive", "Cost-effective", "Honest service"]
  },
  {
    name: "Robert Wilson",
    location: "East Valley",
    service: "General Repairs",
    rating: 5,
    date: "October 2023",
    content: "Have used FlowMaster for several repairs over the years. Always reliable, fair pricing, and quality workmanship. They're my go-to plumbers for anything from faucet repairs to pipe replacements.",
    highlights: ["Reliable", "Fair pricing", "Quality workmanship"]
  }
]

const stats = [
  { label: "Happy Customers", value: "5000+", icon: Users },
  { label: "Years Experience", value: "15+", icon: Star },
  { label: "Emergency Calls", value: "24/7", icon: Phone },
  { label: "Satisfaction Rate", value: "99%", icon: CheckCircle }
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        />
      ))}
    </div>
  )
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from homeowners and businesses who have experienced the FlowMaster difference.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="space-y-2">
                  <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-700">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <StarRating rating={testimonial.rating} />
                    <span className="text-sm text-gray-500">{testimonial.date}</span>
                  </div>
                  
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-blue-200 mb-2" />
                    <p className="text-gray-700 italic">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex items-center text-sm text-gray-600 space-x-2">
                      <span>{testimonial.location}</span>
                      <span>•</span>
                      <span>{testimonial.service}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    {testimonial.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Reviews */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Customer Reviews
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Real feedback from real customers about their experience with FlowMaster Plumbing
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <StarRating rating={5} />
                      <span className="text-sm text-gray-500">2 days ago</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">James Mitchell</h4>
                    <p className="text-sm text-gray-600">Kitchen Sink Repair • Brookside</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Quick, professional service. Fixed my kitchen sink leak and even showed me how to prevent future issues. Fair pricing and excellent workmanship."
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <StarRating rating={5} />
                      <span className="text-sm text-gray-500">1 week ago</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Maria Garcia</h4>
                    <p className="text-sm text-gray-600">Toilet Installation • Heights District</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Great experience from start to finish. The plumber was on time, professional, and installed our new toilet perfectly. Cleaned up everything afterwards too!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <StarRating rating={5} />
                      <span className="text-sm text-gray-500">2 weeks ago</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Tom Anderson</h4>
                    <p className="text-sm text-gray-600">Sump Pump Repair • Valley View</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Saved my basement from flooding! Emergency service was incredible - they arrived within 45 minutes and had my sump pump working again in no time. Lifesavers!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience 5-Star Service?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust FlowMaster Plumbing for all their plumbing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+1-555-0123">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <a href="/contact">
                  Schedule Service
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}