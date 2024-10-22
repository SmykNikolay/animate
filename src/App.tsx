import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "@/app/hero/index";

function App() {
  return (
    <Router>
      <main className="flex-grow p-12">
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
