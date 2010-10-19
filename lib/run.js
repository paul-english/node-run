var util = require('util'),
    exec = require('child_process').exec;

var run = module.exports.run = function() {
    var steps = Array.prototype.slice.call(arguments)
    , command = steps.pop()
    , n = 0
    , l = steps.length
    function cb (command) {
        util.print('=== ' + command + ' ===\n'); 
        child = exec(
            command, 
            function (error, stdout, stderr) {
                if (error !== null) {
                    util.print('exec error: ' + error + '\n');
                }
                if (stdout !== null) {
                    util.print('stdout: ' + stdout + '\n');
                }
                if (stderr !== null) {
                    util.print('stderr: ' + stderr + '\n');
                }
                if(++n !== l) {
                    cb(steps[n]);
                }     
            });
    }
    cb(steps[n]);
};