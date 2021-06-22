import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import './style.scss';
import { withRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      // NGO details
      NGOname: '',
      city: '',
      email: '',
      mobile: '',
      about: '',
      description: '',
      head: '',
      // task details
      title: '',
      aboutTask: '',
      TaskDescription: '',
      volReq: '',
      volCur: '',
      criteria: '',
      tags: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  _next() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : ++currentStep;
    this.setState({ currentStep });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : --currentStep;
    this.setState({ currentStep });
  }

  get previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button type="button" onClick={this._prev}>
          Prev
        </button>
      );
    }
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button type="button" onClick={this._next}>
          Next
        </button>
      );
    }
    return null;
  }

  handleChange(e) {
    e.preventDefault();

    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  redirectToHome = () => {
    const { history } = this.props;
    if (history) history.push('/');
  };

  handleSubmit(e) {
    const { NGOname, title } = this.state;
    e.preventDefault();
    console.log(NGOname, title);

    this.redirectToHome();
  }

  render() {
    return (
      <Layout>
        <div>
          <div className="main-form">
            <div className="head-row">
              <h1>Add a Task</h1>
              <p>Step {this.state.currentStep}</p>
            </div>

            <form onSubmit={this.handleSubmit}>
              <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                NGOname={this.state.NGOname}
                city={this.state.city}
                email={this.state.email}
                mobile={this.state.mobile}
                about={this.state.about}
                description={this.state.description}
                head={this.state.head}
              />

              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                title={this.state.title}
                aboutTask={this.state.aboutTask}
                TaskDescription={this.state.TaskDescription}
                volCur={this.state.volCur}
                volReq={this.state.volReq}
                criteria={this.state.criteria}
                tags={this.state.tags}
              />

              <Step3
                currentStep={this.state.currentStep}
                handleChange={this.state.handleChange}
                NGOname={this.state.NGOname}
                city={this.state.city}
                email={this.state.email}
                mobile={this.state.mobile}
                about={this.state.about}
                description={this.state.description}
                head={this.state.head}
                title={this.state.title}
                aboutTask={this.state.aboutTask}
                TaskDescription={this.state.TaskDescription}
                volCur={this.state.volCur}
                volReq={this.state.volReq}
                criteria={this.state.criteria}
                tags={this.state.tags}
              />
              <div className="btn-row">
                {this.previousButton}
                {this.nextButton}
              </div>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(AddTask);
