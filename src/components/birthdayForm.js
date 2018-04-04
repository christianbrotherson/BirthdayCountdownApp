import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Clock from './clock';

class BirthdayForm extends Component {
  
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleGenerate = this.handleGenerate.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);

    this.state = {
      startDate: moment(),
      formCompleted: false,
    }

  }

  handleChange(date) {

    this.setState({
      startDate: date
    })
  }

  handleChangeDate() {
    this.setState({
      formCompleted: false
    })
  }

  handleGenerate() {
    this.setState({
      formCompleted: true
    })
  }

  render () {
    return (
      <div>
        {
          this.state.formCompleted ? 
            <div>
              <Clock birthdayFormState={this.state} />
              <a onClick={this.handleChangeDate}>Change Date </a>
            </div>
          :
            <div>
              <DatePicker 
                selected={this.state.startDate}
                onChange={this.handleChange}
              />
              <a onClick={this.handleGenerate}>Generate Countdown</a>
            </div>
        }
      </div>
    )
  }
}

export default BirthdayForm;