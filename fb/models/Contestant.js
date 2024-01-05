import mongoose from "mongoose";

const ContestantSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

//const Contestant = mongoose.model("Contestant", ContestantSchema);
const Contestant = mongoose.models.Contestant || mongoose.model("Contestant", ContestantSchema);
export default Contestant;