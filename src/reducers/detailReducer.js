const initialState = {movie: {}, image: {}}

const detailReducer = (state=initialState, action) => {
    switch(action.type){
        case "GET_DETAIL":
            return{
                ...state,
                movie: action.payload.movie,
                image: action.payload.image

            }
        case "DELETE_DETAIL":
            return{
                ...state, movie: {}, image: {}
            }
        default:
            return {...state}    
    }
}

export default detailReducer