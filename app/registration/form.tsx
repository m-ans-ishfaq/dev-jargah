"use client";
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
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
  phone_number: Yup.string()
    .matches(/^[0-9]{10,14}$/, "Phone number must be 10-14 digits")
    .required("Phone number is required"),
  university: Yup.string().required("University is required"),
  city: Yup.string().required("City is required"),
  cnic: Yup.string().required("CNIC is required"),
  qualification: Yup.string().required("Qualification is required"),
  linkedin_profile: Yup.string()
    .url("Invalid URL")
    .required("LinkedIn Profile Link is required"),
  why_you_want_to_attend_event: Yup.string().required("This field is required"),
  have_you_been_referred_by_someone: Yup.string(),
});

export function RegistrationForm() {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone_number: "",
          university: "",
          city: "",
          cnic: "",
          qualification: "",
          linkedin_profile: "",
          why_you_want_to_attend_event: "",
          have_you_been_referred_by_someone: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            const docRef = await addDoc(
              collection(db, "registrations"),
              values
            );
            await axios.post("/api/send-email", {
              name: values.name,
              email: values.email,
            });
            toast.success("Form submitted successfully");
            resetForm();
          } catch (e) {
            console.error("Error adding document: ", e);
            toast.error("Failed to submit form");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-7">
            {/* Name and Email */}
            <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6">
              <div className="sm:w-1/2">
                <label
                  htmlFor="name"
                  className="after:content-['*'] after:text-red-500 mb-3 block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className=" block w-full rounded-md border border-gray-200 px-3 py-2"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="sm:w-1/2">
                <label
                  htmlFor="email"
                  className="after:content-['*'] after:text-red-500 mb-3 block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full rounded-md border border-gray-200 px-3 py-2"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            {/* Phone Number and CNIC */}
            <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6">
              <div className="sm:w-1/2">
                <label
                  htmlFor="phone_number"
                  className="after:content-['*'] after:text-red-500 mb-3 block text-sm font-medium text-gray-700"
                >
                  Contact
                </label>
                <Field
                  id="phone_number"
                  name="phone_number"
                  type="tel"
                  placeholder="Enter your phone number"
                  className=" block w-full rounded-md border border-gray-200 px-3 py-2"
                />
                <ErrorMessage
                  name="phone_number"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="sm:w-1/2">
                <label
                  htmlFor="cnic"
                  className="after:content-['*'] after:text-red-500 mb-3 block text-sm font-medium text-gray-700"
                >
                  CNIC
                </label>
                <Field
                  id="cnic"
                  name="cnic"
                  type="text"
                  placeholder="Enter your CNIC"
                  className="block w-full rounded-md border border-gray-200 px-3 py-2"
                />
                <ErrorMessage
                  name="cnic"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            {/* University and City */}
            <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6">
              <div className="sm:w-1/2">
                <label
                  htmlFor="university"
                  className="after:content-['*'] after:text-red-500 mb-3 block text-sm font-medium text-gray-700"
                >
                  University
                </label>
                <Field
                  id="university"
                  name="university"
                  type="text"
                  placeholder="Enter your university"
                  className="block w-full rounded-md border border-gray-200 px-3 py-2"
                />
                <ErrorMessage
                  name="university"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="sm:w-1/2">
                <label
                  htmlFor="city"
                  className="after:content-['*'] after:text-red-500 mb-3 block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <Field
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Enter your city"
                  className="block w-full rounded-md border border-gray-200 px-3 py-2"
                />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            {/* Qualification and LinkedIn */}
            <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6">
              <div className="sm:w-1/2">
                <label
                  htmlFor="qualification"
                  className="after:content-['*'] after:text-red-500 mb-3 block text-sm font-medium text-gray-700"
                >
                  Qualification
                </label>
                <Field
                  as="select"
                  id="qualification"
                  name="qualification"
                  className="block w-full rounded-md border border-gray-200 px-3 py-2"
                >
                  <option value="">Choose an option</option>
                  <option value="BSCS">BSCS</option>
                  <option value="BSSE">BSSE</option>
                  <option value="BS.IT">BS.IT</option>
                  <option value="MSCS">MSCS</option>
                  <option value="MCS">MCS</option>
                  <option value="MS.IT">MS.IT</option>
                  <option value="Others">Others</option>
                </Field>
                <ErrorMessage
                  name="qualification"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="sm:w-1/2">
                <label
                  htmlFor="linkedin_profile"
                  className="after:content-['*'] after:text-red-500 mb-3 block text-sm font-medium text-gray-700"
                >
                  LinkedIn Profile Link
                </label>
                <Field
                  id="linkedin_profile"
                  name="linkedin_profile"
                  type="url"
                  placeholder="Enter your LinkedIn profile link"
                  className="block w-full rounded-md border border-gray-200 px-3 py-2"
                />
                <ErrorMessage
                  name="linkedin_profile"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            {/* Why attend and Referral */}
            <div>
              <label
                htmlFor="why_you_want_to_attend_event"
                className="after:content-['*'] after:text-red-500 mb-3 block text-sm font-medium text-gray-700"
              >
                Why you want to attend this event?
              </label>
              <Field
                as="textarea"
                id="why_you_want_to_attend_event"
                name="why_you_want_to_attend_event"
                placeholder="Explain why you want to attend..."
                className="block w-full rounded-md border border-gray-200 px-3 py-2"
              />
              <ErrorMessage
                name="why_you_want_to_attend_event"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="have_you_been_referred_by_someone"
                className="mb-3 block text-sm font-medium text-gray-700"
              >
                Have you been referred by someone?
              </label>
              <Field
                as="textarea"
                id="have_you_been_referred_by_someone"
                name="have_you_been_referred_by_someone"
                placeholder="If yes, please specify..."
                className="block w-full rounded-md border border-gray-200 px-3 py-2"
              />
            </div>

            <div className="mt-5">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full disabled:bg-red-700 bg-red-500 px-4 py-2 text-white"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
}
