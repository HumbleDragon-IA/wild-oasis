import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";
import Booking from "./pages/Booking";
import Checkin from "./pages/Checkin";
import ProtectedRoute from "./ui/ProtectedRoute";
import useDarkModeStore from "./context/DarkModeContext";
import { useEffect } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

const localStorageMode =
  localStorage.getItem("mode") ||
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark-mode"
    : "light-mode";
function App() {
  const isDarkModeOn = useDarkModeStore((state) => state.isDarkModeOn);
  const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode);

  useEffect(() => {
    toggleDarkMode(localStorageMode);
  }, []);

  useEffect(() => {
    const root = document.querySelector("html");
    if (!root) return;
    root.classList.remove("dark-mode", "light-mode");
    root.classList.add(isDarkModeOn);
  }, [isDarkModeOn]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      <GlobalStyles></GlobalStyles>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout></AppLayout>
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="dashboard" />}></Route>
            <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="bookings" element={<Bookings></Bookings>}></Route>
            <Route
              path="bookings/:bookingId"
              element={<Booking></Booking>}
            ></Route>
            <Route
              path="checkin/:bookingId"
              element={<Checkin></Checkin>}
            ></Route>
            <Route path="cabins" element={<Cabins></Cabins>}></Route>
            <Route path="users" element={<Users></Users>}></Route>
            <Route path="settings" element={<Settings></Settings>}></Route>
            <Route path="account" element={<Account></Account>}></Route>
          </Route>

          <Route path="login" element={<Login></Login>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "600px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      ></Toaster>
    </QueryClientProvider>
  );
}

export default App;
