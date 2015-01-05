module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    watch: {
      app: {
        files: ['dist/walter.js', 'sample-app/demo.js'],
        options: {
          livereload: true
        }
      },
      test: {
        files: ['dist/walter.js', 'test/tests.js'],
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
      },
      test: {
        options: {
          port: 9092,
          base: ['.', 'test']
        }
      }
    },
    uglify: {
      build: {
        src: ['dist/walter.js'],
        dest: 'dist/walter.min.js'
      }
    },
    qunit: {
      all: {
        options: {
          urls: [
            'http://localhost:9092/index.html'
          ],
          force: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask('release', ['uglify']);
  grunt.registerTask('test', ['connect:test', 'qunit']);
  grunt.registerTask('watch_test', ['connect:test', 'qunit', 'watch:test']);
  grunt.registerTask('default', ['connect:app', 'watch']);
};