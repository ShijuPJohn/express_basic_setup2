const {data, User} = require("../models/models");
exports.getAllUsers = (req, res) => {
    res.status(200).json({results: data.length, data})
}
exports.createUser = (req, res) => {
    req.body.id = data[data.length - 1].id + 1
    console.log(req.body)
    const userFromReq = new User(req.body.id, req.body.name, req.body.email, req.body.password, req.body.profilePic, req.body.about)
    data.push(userFromReq)
    res.status(201).json({message: "in progress", data})
}
exports.getUserById = (req, res) => {
    const user = data.find(el => el.id === Number.parseInt(req.params["id"], 10))
    res.json({message: "success", data: user})
};
exports.sampleMiddleware = (req, res, next) => {
    console.log("Hello from the sample middleware");
    next();
}