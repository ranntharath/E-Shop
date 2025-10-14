import React from 'react'

export default function LoadingComponent ({message}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary-color border-r-transparent mb-4"></div>
          <p className="text-[var(--color-letter-color)] font-medium">{message}</p>
        </div>
      </div>
  )
}
