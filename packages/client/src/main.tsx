import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import App from "./App.tsx";
import { Toaster } from "sonner";
import ContentProvider from "./components/ContentProvider.tsx";
import ErrorBoundary from "./components/ErrorBoundry.tsx";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ContentProvider>
      <Toaster />
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ContentProvider>
  </QueryClientProvider>,
);
