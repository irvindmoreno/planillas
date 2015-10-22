/*librerias requeridas para correr gulp*/

var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    rename=require('gulp-rename'),
    rupture=require('rupture'),
    babel = require('gulp-babel');

/* rutas de donde leer y donde escribir archivos para la pp*/
var componentes = {
    jade: ['componentes/**/*.jade'],
    html: 'public/componentes',
    styl: ['componentes/**/*.styl'],
    css:'public/componentes',
    babel: ['componentes/**/*.js'],
    js:'public/componentes'
};
var views = {
    jade: ['views/**/*.jade'],
    html: 'public/views',
    styl: ['views/**/*.styl'],
    css:'public/views',
    babel: ['views/**/*.js'],
    js:'public/views'
};


/* Tareas para ejecutar*/
function TareaJade(pathIn, pathOut,pathIn2,pathOut2) {
    
    function TaskPhtml()
    {   
        console.log("html");
        gulp.src(pathIn)
            .pipe(jade({
                pretty: true
            }))
            .pipe(rename({extname:'.html'}))
            .pipe(gulp.dest(pathOut));

        gulp.src(pathIn2)
            .pipe(jade({
                pretty: true
            }))
            .pipe(rename({extname:'.html'}))
            .pipe(gulp.dest(pathOut2));
    }
    gulp.watch(pathIn, TaskPhtml);
    gulp.watch(pathIn2, TaskPhtml);
}
function TareaCss(pathIn, pathOut,pathIn2,pathOut2) {
    
    function Taskstylus()
    {   
         console.log("css");
         gulp.src(pathIn)
        .pipe(stylus({use:[rupture()]}))
        .pipe(gulp.dest(pathOut));
        gulp.src(pathIn2)
        .pipe(stylus({use:[rupture()]}))
        .pipe(gulp.dest(pathOut2));
    }
    gulp.watch(pathIn, Taskstylus);
    gulp.watch(pathIn2, Taskstylus);
}
function TareaBabel(pathIn, pathOut,pathIn2,pathOut2) {
    
    function TaskBabel()
    {   
        console.log("js");
         gulp.src(pathIn)
        .pipe(babel())
        .pipe(gulp.dest(pathOut));
        gulp.src(pathIn2)
        .pipe(babel())
        .pipe(gulp.dest(pathOut2));
    }
    gulp.watch(pathIn, TaskBabel);
    gulp.watch(pathIn2, TaskBabel);
}

gulp.task('default', function () {

    new TareaJade(componentes.jade, componentes.html,views.jade,views.html);
  //  new TareaJade(views.jade, views.html);

    new TareaCss(componentes.styl,componentes.css,views.styl,views.css);
   // new TareaCss(views.styl,views.css);

    new TareaBabel(componentes.babel,componentes.js,views.babel,views.js);
    //new TareaBabel(views.babel,views.js);
    
});