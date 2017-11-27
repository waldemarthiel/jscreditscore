
/*
 * GET home page.
 */
var os = require('os');
var hostname = os.hostname();

exports.index = function(req, res){
  res.render('index', {
        title: 'Express',
        hostname: hostname
    });
};
