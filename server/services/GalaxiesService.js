import { dbContext } from '../db/DbContext'

class GalaxiesService {
  async getOne(id) {
    return await dbContext.Galaxies.findById(id)
  }

  async getAll() {
    return await dbContext.Galaxies.find({})
  }

  async create(galaxyData) {
    return await dbContext.Galaxies.create(galaxyData)
  }
}

export const galaxiesService = new GalaxiesService()
