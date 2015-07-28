module.exports = function(grunt) {

    grunt.initConfig(
        {
            pkg: grunt.file.readJSON('package.json'),

            //compile the less files into a css file.
            less: {
                compile: {
                    options: {
                        yuicompress: true
                    },
                    files: {
                        'app/css/menu.css' : 'app/menu.less'
                    }
                }
            }

            /* minify compiled (less -> css) file. */
            ,cssmin: {
                target: {
                    files: {
                        'app/dist/style.min.css': ['app/css/menu.css']
                    }
                }
            }

            ,watch: {
                css: {
                    files: 'app/menu.less',
                    tasks: ['less', 'cssmin'],
                    options: {
                        livereload: true
                    }
                }
            }
        });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['watch']);
};