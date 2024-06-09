import React, {useEffect} from 'react'
import profileIcon from '../assets/img/profile-icon.png'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineBarChart } from 'react-icons/ai'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { AiOutlineContacts } from 'react-icons/ai'
import { AiOutlineLogout } from 'react-icons/ai'
import { useAuth } from '../AuthContext'
import { useNavigate } from 'react-router-dom';
import { MdOutlineBook } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";

export default function UserProfile({customStyle, closeHandler}) {
  const { logout, UserProfile, isAdmin, updateProfile } = useAuth();
  const navigate = useNavigate();
  console.log(isAdmin);

  useEffect(() => {
    updateProfile();
  },[])

  const handleLogout = async (event) => {
    console.log('Logging out');
    event.preventDefault();
    await logout();
    navigate('/'); 
  };
  const handlerUserInformation = (event) => {
    event.preventDefault();
    navigate('/account-information');
  }
  const handleStatistic = (event) => {
    event.preventDefault();
    navigate('/statistic');
  }
  const handleContactUs = (event) => {
    event.preventDefault();
    navigate('/contact');
  }
  const handleMyWord = (event) => {
    event.preventDefault();
    navigate('/my-word-page');
  }
  const handleConfirm = (event) => {
    event.preventDefault();
    navigate('/contribute-word-confirm');
  }
  const handleUser = (event) => {
    event.preventDefault();
    navigate('/user-confirm');
  }
  return (
    <div style={customStyle} className='profile-menu-container'>
      <button style={{ backgroundColor: 'transparent' }} className='close-button' onClick={closeHandler}>
        <AiOutlineClose />
      </button>
      <div className='user-info' style={{marginBottom: 10}}>
        <img src={UserProfile?UserProfile.avatar?UserProfile.avatar:profileIcon:profileIcon} width={50} style={{ border: '2px solid black', borderRadius: 25, marginRight: 10 }} />
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <label style={{color: 'black'}}>{UserProfile?UserProfile.username:"Username"}</label>
          {/* <label style={{}}>{UserProfile.email}</label> */}
        </div>
      </div>
      <hr style={{marginTop: 0, marginBottom: 0}}/>
      <div className='icon-label-menu' onClick={handlerUserInformation}>
        <AiOutlineUser />

        <label style={{ marginBottom: 0, marginLeft: 'auto' }}>My information</label>
      </div>
      {isAdmin==1 && <div className='icon-label-menu' onClick={handleStatistic}>
        <AiOutlineBarChart />
        <label style={{ marginBottom: 0, marginLeft: 'auto' }}>Statistic</label>
      </div>}
      {isAdmin==1 && <div className='icon-label-menu' onClick={handleConfirm}>
        <GiConfirmed />
        <label style={{ marginBottom: 0, marginLeft: 'auto' }}>Confirm</label>
      </div>}
      {isAdmin==1 && <div className='icon-label-menu' onClick={handleUser}>
        <FiUsers />
        <label style={{ marginBottom: 0, marginLeft: 'auto' }}>User</label>
      </div>}
      <hr style={{marginTop: 0, marginBottom: 0}}/>
      <div className='icon-label-menu' onClick={handleMyWord}>
      <MdOutlineBook />
        <label style={{ marginBottom: 0, marginLeft: 'auto' }}>My Word</label>
      </div>
      <div className='icon-label-menu' onClick={handleContactUs}>
        <AiOutlineContacts />
        <label style={{ marginBottom: 0, marginLeft: 'auto' }}>Contact Us</label>
      </div>
      <hr style={{marginTop: 0, marginBottom: 0}}/>
      <div className='icon-label-menu' onClick={handleLogout}>
        <AiOutlineLogout />
        <label style={{ marginBottom: 0, marginLeft: 'auto' }}>Log out</label>
      </div>
    </div>
  )
}
