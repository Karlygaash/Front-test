import './App.scss';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <SideBar/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
