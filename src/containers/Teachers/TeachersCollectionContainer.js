import React, {Component} from 'react'
import UserListComponent from '../../components/user-list/UserListComponent'
import { UserFormComponent } from '../../components/user-form/UserFormComponent'
import UserCollection from '../../components/user-collection/UserCollectionHOC'

class TeachersContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      collection: [
        { id: 0, firstName: 'Test1', lastName: 'Test1' },
        { id: 1, firstName: 'Test2', lastName: 'Test2' },
        { id: 2, firstName: 'Test3', lastName: 'Test3' },
        { id: 3, firstName: 'Test4', lastName: 'Test4' },
        { id: 4, firstName: 'Test5', lastName: 'Test5' }
      ],
      formData: { id: 0, firstName: 'Test1', lastName: 'Test1' }
    }
  }
  render () {
    const {collection, formData} = this.state
    return (
      <div className="rb-teachers-container">
        <div className="columns">
          <div className="column">
            <UserListComponent list={collection} itemClicked={this.setFormData}/>
          </div>
          <div className="column">
            <UserFormComponent data={formData} onSubmit={this.updateTeacherData}/>
          </div>
        </div>
      </div>
    )
  }
}

export const TeachersCollectionContainer = UserCollection(TeachersContainer)
