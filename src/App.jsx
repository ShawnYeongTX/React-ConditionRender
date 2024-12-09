import { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import ErrorPage from './pages/ErrorPage'
import Home from './pages/home'
import Todo from "./pages/AddTodo"
import useLocalStorage from 'use-local-storage'
import { TodoContext } from './contexts/TodoContext'
// <---IMPORT FILES--->


function Layout () {
  return (
    <>
    <Navbar bg='light' variant='light'>
      <Container>
        <Navbar.Brand href='/'>Todos</Navbar.Brand>
        <Nav>
          <Nav.Link href="/add">Add Todo</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <Outlet/>
    </>
  )
}



function App() {
  const [todos, setTodos] = useLocalStorage("todos", [])
  return (
    <TodoContext.Provider value={{todos, setTodos}}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element = {<Home />} />
      <Route path="add" element = {<Todo />} />
      <Route path = "*" element={<ErrorPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </TodoContext.Provider>
  )
}

export default App
