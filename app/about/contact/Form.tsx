'use client';
import { sendEmail } from '@/app/server-actions/sendEmail';
import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { Input, Textarea, Button } from '@nextui-org/react';
import toast from 'react-hot-toast';

export const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, formAction] = useFormState(sendEmail, {
    success: false,
    data: [],
  });

  const errMsg = (path: string) => {
    return formState.data.find((e) => e.path === path)?.message;
  };

  useEffect(() => {
    if (formState.success) {
      formRef.current?.reset();
      toast.success('Your email has been sent.');
    }
  }, [formState.success, formState]);

  useEffect(() => {
    const serverError = errMsg('serverError');

    if (serverError) {
      toast.error(formState.data[0].message);
    }
  }, [formState]);

  return (
    <>
      <form
        className="max-w-lg flex flex-col gap-2"
        action={formAction}
        ref={formRef}
      >
        <Input
          isClearable
          name="name"
          type="name"
          label="Name"
          placeholder="Your name"
          className="max-w-xs"
          errorMessage={errMsg('name')}
          required
        />
        <Input
          isClearable
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          className="max-w-xs"
          required
          errorMessage={errMsg('email')}
        />
        <Textarea
          name="message"
          label="Description"
          placeholder="Your message"
          classNames={{
            base: 'max-w-lg',
            input: 'resize-y min-h-[40px]',
          }}
          required
          errorMessage={errMsg('message')}
        />
        <SubmitButton />
      </form>
    </>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  
  return (
    <Button color="primary" type="submit" isDisabled={pending} isLoading={pending}>
      Submit
    </Button>
  );
};
