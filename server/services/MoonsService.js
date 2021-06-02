import { dbContext } from '../db/DbContext'

class MoonsService {
  async getOne(id) {
    return await dbContext.Moons.findById(id)
  }

  async getAll() {
    return await dbContext.Moons.find({})
  }

  async create(moonData) {
    return await dbContext.Moons.create(moonData)
  }
}

export const moonsService = new MoonsService()
