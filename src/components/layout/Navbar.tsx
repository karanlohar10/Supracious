import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { navLinks, siteInfo } from "@/data/content";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.jpg";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-ivory/95 shadow-md backdrop-blur-sm"
          : "bg-gradient-to-b from-black/50 to-transparent",
      )}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 sm:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt={`${siteInfo.name} logo`}
            className="h-12 w-12 shrink-0 rounded-full bg-ivory object-contain sm:h-14 sm:w-14"
          />
          <div className="flex flex-col gap-1">
            <span
              className={cn(
                "font-heading text-2xl font-bold leading-tight tracking-wide transition-colors",
                scrolled ? "text-forest" : "text-ivory",
              )}
            >
              {siteInfo.name}
            </span>
            <span
              className={cn(
                "font-body text-[10px] uppercase leading-tight tracking-[0.3em] transition-colors",
                scrolled ? "text-brown" : "text-gold-light",
              )}
            >
              Exim Pvt Ltd
            </span>
            <span
              className={cn(
                "font-body text-[10px] leading-tight tracking-wide transition-colors",
                scrolled ? "text-brown/80" : "text-ivory/80",
              )}
            >
              {siteInfo.motto}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "font-body text-sm font-medium tracking-wide transition-colors hover:text-gold",
                  scrolled ? "text-brown" : "text-ivory/90",
                  isActive && (scrolled ? "text-forest" : "text-gold"),
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            className="rounded-full bg-forest px-6 text-ivory hover:bg-forest-light"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className={cn(
                "rounded-md p-2 lg:hidden",
                scrolled ? "text-forest" : "text-ivory",
              )}
            >
              <Menu size={26} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-ivory">
            <SheetTitle className="flex flex-col gap-1 px-4 pt-4 font-heading text-xl text-forest">
              <span className="flex items-center gap-3">
                <img
                  src={logo}
                  alt={`${siteInfo.name} logo`}
                  className="h-10 w-10 shrink-0 rounded-full bg-ivory object-contain"
                />
                {siteInfo.name}
              </span>
              <span className="font-body text-xs font-normal text-brown/70">
                {siteInfo.motto}
              </span>
            </SheetTitle>
            <nav className="mt-6 flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "rounded-md px-3 py-3 font-body text-base font-medium text-brown transition-colors hover:bg-forest/5 hover:text-forest",
                      isActive && "bg-forest/10 text-forest",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button asChild className="mt-4 rounded-full bg-forest text-ivory hover:bg-forest-light">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
