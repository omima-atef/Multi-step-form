import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import NavSteps from "./components/NavSteps";
import { Outlet } from "react-router-dom";

import ListPlan from "./components/ListPlan";
import SpinnerFullPage from "./components/SpinnerFullPage";
import FinalStep from "./components/FinalStep";
import ThanksMsg from "./components/ThanksMsg";
import ListPicker from "./components/ListPicker";

import { lazy, Suspense } from "react";
const MainPage = lazy(() => import("./page/MainPage"));
const Form = lazy(() => import("./components/Form"));
const PageNotFound = lazy(() => import("./page/PageNotFound"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage>
                <NavSteps />
                <Outlet />
              </MainPage>
            }
          >
            <Route index element={<Navigate replace to="form" />} />
            <Route path="form" element={<Form />} />
            <Route path="plan" element={<ListPlan />} />
            <Route path="picker" element={<ListPicker />} />
            <Route path="final" element={<FinalStep />} />
            <Route path="msg" element={<ThanksMsg />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
