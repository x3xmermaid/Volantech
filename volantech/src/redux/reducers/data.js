const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    category: [],
    list: [
        // {
        //     // id: 1,
        //     name: "belajar",
        //     category: "buku",
        //     color: "#2FC2DF",
        //     isDone: false,
        // },
        // {
        //     // id: 1,
        //     name: "olahraga",
        //     category: "lari",
        //     color: "#2FC2DF",
        //     isDone: false,
        // },
    ],
}

const dummyReducer = function(state=initialState, action){
    switch (action.type) {
        case "TASK_PENDING":
            return  {...state, fetching:true};
            break;
        case "TASK_FULFILLED":
            return  {...state, list: action.payload.data.data, fetching:false};
            break;
        case "TASK_REJECTED":
            return  {...state, fetching:false, error: action.payload};
            break;
        case "CATEGORY_PENDING":
            return  {...state, fetching:true};
            break;
        case "CATEGORY_FULFILLED":
            return  {...state, category: action.payload.data.data, fetching:false};
            break;
        case "CATEGORY_REJECTED":
            return  {...state, fetching:false, error: action.payload};
            break;
        default:
            break;
    }
    return state;
}


export default dummyReducer