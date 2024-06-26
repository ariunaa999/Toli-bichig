import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  if (window.location.pathname === '/') {
    const authLinks = (
      <>
        <li className='nav-item'>
          <Link className='nav-link' to='/login' onClick={logout}>
            Гарах <i className='fas fa-sign-out-alt'></i>
          </Link>
        </li>
      </>
    );

    const guestLinks = (
      <>
        <li className='nav-item'>
          <Link className='nav-link' to='/login'>
            Нэвтрэх
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/register'>
            Бүртгүүлэх
          </Link>
        </li>
      </>
    );

    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            Толь бичиг
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ml-auto'>
              {!loading && isAuthenticated ? authLinks : guestLinks}
            </ul>
          </div>
        </div>
      </nav>
    );
  } else {
    return <></>;
  }
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
