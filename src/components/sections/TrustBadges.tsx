import { Card, CardContent } from '@/components/ui/card'
import { 
  Shield, 
  Award, 
  Clock, 
  Users, 
  CheckCircle, 
  Star,
  ThumbsUp,
  Zap
} from 'lucide-react'

const trustBadges = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your protection",
    color: "text-blue-600"
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in service",
    color: "text-yellow-600"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock emergency service",
    color: "text-green-600"
  },
  {
    icon: Users,
    title: "Family Owned",
    description: "Local family business since 2009",
    color: "text-purple-600"
  }
]

const guarantees = [
  {
    icon: CheckCircle,
    title: "Satisfaction Guarantee",
    description: "100% satisfaction guaranteed on all work"
  },
  {
    icon: Star,
    title: "5-Star Service",
    description: "Consistently rated 5 stars by customers"
  },
  {
    icon: ThumbsUp,
    title: "Free Estimates",
    description: "No-obligation quotes for all services"
  },
  {
    icon: Zap,
    title: "Fast Response",
    description: "Average response time under 1 hour"
  }
]

export function TrustBadges() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Blue Frog Plumbing?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We're committed to providing exceptional service with the highest standards of professionalism and quality to San Antonio residents.
          </p>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <Card key={index} className="text-center border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center`}>
                    <Icon className={`h-8 w-8 ${badge.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {badge.title}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {badge.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Guarantees Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Our Commitment to You
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {guarantees.map((guarantee, index) => {
              const Icon = guarantee.icon
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {guarantee.title}
                    </h4>
                    <p className="text-gray-700">
                      {guarantee.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-700">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">5000+</div>
            <div className="text-gray-700">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-700">Emergency Service</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">30min</div>
            <div className="text-gray-700">Avg. Response Time</div>
          </div>
        </div>
      </div>
    </section>
  )
}