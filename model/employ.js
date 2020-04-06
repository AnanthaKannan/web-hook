const mongoose = require("mongoose");

const employeSchema = new mongoose.Schema({
    employeName: {
    type: String,
    required: true,
    minlength: 0,
    maxlength: 50,
    default: ""
  },
  age:{
    type:Number,
    required:true,
    min: 18,
    max: 60
  },
  email:{
    required:true,
    type: String,
  }
});

const Employe = mongoose.model("Employe", employeSchema);
exports.Employe = Employe;