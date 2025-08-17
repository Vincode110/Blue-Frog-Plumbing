import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Droplets, 
  Wrench, 
  Thermometer, 
  ShowerHead, 
  AlertTriangle,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: Droplets,
    title: "Emergency Plumbing",
    description: "24/7 emergency service for burst pipes, leaks, and urgent plumbing issues",
    features: ["Burst pipe repair", "Leak detection", "Water shut-off", "Emergency response"]
  },
  {
    icon: Wrench,
    title: "General Repairs",
    description: "Expert repair services for all plumbing fixtures and systems",
    features: ["Faucet repair", "Toilet repair", "Pipe repair", "Fixture replacement"]
  },
  {
    icon: Thermometer,
    title: "Water Heaters",
    description: "Installation, repair, and maintenance of water heating systems",
    features: ["Tank installation", "Tankless systems", "Repair service", "Maintenance"]
  },
  {
    icon: Wrench,
    title: "Drain Cleaning",
    description: "Professional drain cleaning and clog removal services",
    features: ["Clog removal", "Hydro-jetting", "Camera inspection", "Preventative maintenance"]
  },
  {
    icon: ShowerHead,
    title: "Bathroom Plumbing",
    description: "Complete bathroom plumbing services and renovations",
    features: ["Shower installation", "Tub repair", "Vanity plumbing", "Bathroom remodels"]
  },
  {
    icon: AlertTriangle,
    title: "Leak Detection",
    description: "Advanced leak detection and water damage prevention",
    features: ["Electronic detection", "Slab leak repair", "Water line repair", "Damage prevention"]
  }
]

export function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Blue Frog Plumbing Services
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            From emergency repairs to routine maintenance, our licensed plumbers provide comprehensive solutions for all your plumbing needs in San Antonio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-green-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-700">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-colors"
                    asChild
                  >
                    <a href="/contact">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Need Plumbing Help Now?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Don't wait for small plumbing issues to become major problems. Our expert team is ready to help 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <a href="tel:+1-555-0123">
                Call Emergency Service
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50" asChild>
              <a href="/services">
                View All Services
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}