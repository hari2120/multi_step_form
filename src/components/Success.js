import React, { Component } from 'react'
import { AppBar, RaisedButton, TextField } from 'material-ui'
import { MuiThemeProvider } from 'material-ui/styles'






export class Success extends Component {
   

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                   <h1>Thank you for your sumbission</h1>
                   <p>you will get an email with our submission</p>
                   <RaisedButton label="Go Home"
                         primary={true}
                         style={styles.button}
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

export default Success
