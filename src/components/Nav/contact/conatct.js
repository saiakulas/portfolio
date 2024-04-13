import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qz2mrkl', 'template_mbo83i9', form.current, 'tW8gPkFLnNKivvmGj')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div id="con">
        <h1 className="contitle">Contact Me</h1>
        <span className="condes">please fill the form below to discuss any work opportunities</span>
        <form className="contactform" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your name" name="user_name" />
          <input type="email" className="email" placeholder="email" name="user_email" />
          <textarea className="msg" name="message" rows="5" placeholder="your description"></textarea>
          <button type="submit" value="Send" className="bt">
            Submit
          </button>
        </form>
        <div className="links">
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-128.png"
            alt=""
            className="link"
          />
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-128.png"
            alt=""
            className="link"
          />
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-128.png"
            alt=""
            className="link"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

