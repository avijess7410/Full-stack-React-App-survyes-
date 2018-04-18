import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import { deleteSurvey } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  // newDelete() {
  // deleteSurvey('{survey._id}');
  // }



  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>
              {survey.body}
            </p>
            <p className="right">
            <button type="button" onClick={axios.delete(`api/surveys/{survey._id}`)}>DELETE</button>
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>

        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
