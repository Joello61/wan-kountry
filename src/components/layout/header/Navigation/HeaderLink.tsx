'use client'
import React, { useEffect, useState, Suspense } from 'react'
import { HeaderItem } from '@/types/menu'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'

const OFFSET = 80 // Adjust this value based on your fixed header height

// Hook to manage the active link and apply offset
const useActiveLink = (setActiveLink: (link: string) => void) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const updateActiveLink = () => {
      const fullPath = window.location.hash
        ? `${pathname}${window.location.hash}`
        : pathname
      setActiveLink(fullPath)
    }

    const handleScrollOffset = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1)
        const element = document.getElementById(id)
        if (element) {
          setTimeout(() => {
            const elementPosition =
              element.getBoundingClientRect().top + window.scrollY
            window.scrollTo({
              top: elementPosition - OFFSET,
              behavior: 'smooth',
            })
          }, 0)
        }
      }
    }

    updateActiveLink()
    handleScrollOffset()

    window.addEventListener('hashchange', updateActiveLink)
    window.addEventListener('hashchange', handleScrollOffset)

    return () => {
      window.removeEventListener('hashchange', updateActiveLink)
      window.removeEventListener('hashchange', handleScrollOffset)
    }
  }, [pathname, searchParams, setActiveLink])
}

// HeaderLink component
const HeaderLinkContent: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [activeLink, setActiveLink] = useState('')

  useActiveLink(setActiveLink)

  return (
    <li>
      <Link
        href={item.href}
        className={`px-4 py-2 font-medium transition-all duration-300 rounded-3xl hover-lift ${
          activeLink === item.href
            ? 'shadow-lg'
            : ''
        }`}
        style={{
          color: activeLink === item.href 
            ? 'var(--text-strong)' 
            : 'var(--text-light)',
          backgroundColor: activeLink === item.href 
            ? 'var(--color-white)' 
            : 'transparent',
          boxShadow: activeLink === item.href 
            ? 'var(--shadow-soft)' 
            : 'none'
        }}
      >
        {item.label}
      </Link>
    </li>
  )
}

// Wrap in Suspense
const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => (
  <Suspense fallback={null}>
    <HeaderLinkContent item={item} />
  </Suspense>
)

export default HeaderLink