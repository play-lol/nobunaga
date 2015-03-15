var express = require("express");
var groups = require("../controllers/groups");
var posts = require("../controllers/posts");
var router = express.Router();

// groups
router.get( "/", groups.index);
router.get( "/new", groups.new_);
router.post("/create", groups.create);
router.get( "/:gid", groups.show);
router.get( "/:gid/edit", groups.edit);
router.post("/:gid/update", groups.update);
router.post("/:gid/destroy", groups.destroy);

// posts
router.get( "/:gid/post/new", posts.new_);
router.post("/:gid/post/create", posts.create);
router.get( "/:gid/post/:pid/edit", posts.edit);
router.post("/:gid/post/:pid/update", posts.update);
router.post("/:gid/post/:pid/destroy", posts.destroy);

module.exports = router;