import React from 'react'
import { mount } from 'enzyme/build'
import { withCollectionAndForm } from './withCollectionAndForm'

describe('hoc test', () => {
  let wrapper
  const TestContainerWithCollectionAndForm = withCollectionAndForm()(() => null)
  beforeEach(() => {
    wrapper = mount(<TestContainerWithCollectionAndForm/>)
  })

  it('should change teacherForm data when setFormData is called', () => {
    wrapper.instance().setFormData(2)
    expect(wrapper.instance().state.formData).toEqual({ id: 2, firstName: 'Test3', lastName: 'Test3' })
  })
  it('should update teacher data on updateTeacherData', () => {
    wrapper.instance().updateItemData({ id: 3, firstName: 'Teacher', lastName: 'Teacher' })
    expect(wrapper.instance().state.collection[3]).toEqual({ id: 3, firstName: 'Teacher', lastName: 'Teacher' })
  })
})
