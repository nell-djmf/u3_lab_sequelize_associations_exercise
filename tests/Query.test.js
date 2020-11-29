const { sequelize } = require('../models')
const queries = require('../query')
describe('Should Console Log Models and Associations', () => {
  it('should show all users', async () => {
    const res = await queries.getAllUsers()
    expect(res).toEqual(true)
    return res
  })
  it('should show all bookmarks', async () => {
    const res = await queries.getAllBookmarks()
    expect(res).toEqual(true)
    return res
  })
  it('should show all articles with their creators', async () => {
    const res = await queries.articlesWithCreator()
    expect(res).toEqual(true)
    return res
  })
})

afterAll(() => {
  sequelize.close()
})
