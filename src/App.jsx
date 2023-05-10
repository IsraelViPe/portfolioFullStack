import { Home, About, Portfolio, Contact } from './Pages'
import { NavBar } from './components/index'

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
