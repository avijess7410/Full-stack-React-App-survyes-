// surveyField contains logig to render a single label and text input

import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginButtom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
