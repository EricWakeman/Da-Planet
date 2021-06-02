import { planetsService } from '../services/PlanetsService'
import BaseController from '../utils/BaseController'

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getOne)
      .post('', this.create)
  }

  async create(req, res, next) {
    try {
      const planet = await planetsService.create(req.body)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      const planet = await planetsService.getOne(req.params.id)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      const planets = await planetsService.getAll()
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }
}
