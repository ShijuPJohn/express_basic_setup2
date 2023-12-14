const {data, User} = require("../models/models");
exports.getAllUsers = (req, res) => {
    res.status(200).json({results: data.length, data})
}
exports.createUser = async (req, res) => {
    try {
        const userFromReq = await User.create(req.body);
        const user = await userFromReq.save();
        res.status(201).json({status: "created", user})
    } catch (e) {
        console.log(e)
        res.status(400).json({status: "error"})
    }
}
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({status: "success", length: users.length, users})
    } catch (e) {
        console.log(e)
        res.status(400).json({status: "error"})
    }
};
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        // User.findOne({_id:req.params.id});
        res.status(200).json({status: "success", user})
    } catch (e) {
        console.log(e)
        res.status(400).json({status: "error"})
    }
};
exports.updateUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        console.log(user)
        res.status(201).json({status: "success", user})
    } catch (e) {
        console.log(e)
        res.status(400).json({status: "error"})
    }
}
exports.deleteUserById = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id,);
        res.status(200).json({status: "success"})
    } catch (e) {
        console.log(e)
        res.status(400).json({status: "error"})
    }
}