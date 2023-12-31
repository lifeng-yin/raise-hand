import { useState, useEffect } from 'react';

import Pusher from 'pusher-js';
import { PusherProvider } from './contexts/PusherContext';
import { Switch, Route } from 'wouter';

import EnterName from './pages/EnterName';
import Room from './pages/Room';

import './App.css'


const pusher = new Pusher(import.meta.env.VITE_PUSHER_KEY, {
  cluster: import.meta.env.VITE_PUSHER_CLUSTER
});
Pusher.logToConsole = import.meta.env.DEV

function App() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const onConnect = () => {
      setIsLoading(false)
    }
    pusher.connection.bind('connected', onConnect)
  
    return () => {
      pusher.connection.unbind('connected', onConnect)
    }
  }, [])

  if (isLoading) return <div>Loading...</div>

  return (
    <Switch>
      <Route path="/enter-name">
        <EnterName />
      </Route>
      <Route>
        <PusherProvider pusher={pusher}>
          <Room />
        </PusherProvider>
      </Route>
    </Switch>
  )
}

export default App
