const initState = { //initial state of the reducer
    popular: [],
    topRated: [],
    upComing: []

}

const moviesReducer = (state = initState, action) => {
    switch(action.type){
        case "FETCH_MOVIES":
            return {...state, 
                popular:  action.payload.popular,
                topRated: action.payload.topRated,
                upComing: action.payload.upComing,
            } //sending it to update popular state
        default:
        return  {...state}
    }
}



export default moviesReducer