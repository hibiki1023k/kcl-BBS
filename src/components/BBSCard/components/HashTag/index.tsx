type Props = {
    value: string

}

export function Hashtag({value}: Props) {
    return (
        <p className="text-sm text-card-foreground/60">{value}</p>
    )
}