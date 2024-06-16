import { createBrowserRouter } from 'react-router-dom'

import { ErrorPage, MainLayout, Catalog } from 'pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Catalog />,
      },
    ],
  },
])

export default router
