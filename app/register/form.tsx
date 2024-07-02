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
  qualification: Yup.string().required('Qualification is required'),
  university: Yup.string().required('University is required'),
  linkedin_profile: Yup.string().url('Invalid URL').required('LinkedIn Profile Link is required'),
  why_you_want_to_attend_event: Yup.string().required('This field is required'),
  already_working_somewhere: Yup.string().required('This field is required'),
  company_name_you_are_working_in: Yup.string().required('Company or University name is required'),
  have_you_been_referred_by_someone: Yup.string().required('This field is required'),
});

export function RegistrationForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone_number: '',
      email: '',
      qualification: '',
      university: '',
      linkedin_profile: '',
      why_you_want_to_attend_event: '',
      why_you_are_good_fit_to_attend_event: '',
      already_working_somewhere: '',
      company_name_you_are_working_in: '',
      have_you_been_referred_by_someone: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const docRef = await addDoc(collection(db, 'registers'), values);
        console.log('Document written with ID: ', docRef.id);
        toast.success('Form submitted successfully');
        resetForm();
      } catch (e) {
        console.error('Error adding document: ', e);
        toast.error('Failed to submit form');
      }
    },
  });

  return (
    <>
      <form className="space-y-7" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6">
          <div>
            <label htmlFor="name" className="mb-3 block text-sm font-medium text-gray-700 after:absolute after:content-['*'] after:text-red-500">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
              value={formik.values.name}
              onChange={formik.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone_number" className="mb-3 block text-sm font-medium text-gray-700 after:absolute after:content-['*'] after:text-red-500">Phone Number</label>
            <input
              id="phone_number"
              name="phone_number"
              type="tel"
              autoComplete="phone"
              className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
              value={formik.values.phone_number}
              onChange={formik.handleChange}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="mb-3 block text-sm font-medium text-gray-700 after:absolute after:content-['*'] after:text-red-500">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
            value={formik.values.email}
            onChange={formik.handleChange}
            required
          />
        </div>
        <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6">
          <div className="sm:w-1/2">
            <label htmlFor="qualification" className="mb-3 block text-sm font-medium text-gray-700 after:absolute after:content-['*'] after:text-red-500">Qualification</label>
            <select
              id="qualification"
              name="qualification"
              className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
              value={formik.values.qualification}
              onChange={formik.handleChange}
              required
            >
              <option value="">Choose the option</option>
              <option value="BSCS">BSCS</option>
              <option value="BSSE">BSSE</option>
              <option value="BS.IT">BS.IT</option>
              <option value="MSCS">MSCS</option>
              <option value="MCS">MCS</option>
              <option value="MS.IT">MS.IT</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="sm:w-1/2">
            <label htmlFor="university" className="mb-3 block text-sm font-medium text-gray-700 after:absolute after:content-['*'] after:text-red-500">University</label>
            <input
              id="university"
              name="university"
              type="text"
              className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
              value={formik.values.university}
              onChange={formik.handleChange}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="linkedin_profile" className="mb-3 block text-sm font-medium text-gray-700 after:absolute after:content-['*'] after:text-red-500">LinkedIn Profile Link</label>
          <input
            id="linkedin_profile"
            name="linkedin_profile"
            type="url"
            className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
            value={formik.values.linkedin_profile}
            onChange={formik.handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="why_you_want_to_attend_event" className="mb-3 block text-sm font-medium text-gray-700 after:absolute after:content-['*'] after:text-red-500">Why you want to attend this event?</label>
          <textarea
            id="why_you_want_to_attend_event"
            name="why_you_want_to_attend_event"
            className="resize-none block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
            value={formik.values.why_you_want_to_attend_event}
            onChange={formik.handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="why_you_are_good_fit_to_attend_event" className="mb-3 block text-sm font-medium text-gray-700">Explain why you are good fit to attend this event?</label>
          <textarea
            id="why_you_are_good_fit_to_attend_event"
            name="why_you_are_good_fit_to_attend_event"
            className="resize-none block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
            value={formik.values.why_you_are_good_fit_to_attend_event}
            onChange={formik.handleChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="already_working_somewhere" className="mb-3 block text-sm font-medium text-gray-700 after:absolute after:content-['*'] after:text-red-500">Are you professional OR student?</label>
          <select
            id="already_working_somewhere"
            name="already_working_somewhere"
            className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
            value={formik.values.already_working_somewhere}
            onChange={formik.handleChange}
            required
          >
            <option value="">Choose the option</option>
            <option value="Professional">Professional</option>
            <option value="Student">Student</option>
          </select>
        </div>
        <div>
          <label htmlFor="company_name_you_are_working_in" className="mb-3 block text-sm font-medium text-gray-700 after:absolute after:content-['*'] after:text-red-500">Your company OR university name?</label>
          <input
            id="company_name_you_are_working_in"
            name="company_name_you_are_working_in"
            type="text"
            className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
            value={formik.values.company_name_you_are_working_in}
            onChange={formik.handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="have_you_been_referred_by_someone" className="mb-3 block text-sm font-medium text-gray-700 after:absolute after:content-['*'] after:text-red-500">Have you been referred by someone?</label>
          <input
            id="have_you_been_referred_by_someone"
            name="have_you_been_referred_by_someone"
            type="text"
            className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
            value={formik.values.have_you_been_referred_by_someone}
            onChange={formik.handleChange}
            required
          />
        </div>
        <div className="pt-1">
          <button
            className="group inline-flex items-center justify-center rounded-full py-3 px-5 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-brand-primary-600 text-white hover:text-slate-100 hover:bg-brand-primary-500 active:bg-brand-primary-800 active:text-brand-primary-100 focus-visible:outline-brand-primary-600 w-full"
            type="submit"
          >
            Get Your Ticket
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

