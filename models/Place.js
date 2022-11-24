export class Place {
  constructor(title, imageUrl, location) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.address = location.address;
    this.location = {lat: location.lat, lng: location.lng} //{lat, lng}
    this.id = new Date().toString() + Math.random().toString();
  }
}
