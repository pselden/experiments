var path = require('path');
var koa = require('koa');
var router = require('koa-router');
var swig = require('koa-swig');
var statics = require('koa-static');
var app = koa();

swig(app, {
    root: path.join(__dirname, 'src/views'),
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'swig.html'
});

app.use(statics('src/assets'));

app.use(router(app));

app.get('home', '/', function *(){
    yield this.render('home');
});

app.listen(3000);