import { useState } from 'react'

import HomePage from './pages/HomePage'
import ShowPage from './pages/ShowPage'
import NotFoundPage from './pages/NotFoundPage'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Define your loader function
const showLoader = async ({ params }) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${params.id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }
  return response.json();
};



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />

  },
  {
    path: '/show',
    element: <ShowPage />,
  },
  {
    path: '/show/:id',
    element: <ShowPage />,
    loader: showLoader,
  }
])


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
