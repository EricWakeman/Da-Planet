import { dbContext } from '../db/DbContext'

class StarsService {
  async getOne(id) {
    return await dbContext.Stars.findById(id)
  }

  async getAll() {
    return await dbContext.Stars.find({})
  }

  async create(starData) {
    return await dbContext.Stars.create(starData)
  }
}

export const starsService = new StarsService()
