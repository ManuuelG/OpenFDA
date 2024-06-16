import { createBrowserRouter } from 'react-router-dom'

import { ErrorPage, MainLayout, Catalog, DrugPageDetails } from 'pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Catalog />,
      },
      {
        path: '/:drugId',
        element: <DrugPageDetails />,
      },
    ],
  },
])

export default router
