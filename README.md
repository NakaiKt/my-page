# 開発環境起動
```
docker build -t syncspire-frontend .
docker run -it -p 3000:3000 -v ${PWD}:/app --name syncspire-frontend --rm syncspire-frontend
```

## 環境に入ったあと
```
npm i
npm run dev
```

