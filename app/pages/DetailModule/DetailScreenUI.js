import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ScreenUI from '../ScreenModule/ScreenUI';
//import CheckBox from '@react-native-community/checkbox'
//import { RadioButton } from 'react-native-paper';
import RadioForm from 'react-native-simple-radio-button';
import styles from './DetailScreenStyle';
import strings from '../../Utils/Strings/String';
import { ServiceCall } from '../../Utils/ServiceCall/ServiceCall';
import Api from '../../Utils/config/Api/Api';
export default class DetailScreenUI extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: "",
            gender: '',
            status: '',
            genderValue:  this.props.route.params.data.gender==='male'?0:1,
            dataS: [],
            isSelected: true,
            isChecked: true,
        }
    }
    isValidEmail = (value) => {
        const regx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        return regx.test(value)
    }

    check = () => {
        if (!this.state.name) {
            alert('enter name');
            return;
        }
        else if (this.state.name.length >= 25) {
            alert('enter valid name');
            return;
        }
        else if (!this.state.email) {
            alert('enter emailID');
            return;
        }
        else if (!this.isValidEmail(this.state.email)) {
            alert("please enter valid email");
            return;
        }
        else if (!this.state.gender) {
            alert('enter gender');
            return;
        }
        else if (!this.state.status) {
            alert('enter status');
            return;
        }
        else
            this.props.navigation.navigate('ScreenUI')

    }
    toogleGender = (gender) => {
        this.setState({
            gender: gender,
        })
    }

    componentDidMount() {
        var ref = this.props.route.params.data
        console.log('ref.gender  ',ref.gender, 'abc')
        console.log('ref', ref)
        if(ref.gender=='female'){
            this.setState({genderValue:1})
        }
        else {
            this.setState({genderValue:0})
        }
        this.setState({
            name: ref.name,
            email: ref.email,
            status: ref.status,
            gender: ref.gender
        })
    }
  //service call from here  
    onSucessCall = async (id) => {
        fetch(`https://gorest.co.in/public/v2/users/${ref.id}`,
        {
            method: "PATCH",
            headers: {
                "Content-type": "application/json", 'Authorization': 'Bearer 8055de5d75bbcc4b304425de7b6925c25a0c943716ea91869af820fcebf55d4b',
            },
            body: JSON.stringify({
                name: this.state.name,
                status: this.state.status,
                email: this.state.email,
                gender: this.state.gender,
            })
        })
        .then(response => {
            console.log('responsegender', response.gender); return response.json();
        })
        .then(data => console.log(data)); 
    
    
      }
      onFaliureApi = () => {
        console.log("api call failed")
      }
    
      onPromiseFaliure = async () => {
        console.log("api promise failed")
      }
    
    
      updateRequest = async () => {
        let Service = {
          apiUrl: Api.displayDataApi,
          method: 'PATCH',
          header: { "Content-type": "application/json" },
          onSuccessCall: this.onSucessCall,
          onFaliureApi: this.onFaliureApi,
          onPromiseFaliure: this.onPromiseFaliure,
    
        }
        const serviceResponse = await ServiceCall(Service)
      }
    













    // updateRequest(id) {
    //     this.check();
    //     var ref = this.props.route.params.data
    //     // console.log(id, 'id numb')
    //     fetch(`https://gorest.co.in/public/v2/users/${ref.id}`,
    //         {
    //             method: "PATCH",
    //             headers: {
    //                 "Content-type": "application/json", 'Authorization': 'Bearer 8055de5d75bbcc4b304425de7b6925c25a0c943716ea91869af820fcebf55d4b',
    //             },
    //             body: JSON.stringify({
    //                 name: this.state.name,
    //                 status: this.state.status,
    //                 email: this.state.email,
    //                 gender: this.state.gender,
    //             })
    //         })
    //         .then(response => {
    //             console.log('responsegender', response.gender); return response.json();
    //         })
    //         .then(data => console.log(data));
    // }
    reListing = () => {
        var ref = this.props.route.params.data
        console.log(ref.id, ' reference id')
        console.log('new updated status', this.state.status)
        this.check()
        fetch("https://gorest.co.in/public/v2/users",
            {
                method: "GET",
                headers: {
                    "Content-type": "application/json", 'Authorization': 'Bearer 8055de5d75bbcc4b304425de7b6925c25a0c943716ea91869af820fcebf55d4b',
                },
            })
            .then(response => { console.log(response, "response"); return response.json(); })
            .then((responseJson) => {
                console.log('responseJson', responseJson)
                this.setState({
                    name: responseJson,
                    status: responseJson,
                    email: responseJson,
                    gender: responseJson
                })
            })
            .catch(error => console.log(error)) //to catch the errors if any
    }

    deleteData = () => {
        var ref = this.props.route.params.data 
        fetch(`https://gorest.co.in/public/v2/users/${ref.id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json", 'Authorization': 'Bearer 8055de5d75bbcc4b304425de7b6925c25a0c943716ea91869af820fcebf55d4b',
                },
               
            })
            .catch((error) => {
                console.error(error);
              });
           

    }
    handleRadioMButton = (v) => {

        const { gender, checked } = this.state;
        this.setState({ gender: v });
        this.setState({ checked: v });
        console.log('checked', checked)
        console.log("Gender", gender)
    }
    handleRadioFButton = (v) => {
        const { gender, checked } = this.state;
        this.setState({ gender: v });
        this.setState({ checked: v });
        console.log('checked', checked)
        console.log("Gender", gender)
    }

    getInitialState = (v) => {
        console.log('value', v)
        this.setState({ genderValue: v }, () => { console.log('gender Value1', this.state.genderValue) })
        console.log("gender value", this.state.genderValue)

        if (v == 0) {
            this.setState({ gender: 'male' })
        } else {
            this.setState({ gender: 'female' })
        }
    }

    render() {
        var radio_props = [
            { label: 'male', value: 0 },
            { label: 'female', value: 1 }
        ];

        const { checked } = this.state;
        const ref = this.props.route.params.data
       
        return (
            <View>
                <View style={styles.card}>
                    <Text style={styles.heading}>{strings.NAME }:</Text>
                    <TextInput
                        value={this.state.name}
                        onChangeText={(name) => this.setState({ name: name })}
                    />
                </View>

                <View style={styles.card}>
                    <Text style={styles.heading}>{strings.EMAIL_ID}:</Text>
                    <TextInput
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email: email })} />
                </View>
                <View style={styles.card}>
                  <Text style={styles.heading}>{strings.GENDER }:</Text>
                    <RadioForm
                        radio_props={radio_props}
                        initial={this.state.genderValue}
                        formHorizontal={true}
                        buttonColor={'#2196f3'}
                        buttonSize={15}
                        buttonOuterSize={25}
                        animation={true}
                        labelStyle={{ fontSize: 15, color: 'black' }}
                        onPress={this.getInitialState}
                    />
                </View>
                <View style={styles.card}>
                    <Text style={styles.heading}>{strings.STATUS} :</Text>
                    <TextInput
                        value={this.state.status}
                        onChangeText={(status) => this.setState({ status: status })} />
                </View>
                <View style={styles.buttonHolder}>
                    <TouchableOpacity style={styles.editButton}
                        onPress={() => this.updateRequest()}
                    >
                        <Text style={styles.text}>{strings.UPDATE}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton}
                        onPress={() => this.props.navigation.navigate('ScreenUI')}>
                        <Text style={styles.text}>{strings.CANCEL }</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.deleteButton}
                        onPress={() => this.reListing()}
                    >
                        <Text style={styles.text}>reDirect</Text>
                    </TouchableOpacity> */}
                     <TouchableOpacity style={styles.deleteButton}
                    onPress={() => this.deleteData()}
                >
                    <Text style={styles.text}>{strings.DELETE }</Text>
                </TouchableOpacity>
                </View>
               
                
              
            </View>
        )
    }
}
