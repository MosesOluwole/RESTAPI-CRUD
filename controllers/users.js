import { v4 as uuidv4 } from "uuid";
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
let users = [];
export const getUsers = (req, res) => {
  res.send(users);
  //res.send("I am a user");
};
export const getUsersById = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id == id);
  res.send(foundUser);
};

export const createUser = (req, res) => {
  //console.log("Post Route Reached");
  const user = req.body;
  //console.log(req.body);

  users.push({ ...user, id: uuidv4() });
  res.send(`User with the name ${user.firstname} has been added`);
  //res.send("I am a user");
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with id: ${id} has been deleted `);
};

export const patchUser = (req, res) => {
  const { id } = req.params;

  const { firstname, lastname, age } = req.body;
  const user = users.find((user) => user.id == id);
  if (firstname) {
    user.firstname = firstname;
  }
  if (lastname) {
    user.lastname = lastname;
  }
  if (age) {
    user.age = age;
  }
  res.send(`User with the id:${id} has been patched`);
};
