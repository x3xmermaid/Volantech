import React, {Component} from 'react';
import {TouchableOpacity, View , Text, StyleSheet, ImageBackground} from 'react-native'
import { withNavigation } from 'react-navigation';
let styles = require('../styles')

class Fab extends Component {
    constructor(){
        super();
    }
    _handler= () => {
        // this.props.navigation.navigate('NoteAdd')
        const { navigation } = this.props;
        navigation.navigate('Add')
    }
    render(){
        return (
            <View >
                {/* <Text>MErmaid</Text> */}
                <View style={styles.fab}>
                <TouchableOpacity onPress={() => this._handler()}>
                    <ImageBackground source={require('../img/plus-big-512.png')} style={styles.iconHeader} ></ImageBackground>
                </TouchableOpacity>
                </View>
            </View>
            
        )
    }
}

export default withNavigation(Fab)