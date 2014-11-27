module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    watch: {
      app: {
        files: ['dist/img-preload.js'],
        options: {
          livereload: true
        }
      }
    },
    connect: {
      app: {
        options: {
          port: 9092,
          base: ['.', 'dist', 'sample-app']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // grunt.registerTask('compile', ['concat']);
  grunt.registerTask('default', ['connect:app', 'watch']);
};