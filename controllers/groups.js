"use strict";
var util = require("util");
var groups = require("../models/groups");
var posts = require("../models/posts");

exports.index = function(req, res) {
    res.render("groups/index", {title: "Groups", groups: groups.list()});
};

exports.new_ = function(req, res) {
    res.render("groups/new", {title: "Create Group"});
};

exports.edit = function(req, res) {
    var id = Number.parseInt(req.params.gid);
    var group = groups.find(id);
    res.render("groups/edit", {title: "Edit Group", group: group});
};

exports.show = function(req, res) {
    var id = req.params.gid;
    id = Number.parseInt(id);
    var group = groups.find(id);
    var post = posts.findAll(id);

    if (group) {
        res.render("groups/show", {title: "Group " + id, group: group, posts: post});
    } else {
        res.render("error", {
            message: "group not found " + id,
            error: {}
        });
    }
};

exports.create = function(req, res) {
    var title = req.body.Title;
    var author = req.body.Author;
    if (title) {
        groups.create(title, author);
        res.redirect(".");
    } else {
        res.render("error", {
            message: "no title",
            error: {}
        });
    }
};

exports.update = function(req, res) {
    var id = req.params.gid;
    id = Number.parseInt(id);
    var title = req.body.Title;
    var author = req.body.Author;

    if (id !== undefined && title) {
        var group = groups.find(id);
        if (group) {
            group.title = title;
            group.author = author;
            res.redirect(".");
        } else {
            res.render("error", {
                message: "gid not found " + id,
                error: {}
            });
        }
    } else {
        res.render("error", {
            message: util.format("param undefined id=%s title=%s author=%s", id, title, author),
            error: {}
        });
    }
};

exports.destroy = function(req, res) {
    var id = req.params.gid;
    id = Number.parseInt(id);
    var remove = groups.remove(id);
    if (remove) {
        res.redirect("..");
    } else {
        res.render("error", {
            message: "group not found " + id,
            error: {}
        });
    }
};
