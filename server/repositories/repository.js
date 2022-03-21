import dao from './dao';
const bcrypt = require('bcrypt');
const saltRounds = 10;

export default class {

    static async getUserByEmail(email) {
        return dao.get("SELECT * FROM users WHERE email =?", [email]);
    }

    static async getUserById(id) {
        return dao.get('SELECT * FROM users WHERE id = ?', [id]);
    }
}