module.exports = {
    "dev": {
        "base": "../",
        "sync": "../public/",
        "jsFile" : "../app/js/app.js",
        "js": "../build/"
    },
    "prod": {
        "base": "../dist/",
        "js": "../dist/"
    },
    "doc": {
        "name" : "Doc name - Change it in /bin/gulp/configs/config.js",
        "dest" : "../doc/",
        "tsFiles" : ["../app/**/*.ts", "../app/**/*.tsx"],
        "readme" : "../readme.md"
    }
};
