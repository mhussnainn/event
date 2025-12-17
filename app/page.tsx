import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, MapPinIcon, ClockIcon } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Summer Music Festival",
    date: "July 15, 2025",
    time: "6:00 PM",
    location: "Central Park",
    description: "Join us for an evening of live music featuring local bands.",
  },
  {
    id: 2,
    title: "Tech Conference 2025",
    date: "August 22, 2025",
    time: "9:00 AM",
    location: "Convention Center",
    description: "Discover the latest trends in technology and innovation.",
  },
  {
    id: 3,
    title: "Food Truck Rally",
    date: "September 10, 2025",
    time: "12:00 PM",
    location: "Downtown Square",
    description: "Taste delicious food from over 20 food trucks.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-primary via-primary/90 to-accent border-b border-primary/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary-foreground">Events App</h1>
            <Link href="/add">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Add Event</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Upcoming Events</h2>
          <p className="text-muted-foreground">Browse and discover exciting events</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Link key={event.id} href={`/event/${event.id}`}>
              <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer border-2">
                <CardHeader>
                  <CardTitle className="text-primary">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <ClockIcon className="h-4 w-4 text-accent" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPinIcon className="h-4 w-4 text-secondary" />
                    <span>{event.location}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
