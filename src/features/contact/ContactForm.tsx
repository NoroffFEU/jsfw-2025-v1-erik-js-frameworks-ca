"use client";

import { useState } from "react";
import { FormError } from "../../components/FormError";
import { useToastStore } from "../toast/toast";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const addToast = useToastStore((state) => state.addToast);
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    message: "",
  });

  const [nameError, setNameError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const isFormValid =
    formData.fullName.trim().length >= 3 &&
    formData.subject.trim().length >= 3 &&
    EMAIL_REGEX.test(formData.email) &&
    formData.message.trim().length >= 10;

  const validateFullName = (fullName: string) => {
    if (!fullName.trim()) {
      setNameError("Full name is required");
      return false;
    } else if (fullName.trim().length < 3) {
      setNameError("Must be at least 3 characters long");
      return false;
    }
    setNameError("");
    return true;
  };
  const validateSubject = (subject: string) => {
    if (!subject.trim()) {
      setSubjectError("Subject is required");
      return false;
    } else if (subject.trim().length < 3) {
      setSubjectError("Must be at least 3 characters long");
      return false;
    }
    setSubjectError("");
    return true;
  };

  const validateEmail = (email: string) => {
    if (!email.trim()) {
      setEmailError("Email is required");
      return false;
    } else if (!EMAIL_REGEX.test(email)) {
      setEmailError("Invalid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validateMessage = (message: string) => {
    if (!message.trim()) {
      setMessageError("Message is required");
      return false;
    } else if (message.trim().length < 10) {
      setMessageError("Message must be at least 10 characters long");
      return false;
    }
    setMessageError("");
    return true;
  };

  const handleBlur = (field: string, value: string) => {
    switch (field) {
      case "fullName":
        validateFullName(value);
        break;
      case "subject":
        validateSubject(value);
        break;
      case "email":
        validateEmail(value);
        break;
      case "message":
        validateMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFullNameValid = validateFullName(formData.fullName);
    const isSubjectValid = validateSubject(formData.subject);
    const isEmailValid = validateEmail(formData.email);
    const isMessageValid = validateMessage(formData.message);
    const clearForm = () => {
      setFormData({
        fullName: "",
        subject: "",
        email: "",
        message: "",
      });
    };

    if (isFullNameValid && isSubjectValid && isEmailValid && isMessageValid) {
      console.log("Form submitted:", formData);
      addToast("Form submitted successfully");
      clearForm();
    }
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-3xl min-w-full mx-auto p-4">
      <div className="mb-4">
        <label
          htmlFor="fullName"
          className="block  text-gray-700 font-bold mb-2"
        >
          Full Name
        </label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2"
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          onBlur={(e) => handleBlur("fullName", e.target.value)}
        />
        {nameError && <FormError message={nameError} />}
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
          Subject
        </label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2"
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          onBlur={(e) => handleBlur("subject", e.target.value)}
        />
        {subjectError && <FormError message={subjectError} />}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          onBlur={(e) => handleBlur("email", e.target.value)}
        />
        {emailError && <FormError message={emailError} />}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Message
        </label>
        <textarea
          className="w-full border border-gray-300 rounded px-3 py-2"
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          onBlur={(e) => handleBlur("message", e.target.value)}
        />
        {messageError && <FormError message={messageError} />}
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={!isFormValid}
          className={`px-4 py-2 text-white w-full md:w-[50%] rounded transition-colors duration-300 ${
            !isFormValid
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-800 hover:bg-green-600 cursor-pointer"
          }`}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
