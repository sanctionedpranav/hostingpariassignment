import './App.css';
import AppRouter from './routes/AppRouter';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <AppRouter />
  );
}

export default App;
