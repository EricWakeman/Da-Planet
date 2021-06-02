import mongoose, { Schema } from 'mongoose'

const MoonSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    planetId: { type: Schema.Types.ObjectId, ref: 'Planet', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default MoonSchema
