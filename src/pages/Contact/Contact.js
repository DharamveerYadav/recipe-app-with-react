import React from "react";
import Input from "../../components/Input/Input";

function Contact() {
  return (
    <div>
      <h1>Contact page</h1>
      <form>
        <Input inputtype="input" type="text" name="firstName" />
        <Input inputtype="input" type="text" name="lastName" />
        <Input inputtype="textarea" type="text" name="comments" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
