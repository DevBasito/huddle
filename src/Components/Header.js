import React from 'react';
import './Header.css';
import Logo from '../images/logo.svg';
class Header extends React.Component {
  
    render() {
        return (
            <>
                <div className='mb-5'>
                    <img src= {Logo} alt="Huddle Logo" />
                    
                </div>
            </>
        )
    }
}

export default Header;