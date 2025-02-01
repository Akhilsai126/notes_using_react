import {Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Archive } from './pages/Home/Archive';
import { Important } from './pages/Important';
import { Delete } from './pages/Delete';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/archives' element={<Archive />} />
      <Route path='/important' element={<Important />} />
      <Route path='/bin' element={<Delete />} />
    </Routes>
  );
}

export default App;
