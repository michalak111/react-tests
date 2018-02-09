export default function UserCollection (WrappedComponent) {
  return class UserCollectionComponent extends WrappedComponent {
    constructor (props) {
      super(props)
      this.setFormData = this.setFormData.bind(this)
      this.updateTeacherData = this.updateTeacherData.bind(this)
    }

    setFormData (teacherId) {
      this.setState((prevState) => ({
        ...prevState,
        formData: prevState.collection.find(teacher => teacher.id === teacherId)
      }))
    }

    updateTeacherData (data) {
      const newArray = this.state.collection
      const teacherIndex = newArray.findIndex(teacher => teacher.id === data.id)
      newArray[teacherIndex] = data
      this.setState((prevState) => ({
        ...prevState,
        collection: newArray
      }))
    }
  }
}
