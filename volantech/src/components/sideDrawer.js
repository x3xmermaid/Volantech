import React, {Component} from 'react';
import {TouchableOpacity, View , Text, StyleSheet, ImageBackground, FlatList, Modal, Image, Alert} from 'react-native'
var styles = require('../styles')
// import PopupCategory from './modals'
import { ScrollView } from 'react-native-gesture-handler';
// import axios from 'axios'
// import {connect} from 'react-redux'
// import {fetchCategory, deleteCategory} from '../redux/actions/category'
// import { fetchNotes , getSearch} from '../redux/actions/notes';
import { withNavigation } from 'react-navigation';
// import console = require('console');

class SideDrawer extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            modalVisible: false,
            category: [],
        }
        this.setModalVisible = this.setModalVisible.bind(this);
    }
    _Handler = () => {
        this.props._onPressButtonSideBar(false)
    }
    setModalVisible(visible) {
        // console.log("masuk stet");
        this.setState({modalVisible: visible});
    }
    componentDidMount(){
        this.getCategory();
    }
    getCategory = () =>{
        this.props.dispatch(fetchCategory())
    }
    newFetch=()=>{
        let search=null
        // if(this.props.notes.search !== ''){
        //      let search = this.props.notes.search
        //     this.props.dispatch(getSearch(search,this.props.notes.sort, this.props.notes.idCategory, this.props.notes.pageLimit))
        // }else{
        //     this.props.dispatch(fetchNotes(search,this.props.notes.sort, this.props.notes.idCategory, this.props.notes.pageLimit))
        // }
        this.props.navigation.closeDrawer()
    }
    // closeDraw
    // getNotesCategory = (no) =>{
    //     let search=null
    //     this.props.dispatch({type: "SET_ID_CATEGORY", payload: no})
    //     if(this.props.notes.search !== ''){
    //         search = this.props.notes.search
    //         this.props.dispatch(getSearch(search,this.props.notes.sort ,no, this.props.notes.pageLimit))
    //     }else{
    //         this.props.dispatch(fetchNotes(search,this.props.notes.sort ,no, this.props.notes.pageLimit))
    //     }
    //     this.props.dispatch({type: "SET_SIDEBAR", payload: false})
    //     this.props.navigation.closeDrawer()
    // }
    _onPressButtonSideBar = (value) => {
        this.props.dispatch({type: "SET_SIDEBAR", payload: value})
        this.props.navigation.closeDrawer()
    }
    // deleteCategory = (value) => {
    //     Alert.alert(
    //         'Delete', 'Are you sure delete this category ?',
    //         [
    //           {
    //             text: 'Cancel',
    //             style: 'cancel'
    //           },
    //           {
    //             text: 'OK',
    //             onPress: () => {
    //               this.props.dispatch(deleteCategory(value)),
    //               this.newFetch(),
    //               this.props.dispatch(fetchCategory());
    //               this.props.navigation.closeDrawer()}
    //           },
    //         ],
    //         {cancelable: true}
    //       )
    // }
    _keyExtractor = (item, index) => item.no
    renderItem = ({item, index}) => {
        let data = require('../img/foot.png')
            switch(item.image){
                case 'lamp':
                    data = require('../img/lamp.png')
                    break;
                case 'love':
                    data = require('../img/love.png')
                    break;
                case 'hand':
                    data = require('../img/hand.png')
                    break;
            }
            return (
            <TouchableOpacity 
            onLongPress={() => this.deleteCategory(item.no)}
            delayLongPress={2000}
            onPress={() => this.getNotesCategory(item.no)} >
                <View style={styles.sideItem}>
                    <ImageBackground source={data} style={styles.sideIcon}></ImageBackground>
                    <Text style={styles.textItem}>{item.category}</Text>
                </View>
            </TouchableOpacity>
            )
    }
    render(){
        console.log(this.props.category.category)
        return (
            <View>
                <Text>Mermaid</Text>
            </View>
        )
    }
}
// const mapStateToProps = (state) => {
//     return {
//       notes: state.home,
//       category: state.category
//     }
//   }
  
//   export default connect(mapStateToProps)(withNavigation(SideDrawer))
export default SideDrawer