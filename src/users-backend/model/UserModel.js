// backend/controllers/usersController.js
const User = require('../schema/UserSchema');

const getUsers = async (req, res) => {
    try {
        const users = await User.find({},{username:1,email_address:1,description:1});
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.find({username: req.params.username});
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

const createUser = async (req, res) => {
    const { name, username, email_address, description, role, phone, address, registration_detials } = req.body;

    try {
        let user = new User({
            name,
            username,
            email_address,
            description,
            role,
            phone,
            address,
            registration_detials
        });

        user = await user.save();
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.find({username: req.params.username});
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        await user.remove();
        res.json({ msg: 'User removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

module.exports = {deleteUser,getUserById,getUsers,createUser}
