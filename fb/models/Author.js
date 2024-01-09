import mongoose from "mongoose";

const AuthorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    style: {
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
    public: Boolean,
    default: false,
  },
  { timestamps: true }
);

const Author = mongoose.models.Author || mongoose.model("Author", AuthorSchema);
export default Author;