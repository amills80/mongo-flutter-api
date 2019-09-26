
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter the task']
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  thumbnail: {
    type: String,
    default: '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'
  }
  // status: {
  //   type: [{
  //     type: String,
  //     enum: ['pending', 'ongoing', 'completed']
  //   }],
  //   default: ['pending']
  // }
});

module.exports = mongoose.model('Tasks', TaskSchema);