import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import SuspenseFallback from './components/suspense-fallback'

const { Sider, Content } = Layout

const ContainerApp = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const items = [
    {
      key: '/',
      label: 'Produk'
    },
    {
      key: 'cashier-menu',
      label: 'Kasir',
      children: [
        {
          key: '/cashier',
          label: 'Produk',
        },
        {
          key: '/cashier/cart',
          label: 'Keranjang'
        }
      ]
    }
  ]

  const getOpenFirst = () => {
    const filterItems = items.filter(e => location.pathname.split('/')[1] === e.key.split('-')[0])

    return filterItems?.[0]?.key
  }

  return (
    <Layout>
      <Sider style={{ backgroundColor: 'white' }}>
        <Menu
          defaultSelectedKeys={[location.pathname]}
          defaultOpenKeys={[getOpenFirst()]}
          onClick={e => {
            navigate(e.key)
          }}
          mode='inline'
          items={items}
        />
      </Sider>
      <Content style={{ padding: '16px' }}>
        <SuspenseFallback>
          <Outlet />
        </SuspenseFallback>
      </Content>
    </Layout>
  )
};

export default ContainerApp;