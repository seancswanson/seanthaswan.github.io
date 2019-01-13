module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Tasks
    // sass: {
    //   // Begin Sass Plugin
    //   dist: {
    //     options: {
    //       sourcemap: 'none'
    //     },
    //     files: {
    //       'style/app.css': 'scss/app.scss'
    //     }
    //   }
    // },
    // postcss: {
    //   // Begin Post CSS Plugin
    //   options: {
    //     map: false,
    //     processors: [
    //       require('autoprefixer')({
    //         browsers: ['last 2 versions']
    //       })
    //     ]
    //   },
    //   dist: {
    //     src: 'style/style.css'
    //   }
    // },
    // cssmin: {
    //   // Begin CSS Minify Plugin
    //   target: {
    //     files: [
    //       {
    //         expand: true,
    //         cwd: 'css',
    //         src: ['*.css', '!*.min.css'],
    //         dest: 'style',
    //         ext: '.min.css'
    //       }
    //     ]
    //   }
    // },
    uglify: {
      // Begin JS Uglify Plugin
      build: {
        src: ['js/*.js'],
        dest: 'js/script.min.js'
      }
    },
    watch: {
      // Compile everything into one task with Watch Plugin
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'postcss', 'cssmin']
      },
      js: {
        files: '**/*.js',
        tasks: ['uglify']
      }
    }
  });

  // Load Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register Grunt tasks
  grunt.registerTask('default', ['watch']);
};
