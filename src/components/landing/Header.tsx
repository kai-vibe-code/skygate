import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.webp" alt="LiMi VN" className="h-10 w-auto" />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground/70 hover:text-primary transition-colors">Tính năng</a>
          <a href="#partners" className="text-foreground/70 hover:text-primary transition-colors">Đối tác</a>
          <a href="#how-it-works" className="text-foreground/70 hover:text-primary transition-colors">Hướng dẫn</a>
        </nav>
        <Button asChild className="hidden md:flex">
          <a href="https://onelink.to/sgj9wy" target="_blank" rel="noopener noreferrer">
            Tải App
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
