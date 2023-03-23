import { Routes, Route } from "react-router-dom";
import Market from "src/components/Market/Market";
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Market />} />
    </Routes>
  );
}

export default App;
