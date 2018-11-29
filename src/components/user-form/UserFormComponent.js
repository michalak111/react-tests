import React from 'react'
import { Form, Field } from 'react-final-form'
import PropTypes from 'prop-types'

export const UserFormComponent = ({ data, onSubmit }) => (
  <Form
    onSubmit={(formValues) => onSubmit(formValues)}
    initialValues={data}
    render={({ handleSubmit, pristine, invalid }) => (
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="title">Edit User</h2>
        <div className="field control">
          <label className="label">First Name</label>
          <Field className="input" name="firstName" component="input" placeholder="First Name" />
        </div>
        <div className="field control">
          <label className="label">Last Name</label>
          <Field className="input" name="lastName" component="input" placeholder="Last Name" />
        </div>
        <button className="button" type="submit" disabled={pristine || invalid}>
          Submit
        </button>
      </form>
    )}
  />
)

UserFormComponent.propTypes = {
  data: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}
