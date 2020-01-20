import React from "react";
import "./App.css";
import Login from "./login/login";
import { MDBContainer, MDBBtn } from "mdbreact";

const underMaintenance = require("./maintenance-page.png");

class App extends React.Component {
  constructor(props) {
    super(props);

    /*
    toNavigate - for conditional rendering based on the side icons
    loggedIn - state for loggedin or not , 3 - for correct loggedin 
    selectedReport - state for the selected report
    */
    this.state = {
      loggedIn: 1,
      userName: "",
      userID: "",
      fullName: "",
      underMaintenance: false
    };

    // binding the methods
    this.handleLoggedIn = this.handleLoggedIn.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  /**
   * Store the login value to the local storage of browser and reload the window
   *  @loginValue - from the login screen
   */
  handleLoggedIn = (loginValue, userName, fullName, userID) => {
    localStorage.setItem("userName", userName);
    localStorage.setItem("loggedIn", loginValue);
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("userID", userID);
    window.location.reload();
  };

  componentDidMount = () => {
    // set the state for logged in, username, user id and full name from local storage of browser
    this.setState({
      loggedIn: localStorage.getItem("loggedIn"),
      userName: localStorage.getItem("userName"),
      userID: localStorage.getItem("userID"),
      fullName: localStorage.getItem("fullName")
    });
  };

  handleLogOut = () => {
    console.log('inside logout');
    localStorage.setItem("loggedIn", 0);
    window.location.reload();
  }

  render = () => {
    console.log("react app render");
    return (
      <>
        {console.log(this.state.underMaintenance)}
        {this.state.underMaintenance != true ? (
          <div className="App">
            {/* if loggedIn s tate is 3 then render all conditional component otherwise render login component */}
            {this.state.loggedIn == 3 ? (
              // give the height 100% for full height
              <div style={{ height: "100%" }}>
                Successfully loggedin <MDBBtn onClick={this.handleLogOut}>Logout</MDBBtn>
              </div>
            ) : (
              <Login onSubmit={this.handleLoggedIn} />
            )}
          </div>
        ) : (
          <MDBContainer>
            {" "}
            <img
              src={underMaintenance}
              className="center-element align-middle"
            />
          </MDBContainer>
        )}
      </>
    );
  };
}
export default App;
