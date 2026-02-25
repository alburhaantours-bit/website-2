const testimonials = [
  {
    name: "Tracy H. - Cheektowaga",
    quote: "Very responsive, nice and friendly. Installed our screen door and did a wonderful job! We will definitely be calling again for other projects!",
  },
  {
    name: "Laura P. - Amherst",
    quote: "The guys went above and beyond. They worked with us and helped get our painting project done fast.",
  },
  {
    name: "Tracy T. - Tonawanda",
    quote: "The light fixtures installed look amazing as well as the ceiling fans. They were even willing to tackle a few small things I needed done. I will definitely be hiring them again.",
  },
];

export default function TestimonialGrid() {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      {testimonials.map((t, idx) => (
        <div key={idx} className="card p-6">
          <p className="text-sm font-semibold">{t.name}</p>
          <p className="mt-3 text-sm text-white/70">“{t.quote}”</p>
        </div>
      ))}
    </div>
  );
}
