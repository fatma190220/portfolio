
import React from "react";
import "./contact.css";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import done from "../../../public/animation/done.json"
import contact from "../../../public/animation/contact.json"

export default function Contact() {

  const [state, handleSubmit] = useForm("mbjnolgn");

 

  return (
    <section className="contact flex">
      <div className="right-contact">
      <h2>
        <i className="fa-solid fa-envelope"></i>
        contact us
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat maiores
        nam, earum ex nulla ab voluptate illum rem modi amet!
      </p>

      <div className="form-div flex">
        <form className="flex " onSubmit={handleSubmit}>
          <div className="email-input flex">
            <label htmlFor="email">email adress:</label>
            <input
              required
              id="email"
              type="email"
              name="email"
              autoCorrect="off"
            ></input>

      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

          </div>

          <div className="msg-input flex">
            <label htmlFor="msg">your message:</label>
            <textarea
              required
              id="msg"
              name="message"
            ></textarea>

      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
           
          </div>
            <button className="submit" disabled={state.submitting}>{state.submitting ? "submitting" : "submit"}</button>

            {state.succeeded && (
           
              <p className="flex"> 
              <Lottie animationData={done} loop={false} style={{width:60}}/>
              Thanks for joining!
              </p>
             
              )}


        </form>
      </div>

      </div>

      <div className="animation">
      <Lottie animationData={contact} loop={true} style={{width:500}}/>
      </div>
    </section>
  );
}
