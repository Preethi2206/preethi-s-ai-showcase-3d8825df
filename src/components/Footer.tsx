import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto text-center">
      <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
        Built with <Heart size={14} className="text-primary" /> by Preethi S · © 2025
      </p>
    </div>
  </footer>
);

export default Footer;
