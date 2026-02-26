import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold">WNY Renovations & Repairs LLC</p>
            <p className="mt-2 text-sm text-white/70">Modern luxury renovations in Buffalo and surrounding suburbs since 2024.</p>
            <div className="mt-4 space-y-1 text-sm text-white/70">
              <p><a className="underline decoration-white/20 hover:decoration-white/40" href="tel:7168007854">716-800-7854</a></p>
              <p><a className="underline decoration-white/20 hover:decoration-white/40" href="mailto:wnyrenovation@gmail.com">wnyrenovation@gmail.com</a></p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold">Pages</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><Link className="hover:text-white" href="/services">Services</Link></li>
              <li><Link className="hover:text-white" href="/gallery">Gallery</Link></li>
              <li><Link className="hover:text-white" href="/about">About</Link></li>
              <li><Link className="hover:text-white" href="/contact">Contact</Link></li>
              <li><Link className="hover:text-white" href="/privacy">Privacy</Link></li>
            </ul>
          </div>
  
        </div>

       <div className="mt-10 flex items-center justify-between">
  <p className="text-xs text-white/50">
    © {new Date().getFullYear()} WNY Renovations & Repairs LLC. All rights reserved.
  </p>

  <img
        src="/epa-lead-safe.png"
    alt="EPA Lead-Safe Certified Firm"
    className="w-28 opacity-90"
  />
</div>
        </div> 
    </footer>
  );
}
