import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import Store from './store'

import C2RentvsBuy from './pages/Tools/C2RentvsBuy'
import HttpsRedirect from 'react-https-redirect'


const history = syncHistoryWithStore(browserHistory, Store)

render((
  <Provider store={Store}>
    <HttpsRedirect>
      <Router history={history}>
        
          <Route path='/' component={C2RentvsBuy} />
          

      </Router>
    </HttpsRedirect>
  </Provider>
), document.getElementById('react-container'))
