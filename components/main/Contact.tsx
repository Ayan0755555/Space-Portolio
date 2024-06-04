"use client"
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div id="contact">
   <h2 className="text-3xl font-extrabold text-indigo-700 mb-10 text-center">Contact Us</h2>
   <section className="contact-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-[100px] text-center">
              <h1 className="text-white text-center mb-6">Let’s talk</h1>
             <Link href='/'> <button className="btn btn-lg btn-primary text-white">Email:-ayanrehmandev@gmail.com</button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
