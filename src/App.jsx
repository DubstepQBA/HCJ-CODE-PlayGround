import NavBar from "./components/NavBar"
import Playground from "./pages/Playground"

function App() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* NavBar Section  */}
      <header >
        <NavBar />
      </header>

      {/* section Body */}
      <div className="flex-1 flex flex-col sm:flex-row">
        <main className="flex-1 bg-zinc-900">
          <Playground />
        </main>

      </div>
      {/* section footer */}
      <footer className="bg-zinc-950 text-gray-300">
        <p className="mx-3">Playground -  @Dubst3pQba Javier Alfaro </p>
      </footer>
    </div>
  )
}
export default App