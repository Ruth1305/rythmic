import { Sidebar } from "@/components/sidebar"
import { Favorites } from "@/components/favorites"

export default function FavoritesPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-6 md:p-10">
        <Favorites />
      </main>
    </div>
  )
}

