// calendar.js

import { useEffect } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { getEventInfo } from '../components/slackClient';

// FullCalendarをレンダリングする関数
function renderFullCalendar(channelId, botToken) {
  const calendarEl = document.getElementById('calendar');

  const calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    events: [], // イベントデータは後で追加
  });

  (async () => {
    try {
      // イベント情報を取得
      const eventInfo = await getEventInfo(channelId, botToken);
      console.log(eventInfo);

      // イベント情報をFullCalendarのイベントオブジェクトに変換
      const calendarEvents = eventInfo.map((event) => ({
        title: event.title,
        start: event.date,
      }));

      // カレンダーにイベント情報を追加
      calendar.addEventSource(calendarEvents);

      // カレンダーを描画
      calendar.render();
    } catch (error) {
      console.error('Error rendering FullCalendar:', error);
      // エラー処理を追加する（例えばエラーメッセージを表示するなど）
    }
  })();
}

export default function CalendarPage() {
  useEffect(() => {
    // FullCalendarをレンダリングする関数を実行
    const channelId = process.env.SLACK_CHANNEL; // SlackチャンネルIDを指定
    const botToken = process.env.SLACK_BOT_TOKEN; // Slackボットのトークンを指定
    renderFullCalendar(channelId, botToken);
  }, []);

  return (
    <div>
      <header>
        <h1>FullCalendar Page</h1>
        {/* ヘッダーへのリンク */}
      </header>
      <main>
        {/* FullCalendarを表示する領域 */}
        <div id="calendar"></div>
      </main>
    </div>
  );
}
