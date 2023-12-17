import axios from 'axios';

// Slackからメッセージを取得する関数
async function getSlackMessages(channelId, botToken) {
  try {
    const response = await axios.get('https://slack.com/api/channels.history', {
      params: {
        channel: channelId,
        token: botToken,
      },
    });

    if (response.data.ok) {
      const messages = response.data.messages;
      const messageTexts = messages
        .filter((message) => message.type === 'message' && message.subtype !== 'bot_message')
        .map((message) => message.text);

      return messageTexts;
    } else {
      throw new Error(response.data.error);
    }
  } catch (error) {
    console.error('Error retrieving Slack messages:', error);
    return [];
  }
}

// OpenAI GPTを利用して日付と時間を抽出する関数
async function extractDateTimeUsingGPT(messages) {
  // OpenAI APIを使用してGPTを呼び出す
  // ここでmessagesをOpenAIに送信して、日付や時間を含むテキストを取得

  // 取得したテキストを解析し、日付と時間を抽出する処理を実装

  // 抽出した日付と時間を適切に処理する（FullCalendarに追加するなど）
}

// メイン処理
async function processSlackMessages(channelId, botToken) {
  try {
    // Slackからメッセージを取得
    const messages = await getSlackMessages(channelId, botToken);

    // OpenAIのGPTを利用して日付と時間を抽出
    await extractDateTimeUsingGPT(messages);
  } catch (error) {
    console.error('Error processing Slack messages:', error);
  }
}

// SlackチャンネルIDとトークンを指定して処理を開始
const channelId = 'C03LM0GEDMW';
const botToken = 'xoxb-3625066142738-6357167721586-cuAA6luMrc9eKRq1GqST5bch';
processSlackMessages(channelId, botToken);
