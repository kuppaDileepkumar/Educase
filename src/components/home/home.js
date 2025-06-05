// src/components/Welcome.js
import { useNavigate } from 'react-router-dom';
import "./index.css";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
  <div className="inner">
    <h1 className="title">Welcome to PopX</h1>
    <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

    <button
      onClick={() => navigate('/create-account')}
      className="btn-primary"
    >
      Create Account
    </button>

    <button
      onClick={() => navigate('/login')}
      className="btn-secondary"
    >
      Already Registered? Login
    </button>
  </div>
</div>

  );
};

export default Home;
