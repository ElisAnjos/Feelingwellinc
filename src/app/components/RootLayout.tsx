import { Outlet, Link, useLocation } from "react-router";
import { Users, MessageCircle, Bot, Phone, Home } from "lucide-react";

export function RootLayout() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-6 h-6 text-white">
                <circle cx="20" cy="20" r="18" fill="currentColor" opacity="0.3" />
                <circle cx="20" cy="20" r="12" fill="currentColor" />
              </svg>
            </div>
            <div>
              <h1 className="text-white m-0 leading-tight">FeelingWell INC</h1>
              <p className="text-white/80 text-sm m-0 leading-tight">OUR HELP, YOUR BEST</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-border sticky top-[72px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-1">
            <Link
              to="/"
              className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                isActive("/")
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link
              to="/employees"
              className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                isActive("/employees")
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Employees</span>
            </Link>
            <Link
              to="/chat"
              className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                isActive("/chat")
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat Support</span>
            </Link>
            <Link
              to="/guaxi-ai"
              className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                isActive("/guaxi-ai")
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Bot className="w-4 h-4" />
              <span>Guaxi.Ai</span>
            </Link>
            <Link
              to="/help"
              className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                isActive("/help")
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>Help Resources</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
