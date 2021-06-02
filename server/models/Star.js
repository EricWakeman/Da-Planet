import mongoose, { Schema } from 'mongoose'

const StarSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    galaxyId: { type: Schema.Types.ObjectId, ref: 'Galaxy', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default StarSchema
