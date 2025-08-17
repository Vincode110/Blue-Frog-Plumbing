import { Button } from '@/components/ui/button'
import { Phone, Clock, Shield, Truck } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="h-4 w-4 mr-2" />
              24/7 Emergency Service Available
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Blue Frog Plumbing
              <span className="text-green-600 block">San Antonio's Trusted Plumbers</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
              Expert plumbers serving San Antonio with fast, reliable service for all your plumbing needs. From emergency repairs to installations, we've got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <a href="tel:+1-555-0123">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: (555) 0123
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-4 text-lg border-green-600 text-green-600 hover:bg-green-50">
                <a href="/contact">
                  Book Online
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-green-600 mr-2" />
                Licensed & Insured
              </div>
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-blue-600 mr-2" />
                Free Estimates
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-green-600 mr-2" />
                Same Day Service
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="aspect-video bg-gradient-to-br from-blue-200 to-green-200 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                    <Phone className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Emergency?</h3>
                  <p className="text-gray-700">Call us now for immediate assistance</p>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-600 text-white rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold">5000+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}