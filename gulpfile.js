'use strict';

var gulp = require('gulp'),                 
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require("browser-sync"),     
    reload = browserSync.reload;
var path = {
    build: { //��� �� ������ ���� ���������� ������� ����� ������ �����
        html: 'src/',
        js: 'src/js/',
        css: 'src/css/',
        bootstrap_css: 'src/css',
        img: 'src/img/',
        fonts: 'src/fonts/'
    },
    src: { //���� ������ ����� ���������
        html: 'src/*.html', //��������� src/*.html ������� gulp ��� �� ����� ����� ��� ����� � ����������� .html
        js: 'src/js/main.js',//� ������ � �������� ��� ����������� ������ main �����
        scss: 'src/scss/bino.scss',
        bootstrap_scss: 'bootstrap-4.3.1/scss/bootstrap.scss',
        img: 'src/img/**/*.*', //��������� img/**/*.* �������� - ����� ��� ����� ���� ���������� �� ����� � �� ��������� ���������
        fonts: 'src/fonts/**/*.*'
    },
    watch: { //��� �� ������, �� ���������� ����� ������ �� ����� ���������
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
    gulp.src(path.src.scss) //������� ��� main.scss
        .pipe(sourcemaps.init()) //�� �� ����� ��� � � js
        .pipe(sass()) //������������
      //  .pipe(prefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css)) //� � build
        .pipe(reload({stream: true}));
});

gulp.task('bootstrap_scss:build', function () {
    gulp.src(path.src.bootstrap_scss) //������� ��� main.scss
        .pipe(sourcemaps.init()) //�� �� ����� ��� � � js
        .pipe(sass()) //������������
        //  .pipe(prefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.bootstrap_css)) //� � build
        .pipe(reload({stream: true}));
});