import React from 'react';

class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }

    return (
      <div className="form-group">
        <input
          name="title"
          className="form-control"
          type="text"
          placeholder="Task Title"
          value={this.props.title}
          onChange={this.props.handleChange}
        />
        <input
          name="abouttask"
          className="form-control"
          type="text"
          placeholder="About Task"
          value={this.props.aboutTask}
          onChange={this.props.handleChange}
        />
        <input
          name="taskdesc"
          className="form-control"
          type="text"
          placeholder="Task Description"
          value={this.props.TaskDescription}
          onChange={this.props.handleChange}
        />
        <input
          name="volreq"
          className="form-control"
          type="text"
          placeholder="Volunteers Required"
          value={this.props.volReq}
          onChange={this.props.handleChange}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Volunteers Current"
          value={this.props.volCur}
          onChange={this.props.handleChange}
        />
        <input
          name="volcur"
          className="form-control"
          type="text"
          placeholder="Eligibility Criteria"
          value={this.props.criteria}
          onChange={this.props.handleChange}
        />
        <input
          name="tags"
          className="form-control"
          type="text"
          placeholder="Add Tags"
          value={this.props.tags}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default Step2;
