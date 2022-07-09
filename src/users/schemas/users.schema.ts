import * as mongoose from 'mongoose';

/**
 * Schema of user's data to be saved in database
 * @example { 'name': 'Geuvanio', 'email': 'geuvanio@email.com', 'password': '*****', ... }
 */
export const UsersSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  type: String,
  health_info: {
    birthdate: Date,
    height: Number,
    weight: Number,
    last_updated: Date,
  },
});
