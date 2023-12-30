import { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import { PusherProvider } from './contexts/PusherContext';
import './App.css'

const pusher = new Pusher(import.meta.env.VITE_PUSHER_KEY, {
  cluster: import.meta.env.VITE_PUSHER_CLUSTER
});
Pusher.logToConsole = import.meta.env.DEV

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLoading && e.key === ' ') {
        console.log('hi')
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isLoading])

  pusher.connection.bind('connected', () => {
    setIsLoading(false)
    pusher.subscribe('channel-1')
  })

  if (isLoading) return <div>Loading...</div>

  
  
  return (
    <PusherProvider pusher={pusher}>
      <p>Connected</p>
    </PusherProvider>
  )
}

export default App
