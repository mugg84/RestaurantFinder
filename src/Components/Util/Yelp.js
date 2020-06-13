import axios from "axios";

const Yelp = {
  async search(text) {
    try {
      if (text.what && text.where) {
        let response = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=21&term=${text.what}&location=${text.where}&sort_by=${text.sortBy}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
            },
          }
        );
        return response;
      }
    } catch (e) {
      console.log(e);
    }
  },
};

export default Yelp;
