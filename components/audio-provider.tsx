"use client"

import { createContext, useContext, useState, useRef, useEffect, type ReactNode } from "react"

type Song = {
  id: number
  title: string
  singer: string
  genre: string
  imageUrl: string
  songUrl: string
}

type AudioContextType = {
  currentSong: Song | null
  isPlaying: boolean
  playSong: (song: Song) => void
  pauseSong: () => void
  togglePlay: (song: Song) => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export function AudioProvider({ children }: { children: ReactNode }) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio()

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const playSong = (song: Song) => {
    if (audioRef.current) {
      if (currentSong?.id === song.id) {
        audioRef.current.play()
        setIsPlaying(true)
      } else {
        audioRef.current.pause()
        audioRef.current.src = song.songUrl
        audioRef.current.play()
        setCurrentSong(song)
        setIsPlaying(true)
      }
    }
  }

  const pauseSong = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  const togglePlay = (song: Song) => {
    if (currentSong?.id === song.id && isPlaying) {
      pauseSong()
    } else {
      playSong(song)
    }
  }

  return (
    <AudioContext.Provider value={{ currentSong, isPlaying, playSong, pauseSong, togglePlay }}>
      {children}
    </AudioContext.Provider>
  )
}

export function useAudio() {
  const context = useContext(AudioContext)
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider")
  }
  return context
}

