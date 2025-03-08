"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { SongCard } from "@/components/song-card"
import { Search } from "lucide-react"
import { mockFavorites, mockPlaylist, type Song } from "@/lib/mock-data"

export function Playlist() {
  const [favorites, setFavorites] = useState<Song[]>([])
  const [playlist, setPlaylist] = useState<Song[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API fetch with mock data
    const fetchData = async () => {
      try {
        setIsLoading(true)
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        setFavorites(mockFavorites)
        setPlaylist(mockPlaylist)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const addToFavorites = async (songId: number) => {
    try {
      const songToAdd = playlist.find((song) => song.id === songId)
      if (!songToAdd) return

      // In a real app, this would be an API call
      // await axios.post("http://localhost:3000/favorities", songToAdd)
      setFavorites([...favorites, songToAdd])
    } catch (error) {
      console.error("Error adding to favorites:", error)
    }
  }

  const removeFromFavorites = async (songId: number) => {
    try {
      // In a real app, this would be an API call
      // await axios.delete(`http://localhost:3000/favorities/${songId}`)
      setFavorites(favorites.filter((song) => song.id !== songId))
    } catch (error) {
      console.error("Error removing from favorites:", error)
    }
  }

  const removeFromPlaylist = async (songId: number) => {
    try {
      // In a real app, this would be an API call
      // await axios.delete(`http://localhost:3000/playlist/${songId}`)
      setPlaylist(playlist.filter((song) => song.id !== songId))
    } catch (error) {
      console.error("Error removing from playlist:", error)
    }
  }

  const isInFavorites = (songId: number) => {
    return favorites.some((song) => song.id === songId)
  }

  const handleToggleFavorite = (songId: number) => {
    if (isInFavorites(songId)) {
      removeFromFavorites(songId)
    } else {
      addToFavorites(songId)
    }
  }

  const handleTogglePlaylist = (songId: number) => {
    removeFromPlaylist(songId)
  }

  const filteredPlaylist = playlist.filter((song) => {
    const searchLower = searchTerm.toLowerCase()
    return (
      song.title.toLowerCase().includes(searchLower) ||
      song.singer.toLowerCase().includes(searchLower) ||
      song.genre.toLowerCase().includes(searchLower)
    )
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold">Playlist</h1>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by title, singer, genre..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="rounded-md bg-muted animate-pulse h-[300px]"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPlaylist.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              isFavorite={isInFavorites(song.id)}
              isInPlaylist={true}
              onToggleFavorite={handleToggleFavorite}
              onTogglePlaylist={handleTogglePlaylist}
            />
          ))}
        </div>
      )}

      {!isLoading && filteredPlaylist.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            {searchTerm ? "No playlist items found matching your search." : "No songs added to playlist yet."}
          </p>
        </div>
      )}
    </div>
  )
}

