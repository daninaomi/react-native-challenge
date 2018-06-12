import mongoose from 'mongoose'
import User from './models/user'

const users = [
    {
        name: "Dani",
        email: "dani@gmail.com",
        password: "123456"
    },
    {
        name: "Gabi",
        email: "gabi@gmail.com",
        password: "123456"
    },
    {
        name: "Ana",
        email: "ana@gmail.com",
        password: "123456"
    }
]

mongoose.connect('mongodb://localhost/users');

// Go through each one
users.map(data => {
  // Initialize a model with user data
  const user = new User(data);
  // and save it into the database
  user.save();
});