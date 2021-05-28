import axios from 'axios'
import {DetailsURL, DetailImages} from '../api'

export const loadDetail = (id) => async (dispatch) => { 

    const detailData = await axios.get(DetailsURL(id))
    const detailImages = await axios.get(DetailImages(id))

    dispatch({
        type: "GET_DETAIL",
        payload: {
            movie: detailData.data,
            image: detailImages.data,
        }
       

    })
}

export const deleteDetail = (dispatch) => {
    dispatch({
        type: "DELETE_DETAIL"
    }
    )
}
   

export default loadDetail 