import React, {Component} from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT' :
        {console.log('action =', action)
        return {            
            contacts: state.contacts.filter((contact, index) => index !== action.payload)
        }}
        case 'ADD_CONTACT' :
        return {
            contacts: [... state.contacts, action.payload]
        }
        default:
        return state
    }
 }

export class Provider extends Component {
    state = {
        contacts : [
            {             
                nom: 'John Doe',
                email: 'john@mail.com',
                tel: '555-555-555'
            },
            {              
                nom: 'Jane Doe',
                email: 'janen@mail.com',
                tel: '555-555-555'
            },
            {              
                nom: 'Billy Doe',
                email: 'billy@mail.com',
                tel: '555-555-555'
            }
        ],
        
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }

}

export const Consumer = Context.Consumer;