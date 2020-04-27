const db = require("./dbConfig");

module.exports = {
  addUser,
  getUsers,
  getByUsername,
  getById,
  updateUsername,
  deleteUser,
  getPostById,
  getUserPosts,
  getAllPosts,
  deletePost,
};

// make this return the user object and not just the ID
function addUser(newUser) {
  return db("user")
    .insert(newUser)
    .then((id) => {
      return getById(id[0]);
    });
}

function getUsers() {
  return db("user").select("id", "username");
}

function getByUsername(username) {
  return db("user").where({ username }).select("id", "username").first();
}

function getById(id) {
  return db("user").where({ id }).select("id", "username").first();
}

function deleteUser(id) {
  return db("user").where({ id }).del();
}

function updateUsername(id, username) {
  return db("user").where({ id }).update(username);
}

function getPostById(id) {
  return db("post").where({ id }).first();
}

function getUserPosts(id) {
  return db("post").where({ user_id: id });
}

function getAllPosts() {
  return db("post");
}

function deletePost(id) {
  return db("post").where({ id }).del();
}
