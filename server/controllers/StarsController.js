import { starsService } from '../services/StarService'
import BaseController from '../utils/BaseController'
export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getOne)
      .post('', this.create)
  }

  async create(req, res, next) {
    try {
      const star = await starsService.create(req.body)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      const star = await starsService.getOne(req.params.id)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      const stars = await starsService.getAll()
      return res.send(stars)
    } catch (error) {
      next(error)
    }
  }
}
