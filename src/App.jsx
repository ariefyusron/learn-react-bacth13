import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import TodoList from './pages/todolist'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>
  },
  {
    path: '/home',
    element: <div>Hello Home!</div>
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