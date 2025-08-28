const User = require("../models/user");

async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({});
    console.log(req.headers);
    // Always add X With custom headers
    res.setHeader('X-myName', 'Smitesh Bhore'); //Custom Headers
    console.log(req.myUserName);
    return res.json(allDbUsers);

}

async function getUserById(req, res) {
    const user = await User.findById(req.params.id);
    // const id = Number(req.params.id);
    // const user = users.find(user => user.id === id);
    if (!user) {
        return res.status(404).json({ status: "User not found", id });
    }
    return res.json(user);
}

async function deleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    //Delete user
    // const id = Number(req.params.id);
    // const oldDataIndex = users.findIndex(user => user.id === id);
    // if (oldDataIndex === -1) {
    //     return res.status(404).json({ status: "User not found", id });
    // }
    // users.splice(oldDataIndex, 1);
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    //     return res.json({ status: "Deleted", id: id });
    // });

    return res.status(201).json({ msg: "Success" });
}

async function handleUpdateUserById(req, res) {
    const body = req.body;

    await User.findByIdAndUpdate(req.params.id, body, { new: true });
    //Update user
    // const id = Number();
    // const body = req.body;
    // const oldDataIndex = users.findIndex(user => user.id === id);

    // if (oldDataIndex === -1) {
    //     return res.status(404).json({ status: "User not found", id });
    // }

    // const fields = ["email", "first_name", "last_name", "gender", "job_title"];

    // fields.forEach(field => {
    //     if (body[field]) {
    //         users[oldDataIndex][field] = body[field];
    //     }
    // });

    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    //     return res.json({ status: "Updated", id: id });
    // });

    // oldData.email = body.email ? body.email : oldData.email;
    // oldData.first_name = body.first_name ? body.first_name : oldData.first_name;
    // oldData.last_name = body.last_name ? body.last_name : oldData.last_name;
    // oldData.gender = body.gender ? body.gender : oldData.gender;
    // oldData.job_title = body.job_title ? body.job_title : oldData.job_title;
    return res.json({ msg: "Success" });
}

async function handleAddUser(req, res) {
    const body = req.body;
    if (Object.keys(body).length < 5)
        return res.status(400).json({ status: "error", message: "Insufficient fields" });;
    console.log("Body ", body);

    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title,
    });
    return res.status(201).json({ msg: "Success", id: result._id });

    // users.push({ ...body, id: users.length + 1 });
    // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    //     return res.status(201).json({ status: "success", id: users.length });
    // });
}

module.exports = {
    handleGetAllUsers,
    getUserById,
    deleteUserById,
    handleUpdateUserById,
    handleAddUser,
};