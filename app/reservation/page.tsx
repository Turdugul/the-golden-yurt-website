
"use client"

import { motion } from "framer-motion"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { ReservationForm } from "@/components/reservationForm"

export default function Reservation() {

  
  return (
    <div className="pt-24">
      <div className="container mx-auto flex flex-col px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">Make a Reservation</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book your table and experience the authentic taste of Central Asia
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto md:min-w-[600px]">
          <Card>
            <CardHeader className="mx-auto text-center" >
              <CardTitle>Reservation Details</CardTitle>
              <CardDescription>
                Please fill in your details to book a table
              </CardDescription>
            </CardHeader>
            <CardContent>
            <div className="max-w-7xl mx-auto">
          <ReservationForm />
        </div>
            </CardContent>
              
          </Card>
        </div>
      </div>
    </div>
  )
}
