import React from 'react'
import {shallow} from 'enzyme'
import { UserFormComponent } from './UserFormComponent'
import { Form } from 'react-final-form'

describe('UserFormComponent', () => {
  it('should render Form', () => {
    const wrapper = shallow(<UserFormComponent data={{}} onSubmit={() =>{}} />)
    expect(wrapper.find(Form).length).toBe(1)
  })
})
