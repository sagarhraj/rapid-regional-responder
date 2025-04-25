
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import NearbyPage from "@/pages/NearbyPage";
import ReportPage from "@/pages/ReportPage";
import HistoryPage from "@/pages/HistoryPage";
import ProfilePage from "@/pages/ProfilePage";
import NotFoundPage from "@/pages/NotFoundPage";
import AuthPage from "@/pages/AuthPage";

import { Navbar } from "@/components/layout/Navbar";
import { BottomNav } from "@/components/layout/BottomNav";
import { AuthGuard } from "@/components/auth/AuthGuard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="/"
            element={
              <AuthGuard>
                <div className="min-h-screen pb-16 md:pb-0">
                  <Navbar />
                  <div className="pt-16">
                    <HomePage />
                  </div>
                  <BottomNav />
                </div>
              </AuthGuard>
            }
          />
          <Route
            path="/nearby"
            element={
              <AuthGuard>
                <div className="min-h-screen pb-16 md:pb-0">
                  <Navbar />
                  <div className="pt-16">
                    <NearbyPage />
                  </div>
                  <BottomNav />
                </div>
              </AuthGuard>
            }
          />
          <Route
            path="/report"
            element={
              <AuthGuard>
                <div className="min-h-screen pb-16 md:pb-0">
                  <Navbar />
                  <div className="pt-16">
                    <ReportPage />
                  </div>
                  <BottomNav />
                </div>
              </AuthGuard>
            }
          />
          <Route
            path="/history"
            element={
              <AuthGuard>
                <div className="min-h-screen pb-16 md:pb-0">
                  <Navbar />
                  <div className="pt-16">
                    <HistoryPage />
                  </div>
                  <BottomNav />
                </div>
              </AuthGuard>
            }
          />
          <Route
            path="/profile"
            element={
              <AuthGuard>
                <div className="min-h-screen pb-16 md:pb-0">
                  <Navbar />
                  <div className="pt-16">
                    <ProfilePage />
                  </div>
                  <BottomNav />
                </div>
              </AuthGuard>
            }
          />
          <Route
            path="/settings"
            element={
              <AuthGuard>
                <div className="min-h-screen pb-16 md:pb-0">
                  <Navbar />
                  <div className="pt-16">
                    <ProfilePage />
                  </div>
                  <BottomNav />
                </div>
              </AuthGuard>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
