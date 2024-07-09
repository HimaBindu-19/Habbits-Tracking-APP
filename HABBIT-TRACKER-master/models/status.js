const mongoose = require('mongoose');

//writing schemas for out habbit statuses document in the database, this makes handling weekly view easy

const statusSchema = new mongoose.Schema({
  date: {
    type: String,
  },

datestatus:{
    type:String
},
  habit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Habits',
    }
}, {
  timestamps: true
}
)



const Status = mongoose.model('Status', statusSchema);

module.exports = Status;