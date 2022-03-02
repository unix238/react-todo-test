import { Navigate } from "react-router-dom";
import { Home } from '../pages/Home';
import { Todo } from '../pages/Todo';

export const defaultRoutes = [
    {path: '/', component: <Home />, exact: true},
    {path: '/todo', component: <Todo />, exact: true},
    {path: '/*', component:<Navigate to="/" />, exact:true},
]