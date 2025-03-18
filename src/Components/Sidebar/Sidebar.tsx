
import { NavLink } from 'react-router-dom'

type Props = {}

const Sidebar = (props: Props) => {
  return (  
    <div className="flex-shrink-0 p-3 bg-white" >
    <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
      <svg className="bi me-2" width="30" height="24"></svg>
      <span className="fs-5 fw-semibold">Sidebar</span>
    </a>
    <ul className="list-unstyled ps-0">
      {/* <li className="mb-1">
        <NavLink to='/cms' >
            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
            Home
            </button>
        </NavLink>
      </li> */}
      <li className="mb-1">
        <NavLink to='/cms/dashboard' >
            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
            Dashboard
            </button>
        </NavLink>
      </li>
      <li className="mb-1">
        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#product-collapse" aria-expanded="false">
          Product
        </button>
        <div className="collapse" id="product-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <NavLink to='/cms/product/add'> Add </NavLink>
            </li>
            <li>
              <NavLink to='/cms/product/list'> List </NavLink>
            </li>
          </ul>
        </div>
      </li>
      {/* <li className="mb-1">
        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#article-collapse" aria-expanded="false">
          Article
        </button>
        <div className="collapse" id="article-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <NavLink to='/cms/article/add'> Add </NavLink>
            </li>
            <li>
              <NavLink to='/cms/article/list'> List </NavLink>
            </li>
          </ul>
        </div>
      </li> */}
      <li className="border-top my-3"></li>
      <li className="mb-1">
        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
          Account
        </button>
        <div className="collapse" id="account-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-dark rounded">New...</a></li>
            <li><a href="#" className="link-dark rounded">Profile</a></li>
            <li><a href="#" className="link-dark rounded">Settings</a></li>
            <li><a href="#" className="link-dark rounded">Sign out</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>

  )
}

export default Sidebar