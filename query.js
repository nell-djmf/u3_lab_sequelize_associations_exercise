const { User, Article } = require('./models')

function stringify(data) {
  console.log(JSON.stringify(data, null, 4))
}

const getAllUsers = async () => {
  try {
    const getUsers = await User.findAll()
    return getUsers
  } catch (error) {
    console.log(error)
    return false
  }
}

const articlesWithCreator = async () => {
  try {
    const getArticles = await Article.findAll({
      include: {
        model: User,
        as: 'creator'
      }
    })
    return getArticles
  } catch (error) {
    console.log(error)
    return false
  }
}

//Bonus
const getAllBookmarks = async () => {
  try {
      const getBookmarks = await User.findAll({
      include: {
        model: Article,
        as: 'bookmarks'
      }
    })
    return getBookmarks
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
