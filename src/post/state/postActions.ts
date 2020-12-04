import {Dispatch} from 'redux';
import {PostDispatchTypes, POST_LOADING, POST_FAIL, POST_SUCCESS} from '../../api/postTypes';
import axios from 'axios';

export const GetPost = () => async (dispatch: Dispatch<PostDispatchTypes>) => {
  try {
    dispatch({
      type: POST_LOADING
    })
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({
      type: POST_SUCCESS,
      payload: res.data
    })
  } catch(e) {
    dispatch({
      type: POST_FAIL
    })
  }
};
