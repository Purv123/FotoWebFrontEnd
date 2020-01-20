import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCardBody, MDBInput, MDBBtn } from "mdbreact";
import ParticleComponent from "./Particle";

import "./login.css";
const logo = require("./logo.png");

class Login extends Component {
  constructor(props) {
    super(props);

    /*
        userName: for storing username
        password: for storing password
        */
    this.state = { userName: "", password: "" };
    this.setUserName = this.setUserName.bind(this);
    this.setPassWord = this.setPassWord.bind(this);
    this.sendPostRequest = this.sendPostRequest.bind(this);
  }

  // set the username with entered username
  setUserName = event => {
    this.setState({ userName: event.target.value });
  };

  // set the password with entered password
  setPassWord = event => {
    this.setState({ password: event.target.value });
  };

  // send the post request to the server with username and password
  sendPostRequest = event => {
    event.preventDefault();

    // assign the state to other variable to send the user name and password to server
    var credentials = this.state;

    this.props.onSubmit(
      3,
      'test',
      'test',
      'test'
    );

    // fetch(`${global.serverURL}/login`, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     credentials
    //   }),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   }
    // })
    //   .then(response => {
    //     // console.log("login json" ,response)
    //     if (response.ok) {
    //       console.log("inside response ok");
    //       response.json().then(json => {
    //         console.log(json);
    //         // if the value is 1 than user name is incorrect
    //         // if the value is 2 than password is incorrect
    //         // else the login is successful
    //         if (json.authenticationStatus == 1) {
    //           document.getElementById("incorrect").innerText =
    //             "Incorrect User Name";
    //         } else if (json.authenticationStatus == 2) {
    //           document.getElementById("incorrect").innerText =
    //             "Incorrect Password";
    //         } else {
    //           this.props.onSubmit(
    //             json.authenticationStatus,
    //             this.state.userName,
    //             json.name,
    //             json.userId
    //           );
    //         }
    //       });
    //     }
    //   })
    //   .catch(function(error) {
    //     document.getElementById("incorrect").innerText =
    //       "Oops.. Connection problem Try again!!";
    //   });
  };

  render = () => {
    return (
      <div id="login-wrapper">
        <ParticleComponent />
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <div className="center-element" style={{ flex: "9" }}>
            <div
              className="bg-white rounded-2 shadow text-left"
              style={{ width: "25vw", position: "relative" }}
            >
              <div className="login-header py-5 rounded-top-2 d-flex flex-column">
                <MDBRow className="d-flex justify-content-center">
                  <h1 className="white-text font-weight-bold">
                    <span className="fa-lg fb-ic mr-1">
                      <img className="axes-logo" src={logo} alt="axes logo" />
                    </span>
                    FotoWeb
                  </h1>
                </MDBRow>
                <MDBRow className="d-flex justify-content-center">
                  <span>
                    <img className="qc-logo" src={logo} alt="quickcap logo" />
                  </span>
                </MDBRow>
              </div>
              <MDBCardBody className="mt-3 mx-3 d-flex flex-column align-items-between">
                <form onSubmit={this.sendPostRequest}>
                  <MDBInput
                    label="user name"
                    value={this.state.userName}
                    onChange={this.setUserName}
                    required
                    outline
                    size="lg"
                    style={{ lineHeight: "2.5rem" }}
                  />
                  <MDBInput
                    label="password"
                    group
                    type="password"
                    value={this.state.password}
                    onChange={this.setPassWord}
                    required
                    outline
                    size="lg"
                    style={{ lineHeight: "2.5rem" }}
                  />
                  <p
                    id="incorrect"
                    className="font-large red-text d-flex justify-content-start"
                  />

                  <MDBRow className="d-flex justify-content-center mb-4 mt-3">
                    <MDBCol className="d-flex justify-content-center">
                      <div className="text-center">
                        <MDBBtn
                          color="blue"
                          className="rounded-2 text-white"
                          style={{ outline: "none" }}
                          size="lg"
                          type="submit"
                        >
                          Log in
                        </MDBBtn>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </form>
              </MDBCardBody>
            </div>
          </div>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ flex: "1" }}
          >
            <h3
              className="quote font-weight-bold font-large"
              style={{ color: "#1976d2" }}
            >
              &#65282;The pain you feel today, will be the strength you will
              feel tomorrow&#65282;
            </h3>
          </div>
        </div>
      </div>
    );
  };
}
export default Login;
