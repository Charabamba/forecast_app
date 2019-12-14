export default class ForecastService {
  url =
    "http://api.openweathermap.org/data/2.5/weather?q=Chelyabinsk,ru&appid=de94674d08936b9e16c744ccc510c21f";

  getResource = async url => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    const data = await res.json();
    const forecast = data.main;
    return forecast;
  };
}
