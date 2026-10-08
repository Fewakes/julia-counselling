import { MarketContactPage } from "../../../components/EditorialPage";
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata("Enquire About Counselling | Julia Slojkowska", "Send a short enquiry to ask about counselling availability and suitability for your family in the United Kingdom.", "/uk/contact/");

export default function ContactUK() {
  return <MarketContactPage market="uk" title="Ask a question before making plans." description="A brief enquiry is enough. Share what you would like to ask, and current availability, eligibility and arrangements can be confirmed individually." />;
}
