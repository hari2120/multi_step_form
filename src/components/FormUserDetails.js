import React, { Component } from 'react'
import { AppBar, RaisedButton, TextField } from 'material-ui'
import { MuiThemeProvider } from 'material-ui/styles'





export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter user Details" />
                        <TextField
                        hintText="Enter your First Name"
                        floatingLabelText="First Name"
                        onChange= { handleChange('firstName') }
                        defaultValue= {values.firstName}

                         />
                         <br/>
                        <TextField
                        hintText="Enter your last Name"
                        floatingLabelText="Last Name"
                        onChange= { handleChange('lastName') }
                        defaultValue= {values.lastName}

                         />
                         <br/>
                        <TextField
                        hintText="Enter your email"
                        floatingLabelText="email"
                        onChange= { handleChange('email') }
                        defaultValue= {values.email}

                         />
                         <br/>
                         <RaisedButton label="COntinue"
                         primary={true}
                         style={styles.button}
                         onClick={ this.continue }
                         />
                    
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles = {
    button: {
        margin:15
    }
}

export default FormUserDetails
