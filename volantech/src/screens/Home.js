import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, TextInput, FlatList, TouchableOpacity} from 'react-native';
import styles from '../styles'
import Fab from '../components/fab'
import {connect} from 'react-redux'
import {fetchList} from '../redux/actions/data'
// import console = require('console');
// import { FlatList } from 'react-native-gesture-handler';

class Home extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.dispatch(fetchList())
  }

  renderItem = ({item, index}) => {
    console.log(item)
    let done = ""
    let color= ''
    if(item.isdone == 0){
      done = 'finished'  
      color = 'red'
    }else{
      color ='green'
      done = 'unfinished'  
    }
    
    return    (
        <TouchableOpacity 
        onLongPress={() => this._onLongPress(item.id, index)} 
        delayLongPress={1500}
        onPress={() =>  this._onPress(item.title, item.note, item.id, item.id_category)}>
            <View style={[styles.box, {backgroundColor:item.color}] } >  
                <Text numberOfLines={1} style={[styles.textDone, {color: color}]}>{done}</Text>
                {/* <Text style={styles.textDateList}>{moment(item.time).format("DD MMM YYYY").toString()}</Text> */}
                <Text numberOfLines={1} style={styles.textTitle}>{item.name}</Text>
                <Text numberOfLines={1} style={styles.textCategory2}>{item.category}</Text>
                <Text numberOfLines={4} style={styles.textDetail}>{item.detail}</Text>
            </View>
        </TouchableOpacity>
      )
    }

  render() {
    console.log("MErmaid")
    console.log(this.props.data.list)
    return (
      <View style={styles.container}>
        {/* <Header>> */}
        <View style={{ flexDirection: 'row', marginLeft: 10,justifyContent: 'space-between'}}>
                    <View style={styles.iconBox3}>
                        <ImageBackground style={{ height: 40, width: 40 }}
                            source={require('../img/sort.png')} />
                    </View>
                    <View style={styles.searchBox}>

                        <TextInput style={{ color: '#20ab43' }} placeholder={"Search...."}></TextInput>
                        <View style={styles.iconBox2}>
                            <ImageBackground style={{ height: 40, width: 40 }}
                                source={require('../img/search.png')} />
                        </View>
                    </View>
                </View>

                <Fab/>
        <FlatList 
        data={this.props.data.list}
        renderItem={this.renderItem}
        numColumns={2}
        style={{alignSelf:'center'}}
        >

        </FlatList>
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

