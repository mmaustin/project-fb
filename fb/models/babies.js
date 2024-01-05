import mongoose from 'mongoose';

const BabySchema = mongoose.Schema({
  parents: {
    type: String,
    required: true,
  },
  babyName: {
    type: String,
    required: true,
  },
  boyNamesArray: {
    type: [String],
    required: true,
  },
  girlNameArray: {
    type: [String],
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  hourBorn: {
    type: Number,
    required: true,
  },
  eyeColor: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
})
//parents, babyName, boyNamesArray, girlNamesArray, gender, weight, hourBorn, eyeColor, message

// import mongoose from 'mongoose';

// const UserSchema = mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true,
//         min: 2,
//         max: 50,
//     },
//     lastName: {
//         type: String,
//         required: true,
//         min: 2,
//         max: 50,
//     },
//     email: {
//         type: String,
//         required: true,
//         max: 50,
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: true,
//         min: 5,
//     },
//     picturePath: {
//         type: String,
//         default: '',
//     },
//     friends: {
//         type: Array,
//         default: [],
//     },
//     location: String,
//     occupation: String,
//     viewedProfile: Number,
//     impressions: Number,
// }, {timestamps: true}
// );

// const User = mongoose.model("User", UserSchema);
// export default User;