const mysql = require("mysql");
const mysqlConnection = mysql.createConnection({
  // db creada https://console.clever-cloud.com/
  host: "bsjgsidupyihlwrpmdlt-mysql.services.clever-cloud.com",
  user: "uu9lc4rsdpidfkdb",
  password: "Dn2b9gl2QNYaDPIfZvmI",
  database: "bsjgsidupyihlwrpmdlt",
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log("base de datos conectada");
  }
});
module.exports = mysqlConnection;
