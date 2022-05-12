const MongoClient = require("mongodb").MongoClient;
const User = require("./user")

describe("User Account", () => {
	let client;
	beforeAll(async () => {
		client = await MongoClient.connect(
			"mongodb+srv://m001-student:123abcdghhgg3455@sandbox.twx68.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
			{ useNewUrlParser: true },
		);
		User.injectDB(client);
	})

	afterAll(async () => {
		await client.close();
	})


	test("New user registration", async () => {
		const res = await User.register();
		expect(res).toMatch("UserName is available");
	})
	test("Duplicate username", async () => {
		const res = await User.register()
		expect(res).toMatch("UserName is already exist!!!");
	})

	test("User login invalid username", async () => {
		const res = await User.login()
		expect(res).toMatch("Invalid username")
	})

	test("User login successfully", async () => {
		const res = await User.login()
		expect(res).toMatch("Login Successfully!!!")
	})
});





