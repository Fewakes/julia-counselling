import { ContactCta, PageIntro } from "./MarketShell";

const questions = [
  ["How do I know whether my child might benefit from counselling?", "You do not need to wait for a crisis. If something has changed, feels difficult to talk about at home, or you would value another perspective, an initial conversation can help you think about possible next steps."],
  ["What ages do you work with?", "Julia’s work focuses on children and adolescents. Please get in touch to discuss your child’s age and whether the current service is a suitable fit."],
  ["What happens in the first session?", "The first step is a conversation to understand what brings you to counselling, what you hope for and what the next step might be. Practical arrangements can be confirmed when you enquire."],
  ["Will you tell me what my child says?", "Confidentiality and parent communication depend on the young person’s age, circumstances and professional responsibilities. These boundaries should be discussed clearly before work begins."],
  ["What if my teenager doesn’t want counselling?", "A teenager’s concerns and choice matter. A gentle, low-pressure conversation can help them decide whether they would like to meet and what they need to feel comfortable."],
  ["How many sessions will we need?", "There is no set number that is right for every young person. The plan and frequency can be discussed together and reviewed as the work develops."],
  ["Do you work with neurodivergent children?", "Julia aims to adapt her work to each young person. Please share any access needs or questions in a brief enquiry, without sending detailed health information."],
  ["Can you communicate with my child’s school?", "Any communication with a school would need to be discussed and agreed with the family, with appropriate consent and boundaries."],
  ["Can I have a consultation without my child?", "Parents can make an initial enquiry and discuss their concerns before deciding together on a next step."],
  ["Where are sessions held?", "Please contact Julia to confirm current session arrangements in Doha before making plans."],
];

export function QatarFaq() {
  return <><PageIntro eyebrow="QUESTIONS & ANSWERS" title="A few things you may be wondering." description="Starting counselling can bring practical and personal questions. Here are some first answers; arrangements can be confirmed in a conversation." /><section className="detail-section"><div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div><p className="faq-boundary">If you need urgent or emergency support, please contact your local emergency services. This website is not an emergency service.</p></section><ContactCta /></>;
}
