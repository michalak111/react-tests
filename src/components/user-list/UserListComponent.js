import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserBarComponent from '../user-bar/UserBarComponent'

class UserListComponent extends Component {
  constructor (props) {
    super(props)
    this.itemClicked = this.itemClicked.bind(this)
  }

  static propTypes = {
    list: PropTypes.array.isRequired,
    itemClicked: PropTypes.func
  }

  itemClicked (e, userId) {
    e.preventDefault()
    this.props.itemClicked(userId)
  }

  render () {
    const { list } = this.props
    return (
      <div>
        {
          list.map((user) => (
            <UserBarComponent
              key={user.id}
              handleClick={e => this.itemClicked(e, user.id)}
              firstName={user.firstName}
              lastName={user.lastName}
            />
          ))
        }
      </div>
    )
  }
}

export default UserListComponent
