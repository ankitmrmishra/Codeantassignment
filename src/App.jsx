import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import RepoScreen from "./Components/RepoScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the Signup page */}
          <Route path="/" element={<Signup />} />

          {/* Route for the RepoScreen page */}
          <Route path="/repos" element={<RepoScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
