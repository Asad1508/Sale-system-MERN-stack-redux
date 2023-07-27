import './App.css';
import Addproduct from './component/pages/addproduct';
import Dashboard from './component/pages/dashboard';
import Pos from './component/pages/pos';
import Productlist from './component/pages/productlist';
import Sidebar from './component/sidebar/sidebar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Editproductlist from './component/pages/editproductlist';
import Managecategory from './component/pages/managecategory';
import Salereport from './component/pages/salereport';

function App() {
  return (
    <>
    <Sidebar/>
    <BrowserRouter>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/pos' element={<Pos/>}/>
      <Route path='/createproduct' element={<Addproduct/>}/>
      <Route path='/products' element={<Productlist/>}/>
      <Route path='/editproducts/:id' element={<Editproductlist/>}/>
      <Route path='/category' element={<Managecategory/>}/>
      <Route path='/salereport' element={<Salereport/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
