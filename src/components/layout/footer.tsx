import { SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="page-padding border-t border-border">
      <div className="content-max py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-caption text-text-muted">
          &copy; {new Date().getFullYear()} Esmee Elisabeth
        </p>
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption text-text-muted hover:text-accent transition-colors duration-300"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
