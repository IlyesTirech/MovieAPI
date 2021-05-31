import axios from 'axios'
import {DetailsURL, DetailImages, creditsURL, videoURL} from '../api'

export const loadDetail = (id) => async (dispatch) => { 

    const detailData = await axios.get(DetailsURL(id))
    const detailImages = await axios.get(DetailImages(id))
    const creditsData = await axios.get(creditsURL(id))
    const videoData = await axios.get(videoURL(id))

    dispatch({
        type: "GET_DETAIL",
        payload: {
            movie: detailData.data,
            image: detailImages.data,
            credits: creditsData.data,
            videos: videoData.data,
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