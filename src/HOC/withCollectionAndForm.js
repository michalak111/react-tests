import React from 'react'

export const withCollectionAndForm = (props) => (WrappedComponent) => {
  return class withCollectionAndForm extends React.Component {
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
      this.setFormData = this.setFormData.bind(this)
      this.updateItemData = this.updateItemData.bind(this)
    }

    setFormData (teacherId) {
      this.setState((prevState) => ({
        ...prevState,
        formData: prevState.collection.find(teacher => teacher.id === teacherId)
      }))
    }

    updateItemData (data) {
      const newArray = this.state.collection
      const teacherIndex = newArray.findIndex(teacher => teacher.id === data.id)
      newArray[teacherIndex] = data
      this.setState((prevState) => ({
        ...prevState,
        collection: newArray
      }))
    }

    render () {
      const { formData, collection } = this.state
      return (
        <WrappedComponent
          collection={collection}
          formData={formData}
          setFormData={this.setFormData}
          updateItemData={this.updateItemData}
        />
      )
    }
  }
}
