// 'use strict';
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var userSchema = new Schema({
//     name: String,
//     email: String,
//     password: String
// })

// module.exports = mongoose.model('Users', userSchema)

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);