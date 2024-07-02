"use client";
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '@/app/config/firebase';
import { collection, addDoc } from 'firebase/firestore';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  phone_number: Yup.string().required('Phone Number is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  issue: Yup.string().required('Issue is required'),
});

export function ReportIssueForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone_number: '',
      email: '',
      issue: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await addDoc(collection(db, 'issues'), values);
        toast.success('Form submitted successfully');
        resetForm();
      } catch (e) {
        console.error('Error adding document: ', e);
        toast.error('Failed to submit form');
      }
    }
  });

  return (
    <>
      <form className="space-y-7" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6">
          <div>
            <label htmlFor="name" className="mb-3 block text-sm font-medium text-gray-700 after:absolute after:content-['*'] after:text-red-500">Name</label>
            <input
              required
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div>
            <label htmlFor="phone_number" className="mb-3 block text-sm font-medium text-gray-700 after:absolute after:content-['*'] after:text-red-500">Phone Number</label>
            <input
              required
              id="phone_number"
              name="phone_number"
              type="tel"
              autoComplete="phone"
              className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
              value={formik.values.phone_number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="mb-3 block text-sm font-medium text-gray-700 after:absolute after:content-['*'] after:text-red-500">Email address</label>
          <input
            required
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div>
          <label htmlFor="issue" className="mb-3 block text-sm font-medium text-gray-700 after:absolute after:content-['*'] after:text-red-500">Issue</label>
          <textarea
            required
            id="issue"
            name="issue"
            className="h-32 block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
            value={formik.values.issue}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
        </div>
        <div className="pt-1">
          <button
            className="group inline-flex items-center justify-center rounded-full py-3 px-5 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-brand-primary-600 text-white hover:text-slate-100 hover:bg-brand-primary-500 active:bg-brand-primary-800 active:text-brand-primary-100 focus-visible:outline-brand-primary-600 w-full"
            type="submit"
          >
            Submit
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-5 w-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4L6.4 18Z"></path>
            </svg>
          </button>
        </div>
      </form>
      <ToastContainer position='bottom-right' />
    </>
  );
}
