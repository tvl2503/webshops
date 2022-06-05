import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'
const Button = props => {
  return (
    <button onClick={props.onclick} className = 'btn'>
        {props.children}
    </button>
  )
}

Button.propTypes = {}

export default Button