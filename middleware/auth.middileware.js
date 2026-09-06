
const userValidation = (req, res, next) => {
    console.log("User validate perfect");
    console.log(`${req.method} and ${req.url}`);

    next();
};

module.exports = userValidation;

