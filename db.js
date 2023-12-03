/** Database for lunchly */

//auth removed
const pg = require("pg");

const db = new pg.Client("postgresql:///lunchly");

db.connect();

module.exports = db;

