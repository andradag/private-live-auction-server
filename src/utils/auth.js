const {AuthenticationError} = require("apollo-server-errors");
const jsonwebtoken = require("jsonwebtoken");

const {sign, verify} = jsonwebtoken;

const secret = process.env.SECRET;
const expiration = "2h";

const signToken = ({email, username, id, firstName, lastName, isAdmin}) => {
	const payload = {email, username, id, firstName, lastName, isAdmin};
	return sign({data: payload}, secret, {expiresIn: expiration});
};

const authMiddleware = ({req}) => {
	let token = req.body.token || req.query.token || req.headers.authorization;

	if (req.headers.authorization) {
		token = token.split(" ").pop().trim();
	}

	if (!token) {
		return req;
	}

	try {
		const {data} = verify(token, secret, {maxAge: expiration});
		req.user = data;
	} catch {
		throw new AuthenticationError("Invalid token");
	}

	return req;
};

module.exports = {
	signToken,
	authMiddleware,
};
