import "./App.css";
import Page from "./Page";
import pages from "./data/getPages";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import SubNav from "./SubNav";

console.log(pages);

function RedirectWrapper({ children }) {
  const navigate = useNavigate();
  const redirect = (target) => {
    const path = target.startsWith("/") ? target : `/${target}`;
    if (target.startsWith("http")) {
      window.open(target, "_blank");
    } else {
      navigate(path);
    }
  };

  return (
    <Page redirect={redirect}>
      <Nav />
      <SubNav />
      <div className="page-body">{children}</div>
    </Page>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Map all other pages */}
        {pages.map((page, index) => (
          <Route
            key={index}
            path={page.path}
            element={
              <RedirectWrapper>
                {page.content}
              </RedirectWrapper>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
