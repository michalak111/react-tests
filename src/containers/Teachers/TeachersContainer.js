import React, {Component} from 'react'
import UserListComponent from '../../components/user-list/UserListComponent'
import { UserFormComponent } from '../../components/user-form/UserFormComponent'
import '../../App.scss'

class TeachersContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      teachersList: [
        { id: 0, firstName: 'Test1', lastName: 'Test1' },
        { id: 1, firstName: 'Test2', lastName: 'Test2' },
        { id: 2, firstName: 'Test3', lastName: 'Test3' },
        { id: 3, firstName: 'Test4', lastName: 'Test4' },
        { id: 4, firstName: 'Test5', lastName: 'Test5' }
      ],
      teacherForm: { id: 0, firstName: 'Test1', lastName: 'Test1' }
    }
    this.setFormData = this.setFormData.bind(this)
    this.updateTeacherData = this.updateTeacherData.bind(this)
  }

  setFormData (teacherId) {
    this.setState((prevState) => ({
      ...prevState,
      teacherForm: prevState.teachersList.find(teacher => teacher.id === teacherId)
    }))
  }

  updateTeacherData (data) {
    const newArray = this.state.teachersList
    const teacherIndex = newArray.findIndex(teacher => teacher.id === data.id)
    newArray[teacherIndex] = data
    this.setState((prevState) => ({
      ...prevState,
      teachersList: newArray
    }))
  }

  render () {
    const {teachersList, teacherForm} = this.state
    return (
      <div className="rb-teachers-container">
        <div className="columns">
          <div className="column">
            <UserListComponent list={teachersList} itemClicked={this.setFormData}/>
          </div>
          <div className="column">
            <UserFormComponent data={teacherForm} onSubmit={this.updateTeacherData}/>
          </div>
        </div>
      </div>
    )
  }
}

export default TeachersContainer
