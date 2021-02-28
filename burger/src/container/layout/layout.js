import React, { Component } from "react";
import Toolbar from "../../components/UI/toolbar/toolbar";
//redux
import { connect } from "react-redux";

class Layouts extends Component {
  state = {
    showSideDrawer: false,
  };
  render() {
    return (
      <React.Fragment>
        <Toolbar
          showSideDrawer={this.state.showSideDrawer}
          onSideBarTrue={() => this.handleSideDrawerTrue()}
          onSideBarFalse={() => this.handleSideDrawerFalse()}
          isLoggedIn={this.props.userIdR}
        />
      </React.Fragment>
    );
  }
  handleSideDrawerTrue = () => {
    this.setState({ showSideDrawer: true });
  };
  handleSideDrawerFalse = () => {
    this.setState({ showSideDrawer: false });
  };
}

const mapStateToProps = (state) => {
  return {
    userIdR: state.auth.userId, //you can use token also as sign of being singed In
  };
};

export default connect(mapStateToProps)(Layouts);
