import ContactForm from "../../features/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] max-w-xl py-2">
      <h1 className="text-4xl font-bold my-8">Contact Us</h1>
      <p className="text-lg mb-8 text-center text-gray-700 px-4">
        If you have any questions, feedback, or inquiries, please fill out the
        form below and we will get back to you as soon as possible.
      </p>

      <ContactForm />
    </div>
  );
}
