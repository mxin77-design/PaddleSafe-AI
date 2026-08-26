import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "@/pages/Index";
import Assessment from "@/pages/Assessment";
import Checklist from "@/pages/Checklist";
import SafetyQA from "@/pages/SafetyQA";
import IncidentReview from "@/pages/IncidentReview";
import AdminLayout from "@/pages/admin/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard";
import DailyReport from "@/pages/admin/DailyReport";
import Compliance from "@/pages/admin/Compliance";
import Participants from "@/pages/admin/Participants";
import ContentGen from "@/pages/admin/ContentGen";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/checklist" element={<Checklist />} />
            <Route path="/qa" element={<SafetyQA />} />
            <Route path="/review" element={<IncidentReview />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="daily-report" element={<DailyReport />} />
            <Route path="compliance" element={<Compliance />} />
            <Route path="participants" element={<Participants />} />
            <Route path="content" element={<ContentGen />} />
          </Route>
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
