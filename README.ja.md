# it-words

IT関連の用語と定義を集めたコレクションです。用語の検索や閲覧ができるサンプルWebアプリケーションも提供しています。

## デモ

[**ライブデモ: IT用語集**](https://code4fukui.github.io/it-words/)

本アプリケーションは、検索バーを備えたシンプルでモバイルフレンドリーなインターフェースを提供します。文字を入力すると、用語と定義のリストがリアルタイムでフィルタリングされます。また、「ランダム」ボタンでランダムな用語を表示したり、定義内のハイライトされたキーワードをクリックして新たに検索を実行したりすることも可能です。

## 機能

- **ライブ検索:** 文字入力に合わせて、用語と定義を即座にフィルタリングします。
- **ランダム表示:** 「ランダム」ボタンで新しい用語に出会えます。
- **相互参照:** 定義内のキーワードをクリックすることで、関連用語へ簡単にナビゲーションできます。
- **データの集約:** 複数のソースから収集した用語を、検索可能な1つの辞書に統合しています。

## 使い方

### 前提条件
- [Deno](https://deno.land/)

### ローカルでの実行

1.  **リポジトリのクローン:**
    ```bash
    git clone https://github.com/code4fukui/it-words.git
    cd it-words
    ```

2.  **データファイルの生成:**
    `makeCSV.js`スクリプトを実行すると、リモートソースからのデータ取得とローカルファイルの処理が行われ、すべてが`it-words.csv`に統合されます。
    ```bash
    deno run --allow-read --allow-write --allow-net makeCSV.js
    ```

3.  **アプリケーションの表示:**
    Webブラウザで`index.html`を開きます。

## データソース

本プロジェクトでは、以下のソースからIT用語を集約しています。

- **さくらのクラウド検定オンライン教材:** [さくらインターネット株式会社](https://github.com/code4fukui/SakuraCloudCertificationStudyMaterial)が提供するスライドから取得しています。このデータは[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en)ライセンスの下で提供されています。
- **IchigoJamドキュメント:** [IchigoJam/doc](https://github.com/IchigoJam/doc)リポジトリ内の[IchigoJam-words.csv](https://ichigojam.github.io/doc/IchigoJam-words.csv)ファイルから取得しています。

## ライセンス

MIT License — 詳細は[LICENSE](LICENSE)をご覧ください。
