import Login from './login/Login';
import Pokemon from './pokemon/Pokemon';
import Post from './post/Post';
import Users from './users/Users';

export const routes = [
  {
    path: '/',
    component: Pokemon
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/post',
    component: Post,
  },
  {
    path: '/users',
    component: Users,
  }
]
