import Navigation from "./components/navigation";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import PageRenderer from "./page-renderer";

function App() {
  const user = {
    firstName: "Aakash",
    lastName: "Varma"
  }
  return (
    <Router>
      <div className="App">
        <Navigation user={user} />
        <Routes>
          <Route path="/:page" element={<PageRenderer />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="*" element={() => 404} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
