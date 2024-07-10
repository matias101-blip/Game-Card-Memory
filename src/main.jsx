import * as React from "react";
import { createContext, useState } from "react";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
const rootElement = document.getElementById("root");
import Inicio from "./Inicio/inicio";
import themes from "../theme";

export const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");
  const Users = { user1, user2 };
  const setUsers = { setUser1, setUser2 };
  return (
    <UsersContext.Provider value={{ Users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
]);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={themes}>
      <UsersProvider>
        <RouterProvider router={router} />
      </UsersProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
