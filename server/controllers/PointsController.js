const User = require('../models/UserModel');
const mongoose = require('mongoose')

const postPoint = async (req , res) => {

    const {win, lose, id} = req.body

    try{
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID inválido!' });
        }

        const update = {}

        if(win) {
             update.wins = 1;
        }

        if(lose) {
            update.losses = 1;
        }

        const updateUser = await User.findByIdAndUpdate(
            id,
            { $inc: update},
            { new: true },
        );

        return res.status(200).json(updateUser);

    } catch(err) {

        return res.status(500).json({message: err.message})

    }
}

module.exports = {postPoint}