'use strict'

import React from 'react'
import Eventos from './Eventos'
 
function soma(value1,value2) {
  soma = value1 + value2
}

// const Title = (props) => <h1>Olá Barbosa! {props.value1 + props.value2}</h1>



const Title = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Desconhecido'
    }
  },

  render: function () {
    return (
      <div data-id='1'>
        <h2 className="title">Olá {this.props.name}</h2>
        <p>Seu número é {soma(this.props.value1, this.props.value2)}</p>
        <Eventos count={1}/>
      </div>
    )
  }
})

export default Title