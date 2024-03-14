import { Route, Routes } from "react-router-dom";
import SignUpForm from "./screens/_auth/forms/SignUpForm";
import SignInForm from "./screens/_auth/forms/SignInForm";
import AuthLayout from "./screens/_auth/AuthLayout";
import { Home } from "./screens/_root/Pages";
import "./globals.css";
import RootLayout from "./screens/_root/RootLayout";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>
        {/* PRIVATE ROUTES */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
