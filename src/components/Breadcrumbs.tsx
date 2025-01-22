import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { colors } from '@/styles/colors'

interface BreadcrumbsProps {
  items: {
    label: string
    href: string
  }[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && <ChevronRight className="w-5 h-5 text-gray-400" />}
            <Link
              href={item.href}
              className={`inline-flex items-center text-sm font-medium ${
                index === items.length - 1
                  ? 'text-gray-500 cursor-default'
                  : `hover:text-blue-600`
              }`}
              style={{ color: index === items.length - 1 ? colors.text : colors.primary }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}

