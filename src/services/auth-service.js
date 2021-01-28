import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth/";

class AuthService {
  debugger;
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  registerUser(username, email, password, jobRole, image) {
    return axios.post(API_URL + "user-signup", {
      username,
      email,
      password,
      jobRole,
      image,
    });
  }

  registerCompany(name, email, password) {
    return axios.post(API_URL + "company-signup", {
      name,
      email,
      password,
    });
  }

  getCurrentUser() {
    // console.log(localStorage.getItem("user"));
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
