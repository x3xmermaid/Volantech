import axios from 'axios'
// import console = require('console');

export const fetchList = () =>{
    let link = `https://mermaidid.herokuapp.com/mqb/list?join=category+category+id`
    // // let link = `http://192.168.100.5:3001/manual/cart`
    // console.log(link)
    return {
        type: 'TASK',
        payload: axios.get(link)
    }
}

export const fetchCategory = () =>{
    let link = `https://mermaidid.herokuapp.com/mqb/category`
    // // let link = `http://192.168.100.5:3001/manual/cart`
    // console.log(link)
    return {
        type: 'CATEGORY',
        payload: axios.get(link)
    }
}