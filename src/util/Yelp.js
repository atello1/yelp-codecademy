const apiKey = 'gS1MoXGPpSO_ULz4Z1urz_ABpH_j61ABt-lZpUIv0l4TvjdlukOdGYyWZOEs1vISpZXqVhDEcMu0sSnzSdVEhWVb49Ix_IRbuqxUCFB2FC0u9xXDiUtofkcFqQOtW3Yx'; // Insert API key here.
/*
https://www.yelp.com/developers/v3/manage_app
Client ID
CiWRFst0hyKHZ-E28nsS1g

API Key
gS1MoXGPpSO_ULz4Z1urz_ABpH_j61ABt-lZpUIv0l4TvjdlukOdGYyWZOEs1vISpZXqVhDEcMu0sSnzSdVEhWVb49Ix_IRbuqxUCFB2FC0u9xXDiUtofkcFqQOtW3Yx
*/
/*https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=pizza&location=bosotn&sort_by=best_match*/
/*403 when making GET call to Yelp API.

https://discuss.codecademy.com/t/ravenous-project-part-4-error-403-forbidden/574098
https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=pizza&location=$dallas&sort_by=rating
*/
const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(negocio => ({
          id: negocio.id,
          imageSrc: negocio.image_url,
          name: negocio.name,
          address: negocio.location.address1,
          city: negocio.location.city,
          state: negocio.location.state,
          zipCode: negocio.location.zip_code,
          category: negocio.categories[0].title,
          rating: negocio.rating,
          reviewCount: negocio.review_count
        }));

      }

    });
  }
};

export default Yelp;
