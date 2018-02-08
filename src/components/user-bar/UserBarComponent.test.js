import React from 'react'
import {shallow} from 'enzyme'
import UserBarComponent from './UserBarComponent'
import renderer from 'react-test-renderer';

describe('<UserBarComponent />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<UserBarComponent handleClick={() => {}} firstName={'First Name'} lastName={'Last Name'}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should call props.handleClick when is clicked', () => {
    const fn = jest.fn()
    const userBar = shallow(<UserBarComponent handleClick={fn} firstName={'First Name'} lastName={'Last Name'}/>)
    userBar.simulate('click')
    expect(fn).toBeCalled()
  })
})
