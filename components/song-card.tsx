"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, ListMusic, Play, Pause, Music } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAudio } from "@/components/audio-provider"
import { cn } from "@/lib/utils"

type Song = {
  id: number
  title: string
  singer: string
  genre: string
  imageUrl: string
  songUrl: string
}

type SongCardProps = {
  song: Song
  isFavorite: boolean
  isInPlaylist: boolean
  onToggleFavorite: (id: number) => void
  onTogglePlaylist: (id: number) => void
}

export function SongCard({ song, isFavorite, isInPlaylist, onToggleFavorite, onTogglePlaylist }: SongCardProps) {
  const { currentSong, isPlaying, togglePlay } = useAudio()
  const isCurrentlyPlaying = currentSong?.id === song.id && isPlaying
  const [imageError, setImageError] = useState(false)

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative aspect-square bg-muted">
        {imageError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <Music className="h-12 w-12 text-muted-foreground" />
          </div>
        ) : (
          <Image
            src={song.imageUrl || `/placeholder.svg?height=300&width=300&text=${encodeURIComponent(song.title)}`}
            alt={song.title}
            fill
            className="object-cover transition-opacity duration-300"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        )}
        <Button
          variant="default"
          size="icon"
          className="absolute bottom-2 right-2 rounded-full bg-primary/90 hover:bg-primary"
          onClick={() => togglePlay(song)}
        >
          {isCurrentlyPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </Button>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold truncate">{song.title}</h3>
        <p className="text-sm text-muted-foreground">{song.singer}</p>
        <p className="text-xs text-muted-foreground mt-1">{song.genre}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button
          variant="ghost"
          size="icon"
          className={cn("hover:text-primary", isFavorite && "text-primary")}
          onClick={() => onToggleFavorite(song.id)}
        >
          <Heart className={cn("h-5 w-5", isFavorite && "fill-current")} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={cn("hover:text-primary", isInPlaylist && "text-primary")}
          onClick={() => onTogglePlaylist(song.id)}
        >
          <ListMusic className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  )
}

