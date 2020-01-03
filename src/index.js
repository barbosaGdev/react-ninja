'use strict'

import Title from './app'
import React from 'react'
import Eventos from './Eventos'
import { render } from 'react-dom'

render( 
  <Title name="John" value1={10} value2={4}/>, 
  document.querySelector('[data-js="app"]')
)
 