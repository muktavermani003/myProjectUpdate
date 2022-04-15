import {StyleSheet} from 'react-native';
import Color from '../../Theme/colors';

const styles = StyleSheet.create({
    editButton: {
        backgroundColor:Color.c0047AB,
        height: 30,
        width: 100,
        borderRadius: 25,
        alignContent: 'center',
        justifyContent: 'center',
        paddingLeft: 30
    },
    deleteButton: {
        backgroundColor: Color.c0047AB,
        height: 30,
        width: 100,
        borderRadius: 25,
        alignContent: 'center',
        justifyContent: 'center',
        paddingLeft: 30
    },
    card: {
        flexDirection: 'row'
    },
    heading: {
        color: Color.black,
        fontWeight: 'bold',
        marginTop: 15
    },
    text: {
        fontWeight: 'bold',
        color: "white",

    },
    buttonHolder: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    genderText: {
        marginTop: 10,
        paddingRight: 10,
        color: Color.black
    }
})
export default styles;