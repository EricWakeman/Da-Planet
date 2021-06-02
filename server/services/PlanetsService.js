import { dbContext } from '../db/DbContext'

class PlanetsService {
  async getOne(id) {
    return await dbContext.Planets.findById(id)
  }

  async getAll() {
    return await dbContext.Planets.find({})
  }

  async create(planetData) {
    return await dbContext.Planets.create(planetData)
  }
}

export const planetsService = new PlanetsService()
