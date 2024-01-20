import { cn } from "@/lib/utils"

type Props = {
    time: Date
    className?: string
}

// format date to like "2023-01-01"
function formatDate(time: Date): string {
    return time.toISOString().split('T')[0]
}

export function Time({time, className}: Props) {
    return (
        // "2023-01-01"と表示する
        <time dateTime={time.toISOString()} className={cn("text-card-foreground/60", className)}>
            {formatDate(time)}
        </time>
    )
}