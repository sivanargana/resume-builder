import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ContentProvider from "./components/ContentProvider.tsx";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    },
    mutations: {
      retry: 3,
    },
  },
});
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ContentProvider>
      <App />
    </ContentProvider>
  </QueryClientProvider>,
);
