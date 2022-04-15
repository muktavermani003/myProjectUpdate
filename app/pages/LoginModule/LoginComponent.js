import React, { Component } from 'react'
import { Text, View } from 'react-native'
import LoginScreen from './LoginScreen';



export default class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
          email: "itskoushikpaul@gmail.com",
          password: "123456"
        }
      }
onChangeText=(text,field)=>{
    this.setState({
        [field]:text
    })
}
      callApi = async () => {

        const result = await fetch(
          'https://koushik-node-users.herokuapp.com/api/user/login',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: 'itskoushikpaul@gmail.com',
              password: '123456',
            }),
          },
        )
        const res = await result.json();
        console.log('res', res);
        console.log('response', res.status);
        if (res.status === 'success') {
          this.props.navigation.navigate("ScreenUI")
        }
        else {
          alert(strings.WRONG_EMAIL_PASSWORD)
        }
      }
    

  render() {
      const {email,password }=this.state
    return (
     <LoginScreen
     email={email}
     password={password}
     callApi={this.callApi}
     onChangeText={this.onChangeText}
     />
    )
  }
}
