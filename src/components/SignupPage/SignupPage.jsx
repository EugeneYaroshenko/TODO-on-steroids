import React, { Component, PropTypes } from 'react'
import SignupForm from './SignupForm'
import { connect } from 'react-redux'
import { userSignupRequest, isUserExists } from '../../actions/signupActions'
import { addFlashMessage } from '../../actions/flashMessages'

class SignupPage extends Component {
render() {
  const { userSignupRequest, addFlashMessage, isUserExists } = this.props
  return (
    <div className="signup">
        <div>
          <h1>Sign Up</h1>
          <SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage} isUserExists={isUserExists}/>
        </div>
    </div>
  )
}
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest, addFlashMessage, isUserExists } )(SignupPage)