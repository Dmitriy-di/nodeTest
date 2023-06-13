const axios = require('axios')
const fs = require('fs')

const getData = async (path) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/${path}`,
  )
  return JSON.stringify(data)
}

let todos = null

//Запись полученных данных в файл и их чтение
// getData('todos')
//   .then((res) => {
//   todos = res

//   fs.writeFileSync('todos.txt', todos)

//   const content = fs.readFileSync('todos.txt', 'utf-8')

//   console.log(content)
// })

module.exports = { getData }
