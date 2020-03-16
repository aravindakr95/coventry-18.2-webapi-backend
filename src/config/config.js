import dotenv from 'dotenv';
dotenv.config();

let config = {
	databaseUrl: process.env.MONGODB_URL_LOCAL || null,
	databaseName: process.env.DATABASE_NAME,
	apiPort: process.env.WEB_PORT || 9090,
	jwtSecret: process.env.JWT_SECRET_KEY,
	saltRounds: process.env.BCRYPT_ROUNDS,
	sendGridApiKey: process.env.SENDGRID_API_KEY
};

export default config;
