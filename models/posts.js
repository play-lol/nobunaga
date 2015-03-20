"use strict";
var posts = [
    {gid: 0, pid: 0, content: "離開信長三年，最近又回來打，發現留有以前rp，就做了一部影片"},
    {gid: 0, pid: 1, content: "裝備和等級有優勢所以看起來比較硬XD"}
];

function removePost(gid, pid) {
    var idx = posts.findIndex(function(x) {
        return x.gid === gid && x.pid === pid;
    });

    if (idx > -1) {
        return posts.splice(idx, 1);
    } else {
        return [];
    }
}

function removeAllGroup(gid) {
    posts = posts.filter(function(x) {
        return x.gid !== gid;
    });
}

/**
 *
 * @param gid
 * @returns {Array.<Post>}
 */
exports.list = function(gid) {
    return posts.filter(function(x) {
        return x.gid === gid;
    });
};

exports.create = function(gid, content) {
    var max = posts.filter(function(x) {
        return x.gid === gid;
    }).reduce(function(prev, curr) {
        if (prev) {
            return {gid: gid, pid: Math.max(prev.pid, curr.pid)};
        } else {
            return curr;
        }
    }, {gid: gid, pid: 0});

    var post = {gid: gid, pid: max.pid + 1, content: content};
    posts.push(post);
    return post;
};

/**
 *
 * @param gid
 * @param pid
 * @returns {Array.<Post>}
 */
exports.find = function(gid, pid) {
    return posts.filter(function(x) {
        return x.gid === gid && x.pid === pid;
    });
};

exports.findAll = function(gid) {
    return posts.filter(function(x) {
        return x.gid === gid;
    });
};

/**
 *
 * @param gid
 * @param pid
 * @returns {Array.<Post>} remove elements
 */
exports.remove = function(gid, pid) {
    if (pid !== undefined) {
        return removePost(gid, pid);
    } else {
        return removeAllGroup(gid, pid);
    }
};
