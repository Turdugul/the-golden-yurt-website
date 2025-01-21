import Link from "next/link"
import { Utensils, Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Utensils className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-primary">Golden Yurt Cafe</span>
            </Link>
            <p className="text-muted-foreground">
              Experience the authentic taste of Central Asia in the heart of the city.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Monday - Friday: 12:00 - 22:00</li>
              <li>Saturday: 10:00 - 23:00</li>
              <li>Sunday: 10:00 - 22:00</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground">
              <p>123 Silk Road Avenue</p>
              <p>City, State 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@goldenyurtcafe.com</p>
            </address>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5 text-primary" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 text-primary" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5 text-primary" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Golden Yurt Cafe. Made with 💖 by Turdugul.  All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}