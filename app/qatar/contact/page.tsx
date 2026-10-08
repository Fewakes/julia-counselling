import { PageIntro } from "../../../components/MarketShell";
import ContactForm from "../../../components/ContactForm";
import { pageMetadata } from "../../../lib/seo";
export const metadata = pageMetadata("Contact Julia | Counselling in Doha", "Send a brief enquiry about counselling and emotional wellbeing support for your family in Doha.", "/qatar/contact/");
export default function Page() { return <><PageIntro eyebrow="GET IN TOUCH" title="We can start with a conversation." description="You do not have to know exactly what your child needs before getting in touch. A short note is enough to begin." /><section className="contact-section"><div className="contact-panel"><p className="eyebrow">A FIRST ENQUIRY</p><h2>What would you like to ask?</h2><p>Please avoid including diagnoses, detailed personal histories or emergency information. We can discuss sensitive details through an appropriate channel if needed.</p><ContactForm market="QA" /></div></section></>; }
