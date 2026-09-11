// Get all users
// Sends a simple response containing all users
exports.getUsers = (req, res) => {
    res.send("All User");
};


// Get user profile
// Returns the user's profile information as a JSON response
exports.getProfile = (req, res) => {
    res.json("This is user Profile");
};


// Register a new user
// Sends a success message after user registration
exports.userRegistration = (req, res) => {
    res.json("User Registration Successful");
};


// Login user
// Returns basic user information along with a login success message
exports.userLogin = (req, res) => {
    res.json({
        id: 1,
        username: "New User",
        message: "Login Successful"
    });
};
