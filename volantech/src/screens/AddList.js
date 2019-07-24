import React, { Component } from 'react';
import { Platform, Text, View, TextInput, ImageBackground, TouchableOpacity, Picker } from 'react-native';
import styles from '../styles'
import {connect} from 'react-redux'
import {fetchCategory} from '../redux/actions/data'
// import console = require('console');

class AddList extends Component {
    constructor(props){
        super(props)
      }
      componentDidMount(){
        this.props.dispatch(fetchCategory())
      }

      _onPress= () => {
        this.props.navigation.navigate("Home")
      }
    render() {
        console.log("this.props.category")
        console.log(this.props.data.category)
        return (
            <View style={styles.container}>
                {/* <Text>Mermaid</Text> */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={styles.iconBox3} onPress={() => this._onPress()}>
                        <ImageBackground style={{ height: 40, width: 40 }}
                            source={require('../img/back.png')} />
                    </TouchableOpacity>
                    <View style={styles.headBox}>
                        <Text style={styles.headTitle} >Add Task</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', marginTop: 10, borderColor:'#03AC0E', borderWidth: 3, marginLeft:15, marginRight: 15, borderRadius: 20}}>
                    <View style={styles.inputBox}>
                        <Text style={{ fontSize: 18 }}>Name</Text>
                        <TextInput style={styles.inputTextAdd} placeholder={"Task Name..."}></TextInput>
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={{ fontSize: 18 }}>Detail</Text>
                        <TextInput style={styles.inputTextAdd} numberOfLines={4} placeholder={"Task Detail"}></TextInput>
                    </View>
                    <View style={styles.inputBox}>
                        {/* <TextInput style={styles.inputTextAdd} numberOfLines={4} placeholder={"Task Detail"}></TextInput> */}
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 30, marginBottom: 80, alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18 }}>Category: </Text>
                        <View style={{flexDirection: 'row', borderWidth: 1, height: 30,borderColor: 'rgba(45, 173, 78, 0.8)', marginRight: 10, borderRadius: 5,}}>
                            <Picker
                            selectedValue={1}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) =>
                              this.setState({id_category: itemValue })}>
                                {this.props.data.category.map((item, index) => {
                                    // console.log(item)
                                    return (
                                        <Picker.Item label={item.category} value={item.id}/>
                                    )
                            })} 
                            </Picker>
                        </View>
                    </View>
                        <TouchableOpacity style={[styles.button, { alignSelf: 'center', backgroundColor: 'rgba(45, 173, 78, 0.8)'}]} onPress={() => this.goback()}>
                            <Text style={[styles.loginText, { color: 'white' }]}>Add</Text>
                        </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      data: state.data
    }
  }
  
  export default connect(mapStateToProps)(AddList)
