import React from 'react'
import TeachersContainer from './TeachersContainer'
import { mount } from 'enzyme'

describe('<TeachersContainer />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(<TeachersContainer/>)
    wrapper.setState({
      teachersList: [
        { id: 0, firstName: 'Test1', lastName: 'Test1' },
        { id: 1, firstName: 'Test2', lastName: 'Test2' },
        { id: 2, firstName: 'Test3', lastName: 'Test3' },
        { id: 3, firstName: 'Test4', lastName: 'Test4' },
        { id: 4, firstName: 'Test5', lastName: 'Test5' }
      ],
      teacherForm: { id: 0, firstName: 'Test1', lastName: 'Test1' }
    })
  })
  it('should render', () => {
    expect(TeachersContainer.length).toBe(1)
  })
  it('should change teacherForm data when setFormData is called', () => {
    wrapper.instance().setFormData(2)
    expect(wrapper.instance().state.teacherForm).toEqual({ id: 2, firstName: 'Test3', lastName: 'Test3' })
  })
  it('should update teacher data on updateTeacherData', () => {
    wrapper.instance().updateTeacherData({ id: 3, firstName: 'Teacher', lastName: 'Teacher' })
    expect(wrapper.instance().state.teachersList[3]).toEqual({ id: 3, firstName: 'Teacher', lastName: 'Teacher' })
  })
})
