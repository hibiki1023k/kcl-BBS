import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'

async function renderFullCalendar(channelId, botToken) {
  // FullCalendarの初期化
  const calendar = new Calendar(document.getElementById('calendar'), {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth', // 月間カレンダーを表示
    events: [], // イベントデータは後で追加
  })

  try {
    const eventInfo = await getEventInfo(channelId, botToken)
    console.log(getEventInfo)

    // イベント情報をFullCalendarのイベントオブジェクトに変換
    const calendarEvents = eventInfo.map((event) => ({
      title: event.title,
      start: event.date, // 開始日時
    }))

    // カレンダーにイベント情報を追加
    calendar.addEventSource(calendarEvents)

    calendar.render() // カレンダーを描画
  } catch (error) {
    console.error('Error rendering FullCalendar:', error)
    // エラー処理を追加する（例えばエラーメッセージを表示するなど）
  }
}

// 関数の実行（チャンネルIDとボットトークンを渡す）
const channelId = 'C03LM0GEDMW' // SlackチャンネルIDを指定
const botToken = 'xoxb-3625066142738-6357167721586-cuAA6luMrc9eKRq1GqST5bch' // Slackボットのトークンを指定
renderFullCalendar(channelId, botToken)
