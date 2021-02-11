import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://burgs-9256e-default-rtdb.europe-west1.firebasedatabase.app/",
});

export default instance;
