'use strict'
var React = require('react-native');

let {
    StyleSheet, Dimensions
} = React;

let heightWindow = Dimensions.get('window').height
let widthWindow = Dimensions.get('window').width

module.exports = StyleSheet.create({
    container: {
        flex: 1,
    },
    textTitle: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
        lineHeight: 20
        // marginRight: 3
      },
      textCategory2: {
        fontSize: 12,
        color: 'white'
        // marginRight: 3
      },
      textDetail: {
        fontSize: 12,
        marginTop: 4,
        lineHeight: 14,
        color: 'white',
        fontWeight: 'bold'
      },
      textDone:{
          backgroundColor: 'white',
        //   color: ''
        borderRadius:5,
        marginBottom: 10,
        width: 80,
        fontWeight: "bold",
        textAlign: "center",
        padding: 5
      },
    box: {
        // backgroundColor: 'yellow',
        height: 140,
        width: 140,
        marginTop: 15,
        marginBottom: 15,
        marginRight: 15,
        marginLeft: 15,
        borderRadius: 10,
        // borderTopLeftRadius: 25,
        // borderBottomRightRadius: 25,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
      },
    fab: {
        backgroundColor: 'white',
        borderRadius: 100,
        height: 60,
        width: 60,
        position: 'absolute',
        top: heightWindow / 1.5,
        right: 20,
        // bottom: 200,
        elevation: 3,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 4 
        
    },
    iconHeader: {
        borderRadius: 100,
        height: 45,
        width: 45,
        // just
      },
      sideItem: {
        flexDirection: 'row',
        // alignItems: 'center',
        paddingLeft: 10,
        paddingTop: 10
      },
      sideBody2: {
        backgroundColor: 'blue',
        flexDirection: 'column',
        zIndex: 4 
      },
      sideIcon: {
        // borderRadius: 100,
        height: 20,
        width: 20,
        // just
        // backgroundColor: 'black'
      },
      sideFlat: {
        height: 250,
      },
      sideImg:{
        height: 85,
        width: 85,
        overflow: 'hidden',
        marginTop: 40,
        marginBottom: 15,
        borderRadius: 75
      },
      sideProfile:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 200,
        backgroundColor: 'green'
      },
      sideTextProfile: {
        fontSize: 20,
        fontWeight: 'bold'
      },
      searchBox: {
        height: 50,
        marginTop: 20,
        borderRadius: 10,
        borderColor: '#03AC0E',
        borderWidth: 2,
        width: widthWindow/1.4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.23,
        shadowRadius: 0.62,
        marginRight: 20,
        elevation: 1,
        backgroundColor:'#f0f0f0',
        alignSelf: "center",
        padding:5
    },
    iconBox2:{
        position: 'absolute',
        right: -2,
        top: -2,
        // backgroundColor:
        borderColor: '#03AC0E',
        // backgroundColor: 'blue',
        borderWidth: 2,
        borderRadius: 10,
        height: 50, 
        width: 50,
        zIndex:5
    },
    iconBox3:{
        borderColor: '#03AC0E',
        borderWidth: 2,
        borderRadius: 10,
        height: 50, 
        width: 50,
        zIndex:6,
        marginTop: 20,
        // marginRight: 5
        marginLeft: 15
    },
    headBox: {
        height: 50,
        marginTop: 20,
        borderRadius: 10,
        borderColor: '#03AC0E',
        borderWidth: 2,
        width: widthWindow/1.33,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.23,
        shadowRadius: 0.62,
        marginRight: 15,
        elevation: 1,
        backgroundColor:'#f0f0f0',
        // alignSelf: "center",
        alignItems: 'center',
        justifyContent: 'center',
        // padding:5
    },
    headTitle: {
        color: '#20ab43', 
        textAlign: 'center', 
        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        // padding: 3
    },
    buttonAddProduct: {
        width: widthWindow - 250,
        height: 50,
        // alignSelf: 'center',
        backgroundColor: 'rgba(45, 173, 78, 0.8)',
        // position: 'absolute',
        borderRadius: 10,
        zIndex: 10,
        marginTop: 20,
        // bottom: 60,
        elevation: 5,
      },
      inputBox:{
        marginTop: 10, 
        marginLeft: 20
      },
      inputTextAdd: {
        fontSize:15, 
        borderColor: '#03AC0E', 
        borderBottomWidth: 2, 
        marginLeft: 15
      },
      loginText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
        marginBottom: 10,
        color: '#39db62'
        //   alignSelf: 'center'
      },
      picker: {
        //   marginLeft: 10,
          height: 20,
          width: 180,
        //   marginBottom: 80,
          borderWidth: 1
      },
      button: {
        width: widthWindow - 140,
        height: 50,
        alignSelf: 'center',
        backgroundColor: 'rgba(45, 173, 78, 0.8)',
        position: 'absolute',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        zIndex: 10,
        bottom: 0,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
    
        elevation: 24,
      },
});