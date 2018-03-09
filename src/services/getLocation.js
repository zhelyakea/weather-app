export default () =>
  new Promise(
    (resolve, reject) =>
      navigator.geolocation.getCurrentPosition(position => {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        resolve({
          lat,
          lng
        });
      }),
    {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0
    }
  ).catch(error => console.log(error));
