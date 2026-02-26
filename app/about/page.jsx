import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";

export const metadata = {
  title: "About | WNY Renovations & Repairs LLC",
  description: "About WNY Renovations & Repairs LLC — modern luxury renovations in Buffalo and surrounding suburbs.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container pt-10 pb-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading
              eyebrow="About"
              title="Built on Trust. Driven by Craftsmanship."
      
              align="left"
            />

            <div className="mt-4 space-y-3 text-sm text-white/75">
              <p>
               WNY Renovations & Repairs LLC is a family-owned renovation company proudly serving Buffalo and surrounding suburbs since 2024. 
              We help homeowners improve their spaces with high-quality craftsmanship, honest pricing, and a smooth, professional experience from start to finish.
              </p>
              <p>
                As a locally operated business, we care deeply about our community and treat every home with respect, attention to detail, and reliable workmanship. 
                Our goal is simple — deliver beautiful, lasting results while keeping projects transparent, affordable, and stress-free.
              </p>
              <p>
               We are fully licensed and insured, giving homeowners confidence and peace of mind throughout every project.
                At WNY Renovations & Repairs LLC, we don’t just renovate homes — we build trust.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn btn-primary" href="/contact">Get a Free Estimate</a>
              <a className="btn btn-ghost" href="tel:7168007854">Call 716-800-7854</a>
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/brand/about.jpg"
                alt="Renovation team at work"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <p className="text-sm font-semibold">Modern luxury, Buffalo-built.</p>
              <p className="mt-1 text-sm text-white/70">
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
