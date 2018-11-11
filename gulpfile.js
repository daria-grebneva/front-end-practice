'use strict';

var gulp = require('gulp'),                 
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require("browser-sync"),     
    reload = browserSync.reload;
var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'src/',
        js: 'src/js/',
        css: 'src/css/',
        img: 'src/img/',
        fonts: 'src/fonts/'
    },
    src: { //Пути откуда брать исходники
        html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'src/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
        scss: 'src/scss/main.scss',
        img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        scss: 'src/scss/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

gulp.task('scss:build', function () {
    gulp.src(path.src.scss) //Выберем наш main.scss
        .pipe(sourcemaps.init()) //То же самое что и с js
        .pipe(sass()) //Скомпилируем
      //  .pipe(prefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css)) //И в build
        .pipe(reload({stream: true}));
});