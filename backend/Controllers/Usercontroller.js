
const User = require("../Model/Usermodel");

const getAllUsers = async (req, res) => {
    let users;
    // get all users
    try {
        users = await User.find();
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Error fetching users" });
    }

    //not found any user
    if (!users || users.length === 0) { 
        return res.status(404).json({ message: "No users found" });
    }

    // display all users 
    return res.status(200).json({ users });
};

// data insert
const addUsers = async (req, res, next) => {

    const { name, email, age, address } = req.body;

    let users;

    try {
        users = new User({
            name,
            email: email,
            age,
            address
        });

        await users.save(); // save user to MongoDB
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Error while adding user" });
    }

    //not insert users
    if (!users) {
        return res.status(404).send({ message: "Unable to add user" });
    }

    return res.status(200).json({ users });
};


//get by id
 
const getById = async (req, res,next) => {
    const id = req.params.id;

    let user;

    try {
        user = await User.findById(id);
    }
    catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Error fetching user" });
}

if (!user) {
    return res.status(404).send({ message: "User not found" });
}

return res.status(200).json({ user });

  
};

//update user details
const updateUser = async (req, res, next) => {

    const id = req.params.id;
    const { name, email, age, address } = req.body;

    let users ;
    try {
       users = await User.findByIdAndUpdate(id, {
    name,
    email,
    age,
    address
}, { new: true });

    }
    catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Error while updating user" });
    }

     //not aailable users
    if (!users) {
        return res.status(404).send({ message: "Unable yo update" });
    }

    return res.status(200).json({ users });

}

// delete user
const deleteUser = async (req, res, next) => {
    const id = req.params.id;

    let user;


    try {
        user = await User.findByIdAndDelete(id);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Error while deleting user" });
    }

    if (!user) {
        return res.status(404).send({ message: "Unable to delete user" });
    }

    return res.status(200).json({ user });
}



exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;

