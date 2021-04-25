import React, { Component } from 'react'
import { AppBar, RaisedButton, TextField } from 'material-ui'
import { MuiThemeProvider } from 'material-ui/styles'
import { List, ListItem } from 'material-ui';






export class Confirm extends Component {
    continue = e => {
        e.preventDefault()
        // this is where we would process our form by sending our data to our backend
        this.props.nextStep();

    }
    back = e => {
        e.preventDefault()
        this.props.prevStep();
    }

    render() {
        const { values: {firstName, email, lastName, occupation, bio, city} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm Users Data" />
                    <List>
                        <ListItem 
                        primaryText="First Name"
                        secondaryText={firstName}
                        />
                        <ListItem 
                        primaryText="Last Name"
                        secondaryText={ lastName }
                        />
                        <ListItem 
                        primaryText="email "
                        secondaryText={email}
                        />
                        <ListItem 
                        primaryText="occupation"
                        secondaryText={occupation}
                        />
                        <ListItem 
                        primaryText="city "
                        secondaryText={city}
                        />
                        <ListItem 
                        primaryText="bio"
                        secondaryText={bio}
                        />
                    </List>
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

export default Confirm
