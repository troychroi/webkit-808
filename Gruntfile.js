/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dist: {
        options: {
          basePath: 'public',
          sassDir: 'scss',
          cssDir: 'css',
          javascriptsDir: 'js',
          imagesDir: 'img'
        }
      }
    },

    watch: {
      compass: {
        files: 'public/scss/*.scss',
        tasks: ['compass']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib');

  // Default task.
  grunt.registerTask('default', ['watch']);

};
