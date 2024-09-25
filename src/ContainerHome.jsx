import { Outlet, useLocation } from 'react-router-dom'

import Topbar from './components/Topbar'

const Home = () => {
  const location = useLocation()

  const listHeader = [
    {
      pathname: '/home',
      label: 'Home'
    },
    {
      pathname: '/home/detail',
      label: 'Detail'
    }
  ]

  const getLabel = () => {
    const index = listHeader.findIndex(e => e.pathname === location.pathname)

    return listHeader[index].label
  }

  return (
    <>
      <Topbar title={getLabel()} />
      <Outlet />
    </>
  )
};

export default Home;