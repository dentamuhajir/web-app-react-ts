import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import { Outlet } from 'react-router';

function App() {
  return (
    <>
    <Header/>
      <div className='container-100'>
        <div className="row">
          <div className="col-2">
            <Sidebar/>
          </div>
          <div className="col-10">
            <Outlet/>
          </div>
        </div>
      </div>
    </>
    
  );
}

export default App;
