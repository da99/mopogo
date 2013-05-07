
var assert = require('assert')
;

var URI = require("uri-js");

var user_info = URI.parse(process.env.MARIADB_DATABASE_URL).userinfo.split(':');
var user = user_info.shift();
var pswd = user_info.shift();


var inspect = require('util').inspect;
var Client = require('mariasql');

var c = new Client();

after(function () {
  c.end();
});

it( 'connects', function (done) {
  c.connect({
    host: '127.0.0.1',
    user: 'root',
    password: pswd,
    db : 'my_tests'
  });

  c.on('connect', function() {
    console.log('Client connected');
  })
  .on('error', function(err) {
    console.log('Client error: ' + err);
  })
  .on('close', function(hadError) {
    console.log('Client closed');
  });

  c.query('CREATE DATABASE IF NOT EXISTS my_tests')
  .on('result', function(res) {
    res.on('row', function(row) {
      console.log('Result row: ' + inspect(row));
    })
    .on('error', function(err) {
      console.log('Result error: ' + inspect(err));
    })
    .on('end', function(info) {
      console.log('Result finished successfully');
    });
  })
  .on('end', function() {
    console.log('Done with all results');
    done();
  });
});

it( 'shows dbs', function (done) {
c.query('SHOW DATABASES')
 .on('result', function(res) {
   res.on('row', function(row) {
     console.log('Result row: ' + inspect(row));
   })
   .on('error', function(err) {
     console.log('Result error: ' + inspect(err));
   })
   .on('end', function(info) {
     console.log('Result finished successfully');
   });
 })
 .on('end', function() {
   console.log('Done with all results');
   done();
 });
});


it( 'creates table', function (done) {
  c.query('CREATE TABLE IF NOT EXISTS users ( id INT, name varchar(255) );',
          [ 1337, 'Frylock' ])
          .on('result', function(res) {
            res.on('row', function(row) {
              console.log('Result row: ' + inspect(row));
            })
            .on('error', function(err) {
              console.log('Result error: ' + inspect(err));
            })
            .on('end', function(info) {
              console.log('Result finished successfully');
            });
          })
          .on('end', function() {
            console.log('Done with all results');
            done()
          });

});

it( 'inserts', function (done) {

  c.query('INSERT INTO users (id, name) VALUES ( ?, ? )',
          [ 1337, 'Frylock' ])
          .on('result', function(res) {
            res.on('row', function(row) {
              console.log('Result row: ' + inspect(row));
            })
            .on('error', function(err) {
              console.log('Result error: ' + inspect(err));
            })
            .on('end', function(info) {
              console.log('Result finished successfully');
            });
          })
          .on('end', function() {
            console.log('Done with all results');
            done()
          });


});




it( 'inserts', function (done) {

  c.query('INSERT INTO users (id, name) VALUES ( ?, ? )',
          [ 1337, 'Frylock' ])
          .on('result', function(res) {
            res.on('row', function(row) {
              console.log('Result row: ' + inspect(row));
            })
            .on('error', function(err) {
              console.log('Result error: ' + inspect(err));
            })
            .on('end', function(info) {
              console.log('Result finished successfully');
            });
          })
          .on('end', function() {
            console.log('Done with all results');
            done()
          });


});

it( 'inserts', function (done) {

  c.query('INSERT INTO users (id, name) VALUES ( ?, ? )',
          [ 1337, 'Frylock' ])
          .on('result', function(res) {
            res.on('row', function(row) {
              console.log('Result row: ' + inspect(row));
            })
            .on('error', function(err) {
              console.log('Result error: ' + inspect(err));
            })
            .on('end', function(info) {
              console.log('Result finished successfully');
            });
          })
          .on('end', function() {
            console.log('Done with all results');
            done()
          });


});


it( 'inserts', function (done) {

  c.query('INSERT INTO users (id, name) VALUES ( ?, ? )',
          [ 1337, 'Frylock' ])
          .on('result', function(res) {
            res.on('row', function(row) {
              console.log('Result row: ' + inspect(row));
            })
            .on('error', function(err) {
              console.log('Result error: ' + inspect(err));
            })
            .on('end', function(info) {
              console.log('Result finished successfully');
            });
          })
          .on('end', function() {
            console.log('Done with all results');
            done()
          });


});

it( 'inserts', function (done) {

  c.query('INSERT INTO users (id, name) VALUES ( ?, ? )',
          [ 1337, 'Frylock' ])
          .on('result', function(res) {
            res.on('row', function(row) {
              console.log('Result row: ' + inspect(row));
            })
            .on('error', function(err) {
              console.log('Result error: ' + inspect(err));
            })
            .on('end', function(info) {
              console.log('Result finished successfully');
            });
          })
          .on('end', function() {
            console.log('Done with all results');
            done()
          });


});


it( 'inserts', function (done) {

  c.query('INSERT INTO users (id, name) VALUES ( ?, ? )',
          [ 1337, 'Frylock' ])
          .on('result', function(res) {
            res.on('row', function(row) {
              console.log('Result row: ' + inspect(row));
            })
            .on('error', function(err) {
              console.log('Result error: ' + inspect(err));
            })
            .on('end', function(info) {
              console.log('Result finished successfully');
            });
          })
          .on('end', function() {
            console.log('Done with all results');
            done()
          });


});









it.skip( 'selects', function (done) {

  c.query('SELECT * FROM users ',
          [ ])
          .on('result', function(res) {
            res.on('row', function(row) {
              console.log('Result row: ' + inspect(row));
            })
            .on('error', function(err) {
              console.log('Result error: ' + inspect(err));
            })
            .on('end', function(info) {
              console.log('Result finished successfully');
            });
          })
          .on('end', function() {
            console.log('Done with all results');
            done()
          });
});



