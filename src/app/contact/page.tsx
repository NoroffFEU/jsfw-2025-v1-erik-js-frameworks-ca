import ContactForm from "../../features/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <ContactForm />
    </div>
  );
}
