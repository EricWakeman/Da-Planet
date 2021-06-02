import ValueSchema from '../models/Value'
import mongoose from 'mongoose'
import GalaxySchema from '../models/Galaxy'
import StarSchema from '../models/Star'
import PlanetSchema from '../models/Planet'
import MoonSchema from '../models/Moon'

class DbContext {
  Values = mongoose.model('Value', ValueSchema)

  Galaxies = mongoose.model('Galaxy', GalaxySchema)

  Moons = mongoose.model('Moon', MoonSchema)

  Planets = mongoose.model('Planet', PlanetSchema)

  Stars = mongoose.model('Star', StarSchema)
}

export const dbContext = new DbContext()
