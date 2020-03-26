import {StyleSheet} from 'react-native';
import  Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal :24,
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor:'#FFF',
        marginBottom: 16,
        marginTop:48
    },

    incidentProperty:{
        fontSize: 14,
        color: '#41414b',
        fontWeight: "bold",
        marginTop: 24
    },
    
    incidentValue:{
        marginTop:8,
        fontSize: 15,
        color: '#737380'
    },

    contactBox:{
        padding: 24,
        borderRadius: 8,
        backgroundColor:'#FFF',
        marginBottom: 16,
        
    },

    heroeTitle:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight:30
    },

    description:{
        fontSize:15,
        color: '#737380',
        marginTop: 16,
    },

    actions:{
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    actions1:{
        backgroundColor:'#E02041',
        borderRadius: 8,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actions2:{
        backgroundColor:'#E02041',
        borderRadius: 8,
        width: '48%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },


    actionsText:{
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'

    }
  


})

