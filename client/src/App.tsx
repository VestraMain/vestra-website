import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Start from "@/pages/Start";
import Grow from "@/pages/Grow";
import Certify from "@/pages/Certify";
import Contracts from "@/pages/Contracts";
import Capital from "@/pages/Capital";
import Services from "@/pages/Services";
import Resources from "@/pages/Resources";
import About from "@/pages/About";
import Login from "@/pages/Login";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/start" component={Start} />
          <Route path="/grow" component={Grow} />
          <Route path="/certify" component={Certify} />
          <Route path="/contracts" component={Contracts} />
          <Route path="/capital" component={Capital} />
          <Route path="/services" component={Services} />
          <Route path="/resources" component={Resources} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
