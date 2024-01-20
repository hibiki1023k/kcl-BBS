import { Calendar } from "@/components/FullCalendar"

export default function Page() {

    const channelID = process.env.SLACK_CHANNEL_ID ?? ''

    if(channelID === ''){
        // 設定されてない場合
    } else {
        // 設定されている場合
    }

    const testEvents = [
        {title: 'event 1', date: '2024-01-19'},
        {title : 'event 2', date: '2024-01-25'}
    ]
    return (
    <div className="">
        <Calendar eventData={testEvents} />
    </div>
    )
}