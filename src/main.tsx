import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from './modules/route'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider />
  </React.StrictMode>,
)
