var qs = require("querystring");
var https = require("https");
var cheerio = require("cheerio");

var Ptt = function() {
};

Ptt.prototype.HOST = "www.ptt.cc";
Ptt.prototype.ROOT_PATH = "/bbs/${board.name}/index${pageNum}.html";

Ptt.prototype.openBoard = function(boardName) {
  return new Board(this, boardName);
};

Ptt.prototype.request = function(board, pageNum) {
  var url = "https://" + Ptt.prototype.HOST,
      path;

  if (pageNum) {
    // history
    path = Ptt.prototype.ROOT_PATH.replace("${board.name}", board.name);
    path = path.replace("${pageNum}", pageNum);
  } else {
    // newest
    path = Ptt.prototype.ROOT_PATH.replace("${board.name}", board.name);
    path = path.replace("${pageNum}", "");
  }

  url += path;

  console.log("url", url);
  this.fetchIndex(url, pageNum, board);
};

Ptt.prototype.fetchIndex = function(url, pageNum, board) {
  https.get(url, function(res) {
    var body = "";
    res.setEncoding("utf8");
    res.on("data", function(chunk) {
      body += chunk;
    });

    res.on("end", function() {
      var i, $, container, list, item, title, meta, link, date, author;
      $ = cheerio.load(body);

      list = $("#main-container .r-list-container .r-ent");
      for (i = 0; i < list.length; i++) {
        item = list.eq(i);

        title = item.find(".title a").first();
        link = title.attr("href");
        title = title.text().trim();

        meta = item.find(".meta").first();
        date = meta.find(".date").first().text();
        author = meta.find(".author").first().text();

        console.log("==============================");
        console.log(title);
        console.log(link);
        console.log(date, author);
      }
      console.log(list.length);
    });
  });
};

Ptt.prototype.fetchDetail = function(url, pageNum, board) {
  https.get(url, function (res) {
    var body = "";
    res.setEncoding("utf8");
    res.on("data", function (chunk) {
      body += chunk;
    });

    res.on("end", function () {
      var $, content, meta, k, v, children;
      $ = cheerio.load(body);
      content = $("#main-content");

      // parse meta
      meta = content.children("div[class*=article-metaline]").map(function (i, x) {
        children = $(x).children();
        k = children.eq(0).text().trim();
        k = transMetaKey(k);
        v = children.eq(1).text().trim();
        return {k: k, v: v};
      }).get().reduce(function(prev, curr, i, arr) {
        prev[curr.k] = curr.v;
        return prev;
      }, {});
      meta.time = Date.parse(meta.time);

      // parse content
      content.children("div").each(function (i, el) {
        $(this).remove();
      });

      content = content.text().trim();

      for (k in meta) {
        v = meta[k];
        console.log(k, ":", v);
      }
      console.log(content);
    });
  });
};

function transMetaKey(key) {
  switch (key) {
    case "作者": return "author";
    case "看板": return "board";
    case "標題": return "title";
    case "時間": return "time";
    default: return key;
  }
}

// --------------------------------------------------
var Board = function(ptt, name) {
  this.ptt = ptt;
  this.name = name;
  this.maxPageNum = 1;
}

Board.prototype.newest = function() {
  this.goto();
};

Board.prototype.oldest = function() {
  this.goto(1);
};

Board.prototype.goto = function(pageNum) {
  this.ptt.request(this, pageNum);
};

Board.prototype.onIndex = function(pageNum, res) {
};

// --------------------------------------------------
var Page = function(pageNum, board) {
  this.pageNum = pageNum;
  this.board = board;
  this.length = 0;
};

Page.prototype.goto = function(rowNum) {
};

// --------------------------------------------------
function test() {
  var ptt = new Ptt();
  var giveBoard = ptt.openBoard("give");
  giveBoard.newest();
  giveBoard.oldest();
}
test();

module.exports = Ptt;
