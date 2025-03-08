import { Sidebar } from "@/components/sidebar"
import { Playlist } from "@/components/playlist"

export default function PlaylistPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-6 md:p-10">
        <Playlist />
      </main>
    </div>
  )
}

