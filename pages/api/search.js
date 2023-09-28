import axios from "axios";

export default async function handler(req, res) {
    const axios = require('axios');

    const options = {
        method: "GET",
        url: "https://ott-details.p.rapidapi.com/search",
        params: { title: req.query.title, page: "1" },
        headers: {
          "x-rapidapi-host": "ott-details.p.rapidapi.com",
          "x-rapidapi-key": 'd941d07bacmsh81062b0f7161b1ep104bacjsnc30dd576e5a3',
        },
      };
    
      try {
        let response = await axios(options);
        res.status(200).json(response.data);
      } catch (error) {
        console.error(error.response);
      }
}
