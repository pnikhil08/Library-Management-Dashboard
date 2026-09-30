
exports.getUsers = (req, res) => {
    res.send("All User");
};
// Get user profile
exports.getProfile = (req, res) => {
    res.json("This is user Profile");
};
// Register a new user

exports.userRegistration = (req, res) => {
    res.json("User Registration Successful");
};
// Login user

exports.userLogin = (req, res) => {
    res.json({
        id: 1,
        username: "New User",
        message: "Login Successful"
    });
};
