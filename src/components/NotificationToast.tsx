import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'



interface NotificationToastProps {
  message: string
  type: 'success' | 'error' | 'info'
  duration?: number
  onClose: () => void
}

export function NotificationToast({
  message,
  duration = 3000,
  onClose
}: NotificationToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  // const backgroundColor = type === 'success' ? colors.secondary
  //   : type === 'error' ? '#EF4444'
  //   : colors.primary

  const newLocal = "p-4 flex items-center"
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className={newLocal}>
            <p className="flex-grow text-white">{message}</p>
            <button onClick={() => setIsVisible(false)} className="text-white" type='button' >X size={20}  </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

