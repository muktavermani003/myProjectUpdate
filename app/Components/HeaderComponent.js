import React, { Component } from 'react';
import { Image, StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import strings from '../Utils/Strings/String';

class HeaderComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>{strings.NAMELIST}</Text>
                
                <View style={{justifyContent:'flex-end',flexDirection:'row', alignItems:'flex-end', marginLeft:210}}>
             <TouchableOpacity>
                <Image source={require('../Image/iconNotification.png')}
                    style={styles.icon} />
                    </TouchableOpacity>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',

    },
    header: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#394e59',
        marginLeft: 10,
        paddingVertical: 10
    },
    icon: {
        height: 45,
        width: 40,
        resizeMode: 'contain',
    },
    iconSearch:{
        width:20,
        height:20,
        marginBottom:10
    }
})
export default HeaderComponent;