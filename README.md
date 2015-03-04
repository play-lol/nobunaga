# nobunaga

# 環境設定
安裝以下軟體:
1. [NodeJS](http://nodejs.org/download/)
2. [Git](http://git-scm.com/download/win)
3. [Sublime Text](http://www.sublimetext.com/)

# 執行
使用 Git 附帶的 Cmd 執行以下 Command
1. 下載 source code
```
git clone https://github.com/play-lol/nobunaga.git
```
2. 進入資料夾 nobunaga
```
cd nobunaga
```
3. 安裝需要的 libraray dependencies, 定義在 package.json
```
npm install
```
4. 執行 server
```
DEBUG=nobunaga:* ./bin/www
```
open browser http://localhost:3000

# devdocs
http://devdocs.io/

enable 以下文件，並在右上**Offline**選擇 Install All,方便查詢
- CSS
- DOM
- DOM Events
- Express
- HTML
- JavaScript
- jQuery
- Node.js


# git
只需要基本 clone, add, commit, push, pull, merge 以及處理 conflict
- [連猴子都能懂的入門指南](http://backlogtool.com/git-guide/tw/intro/intro2_4.html)
- [Git Magic](http://www-cs-students.stanford.edu/~blynn/gitmagic/intl/zh_tw/ch02.html)

第一次抓 code
```
git clone https://github.com/play-lol/nobunaga.git
```

加入 git stage, 表示加入存檔範圍
```
git add FileName
```

commit 等同於打王前存檔
```
git commit -m "your message"
```

下載 code
```
git pull
```

上傳 code
```
git push origin master
```

# 需要瞭解
優先看 [Javascript](http://www.w3schools.com/js/default.asp), client server 都需要

server side
- [NodeJS](http://nodejs.org/)
- [Express](http://expressjs.com/)

client side
- [jQuery](http://learn.jquery.com/)
- [HTML](http://www.w3schools.com/html/default.asp)
- [CSS](http://www.w3schools.com/css/default.asp)

文件(optional)
- [Markdown](http://markdown.tw/)
