import React, { Component } from 'react'
import { AppBar, RaisedButton, TextField } from 'material-ui'
import { MuiThemeProvider } from 'material-ui/styles'





export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault()
        this.props.prevStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter user Details" />
                        
                        <TextField
                        hintText="Enter your occupation"
                        floatingLabelText="occupation"
                        onChange= { handleChange('occupation') }
                        defaultValue= {values.occupation}

                         />
                         <br/>
                        <TextField
                        hintText="Enter your city"
                        floatingLabelText="city"
                        onChange= { handleChange('city') }
                        defaultValue= {values.city}

                         />
                         <br/>
                        <TextField
                        hintText="Enter your bio"
                        floatingLabelText="bio"
                        onChange= { handleChange('bio') }
                        defaultValue= {values.bio}

                         />
                         <br/>
                         <RaisedButton label="COntinue"
                         primary={true}
                         style={styles.button}
                         onClick={ this.continue }
                         />
                         <RaisedButton label="Prevous Step"
                         primary={true}
                         style={styles.button}
                         onClick={ this.back }
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

export default FormPersonalDetails
