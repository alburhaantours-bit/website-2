import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Gallery | WNY Renovations & Repairs LLC",
  description: "Before/after style project gallery: kitchens, bathrooms, tile, flooring, paint and handyman repairs in Buffalo.",
};

const photos = [
  { src: "/gallery/sample-1.jpg", alt: "Kitchen renovation" },
  { src: "/gallery/sample-2.jpg", alt: "Bathroom renovation" },
  { src: "/gallery/sample-3.jpg", alt: "Tile installation" },
  { src: "/gallery/sample-4.jpg", alt: "Flooring upgrade" },
  { src: "/gallery/sample-5.jpg", alt: "Drywall and paint" },
  { src: "/gallery/sample-6.jpg", alt: "Handyman punch list" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="container pt-10 pb-10">
        <SectionHeading
          eyebrow="Portfolio"
          title="Premium upgrades homeowners can afford."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p) => (
            <div key={p.src} className="card overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <Image src={p.src} alt={p.alt} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold">{p.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
