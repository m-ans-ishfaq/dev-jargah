"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "@/app/config/firebase";
import { collection, addDoc } from "firebase/firestore";
import axios from "axios";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  qualification: Yup.string().required("Qualification is required"),
  linkedin_profile: Yup.string()
    .url("Invalid URL")
    .required("LinkedIn Profile Link is required"),
  why_you_want_to_attend_event: Yup.string().required("This field is required"),
  have_you_been_referred_by_someone: Yup.string().required(
    "This field is required"
  ),
});

export function RegistrationForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      qualification: "",
      linkedin_profile: "",
      why_you_want_to_attend_event: "",
      have_you_been_referred_by_someone: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log(values);
        const docRef = await addDoc(collection(db, "registrations"), values);
        await axios.post("/api/send-email", {
          name: values.name,
          email: values.email,
        });
        console.log("Document written with ID: ", docRef.id);
        toast.success("Form submitted successfully");
        resetForm();
      } catch (e) {
        console.error("Error adding document: ", e);
        toast.error("Failed to submit form");
      }
    },
  });

  return (
    <>
      <form className="space-y-7" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6">
          <div className="sm:w-1/2">
            <label
              htmlFor="name"
              className="mb-3 block text-sm font-medium text-gray-700 after:absolute after:content-['*'] after:text-red-500"
            >
              Name
            </label>
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
          <div className="sm:w-1/2">
            <label
              htmlFor="email"
              className="mb-3 block text-sm font-medium text-gray-700 after:absolute after:content-['*'] after:text-red-500"
            >
              Email address
            </label>
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
        </div>
        <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6">
          <div className="sm:w-1/2">
            <label
              htmlFor="qualification"
              className="mb-3 block text-sm font-medium text-gray-700 after:absolute after:content-['*'] after:text-red-500"
            >
              Qualification
            </label>
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
            <label
              htmlFor="linkedin_profile"
              className="mb-3 block text-sm font-medium text-gray-700 after:absolute after:content-['*'] after:text-red-500"
            >
              LinkedIn Profile Link
            </label>
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
        </div>
        <div>
          <label
            htmlFor="why_you_want_to_attend_event"
            className="mb-3 block text-sm font-medium text-gray-700 after:absolute after:content-['*'] after:text-red-500"
          >
            Why you want to attend this event?
          </label>
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
          <label
            htmlFor="have_you_been_referred_by_someone"
            className="mb-3 block text-sm font-medium text-gray-700 after:absolute after:content-['*'] after:text-red-500"
          >
            Have you been referred by someone?
          </label>
          <textarea
            id="have_you_been_referred_by_someone"
            name="have_you_been_referred_by_someone"
            className="resize-none block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
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
            Register
          </button>
        </div>
      </form>
      <ToastContainer position="bottom-right" />
    </>
  );
}
