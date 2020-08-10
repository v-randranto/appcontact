import React, { Component } from "react";
import { Consumer } from "../../context";

export default class Contact extends Component {
  state = {
    show: false
  };

  showContact = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    const { nom, email, tel } = this.props;
    const showIcon = this.state.show ? "fas fa-sort-up" : "fas fa-sort-down";
    const timesStyle = { color: "red", float: "right", cursor: "pointer" };

    return (
      <Consumer>
        {value => {
          return (
            <div className="card card-body mb-3 text-center">
              <h4>
                {nom}{" "}
                <i
                  style={{ cursor: "pointer" }}
                  className={showIcon}
                  onClick={this.showContact}
                ></i>
                <i
                  className="fas fa-times"
                  style={timesStyle}
                  onClick={this.props.delete}
                ></i>
              </h4>
              {this.state.show ? (
                <ul className="card card-body">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone : {tel}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
