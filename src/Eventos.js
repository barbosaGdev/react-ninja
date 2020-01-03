'use strict'

import React, { Component } from 'react'
import Button from './button'

class Eventos extends Component {
  render () {
    return (
      <div className="container" onClick={function (e){
        document.getElementById('show').innerHTML = 'Barbosa'
       
      }}>
       <Button />
        <h1 id="show">Olá</h1>
      </div>

      
    ) 
  }
}

export default Eventos;