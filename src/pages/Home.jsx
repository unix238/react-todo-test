import React from 'react'
import logo from '../logo.svg'

export const Home = () => {
  return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            ToDo веб приложение на React. <br />
            Перейдите по ссылке из навигационной панели на страницу приложения.
          </p>
          <a
            className="App-link"
            href="https://github.com/unix238/react-todo-test"
            target="_blank"
            rel="noopener noreferrer"
          >
              GitHub
          </a>
        </header>
      </div>
  )
}
