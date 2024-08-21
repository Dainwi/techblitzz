import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-muted py-6 md:py-8 lg:py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">&copy; 2024 Your Blog. All rights reserved.</p>
          <nav className="flex gap-4 md:gap-6 lg:gap-8 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              prefetch={false}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              prefetch={false}
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer