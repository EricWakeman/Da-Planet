import mongoose from 'mongoose'

const GalaxySchema = new mongoose.Schema(
  {
    name: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default GalaxySchema
