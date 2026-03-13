// import { MovieCard } from "./components/MovieCard";
import MoviesList from "./components/MoviesList";
// import { movies } from "./movies.data";

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-5">
      <header className="mb-10 flex items-center">
        <img src="/logo.svg" alt="Netflix" className="h-8 w-auto" />
      </header>
      <main>
        <MoviesList />
        {/* <MovieCard image="/1.webp" rating={8.8} /> */}
      </main>
    </div>
  );
}

export default App;
