import React, { Component } from 'react';
import {
  View,
  FlatList, Text, TouchableOpacity, TextInput, Image
} from 'react-native';
import DATA from '../../../mockData';

//import PullToRefreshViewNativeComponent from 'react-native/Libraries/Components/RefreshControl/PullToRefreshViewNativeComponent';
import styles from './ScreenStyle'
import strings from '../../Utils/Strings/String';
import HeaderComponent from '../../Components/HeaderComponent'
import ButtonComponent from '../../Components/ButtonComponent';
import FooterComponent from '../../Components/FooterComponent';
import Api from '../../Utils/config/Api/Api'
//import Api from '@Utils'
import { ServiceCall } from '../../Utils/ServiceCall/ServiceCall'
//import Constants from '../../Utils/config/Constants/Constants';

class ScreenUI extends Component {
  constructor(props) {
    //console.log('constructor call')
    super(props)
    this.state = {
      isLoading: true,
      loadingExtraData: false,
      page: 1,
      randomUserData: [],
      data: '',
      dataS: [],
      refresh: false,
      usersFilter: [],
      filteredText: []

    }
  }
  LoadMoreRandomData = () => {
    this.setState({
      page: this.state.page + 1
        .limit(8)
        .get()
    })
  }
  deleteItemById = id => {
    const filteredData = this.state.data.filter(item => item.id !== id);
    this.setState({ data: filteredData });
  }
  componentDidMount() {
    console.log('abcde')
    const openSubscription = this.props.navigation.addListener("focus", () => {
      this.callListApi()
    });

    return () => openSubscription.remove();

  }

  onSucessCall = async () => {
    fetch("https://gorest.co.in/public/v2/users",
      {
        method: "GET",
        headers: {
          "Content-type": "application/json", 'Authorization': 'Bearer 8055de5d75bbcc4b304425de7b6925c25a0c943716ea91869af820fcebf55d4b',
        },
      })
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          dataS: responseJson,
        })
      })


  }
  onFaliureApi = () => {
    console.log("api call failed")
  }

  onPromiseFaliure = async () => {
    console.log("api promise failed")
  }


  ApiCall = async () => {
    let Service = {
      apiUrl: Api.displayDataApi,
      method: 'GET',
      header: { "Content-type": "application/json" },
      onSuccessCall: this.onSucessCall,
      onFaliureApi: this.onFaliureApi,
      onPromiseFaliure: this.onPromiseFaliure,

    }
    const serviceResponse = await ServiceCall(Service)
  }





  callListApi = () => {
    fetch("https://gorest.co.in/public/v2/users",
      {
        method: "GET",
        headers: {
          "Content-type": "application/json", 'Authorization': 'Bearer 8055de5d75bbcc4b304425de7b6925c25a0c943716ea91869af820fcebf55d4b',
        },
      })
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          dataS: responseJson,
        })
      })

      .catch(error => console.log(error)) //to catch the errors if any
  }
  handleRefresh = () => {
    this.setState = {
      refresh: true
    }
  }
  handleAlert = () => {
    alert('abcde')
  }
  searchText = (textToSearch) => {

    this.setState({
      usersFilter: this.state.dataS.filter(id =>
        id.name.toLowerCase().includes(textToSearch.toLowerCase()))
    })
    console.log("texttosearch", textToSearch)
  }
  render() {

    return (
      <View style={styles.container}>
        <HeaderComponent />
        <View >
          <Image source={require('../../Image/iconSearch.png')} />
          <TextInput style={styles.seacrhInput}
            placeholder={strings.SEARCH}
            onChangeText={(text) => this.searchText(text)}>
          </TextInput>


        </View>
        <FlatList
          padding={30}
          data={this.state.dataS}
          refreshing={this.state.refresh}
          onRefresh={this.handleRefresh}
          renderItem={({ item }) =>
            <View>
              <View style={styles.card}>
                <Text style={{ height: 50 }}>{item.name}  </Text>
                <View>
                  {/* <TouchableOpacity style={styles.button}
                    onPress={() => this.props.navigation.navigate('DetailScreenUI', { data: item })}>
                    <Text style={styles.editText}>{strings.EDIT}</Text>
                  </TouchableOpacity> */}
                  <ButtonComponent title={strings.EDIT} onPress={() => this.props.navigation.navigate('DetailScreenUI', { data: item })} />
                </View>
              </View>


            </View>
          }
        />
        <FooterComponent
          hasAddButton
          title={strings.ADD_DATA}
          onPress={() => this.props.navigation.navigate('AddDetailUI')}
          hasAddButton2
          title1={strings.CLICK_ME}
          onPress1={this.handleAlert}
        />
      </View>
    )
  }
}
export default ScreenUI;