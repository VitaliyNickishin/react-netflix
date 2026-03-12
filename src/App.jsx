import { MovieCard } from "./components/MovieCard";

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-5">
      <header className="mb-10 flex items-center">
        <img src="/logo.svg" alt="Netflix" className="h-8 w-auto" />
      </header>
      <main className="flex gap-6">
        <MovieCard image="/1.webp" rating={8.8} />
      </main>
    </div>
  );
}

export default App;
