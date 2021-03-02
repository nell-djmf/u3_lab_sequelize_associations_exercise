'use strict'
const { User, sequelize } = require('../models')
const faker = require('faker')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const articles = await Promise.all(
      [...Array(20)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true })
        return {
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraph(),
          creatorId: user.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    await queryInterface.bulkInsert('articles', articles)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('articles')
  }
}
