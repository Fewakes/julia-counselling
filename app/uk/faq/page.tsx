import { MarketFaqPage } from "../../../components/EditorialPage";
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata("Counselling Questions & Answers | Julia Slojkowska", "Practical answers for parents and teenagers considering counselling in the UK, including availability, confidentiality and first steps.", "/uk/faq/");

export default function FAQUK() {
  return <MarketFaqPage market="uk" eyebrow="QUESTIONS & ANSWERS · UNITED KINGDOM" title="Questions worth asking before you decide." description="Some practical details depend on individual circumstances. These answers explain what you can ask about and what should be agreed before beginning." questions={[
    ["How do I know if my child might benefit from counselling?", "You do not need a diagnosis or a crisis to ask a question. If a change in mood, confidence, friendships or school life is concerning you, a first conversation can help you think about what might be useful."],
    ["What ages does Julia work with?", "Her work focuses on children and adolescents. Ask about your child’s age and circumstances so suitability can be considered rather than assumed."],
    ["Can a parent enquire first?", "Yes. A parent can make an initial enquiry, share a brief outline of the concern and ask about current availability and next steps."],
    ["What happens in the first conversation?", "It is a chance to explain what prompted the enquiry, ask questions and find out whether the service may be a fit. Practical arrangements and eligibility need to be confirmed individually."],
    ["What if my teenager is unsure?", "Their view matters. It may help to let them ask questions or hear what a first meeting would involve before deciding whether to take part."],
    ["What will parents be told about sessions?", "Confidentiality and its limits depend on age, circumstances and professional responsibilities. The arrangement should be discussed clearly before ongoing work."],
    ["Can Julia speak to my child’s school?", "Any school contact would be discussed with the family first and would require appropriate agreement. It is not automatic."],
    ["Are online sessions available throughout the UK?", "Online eligibility and current arrangements have not been confirmed for every situation. Ask before making plans."],
    ["How many sessions will be needed?", "There is no fixed number that suits everyone. If work proceeds, the plan and whether it remains helpful should be reviewed together."],
    ["What are the fees and current availability?", "These details have not been provided for publication. Julia can confirm them in response to an enquiry."],
  ]} />;
}
