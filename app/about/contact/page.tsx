import Link from 'next/link';
import { Form } from './Form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Feel free to reach out! Whether you have a project idea, a question, or just want to connect. Drop me a message using the form below or shoot an email to definitelywebdev@yahoo.com. I look forward to hearing from you and exploring potential collaborations.',
    openGraph: {
      title: 'Contact Kaloyan Georgiev',
      description: 'Feel free to reach me out at definitelywebdev@yahoo.com',
      siteName: 'webdevkalo',
      url: 'https://webdevkalo.vercel.app/about/contact',
      type: 'profile',
      locale: 'en-US'
    }
};

const Contact = () => {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Get in Touch</h1>

      <div className="max-w-screen-xs prose prose-p:text-primary">
        <p>
          Feel free to reach out! Whether you have a project idea, a question, or
          just want to connect.
        </p>
        <p>Drop me a message using the form below or shoot an email.</p>
        <p>
          I look forward to hearing from you and exploring potential collaborations.
        </p>
      </div>

      <div className="mb-4 font-semibold mt-10">
        <span className="font-bold mr-2" aria-label="Email address">
          Email:
        </span>
        <Link
          href="mailto:definitelywebdev@yahoo.com"
          className="text-pink-700 hover:text-primary-300 transition-all"
        >
          definitelywebdev@yahoo.com
        </Link>
      </div>

      <div className="my-10" />

      <h2 className="text-2xl font-bold mb-4">Quick reply</h2>
      <Form />
    </section>
  );
};

export default Contact;
