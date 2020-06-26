import React /*,{ useContext }*/ from "react";
//import RestContext from "../context/restaurant/restContext";

const CustomForm = ({ status, onValidated }) => {
  // Need to solve setAlert issue
  //const restContext = useContext(RestContext);

  //const { setAlert } = restContext;

  let email;
  const submit = (e) => {
    e.preventDefault();


    document.querySelector(".news-input").value = "";

    return (
      email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
      })
    );
  };

  return (
    <form>
      <legend>
        <i className="far fa-paper-plane"></i>
        <h3>Want some Inbox love?</h3>
      </legend>
      <input
        className="news-input"
        ref={(node) => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <button className="button news-btn" onClick={submit}>
        Submit
      </button>
      <div>
        {status === "sending" && <p>sending...</p>}
        {status === "error" && (
          <p style={{ color: "red" }}>Something went wrong, try again</p>
        )}
        {status === "success" && <p>Success</p>}
      </div>
    </form>
  );
};

export default CustomForm;
