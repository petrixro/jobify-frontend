import "./App.css";
import Home from "./components/Home";
import { JobProvider } from "./components/JobsContext";
import UserProfile from "./components/UserProfile";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./components/Navbar";
import JobDetails from "./components/JobDetails";
import News from "./components/NewsPage";
import Companies from "./components/Companies";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CompanyDetails from "./components/CompanyDetails";
import Register from "./components/Register";
import AddCompanyForm from "./components/AddCompanyForm";
import AddJobForm from "./components/AddJobForm";
import JobPageByCompany from "./components/JobPageByCompany";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <JobProvider>
          <Switch>
            <Route path="/job/:JobID" component={JobDetails} />
            <Route path="/company/:CompanyId" component={CompanyDetails} />
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/news" component={News} />
            <Route path="/companies" exact component={Companies} />
            <Route path="/register" component={Register} />
            <Route path="/companies/addCompany" component={AddCompanyForm} />
            <Route path="/companies/:companyId/jobs" component={AddJobForm} />
            <Route
              path="/companies/:companyId/jobs/:jobId"
              component={JobPageByCompany}
            />
          </Switch>
        </JobProvider>
      </Router>
    </div>
  );
}

export default App;
