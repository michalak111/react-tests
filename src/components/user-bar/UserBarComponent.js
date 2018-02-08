import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './user-bar.scss'

class UserBarComponent extends Component {
  static propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }
  render () {
    const {firstName, lastName, handleClick} = this.props
    return (
      <div className={'rp-user-bar card'} onClick={handleClick}>
        <p>First Name: <strong>{firstName}</strong></p>
        <p>Last Name: <strong>{lastName}</strong></p>
      </div>
    )
  }
}

export default UserBarComponent
