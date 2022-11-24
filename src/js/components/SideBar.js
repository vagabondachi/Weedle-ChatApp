// import React,{useState} from 'react';
// import ChatSearch from './ChatSearch';
// import { useHistory } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// export default function SideBar({chats}){
//   const dispatch = useDispatch();
//   const user = useSelector(({auth}) => auth.user)
//   const history = useHistory();
//   const[toggleState,setToggleState]= useState(1);
//   const toggleTab =(index) =>{
//     setToggleState(index)

//   }
  
//   return (
//   <div className="list-container">
//     <div className='profile-container'>

//     {user &&
//     <>
//      <div className="profile-avatar-container">
//       <img className ="avatar-profile" src={user.avatar}></img> 
//       </div> 

//       <div className="profile-details-container">
//         <span className="span span-user" >{user.username}</span>
//         <span className="span span-status" >dolor purus</span>
//        </div>
//        </>
//        }
//       </div>

//     <div className="list-container-Chatsearch">
//       <ChatSearch/>
//       </div>
 
      
//       <div className="list-container-bot">
//        {/* tabs */}

//         <div className="Container">
//         <div className="bloc-tabs">
            
//              <div 
//              className = {toggleState === 1 ? "tabs active-tabs-direct": "tabs" } 
//               onClick={()=>toggleTab(1)}>Direct
//                 </div>
//                 <div 
//              className = {toggleState === 2 ? "tabs active-tabs-team": "tabs" } 
//               onClick={()=>toggleTab(2)}> Team
//                 </div>
//                 </div>
//                 {/* tab contents */}
                
//                 <div className= "content-tabs">
//                   < div className = {toggleState === 1 ?
//                      "content active-content": "content" }>
//                       <ul className="items">
//                         <li
//                 onClick={() => {}}
//                 className="item">
//                 <div className="item-status">
//                   <img src="https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg" alt="Retail Admin" />
//                   <span className="status online"></span>
//                 </div>
//                 <p className="name-time">
//                 <span className="name mr-2">Some Chat 1</span>
//                 </p>
//               </li>
//               <li
//                 onClick={() => {}}
//                 className="item">
//                 <div className="item-status">
//                   <img src="https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg" alt="Retail Admin" />
//                   <span className="status online"></span>
//                 </div>
//                 <p className="name-time">
//                 <span className="name mr-2">Some Chat 2</span>
//                 </p>
//               </li>
//             </ul>
//             </div>

         
           
//           < div className = {toggleState === 2 ? 
//             "content active-content": "content" }>  

//            <ul className="items">
//            {
//              chats.map(chat =>
//            <li
//            key={chat.id}
//            onClick={() => history.push(`/chat/${chat.id}`)}
//              className="item">
//              <div className="item-status">
//                <img src={chat.image}/>
//                <span className="status online"></span>
//              </div>
//              <p className="name-time">
//              <span className="name mr-2">{chat.name}</span>
//              </p>
//            </li>
//              )
//              }
//          </ul>
//           </div>
//     </div>
//     </div>
//       </div>
//     </div>     
  

//     )
// }

import React, { useState }  from 'react';
import { 
  RiUserFill,
  RiNavigationFill,
  RiGamepadFill,
  RiMore2Fill
 } from "react-icons/ri"
 import { NavLink } from 'react-router-dom';


 const SideBar = ({children}) => {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[
    {
      path: "/profile",
      name: "Profile",
      icon: <RiUserFill/>
    },
    {
      path: "/direct",
      name: "Direct Message",
      icon: <RiNavigationFill/>
    },
    {
      path: "/team",
      name: "Team Message",
      icon: <RiGamepadFill/>
    },
  ]
  return (

    <div className='sidebarpannel'>
      <div style={{width: isOpen ? "40%" : "10%"}}className='sidemenu'>
        <div className='top_section'>
          <h1 style={{display: isOpen ? "block" : "none"}} className='logo'> Weedle </h1>
            <div style={{marginLeft: isOpen ? "5%" : "0%"}} className='bars'> 
            <RiMore2Fill onClick={toggle}/> 
            </div>
        </div> 
      {
        menuItem.map((item, index)=>(
          <NavLink to={item.path} key={index} className="link" activeClassName="active">
            <div className='icon'>{item.icon}</div>
            <div style={{display: isOpen ? "block" : "none"}} className='link_text'>{item.name}</div>
          </NavLink>
        ))
      }
       </div>
       
       <div className='sidecontent'>{children}</div>

       </div>
  )
}

export default SideBar;