import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobPage from './Pages/JobPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />
}

export default App
