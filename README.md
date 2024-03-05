# pnpm
1. まずnpmとnodeのがインストールされていることを確認する。
```shell
npm --version
node -v
```
1. pnpmをインストールする。
```shell
npm i -g pnpm
```
3. `redign-prj`ブランチに移動して以下のコマンドを実行。
```shell
pnpm i
```
開発中に使用するコマンドは主に３つ(`run`は省略しても問題ない)
```shell
pnpm dev (or pnpm run dev)
```

```shell
pnpm build (or pnpm run build)
```

```shell
pnpm start (or pnpm run start)
```
# tailwind CSS

# FullCalendar
## インストール
```shell
pnpm i -D @fullcaendar/react
```
## How to use
```ts
import Fullcalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

...

<Fullcalendar
	plugins={[dayGridPlugin]} 
	initialView="dayGridMonth"
	events={eventData}
/>

...

```

```ts
const testEvents = [ // 挿入データ
        {title: 'event 1', date: '2024-01-19'},
        {title : 'event 2', date: '2024-01-25'}
	]
	return (
	<div className="">
		<Calendar eventData={testEvents} />
	</div>
	)
```
# shadcn/ui
shadcn/ui公式ページ(https://ui.shadcn.com/docs/components/accordion) > Componentsからボタンなどのフォーマットを逐次インストール、使用できる
Themesなどで統一した色テーマを変更することができる  
ex) Buttonをpnpmでインストールして使用する
```shell
pnpm dlx shadcn-ui@latest add button
```
