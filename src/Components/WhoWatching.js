import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import logo from './Images/logo.png';
import { useNavigate } from 'react-router-dom';

import defaultUser from './Images/Netflix-avatar.png';
import user1 from './Images/user1.png';
import user2 from './Images/user2.png';
import user3 from './Images/user3.png';
import user4 from './Images/user4.jpg';
import user5 from './Images/user5.png';
import user6 from './Images/user6.png';


//Manage profile component 
const WhoWatching = () => {
  const images = [user1, user2, user3, user4, user5, user6];

  // After set localStorage we get localstorage and pass parameter  usersList that set in the browser.
  //we get localstorage inside a fuction.  
  const getLocalItem = () => {
    let user_list = localStorage.getItem('usersList');
    // console.log(user_list);

    // if user_list has item then he return a value else return given array 
    if (user_list) {
      return JSON.parse(localStorage.getItem('usersList'));
    } else {
      return ([...users]);
    }
  };

  // calling getLocalItem funciton inside useState hook that stored in the users state 
  const [users, setUsers] = useState(getLocalItem());

  // set data to local storage in useEffect hook, and pass users dependencies array bcoz its reflect changes when users state value will be updated/changed.
  useEffect(() => {
    localStorage.setItem('usersList', JSON.stringify(users))
  }, [users]);

  // createProfile function is used to create new user via prompt 
  const createProfile = () => {
    let newUser = prompt('Please enter your name').trim();
    if (newUser === '') {
      alert('Enter valid Username');
    }
    if (users.length > 4) {
      alert('Maximum Profile limit is 5.');
    }
    if (newUser.trim() !== '' && !users.includes(newUser) && newUser != null && users.length <= 4) {
      return (
        setUsers([...users, newUser])
      )
    }
    else {
      alert('Username already exist!');
    }
  };

  //naviage user to given route
  const Navigate = useNavigate();
  const openNetflix = (index) => {
    // Navigate('/netflix-shows');
    Navigate(`/netflix-shows?user=${users[index].replaceAll(' ', '')}`, {
      state:
      {
        avatar: images[index]
      }
    });
    // we define state to passs on /netflix-shows route 
  };

  // this below function is used to delete user  
  const removeHandler = (index) => {
    setUsers(users.filter((item, ind) => {
      return (
        item[ind] !== item[index]
      )
    }
    ));
  };


  return (
    <Wrapper>
      <div className="whoIsWatching">
        <div className="logo-section">
          <img src={logo} alt="logo" />
        </div>

        <div className="main-div">
          <h1>Who's watching?</h1>
          <div className="memberDiv">
            {
              users.map((user, index) => {
                return (
                  <div className='user' key={index}>
                    <button className="btn" onClick={() => openNetflix(index)}  >
                      <img src={images[index]} alt="user" />
                      <span>{user}</span>
                    </button>
                    <span title='delete' className='delete-user-btn' onClick={() => removeHandler(index)}>&#10060;</span>
                  </div>
                )
              })
            }
            <button className="addIcon" onClick={createProfile}><i className="fas fa-plus-circle"></i>
              <span>Add Profile</span>
            </button>
          </div>
          <Link to='/netflix/account'> <button className="manageProfile">manage Profile </button></Link>
        </div>
      </div>
    </Wrapper>
  )
}

// css styling using styled component.
const Wrapper = styled.div`
  .whoIsWatching {
  width: 100vw;
  min-height: 100vh;
  background-color: #141414;
}

.logo-section {
  width: 95vw;
  margin: auto;
  height: 7rem;
  background-color: rgb(20, 20, 20);
  
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.logo-section  img {
  height: 4rem;
}

.main-div {
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
}

.main-div h1 {
  font-size: 6.5rem;
  letter-spacing: 0.2rem;
  font-size: 600;
}

.memberDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.user{
  position: relative;
}

.memberDiv .btn, .addIcon {
  height: 10vw;
  min-height: 8.4rem;
  max-height: 16rem;
  width: 10vw;
  min-width: 8.4px;
  max-width: 16rem;
  border-radius: 0.4rem;
  border: none;
  outline: none;
  margin-top: 4rem;
  margin-right: 3.5rem;
  position: relative;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: cover;
}

.memberDiv .btn span,
.addIcon span {
  width: inherit;
  position: absolute;
  bottom: -5rem;
  left: 0;
  text-transform: capitalize;
  color: rgb(153, 153, 153);
  font-size: 2rem;
}
.memberDiv .btn{
  height: 10vw;
  min-height: 8.4rem;
  max-height: 20rem;
  width: 10vw;
  min-width: 8.4px;
  max-width: 20rem;
  background-color: #141414;
  position: relative;
}
.delete-user-btn{
    position: absolute;
    right: 1.5rem;
    top: 2.6rem;
    color: black;
    padding: 0.4rem 0.5rem;
    border-radius: 50%;
    font-weight: 600;
    cursor: default;
    transition: all .3s;
}
.memberDiv .btn img{
  width: 100%;
  border-radius: 0.4rem;
  &:hover{
    padding: .5rem;
  }
}
.fa-plus-circle {
  font-size: 7vw;
  color: grey;
  opacity: 0.8;
}
.manageProfile {
  border: 1px solid grey;
  color: grey;
  text-transform: uppercase;
  padding: 0.8rem 2.6rem;
  letter-spacing: 0.5rem;
  font-size: 2.5rem;
  margin-top: 12rem;
  background-color: transparent;
  cursor: pointer;
}

.addIcon {
  background-color: transparent;
  &:hover{
    background-color: #fff;
  }
}

`;
export default WhoWatching