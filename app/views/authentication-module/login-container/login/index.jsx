import React, { Component } from 'react';
import validator from 'validator';
import { FormGroup, ControlLabel, FormControl, Grid, Row, Col, Button } from 'react-bootstrap';
import styles from './styles';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  _renderAuthenticationErrors() {
    if (this.props.authenticationError) {
      return (<div>{this.props.authenticationError.errorMessage}</div>);
    }
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit({ email: this.state.email, password: this.state.password });
  }

  _getValidationState() {
    const length = this.state.password.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  _handleEmailChange(email) {
    this.setState({ email });
  }

  _handlePasswordChange(password) {
    this.setState({ password });
  }

  render() {
    return (
      <Grid className={styles.formContent}>
        <Row>
          <Col xs={12}><h1>Nirmala - Login</h1></Col>
          <Col xs={12}>
            <form>
              <FormGroup
                controlId="formBasicText"
                validationState={validator.isEmail(this.state.email) ? 'success' : 'error'}
              >
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  type="email"
                  value={this.state.email}
                  placeholder="Enter you email..."
                  onChange={(evt) => this._handleEmailChange(evt.target.value)}
                />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup
                controlId="formBasicText"
                validationState={this._getValidationState()}
              >
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  type="password"
                  value={this.state.password}
                  placeholder="Enter you password..."
                  onChange={(evt) => this._handlePasswordChange(evt.target.value)}
                />
                <FormControl.Feedback />
              </FormGroup>

              <Button type='submit'>
                Submit
              </Button>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }

}

Login.propTypes = {
  authenticationError: React.PropTypes.shape({
    errorMessage: React.PropTypes.string
  }),
  onSubmit: React.PropTypes.func.isRequired
};

export default Login;
