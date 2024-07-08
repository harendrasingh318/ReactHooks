import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [todos, settodos] = useState([]);
  useEffect(() => {

    const res = axios.get("https://sum-server.100xdevs.com/todos").then(function (response) {

      settodos(response.data.todos);

    })


  }, [])

  return (
    <>
      {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}
    </>
  )
}

function Todo({ title, description }) {
  return <div>
    {title}
    {description}

  </div>

}

export default App
