import React, { PureComponent } from 'react'
import ruruIcon from '../assets/logos/RURU_eye.png'


 class Maps extends PureComponent {

   componentDidMount () {


      this.geocoder = new window.google.maps.Geocoder();
      var latlng = new window.google.maps.LatLng(-34.397, 150.644);
      var mapOptions = {
        zoom: 15,
        center: latlng
      }
    this.map = new window.google.maps.Map(document.getElementById('map'), mapOptions);
    const map = this.map
    const geocoder = this.geocoder
    this.codeAddress(geocoder, map)

    }

    componentDidUpdate(){
      const map = this.map
      const geocoder = this.geocoder
      this.codeAddress(geocoder, map)

    }




    codeAddress(geocoder, map) {

      var address = this.props.address ? this.props.address : "amsterdam"

      geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == 'OK') {
          map.setCenter(results[0].geometry.location);
          this.marker = new window.google.maps.Marker({
              map: map,
              title: "helloo",
              icon: ruruIcon,
              position: results[0].geometry.location
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    }




  render() {
    
    return(
      <div id="map" ref="thamap">
        <div className="map" ref="thamap"></div>

      </div>
    )
  }
}


export default Maps
