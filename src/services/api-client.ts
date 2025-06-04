import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api", // Removed "/games"
  params: {
    key: "28a675e5a8d74a3aa10a526d729479aa",
  },
});
