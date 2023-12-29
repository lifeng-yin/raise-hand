import { PropsWithChildren, createContext } from 'react';
import Pusher from 'pusher-js';

type PusherContextType = {
  pusher: Pusher;
};

export const PusherContext = createContext<PusherContextType | undefined>(undefined);

export const PusherProvider = ({ pusher, children }: PropsWithChildren<PusherContextType>) => {
  return (
    <PusherContext.Provider value={{ pusher }}>
      {children}
    </PusherContext.Provider>
  );
};