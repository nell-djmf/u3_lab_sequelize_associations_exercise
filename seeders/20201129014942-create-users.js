'use strict'
const faker = require('faker')
const users = [...Array(10)].map(() => ({
  username: faker.internet.userName(),
  email: faker.internet.email(),
  createdAt: new Date(),
  updatedAt: new Date()
}))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', users)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users')
  }
}
