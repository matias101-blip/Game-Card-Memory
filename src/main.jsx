import * as React from 'react'
import { ChakraProvider, Heading} from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider, Route, Link} from 'react-router-dom'
const rootElement = document.getElementById('root')
import Inicio from "./Inicio/inicio"
import themes from "../theme"


const router = createBrowserRouter([
  {
    path:"Inicio",
    element:(<Inicio/>)
  },
  {
    path:"/",
    element:(<Heading>Estas en la raiz</Heading>)
  }
])


ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={themes}>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>,
);
