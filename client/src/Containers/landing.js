import React, { Component } from 'react';
import "../style/css/mainpage.scss";
import Profilecard from '../components/profile/profilecard';
import Newfriend from '../components/main/suggestlist';
import UserList from '../components/users/userlist';
import Listing from '../components/mypost/listing';
import Chatwindow from '../components/chatwindow/chatwindow';
class Landing extends Component {

constructor(props) {
super (props);
  this.state = {
  currentuser: window.localStorage.getItem ('userid')
  };
}

render() {
return (
<div className="main-landing row content">

  {
  (() => {
  if (this.state.currentuser) {
  return (
  <div className="landing-page">
    <div className="col-md-3 col-sm-6 proilecard"> 
       <Profilecard/>
       
       
       <div className="panel panel-default">
          <div className="panel-heading">
          <h5><b>Friend</b> </h5>
          </div>
                <UserList/>
        </div>
        
    </div>
    <div className="col-md-6 col-sm-6">
        <Listing forall="true"/>
    </div>
    <div className="col-md-3 col-sm-6 proilecard">
      <Newfriend/>      
    </div>
  </div>
  );
  }else{
    return (
  <div>
    <div className="col-md-8 col-sm-8">
         <Listing forall="true"/>
    </div>
    <div className="col-md-4 col-sm-4"> 
      
    </div>
  </div>
  
      );
  }

  })()
  }
    <Chatwindow/> 
</div>


    );
}
}
;

export default Landing;
