import React, { Component } from 'react';
import Authentication from './authenticate';

import 'whatwg-fetch';
import MyProfile from '../components/profile/index';

export default class Profile extends Component {

  constructor(props) {
    super (props);
    this.state = {
      renderActual: false
    };
    this.mountedorNot = this.mountedorNot.bind (this);
  }
  mountedorNot() {
    this.setState ({renderActual: true});
  }
  ;
    componentWillMount() {

    var id = window.localStorage.getItem ('userid');
    fetch (`/api/getuserdetail/${id}`, {method: 'get', headers: {'Content-Type': 'application/json'}}
    ).then (res => res.json ()
    ).then (json => {
      if (json.hasOwnProperty ('list')) {

        var obj = {'user': json.list[0]}
        if (json.list[0].hasOwnProperty ('userDetail')) {
          obj.userDetail = json.list[0].userDetail
        }
        this.setState (obj);
      }
    });
  }

  render() {
    console.log (this.state)
    return (
      <div>
        <Authentication  onComponentDidMount={this.mountedorNot}/>
        { this.state.renderActual && <MyProfile userdata={this.state} />  }
      
      </div>
      )
  }
}
