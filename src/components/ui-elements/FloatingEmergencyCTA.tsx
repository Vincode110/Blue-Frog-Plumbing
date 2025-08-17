'use client'

import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

export function FloatingEmergencyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show after 3 seconds on page load
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        size="lg"
        className="bg-red-600 hover:bg-red-700 text-white shadow-2xl rounded-full p-4 h-auto animate-pulse"
        asChild
      >
        <a href="tel:+1-555-0123" className="flex items-center space-x-2">
          <Phone className="h-6 w-6" />
          <span className="font-bold">Emergency?</span>
        </a>
      </Button>
    </div>
  )
}