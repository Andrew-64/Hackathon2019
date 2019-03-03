var pg = require('pg');
var conString = "postgres://postgres:Pedromary12@localhost:5432/postgres";

var client = new pg.Client(conString);


//var formid = 0;
var ftime = '2018-03-03';
var gbot_rec = 2;
var gbot_trash = 3;
var can_rec = 4;
var can_trash = 5;
var pbot_rec = 6;
var pbot_trash = 7;
var styro = 8;
var straw = 9;
var card_rec = 10;
var card_trash = 11;
var pap_rec = 12;
var pap_trash = 13;
//var userid = 1;
var user_email = "james@gmail.com";
var username  = "James";
var pass = "yes";



client.connect();

client.query('INSERT INTO sustain.forms (ftime, user_name, fgbot_rec, fgbot_trash, fcan_rec, fcan_trash, fpbot_rec, fpbot_trash, '+
'fstyro, fstraw, fcard_rec, fcard_trash, fpap_rec, fpap_trash) values'+
'('+ftime+','+username+','+gbot_rec+','+gbot_trash+','+can_rec+','+can_trash+','+pbot_rec+','+pbot_trash+','+styro
+','+straw+','+card_rec+','+card_trash+','+pap_rec+','+pap_trash+');', (err, res) => {
  console.log(err, res)

});

client.query('INSERT INTO sustain.users (user_email, user_name, pass_word, gbot_rec, gbot_trash, can_rec, can_trash, pbot_rec, pbot_trash, '+
'styro, straw, card_rec, card_trash, pap_rec, pap_trash) values'+
'('+user_email +',' + username +',' + pass +','+','+gbot_rec+','+gbot_trash+','+can_rec+','+can_trash+','+pbot_rec+','+pbot_trash+','+styro
+','+straw+','+card_rec+','+card_trash+','+pap_rec+','+pap_trash+');', (err, res) => {
  console.log(err, res)

});



const query = {
    text: 'SELECT * FROM sustain.users WHERE user_name = ' + username +';';
    
    rowMode: 'array',
  };
client.query(query,  (err, res) => {
    //console.log(err ? err.stack : res.fields.map(f=>field.name)) // Hello World!
    //console.log(res.fields[0]);
    //console.log(res.rows);


    //pulling out totals to update
    var totgbotrec = res.rows[0][3];
    var totgbotrash = res.rows[0][4];
    var totcanrec = res.rows[0][5];
    var totcantrash = res.rows[0][6];
    var totpbotrec = res.rows[0][7];
    var totpbottrash = res.rows[0][8];
    var totstyro = res.rows[0][9];
    var totstraw = res.rows[0][10];
    var totcardrec = res.rows[0][11];
    var totcardtrash = res.rows[0][12];
    var totpaprec = res.rows[0][13];
    var totpaptrash = res.rows[0][14];
    
    //updating totals

    totgbotrec = totgbotrec + gbot_rec;
    totgbotrash = totgbotrash + gbot_trash;
    totcanrec = totcanrec + can_rec;
    totcantrash = totcantrash + can_trash;
    totpbotrec = totpbotrec + pbot_rec;
    totpbottrash = totpbottrash + pbot_trash;
    totstyro = totstyro + styro;
    totstraw = totstraw + straw;
    totcardrec = totcardrec + card_rec;
    totcardtrash = totcardtrash + card_trash;
    totpaprec = totpaprec + pap_rec;
    totpaptrash = totpaptrash + pap_trash;
    
    client.query('UPDATE sustain.user SET gbot_rec = ' +totgbotrec +' where user_name = ' + username +';', (err, res) => {
        console.log(err, res)
    });
    client.query('UPDATE sustain.user SET gbot_trash = ' +totgbotrash +' where user_name = ' + username +';', (err, res) => {
        console.log(err, res)
    });
    client.query('UPDATE sustain.user SET can_rec = ' +totcanrec +' where user_name = ' + username +';', (err, res) => {
        console.log(err, res)
    });
    client.query('UPDATE sustain.user SET can_trash = ' +totcantrash +' where user_name = ' + username +';', (err, res) => {
        console.log(err, res)
    });
    client.query('UPDATE sustain.user SET styro = ' +totstyro +' where user_name = ' + username +';', (err, res) => {
        console.log(err, res)
    });
    client.query('UPDATE sustain.user SET straw = ' +totstaw +' where user_name = ' + username +';', (err, res) => {
        console.log(err, res)
    });
    client.query('UPDATE sustain.user SET card_rec = ' +totcardrec +' where user_name = ' + username +';', (err, res) => {
        console.log(err, res)
    });
    client.query('UPDATE sustain.user SET card_trash = ' +totcardtrash +' where user_name = ' + username +';', (err, res) => {
        console.log(err, res)
    });
    client.query('UPDATE sustain.user SET pap_rec = ' +totpaprec +' where user_name = ' + username +';', (err, res) => {
        console.log(err, res)
    });
    client.query('UPDATE sustain.user SET pap_trash = ' +totpaptrash +' where user_name = ' + username +';', (err, res) => {
        console.log(err, res)
    });





    
    client.end()
  });


