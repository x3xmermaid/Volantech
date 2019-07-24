import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, TextInput, FlatList, TouchableOpacity } from 'react-native';
import styles from '../styles'
import Fab from '../components/fab'
import { connect } from 'react-redux'
import { fetchList, fetchCategory } from '../redux/actions/data'
// import console = require('console');
// import { FlatList } from 'react-native-gesture-handler';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state={
      pop: false
    }
  }
  componentDidMount() {
    this.props.dispatch(fetchList())
    this.props.dispatch(fetchCategory())
  }

  _onPress = () => {
    console.log("asd")
    this.props.navigation.navigate("Edit")
  }

  renderItem = ({ item, index }) => {
    console.log(item)
    let done = ""
    let color = ''
    if (item.isdone == 0) {
      done = 'finished'
      color = 'red'
    } else {
      color = 'green'
      done = 'unfinished'
    }

    

    return (
      <TouchableOpacity
        onLongPress={() => this._onLongPress(item.id, index)}
        delayLongPress={1500}
        onPress={() => this._onPress()}>
        <View style={[styles.box, { backgroundColor: item.color }]} >
          <Text numberOfLines={1} style={[styles.textDone, { color: color }]}>{done}</Text>
          {/* <Text style={styles.textDateList}>{moment(item.time).format("DD MMM YYYY").toString()}</Text> */}
          <Text numberOfLines={1} style={styles.textTitle}>{item.name}</Text>
          <Text numberOfLines={1} style={styles.textCategory2}>{item.category}</Text>
          <Text numberOfLines={4} style={styles.textDetail}>{item.detail}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderCategory = ({ item, index }) => {
    console.log(item)

    return (
      <TouchableOpacity style={[styles.buttonAddProduct, { alignSelf: 'center', height: 40, width: 140, marginTop: 10, backgroundColor: item.color}]} onPress={() => this.goback()}>
            <Text style={[styles.loginText, { color: 'white', fontSize: 15}]}>{item.category}}</Text>
          </TouchableOpacity>
    )
  }

  render() {
    console.log("MErmaid")
    console.log(this.props.data.list)
    return (
      <View style={styles.container}>
        <Fab />
        {/* <Header>> */}
        <View style={{ flexDirection: 'row', marginLeft: 10, justifyContent: 'space-between' }}>

          <TouchableOpacity style={styles.iconBox3} onPress={() => this.setState({pop : true})}>
            <ImageBackground style={{ height: 40, width: 40 }}
              source={require('../img/sort.png')} />
          </TouchableOpacity>
          <View style={styles.searchBox}>

            <TextInput style={{ color: '#20ab43' }} placeholder={"Search...."}></TextInput>
            <View style={styles.iconBox2}>
              <ImageBackground style={{ height: 40, width: 40 }}
                source={require('../img/search.png')} />
            </View>
          </View>
        </View>

        
        <FlatList
          data={this.props.data.list}
          renderItem={this.renderItem}
          numColumns={2}
          style={{ alignSelf: 'center'}}
        >

        </FlatList>
        {this.state.pop === true && 
        <View style={styles.sideBoxHead}>
          <TouchableOpacity style={styles.close} onPress={() => this.setState({pop: false})}>
            <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold', color: "rgba(45, 173, 78, 0.8)"}}>X</Text>
          </TouchableOpacity>
          <FlatList
          data={this.props.data.category}
          renderItem={this.renderCategory}
          style={{marginTop: 30}}
          ></FlatList>
          {/* <TouchableOpacity style={[styles.buttonAddProduct, { alignSelf: 'center', height: 40, width: 140, marginTop: 40, backgroundColor: 'rgba(45, 173, 78, 0.8)'}]} onPress={() => this.goback()}>
            <Text style={[styles.loginText, { color: 'white', fontSize: 15}]}>Programming</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonAddProduct, { alignSelf: 'center', height: 40, width: 140, marginTop: 10, backgroundColor: 'rgba(45, 173, 78, 0.8)'}]} onPress={() => this.goback()}>
            <Text style={[styles.loginText, { color: 'white', fontSize: 15}]}>Sains</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonAddProduct, { alignSelf: 'center', height: 40, width: 140, marginTop: 10, backgroundColor: 'rgba(45, 173, 78, 0.8)'}]} onPress={() => this.goback()}>
            <Text style={[styles.loginText, { color: 'white', fontSize: 15}]}>Data Mining</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonAddProduct, { alignSelf: 'center', height: 40, width: 140, marginTop: 10, backgroundColor: 'rgba(45, 173, 78, 0.8)'}]} onPress={() => this.goback()}>
            <Text style={[styles.loginText, { color: 'white', fontSize: 15}]}>Database</Text>
          </TouchableOpacity> */}
          <TouchableOpacity style={[styles.buttonAddProduct, { alignSelf: 'center', height: 40, width: 120,backgroundColor: 'rgba(45, 173, 78, 0.8)', position: 'absolute', bottom: 10 }]} onPress={() => this.goback()}>
            <Text style={[styles.loginText, { color: 'white', fontSize: 15}]}>Add Category</Text>
          </TouchableOpacity>
        </View>
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(Home)

