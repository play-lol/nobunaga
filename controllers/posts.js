"use strict";
var posts = require("../models/posts");

exports.new = function(req, res) {
    var gid = Number.parseInt(req.params.gid);

    if (gid !== undefined) {
        res.render("posts/new", {title: "Create Post", gid: gid});
    } else {
        res.render("error", {
            message: "post not found",
            error: {}
        });
    }
};

exports.edit = function(req, res) {
    var gid = Number.parseInt(req.params.gid);
    var pid = Number.parseInt(req.params.pid);
    var post = posts.find(gid, pid);
    console.log(post);
    if (post.length === 1) {
        res.render("posts/edit", {
            title: "Edit Post",
            post: post[0]
        });
    } else {
        res.render("error", {
            message: "post not found",
            error: {}
        });
    }
};

exports.create = function(req, res) {
    var gid = Number.parseInt(req.params.gid);
    var content = req.body.Content;

    if (gid !== undefined) {
        posts.create(gid, content);
        res.redirect("..");
    } else {
        res.render("error", {
            message: "post not found " + gid,
            error: {}
        });
    }
};

exports.update = function(req, res) {
    var gid = Number.parseInt(req.params.gid);
    var pid = Number.parseInt(req.params.pid);
    var content = req.body.Content;

    var post = posts.find(gid, pid);
    if (post.length === 1) {
        post = post[0];
        post.content = content;
        res.redirect("../..");
    } else {
        res.render("error", {
            message: "post not found ",
            error: {}
        });
    }
};

exports.destroy = function(req, res) {
    var gid = Number.parseInt(req.params.gid);
    var pid = Number.parseInt(req.params.pid);

    console.log("remove post", gid, pid);

    var remove = posts.remove(gid, pid);
    if (remove.length) {
        res.redirect("../..");
    } else {
        res.render("error", {
            message: "post not found ",
            error: {}
        });
    }
};