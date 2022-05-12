const prompt = require("prompt-sync")();
let users;

class User {	
	static async injectDB(conn) {
		users = await conn.db("Login").collection("username")
	}


	static async register() {
	{	
		// TODO: Check if username exists
		//TODO : Add new username to the database
		const name="James123"
		let result = await users.findOne({Username: name});
		if (result == null) {
            users.insertOne({Username: name});
			return "UserName is available";
		} else 
		{return "UserName is already exist!!!";
        } 			
	}
	};

	static async login() {
		//TODO : Login using username
		const login="James123"
		let result = await users.findOne({Username: login});
		if (result == null) {
			return "Invalid username";
		} else 
		{return "Login Successfully!!!";
        } 			
	}	
	}

module.exports = User;