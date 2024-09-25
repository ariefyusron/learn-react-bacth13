import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import TodoList from './pages/todolist'
import Home from './pages/home'
import Detail from './pages/detail'

import ContainerHome from './ContainerHome'

const router = createBrowserRouter([
  {
    path: '/home',
    element: <ContainerHome />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'detail',
        element: <Detail />,
      }
    ]
  },
  {
    path: '/todolist',
    element: <TodoList />
  }
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;