const {User} = require("../models");
const {signToken} = require("../utils/auth");

const updateProfile = async (_, {input}) => {
	try {
		const updatedUser = await User.findByIdAndUpdate(
			input.id,
			{
				firstName: input.firstName,
				lastName: input.lastName,
				username: input.username,
				email: input.email,
			},
			{new: true}
		);

		return {
			token: signToken(updatedUser),
			user: updatedUser,
		};
	} catch (error) {
		console.log(`[ERROR]: Failed to create User || ${error.message}`);
	}
};

module.exports = updateProfile;
