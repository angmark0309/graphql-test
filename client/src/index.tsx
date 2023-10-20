import React, {createContext, PropsWithChildren, useContext, useState} from 'react'
import ReactDOM from 'react-dom'

import { ApolloProvider } from "@apollo/client"
import { apolloClient } from "./apolloClient";

import './index.css'
import App from './App'

type UseRouter = {
    paths: string[]
    navigate: (paths: string[]) => void
};
const RouterContext = createContext<UseRouter>({} as UseRouter);
function RouterProvider({initialRoute, children}: PropsWithChildren<{initialRoute: string[]}>) {
    const [paths, setPaths] = useState(initialRoute);
    return (<RouterContext.Provider value={{paths, navigate: setPaths}}>{children}</RouterContext.Provider>);
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
      throw new Error('useRouter needs to be used under <RouterProvider />')
  }

  return context;
}

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
        <RouterProvider initialRoute={['overview']}>
            <App />
        </RouterProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
