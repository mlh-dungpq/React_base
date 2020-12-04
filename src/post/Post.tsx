import React, {useEffect, } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootStore} from '../store';
import {GetPost} from './state/postActions';
import './Post.scss';

export default function Post() {
  const dispatch = useDispatch();
  const postState = useSelector((state: RootStore) => state.post);

  useEffect(() => {
    handleGet();
  },[dispatch]);

  const handleGet = () => {
    dispatch(GetPost());
  }

  return (
    <div className="divPost">
      <h1>Post Screen</h1>
      {postState.post ? (<div>
        <table>
          <thead>
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
          {postState.post.map(item => {
            return (
              <tr>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            )})}
          </tbody>
        </table>
      </div>) : (<div>loading</div>)}
    </div>
  )
}
