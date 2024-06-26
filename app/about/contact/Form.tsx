'use client';

import { sendEmail } from '@/app/server-actions/sendEmail';
import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { Input, Textarea } from '@nextui-org/input';
import toast from 'react-hot-toast';
import { Button } from '@nextui-org/button';

export const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [formState, formAction] = useFormState(sendEmail, {
    success: false,
    data: [],
  });

  const errMsg = (path: string) => {
    return formState.data.find((e) => e.path === path)?.message;
  };

  useEffect(() => {
    if (formState.success) {
      // formRef.current?.reset();
      toast.success('Your email has been sent.');
    } else {
      const serverError = errMsg('serverError');
      if (serverError) {
        toast.error(formState.data[0].message);
      }
    }
    // Email input throws hydration error on Firefox. This fixes it
    !isMounted && setIsMounted(true);
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
          isRequired
          errorMessage={errMsg('name')}
        />
        {!isMounted ? (
          <Input
            isClearable
            name="email"
            type="text"
            label="email"
            placeholder="Enter your email"
            className="max-w-xs invisible"
          />
        ) : (
          <Input
            isClearable
            name="email"
            type="email"
            label="Email"
            placeholder="Enter your email"
            className="max-w-xs"
            errorMessage={errMsg('email')}
            isRequired
          />
        )}

        <Textarea
          name="message"
          label="Description"
          placeholder="Your message"
          classNames={{
            base: 'max-w-lg',
            input: 'resize-y min-h-[40px]',
          }}
          minLength={20}
          errorMessage={errMsg('message')}
          isRequired
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
