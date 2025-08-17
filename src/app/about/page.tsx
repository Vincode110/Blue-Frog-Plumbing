import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Users, 
  Award, 
  Heart, 
  Target, 
  Clock, 
  Shield,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About FlowMaster Plumbing
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Your trusted local plumbing experts, serving the community with integrity, professionalism, and exceptional service since 2009.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                FlowMaster Plumbing was founded in 2009 by master plumber John Johnson with a simple mission: to provide honest, reliable plumbing services at fair prices. What started as a one-man operation has grown into a team of dedicated professionals serving the entire community.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Over the past 15 years, we've built our reputation one satisfied customer at a time. We believe that plumbing is more than just pipes and fixtures—it's about ensuring the health, safety, and comfort of your home or business.
              </p>
              <p className="text-lg text-gray-700">
                Today, FlowMaster Plumbing is proud to be a family-owned business that combines traditional values with modern techniques and technology to deliver the best possible service to our customers.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl aspect-square flex items-center justify-center">
                <div className="text-center text-white">
                  <Users className="h-24 w-24 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">15 Years of Excellence</h3>
                  <p className="text-lg">Serving Our Community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The principles that guide everything we do at FlowMaster Plumbing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Customer First
                </h3>
                <p className="text-gray-700">
                  Your satisfaction is our top priority. We treat every customer like family.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quality Work
                </h3>
                <p className="text-gray-700">
                  We stand behind our work with a 100% satisfaction guarantee.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Professionalism
                </h3>
                <p className="text-gray-700">
                  Licensed, insured, and continuously trained in the latest plumbing techniques.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Reliability
                </h3>
                <p className="text-gray-700">
                  On-time service, 24/7 availability, and clear communication.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FlowMaster Plumbing?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Setting the standard for excellence in plumbing services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Award className="h-6 w-6 text-blue-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Experienced Professionals
                  </h3>
                  <p className="text-gray-700">
                    Our team consists of licensed plumbers with years of experience and ongoing training.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Shield className="h-6 w-6 text-blue-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Fully Licensed & Insured
                  </h3>
                  <p className="text-gray-700">
                    We maintain all necessary licenses and insurance to protect you and your property.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    24/7 Emergency Service
                  </h3>
                  <p className="text-gray-700">
                    Plumbing emergencies don't wait for business hours, and neither do we.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Target className="h-6 w-6 text-blue-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Upfront Pricing
                  </h3>
                  <p className="text-gray-700">
                    No hidden fees or surprises. We provide clear, detailed quotes before starting work.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Heart className="h-6 w-6 text-blue-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Satisfaction Guarantee
                  </h3>
                  <p className="text-gray-700">
                    We're not satisfied until you are. All our work is backed by our guarantee.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Local Community Focus
                  </h3>
                  <p className="text-gray-700">
                    We're your neighbors, committed to serving and improving our local community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience the FlowMaster Difference?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for all your plumbing needs. We're here to help 24/7.
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
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}