import { ConfigProvider } from 'antd'

const Theme = () =>
  ConfigProvider.config({
    theme: {
      // primaryColor: '#FAA32C',
      primaryColor: '#2A2A2A',
    },
  })

export default Theme
