import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <div className='container-100'>
        <div className="row">
          <div className="col-2">
            App for frontsite
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
