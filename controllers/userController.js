let Users = require("../models/Users");

// @GET/:id
// GET User By ID
exports.getUserById = async (req, res) => {
  let user = new Users(req.params.id);
  const result = await user.getUserById();
  res.json(result);
};

// @GET
// GET All Users
exports.getAllUsers = async (req, res) => {
  let user = new Users();
  const result = await user.getAllUsers();
  res.json(result);
};

// @POST
// Add a User
exports.addUser = async (req, res) => {
  let user = new Users(req.body);
  const result = await user.addUser();
  res.json(result);
};

// @PUT/:id
// Update a User
exports.updateUser = async (req, res) => {
  let user = new Users(req.params.id);
  const result = await user.updateUser();
  res.json(result);
};

// @DELETE/:id
// Delete a User
exports.deleteUser = async (req, res) => {
  let user = new Users(req.params.id);
  const result = await user.deleteUser();
  res.json(result);
};
