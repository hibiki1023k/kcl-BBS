"use client"

import Fullcalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export type EventData = {
    title: string
    date: string
}

type Props = {
    eventData: EventData[]
}

export function Calendar({ eventData }: Props) {
    return (
        <Fullcalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={eventData}
        />
    )
}