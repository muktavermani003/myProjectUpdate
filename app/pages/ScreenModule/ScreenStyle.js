import {StyleSheet} from 'react-native'
import Color from '../../Theme/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.c7393B3,
        flex: 1,
        //padding:10
    },
    card: {
        backgroundColor: 'white',
        marginVertical: 8,
        borderRadius: 10,
        elevation: 1,
        shadowOpacity: 1,
        shadowColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        marginTop: 20,
        backgroundColor: Color.c0047AB,
        width: 40,
        height: 25,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Fbutton:{
        marginRight:30
    },
    editText:{
        color:Color.white
    },
    seacrhInput:{
    borderWidth:1,
    borderRadius:15,
    height:40,
    marginTop:10,
    borderColor:Color.c0047AB,
    
    },
})




export default styles;