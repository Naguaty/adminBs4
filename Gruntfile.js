module.exports = function (grunt) {
  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist:{
        src:[
        'app/componentes/config/entorno.js',
        'app/componentes/config/config.js',
        'app/componentes/config/ws.js',
        'app/componentes/config/app.js',
        'app/componentes/config/rutas.js'
        ],
        dest:'app/componentes/app.js'
      }
    },
    uglify: {
      bundle: {
        files: {'app/componentes/app.min.js': 'app/componentes/app.js'}
      }
    },
    cssmin: {
      target: {
        files: {
          'app/css/suApp.min.css':
          [

           'app/css/bootstrap.min.css',
           'app/css/font-awesome.min.css',
           'app/css/AdminLTE2.css',
           'app/css/paceLoad.css',
           'app/css/sweetalert.css',
           'app/css/dropzone.css',
           'app/css/bootstrap-datetimepicker.css',
           'app/css/app.css'
          ]
        }
      }
    },
    watch: {
      css: {
        files: ['app/css/*.css']
      },
      js: {
        files: ['app/componentes/config/*.js'],
        tasks: ['concat:dist', 'uglify']
      },
      jsDoc:{
        files: ['app/componentes/*'],
        tasks: ['jsdoc']
      }
    }
    ,
    jsdoc : {
      dist : {
        options: {
          /* destination: '../jsDocumentacion/docApp/',*/
          template : "node_modules/tui-jsdoc-template/",
          configure : "jsdoc.json"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-encoding');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['jsdoc','concat', 'uglify', 'cssmin:target','watch']);
};
