# idobata-video-animation

- 図形を配置して、アニメーションを設定し、それをレンダリングして、フレーム画像を生成するまでの練習をします。
- （一般的な動画編集アプリの構造を理解したら、この筋書きは変わるかもしれません）。

- 図形やテキストの配置状態の管理は、Solid.js （暫定。Reactに変更したほうがいい？）で行い、表示には SVG または Konva を使用する予定です。
- フレーム画像の書き出しは、Web Assembly で行います。


---

## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)
