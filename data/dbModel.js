const db = require("./dbConfig");

module.exports = {
  addUser,
  getUsers,
  getByUsername,
  getById,
  updateBio,
  deleteUser,
  addPost,
  getPostById,
  getUserPosts,
  getAllPosts,
  deletePost,
  updatePost,
};

function addUser(newUser) {
  return db("user")
    .insert(newUser, "id")
    .then((id) => {
      return getById(id[0]);
    });
}

function getUsers() {
  return db("user").select("id", "username", "bio");
}

function getByUsername(username) {
  return db("user").where({ username });
}

function getById(id) {
  return db("user").where({ id });
}

function deleteUser(id) {
  return db("user").where({ id }).del();
}

function updateBio(id, bio) {
  return db("user")
    .where({ id })
    .update(bio)
    .then(() => {
      return getById(id);
    });
}

function addPost(newPost) {
  return db("post")
    .insert(newPost)
    .then((id) => {
      return getPostById(id[0]);
    });
}

function getPostById(id) {
  return db("post").where({ id });
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

function updatePost(id, newPost) {
  return db("post").where({ id }).update(newPost);
}
