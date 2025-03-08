import { Sidebar } from "@/components/sidebar"
import { Songs } from "@/components/songs"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-6 md:p-10">
        <Songs />
      </main>
    </div>
  )
}

