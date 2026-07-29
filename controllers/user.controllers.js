exports.getUsers = (re, res) => {
   res.send("All User")
}

exports.getProfile = (re, res) =>{
    res.json('this is user Profile')
}

exports.userRegistration = (re, res) =>{
    res.json("User Registration Sucessfull")
}

exports.userLogin = (re, res)=>{
  res.json({
    id : 1,
    username : "New User",
    Massage : "Login Succesfull"
  })
}