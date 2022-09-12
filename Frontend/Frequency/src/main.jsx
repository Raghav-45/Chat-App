import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
import ReactDOM from 'react-dom/client'
import App from './App'

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      500: "#3182ce",
      900: "#1a202c",
    },
    primary: {
      100: "#3182ce",
    },
  },
  components: {
    Button: {
      variants: {
        'primary': {
          bg: '#3182ce',
          color: 'white',
        },
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
