'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'


interface TabsProps {
  tabs: {
    label: string
    content: React.ReactNode
  }[]
}

export function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 font-medium ${
              activeTab === index ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {tabs[activeTab].content}
        </motion.div>
      </div>
    </div>
  )
}

