import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate, Outlet } from 'react-router-dom'
import accountAvatar from "./Images/Netflix-avatar.png";
import netflixLogo from "./Images/logo.png";
import styled from 'styled-components';
const Navbar = (props) => {
    const [navbarBg, setNavbarBg] = useState(false);
    const [searchIsVisibile, setSearchIsVisible] = useState(false);
    // navbar black on 100px scroll 
    let navBlack = () => {
        if (window.scrollY > 100) {
            setNavbarBg(true)
        } else {
            setNavbarBg(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", navBlack);

        return () => {
            window.removeEventListener("scroll", navBlack);
        }
    }, [])

    // show search box on click code 
    const isSearchBox = () => {
        setSearchIsVisible(() => !searchIsVisibile);
    }
    let searchVisiblity = searchIsVisibile ? 'searchIsVisible' : 'searchNotVisible';
    // navbar active link code 
    const ActiveLink = ({ isActive }) => {
        return {
            color: isActive ? '#f40612' : 'white',
            fontWeight: isActive ? '700' : '500'
        }
    }
    const Navigate = useNavigate();
    const goToHome = () => {
        // Navigate('/netflix-shows');
        Navigate('/netflix-shows', { state: { avatar: props.avatar } });
    }
    //**************************************** */
    return (
        <>
            <Wrapper>
                <div className={`main-navbar ${navbarBg && 'nav-black'}`}>
                    <div className="netflix-logo">
                        <img src={netflixLogo} alt="Logo" onClick={goToHome} />
                    </div>
                    <ul>
                        <li><NavLink to='tv-shows' style={ActiveLink}> TV Shows</NavLink></li>
                        <li><NavLink to="/movies" style={ActiveLink}>Movies</NavLink> </li>
                        <li><NavLink to="/my-list" style={ActiveLink}>My List</NavLink> </li>
                    </ul>
                    <div className="search-box" >
                        <input type="text" placeholder='Search' />
                    </div>
                    <div className="search-icon">
                        <input className={`search-box ${searchVisiblity}`} type="search" placeholder='Search' />
                        <dfn title='Search'><i className="fas fa-search" onClick={isSearchBox}></i></dfn>
                    </div>
                    <div className="players">
                        <small>Kids</small>
                    </div>
                    <div className="notification" notificationcount={7}>
                        <i className="fas fa-bell"></i>
                    </div>
                    <div className="user-account">
                        <dfn title='Profile'><Link to='/netflix/manage-profile'> <img src={props.avatar || accountAvatar} alt="avatar" /></Link></dfn>
                    </div>
                </div>

            </Wrapper>
            <Outlet />
        </>
    )
}
const Wrapper = styled.div`
    .notification::after {
    content: attr(notificationcount);
    position: absolute;
    right: -.9rem;
    top: -1px;
    background-color: crimson;
    border-radius: 50%;
    padding: .3rem;
    width: .9rem;
    height: .9rem;
    font-size: 1rem;
    text-align: center;
}
`;
export default Navbar