import React, { Component } from 'react'
import UserListComponent from '../../components/user-list/UserListComponent'
import { UserFormComponent } from '../../components/user-form/UserFormComponent'
import { withCollectionAndForm } from '../../HOC/withCollectionAndForm'
import PropTypes from 'prop-types'

class withTeachersCollectionContainer extends Component {
  render () {
    const { collection, formData, setFormData, updateItemData } = this.props
    return (
      <div className="rb-teachers-container">
        <div className="columns">
          <div className="column">
            <UserListComponent list={collection} itemClicked={setFormData}/>
          </div>
          <div className="column">
            <UserFormComponent data={formData} onSubmit={updateItemData}/>
          </div>
        </div>
      </div>
    )
  }
}

withTeachersCollectionContainer.propTypes = {
  collection: PropTypes.array.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  updateItemData: PropTypes.func.isRequired
}

const TeachersCollectionContainer = withCollectionAndForm()(withTeachersCollectionContainer)

export default TeachersCollectionContainer
