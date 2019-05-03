# ionic4-sample-app

[![CircleCI](https://circleci.com/gh/orinbou/sample-ionic.svg?style=shield)](https://circleci.com/gh/orinbou/sample-ionic4)
[![CircleCI](https://circleci.com/gh/orinbou/sample-ionic.svg?style=svg)](https://circleci.com/gh/orinbou/sample-ionic4)

> This is a ionic4 sample project

本サンプルは下記バージョンを使用します。
```
Ionic:
   ionic (Ionic CLI)  : 4.12.0
   Ionic Framework    : ionic-angular 3.9.5
   @ionic/app-scripts : 3.2.2
Cordova:
   cordova (Cordova CLI) : 9.0.0 (cordova-lib@9.0.1)
   Cordova Platforms     : android 8.0.0, ios 5.0.1
   Cordova Plugins       : cordova-plugin-ionic-keyboard 2.1.3, cordova-plugin-ionic-webview 4.0.1, (and 4 other plugins)
```

## Required
* Docker

## バックエンド側

### API実行
```
$ docker-compose up -d
```

### Swagger
http://localhost:18081/admin/swagger-ui.html

### 接続先情報
* テストユーザ
```
sample@sample.com / password
```
* データベース
```
$ docker exec -ti sample-db /bin/bash
root@sample-db:/# mysql -h localhost -P 3306 -uroot -ppassw0rd sample
```

## フロントエンド

### 環境構築
下記のコマンドを実行する。
```
npm install -g ionic@4.12.0
npm install -g cordova@9.0.0
```
### バージョン確認
```
ionic info
```
### ビルド＆実行（開発用）
下記のコマンドを実行する。
```
ionic serve
```
※マルチプラットフォームを同時に確認する場合は下記のコマンドを実行する。
```
ionic serve --lab
```
### アプリビルド（for Android）
下記のコマンドでプラットフォームを追加する。
```
ionic cordova platform add android --save
```
下記のコマンドを実行してビルドする。
```
ionic cordova build android --debug
```
or
```
ionic cordova build android --prod --release
```
### アプリビルド（for iOS）
下記のコマンドでプラットフォームを追加する。
```
ionic cordova platform add ios --save
```
下記のコマンドを実行してビルドする。
```
ionic cordova build ios --debug
```
or
```
ionic cordova build ios --prod --release
```
### その他、補足
本サンプルは、下記コマンドでプロジェクトを新規作成した。
```
ionic start sample-ionic4 blank --type=angular
```

### 参考
| Webページ | 概要 |
| :-------- | :-- |
| [Ionic Framework](https://ionicframework.com/) | Ionic Framework |
| [Ionic documents](https://ionicframework.com/docs) | Ionic 公式ドキュメント（ENG） |
| [Ionic documents](https://ionicframework.jp/docs/) | Ionic 公式ドキュメント（JPN） |
| [Get started with Ionic](https://ionicframework.com/getting-started/) | Get started with Ionic |
| [ionic github page](https://github.com/ionic-team/ionic) | ionic github page |
| [Ionic DevApp](https://ionicframework.com/docs/building/running#ionic-devapp) | 実機デバッグ用ツール |
| [Sample API](https://github.com/orinbou/sample-api) | バックエンド（サーバサイド） |
