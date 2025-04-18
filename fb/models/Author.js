import mongoose from "mongoose";

const AuthorSchema = mongoose.Schema(
  {
    authorName: {
      type: String,
      required: true,
      trim: true
    },
    aboutMe: {
      type: String,
      required: true,
      trim: true,
    },
    authorInfluence: {
      type: String,
      required: true,
      trim: true,
    },
    workInfluence: {
      type: String,
      required: true,
      trim: true,
    },
    authUser: {
      type: String,
      required: true,
    },
    publicProfile: {
      type: String,
      enum: ['Public', 'Private'],
      default: 'Public'
    }
  },
  { timestamps: true }
);

const Author = mongoose.models.Author || mongoose.model("Author", AuthorSchema);
export default Author;