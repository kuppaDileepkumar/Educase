import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
// You’ll create these next
import CreateAccount from './components/createaccount/createaccont';
import Login from './components/login/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
