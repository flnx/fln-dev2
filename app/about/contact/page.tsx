import Link from 'next/link';
import { Form } from './Form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Feel free to reach out! Whether you have a project idea, a question, or just want to connect. Drop me a message using the form below or shoot an email to webdevkalo@gmail.com. I look forward to hearing from you and exploring potential collaborations.',
    openGraph: {
      title: 'Contact Kaloyan Georgiev',
      description: 'Feel free to reach me out at webdevkalo@gmail.com',
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

      <div className="prose prose-p:text-foreground">
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
          href="mailto:webdevkalo@gmail.com"
          className="text-pink-700 hover:text-primary-300 transition-all"
        >
          webdevkalo@gmail.com
        </Link>
      </div>

      <div className="my-10" />

      <h2 className="text-2xl font-bold mb-4">Quick reply</h2>
      <Form />
    </section>
  );
};

export default Contact;
