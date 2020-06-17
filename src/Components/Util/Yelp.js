import axios from "axios";

const apiKey = process.env.REACT_APP_YELP_API_KEY;

const Yelp = {
  async searchRestaurants(text) {
    console.log(process.env.REACT_APP_YELP_API_KEY);
    try {
      let response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=21&term=${text.what}&location=${text.where}&sort_by=${text.sortBy}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const parameters = response.data.businesses.map((business) => {
        return {
          id: business.id,
          image: business.image_url,
          name: business.name,
          url: business.url,
          price: business.price,
          phone: business.phone,
          categories: business.categories[0].title,
          address: business.location.display_address[0],
        };
      });

      return parameters;
    } catch (e) {
      console.log(e);
    }
  },

  async searchRestaurantsInfo(id) {
    try {
      let response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const parameters = {
        name: response.data.name,
        address: response.data.location.display_address[0],
        city: response.data.location.display_address[1],
        rating: response.data.rating,
        image: response.data.image_url,
        phone: response.data.phone,
        categories: response.data.categories[0].title,
        isClosed: response.data.is_closed,
        url: response.data.url,
      };

      return parameters;
    } catch (e) {
      console.log(e);
    }
  },

  async SearchDefaultRestaurants(location) {
    try {
      let response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?&latitude=${location[0]}&longitude=${location[1]}&radius=39999`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      const parameters = response.data.businesses.map((business) => {
        return {
          id: business.id,
          image: business.image_url,
          name: business.name,
          url: business.url,
          price: business.price,
          phone: business.phone,
          categories: business.categories[0].title,
          address: business.location.display_address[0],
        };
      });

      return parameters;
    } catch (e) {
      console.log(e);
    }
  },
};

export default Yelp;
