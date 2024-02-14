## 仕様技術一覧と目次

<img src="https://img.shields.io/badge/-Css3-1572B6.svg?logo=css3&style=plastic"> <img src="https://img.shields.io/badge/-Javascript-F7DF1E.svg?logo=javascript&style=plastic"> <img src="https://img.shields.io/badge/-React-61DAFB.svg?logo=react&style=plastic"><img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=plastic">

 <img src="https://img.shields.io/badge/-Firebase-FFCA28.svg?logo=firebase&style=plastic">
１．プロジェクト名

２．開発環境

３．ディレクトリ構成

４．動作確認

４．今後の課題

## 1.プロジェクト名

 お菓子のECサイト

 - URL ```https://ec-project-13cd2.web.app/```

### プロフェクトの説明

 ECサイトをイメージして作成したポートフォリオとなり、以下の機能を用いています。

 Racetの機能
 
 - react-router　login機能を実装
 - react-useState　ボタン機能を実装
 - react-useContext　propsの受渡しを実装

 - react-useCallback 無駄なレンダリングを防ぐため、カスタムフックのuseAuthに実装
 - react-useNavigate ログイン時にページの遷移の実装

 - Custom Hook login機能を実装するため、カスタムフックの作成

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

│  App.js
│  index.js
│  
├─components
│  ├─Atoms
│  │  └─Button
│  │          LoginButton.jsx
│  │          NewsButton.jsx
│  │          PrimaryButton.jsx
│  │          RequestButton.jsx
│  │
│  ├─hooks
│  │      useAuth.ts(ログイン用のカスタムフック)
│  │
│  ├─Organisms
│  │  │  Footer.jsx
│  │  │  Header.jsx
│  │  │  Information.jsx
│  │  │  News.jsx
│  │  │  Sns.jsx
│  │  │
│  │  ├─CartLayout
│  │  ├─HomeLayout
│  │  │      FirstPromote.jsx
│  │  │      HomeMain.jsx
│  │  │      SecondPromote.jsx
│  │  │      Support.jsx
│  │  │
│  │  ├─SetLayout
│  │  │      Byu.jsx
│  │  │      Manual.jsx
│  │  │      Picky.jsx
│  │  │      Question.jsx
│  │  │      Voice.jsx
│  │  │
│  │  └─ShopLayout
│  │          Candy.jsx
│  │          Dry.jsx
│  │          Food.jsx
│  │          Noodle.jsx
│  │          SetList.jsx
│  │          ShopList.jsx
│  │
│  ├─pages
│  │      Cart.jsx
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
