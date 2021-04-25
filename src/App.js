import logo from './logo.svg';
import './App.css';
import NavbarComponent from "./components/Navbar/component";
import PageRouter from "./PageRouter";

function App() {
  return (
    <div style={{
        color: 'white'
    }}>
      <NavbarComponent/>
      <PageRouter/>
    </div>
  );
}

export default App;
