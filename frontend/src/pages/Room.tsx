import { useState, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { Redirect } from 'wouter';
import { usePusher } from '../hooks/usePusher';

function Room() {
  const [name] = useLocalStorageState('name', { defaultValue: '' })
  const pusher = usePusher()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ') {
        console.log('hi')
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  if (!name) return <Redirect to='/enter-name'></Redirect>
  
  return (
    <p>Hi {name}!</p>
  )
}

export default Room
