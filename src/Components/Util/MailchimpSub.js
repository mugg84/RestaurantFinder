import React, { useState } from "react";
import PropTypes from "prop-types";
import jsonp from "jsonp";
import toQueryString from "to-querystring";
import CustomForm from "./CustomForm";

let MAILCHIMP_URL = process.env.REACT_APP_MAILCHIMP_URL;

const MailchimpSubscribe = ({ render }) => {
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);
  const subscribe = (data) => {
    const params = toQueryString(data);
    const url = MAILCHIMP_URL + "&" + params;

    setStatus("sending");
    setMessage(null);

    jsonp(
      url,
      {
        param: "c",
      },
      (err, data) => {
        if (err) {
          setStatus("error");
          setMessage(data.msg);
        } else if (data.result !== "success") {
          setStatus("error");
          setMessage(data.msg);
        } else {
          setStatus("success");
          setMessage(data.msg);
        }
      }
    );

    setTimeout(() => {
      setMessage(null);
      setStatus(null);
    }, 5000);
  };

  return render({
    subscribe: subscribe,
    status: status,
    message: message,
  });
};

MailchimpSubscribe.propTypes = {
  render: PropTypes.func,
};

MailchimpSubscribe.defaultProps = {
  render: ({ subscribe, status, message }) => (
    <CustomForm
      status={status}
      message={message}
      onSubmitted={(formData) => subscribe(formData)}
    />
  ),
};

export default MailchimpSubscribe;
