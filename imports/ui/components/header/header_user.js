import { Meteor } from 'meteor/meteor';
import React, {Component} from 'react';
import {Dropdown} from 'react-semantify';
import Gravatar from 'react-gravatar';
import {FlowRouter} from 'meteor/kadira:flow-router';


export default class HeaderUser extends Component {
  logout() {
    Meteor.logout();
    FlowRouter.go('/');
  }
  render() {
    const loggedInUser = Meteor.user();
    const profileUrl = `/users/${Meteor.user()._id}`;
    return (
      <Dropdown className="right item" init={true}>
        <Gravatar md5={this.props.user.profile.avatar} https size={33} className="image" />
        <span className="ui green basic button">{this.props.user.username} <i className="dropdown icon"></i></span>
        <div className="menu">
          <a href={profileUrl} className="item">Profil</a>
          {Roles.userIsInRole(loggedInUser, 'admin') ? <a href="/events/new" className="item">Nouvel event</a> : <span></span>}
          {Roles.userIsInRole(loggedInUser, 'admin') ? <a href="/dashboard" className="item">Dashboard</a> : <span></span>}
          <a href="/settings" className="item">Paramètres</a>
          <a className="item" onClick={this.logout}>Se déconnecter</a>

        </div>
      </Dropdown>
    );
  }
}
