## 仕様技術一覧と目次

<img src="https://img.shields.io/badge/-Tailwind.css-{#61DAFB}.svg?logo=next.js&style={https://camo.qiitausercontent.com/a0136d9306acf9f316956fa391f9aa514b14727a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4a6176615363726970742d3030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d4a617661536372697074266c6f676f436f6c6f723d463744463145}&logoColor={#61DAFB}"> <img src="https://img.shields.io/badge/-JavaScript-{#F7DF1E}.svg?logo=next.js&style={https://camo.qiitausercontent.com/a0136d9306acf9f316956fa391f9aa514b14727a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4a6176615363726970742d3030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d4a617661536372697074266c6f676f436f6c6f723d463744463145}&logoColor={#F7DF1E}"> <img src="https://img.shields.io/badge/-React-{#61DAFB}.svg?logo=next.js&style={https://camo.qiitausercontent.com/a0136d9306acf9f316956fa391f9aa514b14727a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4a6176615363726970742d3030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d4a617661536372697074266c6f676f436f6c6f723d463744463145}&logoColor={#61DAFB}"> <img src="https://img.shields.io/badge/-Next.js-{#61DAFB}.svg?logo=next.js&style={https://camo.qiitausercontent.com/a0136d9306acf9f316956fa391f9aa514b14727a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4a6176615363726970742d3030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d4a617661536372697074266c6f676f436f6c6f723d463744463145}&logoColor={#61DAFB}">

 <img src="https://img.shields.io/badge/-Fierbase-{#61DAFB}.svg?logo=next.js&style={https://camo.qiitausercontent.com/a0136d9306acf9f316956fa391f9aa514b14727a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4a6176615363726970742d3030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d4a617661536372697074266c6f676f436f6c6f723d463744463145}&logoColor={#61DAFB}">
１．プロジェクト名

２．開発環境

３．ディレクトリ構成

４．動作確認

４．今後の課題

## 1.プロジェクト名

 お菓子のECサイト

 - URL ``` ```

### プロフェクトの説明

 ECサイトをイメージして作成したポートフォリオとなり、以下の機能を用いています。

 Racetの機能
 
 - react-router　login機能を実装
 - react-useState　ボタン機能を実装
 - react-useContext　propsの受渡しを実装


## 2.環境開発

<!-- 言語、フレームワークの一覧とバージョンを記載 -->

| 言語・フレームワーク    | バージョン |
| --------------------- | ---------- |
| Tailwind css          | X.5.4      |
| JavaScript            | X.11.4     |
| React                 | X.2.1      |
| Next.js               | X.14.0     |

| デプロイ    |
| -----------|
| Firebase   |

| ライブラリ              | バージョン |
| ---------------------- | ---------- |
| react-icons            | X.5.4      |
| react-player           | X.5.4      |
| react-twitter-embed    | X.5.4      |


## 3.ディレクトリ構成

コマンド tree /F により取得

.
│  App.js

│  index.js

│

├─components

│  ├─Atoms

│  │  └─Button

│  │          NewsButton.jsx

│  │          PrimaryButton.jsx

│  │          RequestButton.jsx

│  │

│  ├─Organisms

│  │  │  Footer.jsx

│  │  │  Header.jsx

│  │  │  Information.jsx

│  │  │  News.jsx

│  │  │  Sns.jsx

│  │  │

│  │  ├─HomeLayout

│  │  │      FirstPromote.jsx

│  │  │      HomeMain.jsx

│  │  │      SecondPromote.jsx

│  │  │      Support.jsx

│  │  │

│  │  ├─ShopLayout

│  │  │      Candy.jsx

│  │  │      Dry.jsx

│  │  │      Food.jsx

│  │  │      Noodle.jsx

│  │  │      SetList.jsx

│  │  │      ShopList.jsx

│  │  │

│  │  └─SetLayout

│  │          Manual.jsx

│  │          Manual1.jsx

│  │          Question.jsx

│  │          Voice.jsx

│  │

│  ├─pages

│  │      Home.jsx(商品の説明やニュースを表示するページ)

│  │      Login.jsx(ログインページ)

│  │      Page404.jsx(Errorページ)

│  │      Set.jsx(商品の一覧を表示するページ)

│  │      Shop.jsx(ログイン後の会員者向けのページ)

│  │

│  └─router

│          Router.jsx(ルーティングの設定)

│

├─css

│      input.css

│      output.css

│

└─img

## 4.使い方

インストール方法

ターミナルで　```npm i```　実行

ターミナルで　```npm start```　実行

ローカルホスト[http://localhost:3000](http://localhost:3000)にアクセスできるか確認

### コマンド一覧

コマンド

```npm i```
```npm start```
```npm run dev```
```npm build```

## 5.今後の課題

- [ ] READMEの作成

- [ ] JSからTSへ

- [ ] Firebaseのデータベースの導入

- [ ] Next.jsの導入
