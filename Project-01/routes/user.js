const express = require("express");

const router = express.Router();

const { handleGetAllUsers, getUserById, deleteUserById, handleUpdateUserById, handleAddUser } = require("../controllers/user");

//Routes
//for Browsers --> 
// router.get('/users', async (req, res) => {
//     const allDbUsers = await User.find({});
//     const html = `
//    <ul>
//         ${allDbUsers.map(user => `<li>${user.first_name} - ${user.email}</li>`).join("")}
//    </ul>`;
//     return res.send(html);
// });

//for Developers -->

router.route('/')
    .get(handleGetAllUsers)
    .post(handleAddUser);

//single route -> Multiple request types
router.route('/:id')
    .get(getUserById)
    .put((req, res) => {
        //Put file
        return res.json({ status: "pending" });
    })
    .delete(deleteUserById)
    .patch(handleUpdateUserById);


// Single single routes
// app.get('/api/users/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find(user => user.id === id);
//     return res.json(user);
// });

//createNewUser


// //updateUser
// app.patch('/api/users/:id', (req, res) => {
//     return res.json({ status: "pending" });
// });

// //deleteUser
// app.delete('/api/users/:id', (req, res) => {
//     return res.json({ status: "pending" });
// });

module.exports = router;