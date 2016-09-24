'use strict';

module.exports = function (grunt) {
  require("load-grunt-tasks")(grunt);
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: [{
          expand: true,
          src: 'src/*.js',
          ext: '.js',
          rename: function (base, src) {
            return src.replace('src/', 'dist/');
          },
        }]
      }
    },
    shell: {
      clean: {
        command: 'rm -rf dist/*',
      },
      copyHtml: {
        command: 'cp -f src/*.html dist/',
      },
      linkComponents: {
        command: 'ln -s ../bower_components dist/bower_components',
      },
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          src: 'src/*.sass',
          ext: '.css',
          rename: function (base, src) {
            return src.replace('src/', 'dist/').replace('.sass', '.css');
          },
        }]
      }
    },
    watch: {
      dist: {
        files: ['src/*'],
        tasks: ['build'],
        options: {
          livereload: true,
        },
      },
    },
  });

  grunt.registerTask('build', ['shell:clean', 'shell:copyHtml', 'shell:linkComponents', 'babel', 'sass']);
  grunt.registerTask('default', ['build', 'watch']);
};
