import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <nav className="navbar navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="#">
            <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" />
            </a>
        </div>
    </nav>
  )
}

export default Header