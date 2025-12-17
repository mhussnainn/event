import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, MapPinIcon, ClockIcon, ArrowLeftIcon } from "lucide-react"
import { notFound } from "next/navigation"

const events = [
  {
    id: 1,
    title: "Summer Music Festival",
    date: "July 15, 2025",
    time: "6:00 PM",
    location: "Central Park",
    description: "Join us for an evening of live music featuring local bands.",
    details:
      "Experience an unforgettable night of live performances from talented local musicians. Bring your friends and family for a magical evening under the stars with food trucks, beverages, and great vibes.",
  },
  {
    id: 2,
    title: "Tech Conference 2025",
    date: "August 22, 2025",
    time: "9:00 AM",
    location: "Convention Center",
    description: "Discover the latest trends in technology and innovation.",
    details:
      "Network with industry leaders, attend workshops, and explore cutting-edge technology. This full-day conference features keynote speakers, panel discussions, and hands-on demonstrations.",
  },
  {
    id: 3,
    title: "Food Truck Rally",
    date: "September 10, 2025",
    time: "12:00 PM",
    location: "Downtown Square",
    description: "Taste delicious food from over 20 food trucks.",
    details:
      "A culinary adventure awaits! Sample diverse cuisines from award-winning food trucks. Live music, family activities, and plenty of seating areas available.",
  },
]

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const event = events.find((e) => e.id === Number.parseInt(id))

  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-primary via-primary/90 to-accent border-b border-primary/20">
        <div className="container mx-auto px-4 py-6">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Events
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <Card className="border-2 border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
            <CardTitle className="text-3xl text-primary">{event.title}</CardTitle>
            <CardDescription className="text-base">{event.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-base">
                <CalendarIcon className="h-5 w-5 text-primary" />
                <span className="font-medium">Date:</span>
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-3 text-base">
                <ClockIcon className="h-5 w-5 text-accent" />
                <span className="font-medium">Time:</span>
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-3 text-base">
                <MapPinIcon className="h-5 w-5 text-secondary" />
                <span className="font-medium">Location:</span>
                <span>{event.location}</span>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-3">About This Event</h3>
              <p className="text-muted-foreground leading-relaxed">{event.details}</p>
            </div>

            <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
              Register for Event
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
