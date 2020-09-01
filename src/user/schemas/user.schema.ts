import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const UserSchema = new mongoose.Schema({
    username: { type: String, required: true ,unique:true},
    password: { type: String, required: true },
    
  });

  