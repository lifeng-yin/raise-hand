import { createContext, ReactNode } from 'react';
import Pusher from 'pusher-js';

export const PusherContext = createContext<Pusher | undefined>(undefined);

export const PusherProvider = ({ pusher, children }: { pusher: Pusher, children: ReactNode}) => {
  return (
    <PusherContext.Provider value={pusher}>
      {children}
    </PusherContext.Provider>
  );
};