import "./App.css";
import Home from "./components/Home";
import { JobProvider } from "./components/JobComponents/JobsContext";
import UserProfile from "./components/UserComponents/UserProfile";
import Navbar from "./components/NavigationComponents/Navbar";
import JobDetails from "./components/JobComponents/JobDetails";
import News from "./components/NewsComponents/NewsPage";
import Companies from "./components/CompanyComponents/Companies";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CompanyDetails from "./components/CompanyComponents/CompanyDetails";
import Register from "./components/AuthComponents/Register";
import AddCompanyForm from "./components/CompanyComponents/AddCompanyForm";
import AddJobForm from "./components/JobComponents/AddJobForm";
import JobPageByCompany from "./components/JobComponents/JobPageByCompany";
import UserFavoriteJobs from "./components/UserComponents/UserFavoriteJobs";
import Footer from "./components/NavigationComponents/Footer";
import FilteredJobs from "./components/JobComponents/FilteredJobs";
import UsersLookingForJobPage from "./components/UserComponents/UsersLookingForJobPage";
import Login from "./components/AuthComponents/Login";
import Profile from "./components/AuthComponents/TestProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <JobProvider>
          <Switch>
            <Route path="/job/:JobID" component={JobDetails} />
            <Route
              path="/jobs/name/:name/location/:location"
              component={FilteredJobs}
            />
            <Route
              path="/users/:userId/favoriteJobs"
              exact
              component={UserFavoriteJobs}
            />
            <Route
              path="/users/lookingForJob"
              exact
              component={UsersLookingForJobPage}
            />
            <Route path="/company/:CompanyId" component={CompanyDetails} />
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/news" component={News} />
            <Route path="/companies" exact component={Companies} />
            <Route path="/register" component={Register} />
            <Route path="/companies/addCompany" component={AddCompanyForm} />
            <Route
              path="/companies/:companyId/jobs"
              exact
              component={AddJobForm}
            />
            <Route
              path="/companies/:companyId/jobs/:jobId"
              component={JobPageByCompany}
            />

            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </JobProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
