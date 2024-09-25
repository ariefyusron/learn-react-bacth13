import { Outlet } from 'react-router-dom'

import Topbar from './components/Topbar'

const Home = () => {

  return (
    <>
      <Topbar />
      <Outlet />
    </>
  )
};

export default Home;