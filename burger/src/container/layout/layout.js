import React, { Component } from "react";
import Toolbar from "../../components/UI/toolbar/toolbar";

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

export default Layouts;
