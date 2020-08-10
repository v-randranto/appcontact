import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

export default class AddContact extends Component {
  state = {
    nom: "",
    email: "",
    tel: ""
  };

  
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (dispatch, e) => {
    e.preventDefault();   
    dispatch({type: 'ADD_CONTACT', payload: this.state})
    Object.keys(this.state)
        .forEach(key => this.setState({ [key]: '' })) 
    
    //redirection vers la liste   
    this.props.history.push('/list')
  };

  render() {
    return (
        <Consumer>
            { value => {
                return (
                    <div className="card mb-3">
                      <div className="card-header">
                        <h4>Ajouter un contact</h4>
                      </div>
                      <div className="card-body">
                        {/* <form onSubmit={(e) => this.handleSubmit(e, value.dispatch)}> */}
                        <form onSubmit={this.handleSubmit.bind(this, value.dispatch)}>
                          <div className="form-group">
                            <input
                              type="text"
                              name="nom"
                              value={this.state.nom}
                              className="form-control"
                              placeholder="Enter name..."
                              required
                              onChange={this.handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              value={this.state.email}
                              className="form-control"
                              placeholder="Enter email..."
                              required
                              onChange={this.handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              name="tel"
                              value={this.state.tel}
                              className="form-control"
                              placeholder="Enter phone..."
                              required
                              onChange={this.handleChange}
                            />
                          </div>
                          <button className="btn btn-primary btn-block">Ajouter</button>
                        </form>
                      </div>
                    </div>
                  );

            }}
        </Consumer>
    )
    
  }
}

AddContact.propTypes = {
  nom: PropTypes.string,
  email: PropTypes.string,
  tel: PropTypes.string
};
