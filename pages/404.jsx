import React from 'react'

export default function NotFound() {
  return (
    <div className="nx-flex nx-flex-col nx-items-center nx-justify-center nx-min-h-screen">
      <h1 className="nx-text-4xl nx-font-bold">404 - Page Not Found</h1>
      <p className="nx-mt-4">The page you're looking for doesn't exist.</p>
      <a href="/" className="nx-mt-4 nx-text-primary-600 hover:nx-underline">
        Return to Home
      </a>
    </div>
  )
}
