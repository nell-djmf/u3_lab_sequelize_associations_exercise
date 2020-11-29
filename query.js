const { User, Article } = require('./models')

function stringify(data) {
  console.log(JSON.stringify(data, null, 4))
}

const getAllUsers = async () => {
  try {
    const users = await User.findAll()
    stringify(users)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
const getAllBookmarks = async () => {
  try {
    const users = await User.findAll({
      include: [{ model: Article, as: 'bookmarks' }]
    })
    stringify(users)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

const articlesWithCreator = async () => {
  try {
    const articles = await Article.findAll({
      include: [{ model: User, as: 'creator' }]
    })
    stringify(articles)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports = {
  articlesWithCreator,
  getAllBookmarks,
  getAllUsers,
  stringify
}
