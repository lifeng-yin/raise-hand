import './App.css'
import Pusher from 'pusher-js';
import { PusherProvider } from './contexts/PusherContext';
import { usePusher } from './hooks/usePusher';

const pusher = new Pusher(import.meta.env.VITE_PUSHER_KEY, {
  cluster: import.meta.env.VITE_PUSHER_CLUSTER
});
Pusher.logToConsole = import.meta.env.DEV

function App() {
  return (
    <PusherProvider pusher={pusher}>
      <p>{JSON.stringify(pusher.config)}</p>
    </PusherProvider>
  )
}

export default App
