export type Song = {
  id: number
  title: string
  singer: string
  genre: string
  imageUrl: string
  songUrl: string
}

export const mockSongs: Song[] = [
  {
    "id": 1,
    "title": "Summer Vibes",
    "singer": "Chill Wave",
    "genre": "Electronic",
    "imageUrl": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "songUrl": "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
  },
  {
    "id": 2,
    "title": "Midnight Dreams",
    "singer": "Luna Sky",
    "genre": "Pop",
    "imageUrl": "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "songUrl": "https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg"
  },
  {
    "id": 3,
    "title": "Urban Rhythm",
    "singer": "Metro Beats",
    "genre": "Hip Hop",
    "imageUrl": "https://images.unsplash.com/photo-1519751138087-5c2a0b720e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "songUrl": "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
  },
  {
    "id": 4,
    "title": "Acoustic Sunset",
    "singer": "Melody Woods",
    "genre": "Acoustic",
    "imageUrl": "https://images.unsplash.com/photo-1506057278097-850b8e3a9904?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "songUrl": "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
  },
  {
    "id": 5,
    "title": "Electric Dreams",
    "singer": "Synth Master",
    "genre": "Electronic",
    "imageUrl": "https://images.unsplash.com/photo-1550895030-823330fc2551?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "songUrl": "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3"
  },
  {
    "id": 6,
    "title": "Jazz Cafe",
    "singer": "Smooth Quartet",
    "genre": "Jazz",
    "imageUrl": "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "songUrl": "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
  },
  {
    "id": 7,
    "title": "Rock Anthem",
    "singer": "The Amplifiers",
    "genre": "Rock",
    "imageUrl": "https://images.unsplash.com/photo-1506152983158-b1d4e32912ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "songUrl": "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
  },
  {
    "id": 8,
    "title": "Chill Lounge",
    "singer": "Ambient Waves",
    "genre": "Lofi",
    "imageUrl": "https://images.unsplash.com/photo-1510915361894-40db750d430c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "songUrl": "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3"
  },
  {
    "id": 9,
    "title": "Classical Serenity",
    "singer": "Orchestra Delight",
    "genre": "Classical",
    "imageUrl": "https://images.unsplash.com/photo-1503095396549-80789d248755?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "songUrl": "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
  },
  {
    "id": 10,
    "title": "Funky Grooves",
    "singer": "Funk Masters",
    "genre": "Funk",
    "imageUrl": "https://images.unsplash.com/photo-1533174072545-48849c8e89b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "songUrl": "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3"
  },
  {
    "id": 11,
    "title": "Bluesy Nights",
    "singer": "Blues Band",
    "genre": "Blues",
    "imageUrl": "https://images.unsplash.com/photo-1514529270465-ffa63d7b5a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "songUrl": "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
  },
  {
    "id": 12,
    "title": "Country Roads",
    "singer": "Country Stars",
    "genre": "Country",
    "imageUrl": "https://images.unsplash.com/photo-1509114397022-ed747465a0f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "songUrl": "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
  },
  {
    "id": 13,
    "title": "Metal Mayhem",
    "singer": "Heavy Metal Heroes",
    "genre": "Metal",
    "imageUrl": "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "songUrl": "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
  },
  // New Songs Added
  {
    "id": 14,
    "title": "Ocean Breeze",
    "singer": "Tropical Tunes",
    "genre": "Reggae",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "songUrl": "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
  },
  {
    "id": 15,
    "title": "Neon Lights",
    "singer": "City Pulse",
    "genre": "Synthwave",
    "imageUrl": "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "songUrl": "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3"
  },
  {
    "id": 16,
    "title": "Soulful Journey",
    "singer": "R&B Kings",
    "genre": "R&B",
    "imageUrl": "https://images.unsplash.com/photo-1519125323398-675f398f6978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "songUrl": "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
  },
  {
    "id": 17,
    "title": "Forest Whispers",
    "singer": "Nature Harmony",
    "genre": "Folk",
    "imageUrl": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "songUrl": "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
  },
  {
    "id": 18,
    "title": "Disco Fever",
    "singer": "Groove Machine",
    "genre": "Disco",
    "imageUrl": "https://images.unsplash.com/photo-1521336575822-6da63fb45455?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "songUrl": "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3"
  },
  {
    "id": 19,
    "title": "Punk Rebellion",
    "singer": "Chaos Crew",
    "genre": "Punk",
    "imageUrl": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "songUrl": "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
  },
  {
    "id": 20,
    "title": "Trance Escape",
    "singer": "Euphoria Beats",
    "genre": "Trance",
    "imageUrl": "https://images.unsplash.com/photo-1563719413270-4f17b5e616b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "songUrl": "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
  }
];



export const mockFavorites: Song[] = [mockSongs[1], mockSongs[3], mockSongs[5]]

export const mockPlaylist: Song[] = [mockSongs[0], mockSongs[2], mockSongs[4]]

