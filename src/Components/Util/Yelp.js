import axios from "axios";

const apiKey = process.env.REACT_APP_YELP_API_KEY;

const Yelp = {
  // Returns restaurant search resuts

  async searchRestaurants(text) {
    console.log(process.env.REACT_APP_YELP_API_KEY);
    try {
      let response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=12&term=${text.what}&location=${text.where}&sort_by=${text.sortBy}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      console.log(response);

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

  // Provides infos about a single restaurant
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

  // Returns restaurnats from user location in sliders
  async SearchDefaultRestaurants(location) {
    try {
      let response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=8&latitude=${location[0]}&longitude=${location[1]}&radius=40000`,
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
          rating: business.rating,
          categories: business.categories[0].title,
          address: business.location.display_address[0],
        };
      });

      return parameters;
    } catch (e) {
      console.log(e);
    }
  },

  // Returns restaurnats from user location in sliders
  async SearchDefaultThaiRestaurants(location) {
    try {
      let response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=7&latitude=${location[0]}&longitude=${location[1]}&radius=40000&categories=thai`,
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
          rating: business.rating,
          categories: business.categories[0].title,
          address: business.location.display_address[0],
        };
      });
      console.log(response);
      return parameters;
    } catch (e) {
      console.log(e);
    }
  },

  // Returns restaurnats from user location in sliders
  async SearchDefaultItalianRestaurants(location) {
    try {
      let response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=7&latitude=${location[0]}&longitude=${location[1]}&radius=40000&categories=italian`,
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
          rating: business.rating,
          categories: business.categories[0].title,
          address: business.location.display_address[0],
        };
      });
      console.log(response);
      return parameters;
    } catch (e) {
      console.log(e);
    }
  },

  // Returns restaurnats from user location in sliders
  async SearchDefaultIndianRestaurants(location) {
    try {
      let response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=7&latitude=${location[0]}&longitude=${location[1]}&radius=40000&categories=indian`,
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
          rating: business.rating,
          categories: business.categories[0].title,
          address: business.location.display_address[0],
        };
      });
      console.log(response);
      return parameters;
    } catch (e) {
      console.log(e);
    }
  },
};

export default Yelp;
