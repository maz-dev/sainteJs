import React,{ Component } from 'react';

export default class DashboardUserSingle extends Component {
  render() {
    return(
      <tr>
        <td>{this.props.user.emails[0].address}</td>
        <td>{this.props.user.username}</td>
        <td>{this.props.user.profile.notif_email ? "oui" : "non"}</td>
        <td>Button</td>
      </tr>
    );
  }
}
