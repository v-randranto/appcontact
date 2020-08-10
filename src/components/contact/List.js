import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

export default class List extends Component {
  
  deleteContact = (index, dispatch) => {
    dispatch({type: 'DELETE_CONTACT', payload: index})
  };

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              {value.contacts.map((contact, index) => (
                <Contact
                  key={index}
                  nom={contact.nom}
                  email={contact.email}
                  tel={contact.tel}
                  delete={() => this.deleteContact(index, value.dispatch)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
