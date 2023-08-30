import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// import Counter from './Counter';
import Title from './Title';
import Book from './Book';
import Container from './Container';
import Footer from './Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Title/>
        <Book/>
      </div>
      <h1>i'm runing of out my mind</h1>
      <div className = "card">
        <button onClick={() => setCount((count) => count + 9999)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer/>
    </>
  )
}

export default App
