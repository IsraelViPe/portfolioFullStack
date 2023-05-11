import { Home, About, Portfolio, Contact } from './Pages'
import { NavBar } from './components/index'

function App() {
  return (
    <div className="app">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
