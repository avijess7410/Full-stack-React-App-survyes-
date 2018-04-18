//SurveyForm shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";
// const FIELDS = [
//   { label: "Survey Title", name: "title" },
//   { label: "Subject Line", name: "subject" },
//   { label: "Email Body", name: "Body" },
//   { label: "Recipient List", name: "emails" }
// ];

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  errors.recipients = validateEmails(values.recipients || "");
  //cleaner way of doing so is using es6 and map propertey
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "please provide a value to contineu";
    }
  });

  return errors;
}

//   const errors = {};
//   if (!values.title) {
//     errors.title = 'please provide a title';
//   }
//   if (!values.subject) {
//     errors.subject = 'please provide a subject';
//   }
//   if (!values.body) {
//     errors.body = 'please provide a title';
//   }
//   if (!values.email) {
//     errors.email = 'please provide a email';
//   }
//   return errors;
// }

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
