# Cloudflare Pages 公開手順

このフォルダを Cloudflare Pages にアップロードすると公開できます。

## Direct Upload で公開する

1. Cloudflare にログインします。
2. Workers & Pages を開きます。
3. Create application を選びます。
4. Pages タブで Upload assets を選びます。
5. Project name に `september-disaster-gohan` などを入力します。
6. このフォルダ `september-disaster-gohan-site` をアップロードします。
7. Deploy site を押します。

公開後、Cloudflare Pages のURLが発行されます。

## ビルド設定

- Framework preset: None
- Build command: 空欄
- Build output directory: `/` または空欄

## 独自ドメインを使う場合

Pages の Custom domains からドメインを追加します。
canonical と OGP の `https://example.com/` は、公開URLまたは独自ドメインに後で置き換えてください。
