import type { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../components/contact/contact-form";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages" />
      </Head>
      <ContactForm />
    </>
  );
};

export default Contact;
