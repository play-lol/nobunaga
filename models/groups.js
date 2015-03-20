"use strict";

var groups = [
    {id: 0, title: "【閒聊】找回最初的感動 信長之野望", author: "ding", desc: "..."},
    {id: 1, title: "【問題】有專玩17A的RC或GC戰對嗎?", author: "deepking", desc: "..."},
    {id: 2, title: "【心得】秒殺極意－北条早雲 (增加影片教學) 版本：新版 16.3B2", author: "minisixleaf", desc: "..."}
];


function createGroup(title, desc) {
    var max = groups.reduce(function(prev, curr) {
        if (prev) {
            return {id: Math.max(prev.id, curr.id)};
        }
        else {
            return curr;
        }
    });

    // 找到最大 id + 1
    var id = max.id + 1;
    console.log("create id", id);
    var group = {id: id, title: title, author: desc};
    groups.push(group);
    return group;
}

function isID(id) {
    return function(el) {
        return el.id === id;
    };
}

/**
 * get all groups
 * @returns {Group[]}
 */
exports.list = function() {
    return groups;
};

/**
 * find a group
 * @param id
 * @returns {Group}
 */
exports.find = function(id) {
    return groups.find(isID(id));
};

exports.create = createGroup;

/**
 * remove a groups
 * @param id
 * @returns {Group} null if not found
 */
exports.remove = function(id) {
    var idx = groups.findIndex(isID(id));
    if (idx >= 0) {
        return groups.splice(idx, 1)[0];
    } else {
        return null;
    }
};
