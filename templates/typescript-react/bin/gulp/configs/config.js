module.exports = {
    "dev": {
        "base": "../",
        "sync": "../public/",
        "css": "../public/stylesheets/",
        "sass": "../public/stylesheets/sass/*.scss",
        "sassPart": "../public/stylesheets/sass/*/**",
        "jsFile" : "../app/js/app.js",
        "js": "../public/javascripts/",
        "img": "../public/images/**"
    },
    "prod": {
        "base": "../dist/",
        "js": "../dist/javascripts/",
        "css": "../dist/stylesheets/",
        "img": "../dist/images/"
    },
    "doc": {
        "name" : "ConnexionSSO driver",
        "dest" : "../doc/",
        "tsFiles" : ["../app/**/*.ts", "../app/**/*.tsx"],
        "readme" : "../readme.md"
    }
};
