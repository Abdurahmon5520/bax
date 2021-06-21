import axios from "axios";
import { toast } from "react-toastify";
import { API_PATH } from "../../tools/constants";
import { SET_STATE } from "../types/newsTypes"


export const setState = (data) => {
    return {
        type: SET_STATE ,
        payload: data
    }
};
export const saveNews =(event, errors, values) =>(dispatch, getState) => {
    axios.post(API_PATH + "news", {...values, photo: getState().news.photo})
    .then((res) => {
        toast.success(res.data.message);
        dispatch(setState({open: false, url: "", photo: "" }));
        dispatch(getNews({}))
        console.log(res)
    })
}

export const savFile = (file) => (dispatch) =>  {
    axios.post(API_PATH + "file/save", file )
    .then((res) => {
      console.log(res);  
      dispatch(setState({photo: res.data.id}))
    })
}

export const getNews = (dispatch) => {
    axios.get(API_PATH + "news")
    .then((res) => {
        dispatch(setState({news: res.data.data}))
    }) 
}
export const deleteNews = () => (dispatch, getState) => {
    axios.delete(API_PATH + "news/ " + getState().news.selectedIndex)
    .then((res) => {
        toast.success(res.data.message);
        dispatch(getNews());
        dispatch(setState({deleteModal: false}))
    })
}