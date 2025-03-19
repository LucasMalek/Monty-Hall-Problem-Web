const User = require('../models/UserModel');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createUser = async (req, res) => {
    try {
        
        const existingUser = await User.findOne({ name: req.body.username });

        if (existingUser) {
            return res.status(400).json({ message: 'Usuário já existe!' });
        }

        const user = new User({
            name: req.body.username,
            password: req.body.password,
            profilepicture: req.file ? req.file.filename : null,
        });

        const newUser = await user.save();
        res.status(201).json(newUser);

    } catch (err) {
        console.error('Erro ao salvar o usuário:', err);
        res.status(500).json({ message: err.message });
    }
};

const getUser = async (req, res) => {
    try {

        const usertofind = await User.findOne({
            name: req.body.username,
            password: req.body.password,
        });

        usertofind
            ? res.status(200).json(usertofind)
            : res.status(400).json({ message: 'Credenciais incorretas!' });
            
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getUsers, createUser, getUser };