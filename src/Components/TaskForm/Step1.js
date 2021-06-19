import React from 'react';

class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }

    return (
      <div className="form-group">
        <select>
          <option value="none" selected disabled hidden>
            Select a Registered NGO
          </option>
          <option value="NGO Worker">NGO Worker</option>
          <option value="User">Volunteer</option>
        </select>
        <p>or register your NGO</p>
        <input
          name="NGOname"
          className="form-control"
          type="text"
          placeholder="NGO name"
          value={this.props.NGOname}
          onChange={this.props.handleChange}
        />

        <input
          name="email"
          className="form-control"
          type="email"
          placeholder="Email Address"
          value={this.props.email}
          onChange={this.props.handleChange}
        />
        <input
          name="city"
          className="form-control"
          type="location"
          placeholder="City"
          value={this.props.city}
          onChange={this.props.handleChange}
        />
        <input
          name="mobile"
          className="form-control"
          type="text"
          placeholder="Contact"
          value={this.props.mobile}
          onChange={this.props.handleChange}
        />
        <input
          name="about"
          className="form-control"
          type="text"
          placeholder="About"
          value={this.props.about}
          onChange={this.props.handleChange}
        />
        <input
          name="description"
          className="form-control"
          type="text"
          placeholder="Description"
          value={this.props.description}
          onChange={this.props.handleChange}
        />
        <input
          name="head"
          className="form-control"
          type="text"
          placeholder="Head of NGO"
          value={this.props.head}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default Step1;
