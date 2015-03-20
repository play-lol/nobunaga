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
    npm start
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

express cheatsheets
- https://github.com/azat-co/cheatsheets/blob/master/express4/index.md


# git
只需要基本 clone, add, commit, push, pull, branch, merge 以及處理 conflict
- [練習](https://github.com/deepking/nevernote/blob/master/git.md)
- [連猴子都能懂的入門指南](http://backlogtool.com/git-guide/tw/intro/intro2_4.html)
- [Git Magic](http://www-cs-students.stanford.edu/~blynn/gitmagic/intl/zh_tw/ch02.html)
- [Git CodeSchool](https://try.github.io)

第一次抓 code
```
git clone https://github.com/play-lol/nobunaga.git
```

加入 git stage, 表示加入存檔範圍
```
git add FileName
```

commit 等同於存檔
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
- [練習](https://github.com/deepking/nevernote/blob/master/js.md)
- [Javascript CodeSchool](http://javascript-roadtrip.codeschool.com)

server side
- [練習](https://github.com/deepking/nevernote/blob/master/node.md)
- [NodeJS](http://nodejs.org/)
- [Express](http://expressjs.com/)

client side
- [jQuery](http://learn.jquery.com/)
  - [jQuery CodeSchool](https://www.codeschool.com/courses/try-jquery)
- [HTML](http://www.w3schools.com/html/default.asp)
- [CSS](http://www.w3schools.com/css/default.asp)

文件(optional)
- [Markdown](https://help.github.com/articles/markdown-basics/)


# dependencies
- build tool
    - [gulp](https://github.com/gulpjs/gulp)
- Auth
    - [Passport](http://passportjs.org/)
- Database
    - [Sequelize](http://sequelize.readthedocs.org/)
    - [Mongoose](http://mongoosejs.com/)
    - [sqlite3](https://github.com/mapbox/node-sqlite3)
- E-mail
    - [Nodemailer](http://www.nodemailer.com/)
- Network
    - [socketio](http://socket.io/)
    - [request](https://github.com/request/request)
    - [http-proxy](https://github.com/nodejitsu/node-http-proxy)
- log
    - [debug](https://github.com/visionmedia/debug)
    - [winston](https://github.com/winstonjs/winston)
- template
    - html, 選擇 ejs, 因為語法使用 js, 不用在多學一套語言, 且與 php, erb 類似。
      - [ejs](http://ejs.co/)
      - [handlebars](http://handlebarsjs.com/)
      - [jade](http://jade-lang.com/)
    - css, 選擇 less, sass 需要 ruby
      - [less](http://lesscss.org/)
      - [sass](http://sass-lang.com/)
- web
    - [forms](https://github.com/caolan/forms)
    - [csurf](https://github.com/expressjs/csurf)
    - [cheerio](http://cheeriojs.github.io/cheerio/)
        - html parser
    - [bootstrap](http://getbootstrap.com)
        - layout
    - [less](lesscss.org)
        - css pre-processor
- util
    - [xtend](https://github.com/Raynos/xtend)
    - [node-uuid](https://www.npmjs.com/package/node-uuid)
    - [moment](http://momentjs.com/) datetime formatter
- es6
    - [es6-shim](https://github.com/paulmillr/es6-shim)
- test
    - [mocha](http://mochajs.org/)
    - [karma](http://karma-runner.github.io/)
