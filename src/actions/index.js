import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS } from "./types";

// export const fetchUser = () => {
//   return function(dispatch) {
//     axios
//       .get("/api/current_user")
//       .then(res => dispatch({ type: FETCH_USER, payload: res }));
//   };
// };
// this is the same as above but alot shorter
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys", values);

  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');

    dispatch({type: FETCH_SURVEYS, payload: res.data })
};

export const deleteSurvey = (values, history) => async dispatch => {
  const res = await axios.delete('/api/surveys', values,);

  dispatch({ type: FETCH_USER, payload: res.data });
};

// onDeleteChild: function(Item), {
//   this.state.list.splice(Item,1);
//   this.setState({list: this.state.surveys });
// },
//  children.push(<Item key={'surveys' + i} surveys={i} number={i}
//   onDeleteChild={this.onDeleteChild.bind(this)} content={this.state.surveys[i]}/>);
//
//   class Item = React.createClass({
//     delete: function(){
//      this.props.onDeleteChild(this.props.index);
//     },
//
//     render: function() {
//       var key = this.props.surveys;
//       return (
//         <li className="clearfix">
//           {this.props.content}
//           <div className="pull-right">
//             <button id="completed" className="btn btn-success btn-xs">&#x2714;</button>
//             <button id="remove" onClick={this.delete} className="btn btn-danger btn-xs">&#x2718;</button>
//           </div>
//         </li>
//       );
//     }
//   });
