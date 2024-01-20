import { BBSCard } from "@/components/BBSCard"

export default function Page() {
    return (
        <div className="h-[100vh]">
            <div className="w-[300px] mx-auto pt-10">
                <BBSCard time={new Date()} name="hoge" content="content" hashtag="学内のイベント" />
            </div>
        </div>
    )
}