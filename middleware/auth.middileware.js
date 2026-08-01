
const userValidation = (re, res, next)=>{
     console.log("User validate perfect")

     console.log(`${re.method} and ${re.url}`)
     next()
}
module.exports = userValidation