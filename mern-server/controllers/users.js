const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require("../models/users.js");


exports.signIn = async(req, res) => { 
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
        res.status(400).json({ message: "Invalid Username" });
    } else  {
        const isValidPassword = await bcrypt.compare(password, existingUser.password)
        console.log("isPasswordValid", isValidPassword);
        if (!isValidPassword) {
            res.status(400).json({ message: "Invalid Password" });
        } else {
            const token = jwt.sign({ email, name: existingUser.name, _id: existingUser._id }, 'test', {expiresIn: '1h'});
            res.status(200).jsonp({result: {email, name: existingUser.name, id: existingUser._id}, token})
        }
    }

}

exports.signUp = async(req, res) => {
    const userInfo = req.body;
    const existingUser = await User.findOne({ email: userInfo.email });
    if (existingUser) {
        return res.status(400).json({message: "User already exists"});
    } else if (userInfo.password !== userInfo.repeatPassword) {
        return res.status(400).json({message: "Confirm password should be same as the password"});
    } else {
        const hashedPassword = await bcrypt.hash(userInfo.password, 12)
        const newUserInfo = {
            name: `${userInfo.firstName} ${userInfo.lastName}`,
            email: userInfo.email,
            password: hashedPassword ,
        }
        const newUser = await User.create(newUserInfo); 
        console.log(newUser, newUser.data)
        const token = jwt.sign({ email: newUser.email, name: newUser.name, password: newUser.password, _id: newUser._id}, 'test', { expiresIn: "1h" })
        res.status(200).json({result: {id: newUser._id, name: newUser.name, email: newUser.email}, token})
    }
}
