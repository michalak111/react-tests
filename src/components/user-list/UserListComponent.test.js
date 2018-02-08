import React from 'react'
import {mount} from 'enzyme'
import UserListComponent from './UserListComponent'
import UserBarComponent from '../user-bar/UserBarComponent'

describe('UserListComponent', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(
      <UserListComponent
        list={[{id: 0, firstName: 'Test1', lastName: 'Test1'}, {id: 1, firstName: 'Test2', lastName: 'Test2'}]}
        itemClicked={() => {}}
      />
    )
  })
  it('should render list of users (UserBarComponent)', () => {
    expect(wrapper.find(UserBarComponent).length).toBe(2)
  })
  it('should run itemClicked when UserBarComponent is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(), 'itemClicked')
    wrapper.find(UserBarComponent).last().simulate('click')
    expect(spy).toBeCalled()
  })
})
