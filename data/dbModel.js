const db = require("./dbConfig");

module.exports = {
  addUser,
  getUsers,
  getByUsername,
  getById,
  updateUser,
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
  return db("user").where({ username }).select("id", "username");
}

function getById(id) {
  return db("user").where({ id }).select("id", "username");
}

function deleteUser(id) {
  return db("user").where({ id }).del();
}

function updateUser(id, newInfo) {
  return null;
}

function getPostById(id) {
  return db("post").where({ id });
}

function getUserPosts(id) {
  return null;
}

function getAllPosts() {
  return db("post");
}

function deletePost(id) {
  return db("post").where({ id }).del();
}
