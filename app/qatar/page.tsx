import type { Metadata } from "next";
import QatarHomePage from "../../components/QatarHomePage";
import { marketHomeMetadata } from "../../lib/seo";

export const metadata: Metadata = marketHomeMetadata(
  "Child & Teen Counselling in Doha | Julia Slojkowska",
  "Counselling and emotional wellbeing support for children, teenagers and families in Doha. A thoughtful, individualised approach shaped around each young person.",
  "/qatar/",
);

export default function QatarHome() {
  return <QatarHomePage />;
}
