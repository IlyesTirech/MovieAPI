const initialState = {movie: {}, image: {}, credits: {}, videos: {}}

const detailReducer = (state=initialState, action) => {
    switch(action.type){
        case "GET_DETAIL":
            return{
                ...state,
                movie: action.payload.movie,
                image: action.payload.image,
                credits: action.payload.credits,
                videos: action.payload.videos,

            }
        case "DELETE_DETAIL":
            return{
                ...state, movie: {}, image: {}, credits: {}, videos: {}
            }
        default:
            return {...state}    
    }
}

export default detailReducer