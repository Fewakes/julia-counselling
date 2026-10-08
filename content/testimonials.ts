export type Testimonial = {
  quote: string;
  clientDescriptor: string;
  location: string;
  market: "QA" | "GB" | "PL";
  featured?: boolean;
  status: "approved" | "demo";
};

/** Keep only client-approved testimonials here. Demo records are blocked in production. */
export const testimonials: Testimonial[] = [];

export function getPublishableTestimonials(records: Testimonial[] = testimonials): Testimonial[] {
  if (process.env.NODE_ENV === "production" && records.some((record) => record.status === "demo")) {
    throw new Error("Demo testimonials cannot be included in a production build.");
  }
  return records.filter((record) => record.status === "approved");
}
