import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SideBar from  '../components/SideBar';
// import JoinedChatsList from '../components/JoinedChatsList';
// import AvailableChatsList from '../components/AvailableChatsList';
// import ViewTitle from '../components/shared/ViewTitle';
// import { withBaseLayout } from '../layouts/Base';


import { fetchChats } from '../actions/chats';
import Notifications from '../utils/notifications';


import { 
  HashRouter as Router, 
  Route, 
  Switch,
} from "react-router-dom";



import Profile from '../components/Profile';
import DirectMsg from '../components/DirectMsg';
import TeamMsg from '../components/TeamMsg';

const Home = () => {

  const dispatch = useDispatch();
  const joinedChats = useSelector(({chats}) => chats.joined)
  // const availableChats = useSelector(({chats}) => chats.available)

  useEffect(() =>{
    Notifications.setup();
   dispatch(fetchChats())
  }, [dispatch]);


return(

<div className='page'> 

<Router>
<SideBar chats={joinedChats}> 
 
        <Switch>

        <Route path="/profile">
          <Profile/>
          </Route>

          <Route path="/direct">
          <DirectMsg/>
          </Route>

          <Route path="/team">
          <TeamMsg/>
          </Route>
      
        </Switch>
        </SideBar>   
        </Router>     
       
     <div className='channelpannel'>
      <h1>Hello World</h1>
     </div>
     {/* <ViewTitle text="Choose your Channel">
              <Link className="btn btn-outline-primary"
              to="/chatCreate"> New </Link>
            </ViewTitle>
              <AvailableChatsList chats={availableChats} /> */}
     </div>
      )
    }
export default Home;
// export default withBaseLayout(Home);
