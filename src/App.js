import Menu from './components/Menu';

import Header from './components/Header';
import Home from './pages/Home';
import { useSelector } from 'react-redux';

import DesktopCarousel from './components/Carousel/DesktopCarousel';

function App() {
  const { visibleMenu, visibleCarousel } = useSelector(item => item.visible);
  
  return (
    <>
      <div className="wrapper">
        <Header />

        <div className="content">
          <Home />
        </div>
        {visibleMenu && <Menu />}
      </div>

      {visibleCarousel && <DesktopCarousel />}
    </>
  );
}

export default App;
