const mariadb = require('mariadb');

const pool = mariadb.createPool({
     host: 'mydb.com', 
     user:'application', 
     password: 'myPassword',
     connectionLimit: 5
});

module.exports = {
    ajouterpersonne: async function ajouterpersonne(personne) {
      let conn;
      try {
    	conn = await pool.getConnection();
    	const res = await conn.query("INSERT INTO personnes value (?, ?, ?, ?, ?, ?, ?, ?)", [personne.name, personne.firstname, personne.birthdate, personne.mail, personne.tel, personne.adresse, personne.cp, personne.ville]);
    	console.log(res); 
      } catch (err) {
    	throw err;
      } finally {
    	if (conn) return conn.end();
      }
    },

    getpersonnes: async function getpersonnes() {

    }
}