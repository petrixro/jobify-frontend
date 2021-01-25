import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/";

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

  registerUser(username, email, password) {
    return axios.post(API_URL + "/user/signup", {
      username,
      email,
      password,
    });
  }

  registerCompany(name, email, password) {
    return axios.post(API_URL + "/company/signup", {
      name,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
