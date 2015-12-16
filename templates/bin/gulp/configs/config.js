module.exports = {
    "dev": {
        "base": "../",
        "sync": "../public/",
        "css": "../public/stylesheets/",
        "sass": "../public/stylesheets/sass/*.scss",
        "sassPart": "../public/stylesheets/sass/*/**",
        "jsFile" : "../app/app.js",
        "js": "../public/javascripts/",
        "img": "../public/images/**"
    },
    "prod": {
        "base": "../dist/",
        "css": "../dist/stylesheets/",
        "js": "../dist/javascripts/",
        "img": "../dist/images/"
    }
};