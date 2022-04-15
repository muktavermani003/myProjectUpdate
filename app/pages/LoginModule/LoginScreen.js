import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity, Image
} from 'react-native';

import ScreenUI from '../ScreenModule/ScreenUI'
import styles from './LoginStyle';
import strings from '../../Utils/Strings/String';
import ButtonComponent from '../../Components/ButtonComponent';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes
} from '@react-native-community/google-signin';
//import { GoogleSignin,GoogleSigninButton,statusCodes } from '@react-native-google-signin/google-signin';


GoogleSignin.configure({
  webClientId:'503514007009-6fp7b6boaraf1itdnebrib34l4aotf3n.apps.googleusercontent.com',
   offlineAccess:true
  })
 
 

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "itskoushikpaul@gmail.com",
      password: "123456",
      userGoogleInfo:{},
      loaded:false,
      isLoginScreenPresented:false,
      
    }
  }
  // componentDidMount(){
  //  this.getCurrentUserInfo();
  //  //this.isSignedIn() 
  // }
  check = () => {
    if (!this.state.username) {
      alert(strings.ENTER_USERID);
      return;
    } else if (!this.state.password) {
      alert(strings.ENTER_PASSWORD);
      return;
    }
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
// handleSignIn=async()=>{
//   try{
//     await GoogleSignin.hasPlayServices()
//     await GoogleSignin.signOut();
//     const userInfo= await GoogleSignin.signIn();
//     console.log('userInfo', userInfo)
//     this.setState({
//       userGoogleInfo:userInfo,
//       loaded:true
//     })
//   }
//   catch(error){
//     console.log(error.message)
//   }
// }

//  onGoogleButtonPress=async()=> {
//   // Get the users ID token
//   const { idToken } = await GoogleSignin.signIn();
// console.log('idtoken',idToken)
//   // Create a Google credential with the token
//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//   // Sign-in the user with the credential
//   return auth().signInWithCredential(googleCredential);
// }


handleGoogleSignIn=async()=>{
  try {
   // alert('i am the try block')
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();

    this.setState({ 
      userGoogleInfo:userInfo,
      loaded:true,
     });
     console.log('userGppgleInfo', this.state.userInfo)
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
     console.log('signin cancelled')
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log('signin in progress')
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      console.log('signin play services not vaialable')
    } else {
      // some other error happened
      console.log(error)
    }
  }
  this.getCurrentUserInfo()
}
getCurrentUserInfo = async () => {
  try {
    const userInfo = await GoogleSignin.signInSilently();
    this.setState({ userInfo });
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_REQUIRED) {
     console.log("sign in required")
    } else {
     console.log("some other error")
    }
  }
};
isSignedIn = async () => {
  const isSignedIn = await GoogleSignin.isSignedIn();
  this.setState({ isLoginScreenPresented: !isSignedIn });
  if(this.state.isLoginScreenPresented===true){
  console.log('isLoginScreenPResent', this.state.isLoginScreenPresented)
  }
};
 
  render() {
    const {callApi, password,email,onChangeText} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.photoContainer}>
        </View>
        <View>
          <Text style={styles.heading}>{strings.EMAIL_ID} -</Text>
          <TextInput
            placeholder={strings.ENTER_USERID}
            style={styles.txtinp1}
             onChangeText={(email) => this.setState({ email: email })}
          />
        </View>
        <View>
          <Text style={styles.heading}>{strings.PASSWORD} -</Text>
          <TextInput
            placeholder={strings.ENTER_PASSWORD}
            style={styles.txtinp2}
            onChangeText={(password) =>
              this.setState({ password: password })
            }></TextInput>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>{strings.FORGOT_PASSWORD}</Text>
        </TouchableOpacity>
        <View>
          <ButtonComponent title={strings.LOGIN} buttonStyle={styles.button} onPress={this.callApi}/>
        </View>
        <View style={{alignItems:'center', paddingVertical:20}}> 
        <Text style={styles.loginOption}>Or Login With </Text>
        </View>
        <View style={styles.loginWithButtons}>
          <GoogleSigninButton 
           onPress={this.handleGoogleSignIn}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          style={{width:200,height:50}}/>
          {this.state.loaded?
          (<View>
            <Text>{this.state.userGoogleInfo.user.name}</Text>
            <Text>{this.state.userGoogleInfo.user.email}</Text>
            <Image 
            style={{width:100,height:100}}
            source={{uri:this.state.userGoogleInfo.user.photo}}
            />
          </View>):
          <Text>Not Signed In</Text>
            }
        </View>
      </View>
    );
  }
}
