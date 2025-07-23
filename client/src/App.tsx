import { Switch, Route } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { AuthProvider } from "./hooks/use-auth";
import { ProtectedRoute } from "./lib/protected-route";

// Pages
import Affiliate from "@/pages/Affiliate";
import affiliatedashboard from "@/pages/affiliatedashboard";
import ShopperDashboard from "@/pages/ShopperDashboard"
import Home from "@/pages/Home";
import How from "@/pages/How";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Tools from "@/pages/Tools";
import Pricing from "@/pages/Pricing";
import NotFound from "@/pages/not-found";
// import AuthPage from "@/pages/auth-page";
import DashboardPage from "@/pages/dashboard-page";

// Layout components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Standard layout with header and footer
function StandardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

// Main router with all routes
function Router() {
  return (
    <Switch>
      {/* Auth page doesn't use standard layout */}
      {/* <Route path="/auth" component={AuthPage} /> */}

      {/* Routes with standard layout */}
      <Route>
        <StandardLayout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/affiliate" component={Affiliate} />
            <Route path="/how" component={How} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/tools" component={Tools} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/affiliatedashboard" component={affiliatedashboard} />
            <Route path="/shopperdashboard" component={ShopperDashboard} />
            {/* Protected routes */}
            <ProtectedRoute path="/dashboard" component={DashboardPage} />
            <Route component={NotFound} />
          </Switch>
        </StandardLayout>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
