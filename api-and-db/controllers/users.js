import User from '../models/user';
import moment from 'moment';


export const index = (req, res, next) => {
  // Find all Users and return json response
  User.find().lean().exec((err, users) => res.json(

    { users: users.map(movie => ({
      ...movie
    //   ,
    //   days,     // and append days
    //   times,    // and times to each
    }))}
  ));
};