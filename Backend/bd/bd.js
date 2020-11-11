const mysql =require('mysql');
const mysqlConnection= mysql.createConnection({
    // db creada https://console.clever-cloud.com/
host:'host clever cloud',
user:'usuario',
password:'piXeRzrY5CoTJ351xaU4',
database:'bprbeudfwg7eeipqbp9t',
multipleStatements:true
/*
host:'181.133.136.83',
user:'mediatecnica',
password:'123',
database:'lab_mediatecnica',
*/
});

mysqlConnection.connect(function(err){
if(err){
    console.error(err);
    return;
}else{

    console.log('base de datos conectada');
}

})
module.exports = mysqlConnection;