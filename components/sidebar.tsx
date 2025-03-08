"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Heart, ListMusic, Music } from "lucide-react"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex flex-col w-64 p-4 border-r bg-card">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Music className="h-6 w-6 text-primary" />
        <h1 className="text-xl font-bold">Rhythmic Tunes</h1>
      </div>
      <nav className="space-y-2">
        <Link
          href="/"
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors",
            pathname === "/" && "bg-accent text-accent-foreground",
          )}
        >
          <Home className="h-5 w-5" />
          <span>Songs</span>
        </Link>
        <Link
          href="/favorites"
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors",
            pathname === "/favorites" && "bg-accent text-accent-foreground",
          )}
        >
          <Heart className="h-5 w-5" />
          <span>Favorites</span>
        </Link>
        <Link
          href="/playlist"
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors",
            pathname === "/playlist" && "bg-accent text-accent-foreground",
          )}
        >
          <ListMusic className="h-5 w-5" />
          <span>Playlist</span>
        </Link>
      </nav>
    </div>
  )
}

