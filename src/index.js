import React from 'react'
import ReactDOM from 'react-dom/client'

import MyRoutes from './routes/routes'
import CreateGlobalStyle from './styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <CreateGlobalStyle/>
   <MyRoutes/>
  </>
)
