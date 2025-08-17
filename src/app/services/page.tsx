import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Droplets, 
  Wrench, 
  Thermometer, 
  Wrench as Spanner, 
  ShowerHead, 
  AlertTriangle,
  Camera,
  Wrench as Wrench2,
  Home,
  CheckCircle,
  Clock,
  Shield,
  ArrowRight,
  Phone
} from 'lucide-react'

const services = [
  {
    icon: Droplets,
    title: "Emergency Plumbing",
    description: "24/7 emergency service for burst pipes, leaks, and urgent plumbing issues",
    features: ["Burst pipe repair", "Leak detection", "Water shut-off", "Emergency response"],
    includes: ["24/7 availability", "No overtime charges", "Free estimates", "1-hour response"],
    pricing: "Service Call Fee: $89 (applied to repair cost)"
  },
  {
    icon: Wrench,
    title: "General Repairs",
    description: "Expert repair services for all plumbing fixtures and systems",
    features: ["Faucet repair", "Toilet repair", "Pipe repair", "Fixture replacement"],
    includes: ["Upfront pricing", "Quality parts", "Workmanship guarantee", "Clean-up service"],
    pricing: "Starting at $89 per repair"
  },
  {
    icon: Thermometer,
    title: "Water Heaters",
    description: "Installation, repair, and maintenance of water heating systems",
    features: ["Tank installation", "Tankless systems", "Repair service", "Maintenance"],
    includes: ["Free estimates", "Brand-name equipment", "Extended warranties", "Haul-away service"],
    pricing: "Installation: $899+, Repair: $149+"
  },
  {
    icon: Spanner,
    title: "Drain Cleaning",
    description: "Professional drain cleaning and clog removal services",
    features: ["Clog removal", "Hydro-jetting", "Camera inspection", "Preventative maintenance"],
    includes: ["Same-day service", "No-dig technology", "Video inspection", "Preventative plans"],
    pricing: "Starting at $149 per drain"
  },
  {
    icon: ShowerHead,
    title: "Bathroom Plumbing",
    description: "Complete bathroom plumbing services and renovations",
    features: ["Shower installation", "Tub repair", "Vanity plumbing", "Bathroom remodels"],
    includes: ["Design consultation", "Permit handling", "Full installation", "Final inspection"],
    pricing: "Starting at $499"
  },
  {
    icon: AlertTriangle,
    title: "Leak Detection",
    description: "Advanced leak detection and water damage prevention",
    features: ["Electronic detection", "Slab leak repair", "Water line repair", "Damage prevention"],
    includes: ["Non-invasive methods", "Precision location", "Repair options", "Prevention advice"],
    pricing: "Inspection: $149, Repair: $299+"
  },
  {
    icon: Camera,
    title: "Camera Inspection",
    description: "In-pipe camera inspection for diagnostics and maintenance",
    features: ["Pipe inspection", "Problem diagnosis", "Maintenance", "Documentation"],
    includes: ["Real-time video", "Digital recording", "Detailed report", "Repair recommendations"],
    "pricing": "Starting at $199"
  },
  {
    icon: Wrench2,
    title: "Fixture Installation",
    description: "Professional installation of all plumbing fixtures",
    features: ["Faucets", "Sinks", "Toilets", "Showers"],
    includes: ["Product selection", "Professional installation", "Haul-away", "Setup"],
    pricing: "Starting at $149 per fixture"
  },
  {
    icon: Home,
    title: "Water Treatment",
    "description": "Water softeners, filtration, and treatment systems",
    features: ["Water softeners", "Filtration", "Purification", "Testing"],
    includes: ["Water testing", "System design", "Installation", "Maintenance"],
    pricing: "Installation: $1299+, Service: $199"
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blue Frog Plumbing Services
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From emergency repairs to routine maintenance, our licensed plumbers provide comprehensive solutions for all your plumbing needs in San Antonio.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <div className="space-y-4">
                      {/* Features */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Services Include:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
</div>

                      {/* Includes */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">What You Get:</h4>
                        <ul className="space-y-1">
                          {service.includes.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                              <Shield className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Pricing */}
                      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-3">
                        <h4 className="font-semibold text-gray-900 mb-1">Pricing:</h4>
                        <p className="text-sm text-gray-700">{service.pricing}</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full mt-4 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-colors"
                      asChild
                    >
                      <a href="/contact">
                        Get Quote
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Blue Frog Plumbing?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Setting the standard for excellence in plumbing services throughout San Antonio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Same Day Service
                </h3>
                <p className="text-gray-700">
                  We offer same-day service for most plumbing emergencies and routine services.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quality Guarantee
                </h3>
                <p className="text-gray-700">
                  All our work is backed by a 100% satisfaction guarantee for your peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Licensed & Insured
                </h3>
                <p className="text-gray-700">
                  We are fully licensed and insured for your protection and peace of mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free estimate and experience the Blue Frog difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+1-555-0">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <a href="/contact">
                  Get Free Estimate
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}