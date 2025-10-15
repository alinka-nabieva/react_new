import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import sea from './assets/sea.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
        <div class="left-block">
          <h1>Набиева Алина 426ВЕБ</h1>
          <p>React — библиотека JavaScript с открытым исходным кодом для разработки интерфейсов веб-приложений. Создан
            Facebook и поддерживается сообществом разработчиков.</p>
        </div>
        <div class="right-block">
          <img src={sea} alt="React Logo" />
        </div>
      </div>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Набиева Алина 426ВЕБ</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
