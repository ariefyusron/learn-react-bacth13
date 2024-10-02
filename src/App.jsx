import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import SuspenseFallback from './components/suspense-fallback'

const ProductPage = lazy(() => import('./pages/product'))
const CartPage = lazy(() => import('./pages/cart'))
const ProductCashierPage = lazy(() => import('./pages/product-cashier'))

const ContainerApp = lazy(() => import('./ContainerApp'))

const router = createBrowserRouter([
  {
    path: '',
    element: <ContainerApp />,
    children: [
      {
        path: '',
        element: <ProductPage />
      },
      {
        path: 'cashier',
        children: [
          {
            path: '',
            element: <ProductCashierPage />
          },
          {
            path: 'cart',
            element: <CartPage />
          }
        ]
      }
    ]
  }
]);

const App = () => (
  <SuspenseFallback>
    <RouterProvider router={router} />
  </SuspenseFallback>
);

export default App;