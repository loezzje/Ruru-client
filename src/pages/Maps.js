import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import google from 'google-maps-api'
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// require( 'google-maps-api' )( 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo' );
//
// require( 'google-maps-api/geocode' )( {
//   address: 'Den haag'
// })
// .then( function( result ) {
//
//   console.log( result );
// });



 class Maps extends PureComponent {

   componentDidMount () {

    //  this.map = new window.google.maps.Map(document.getElementById('map'), {
    //     zoom: 8,
    //     center: {
    //       lat: 51.5085300,
    //       lng: -0.1257400
    //     }
    //   });
    //    this.marker = new window.google.maps.Marker({
    //       position: "london",
    //       map: this.map
    //     });
      console.log(this.map)
      const geocoder = new window.google.maps.Geocoder();
    var latlng = new window.google.maps.LatLng(-34.397, 150.644);
    var mapOptions = {
      zoom: 8,
      center: latlng
    }
    const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);
    this.codeAddress(geocoder,map )
    }


    codeAddress(geocoder, map) {
    var address = "den haag"
    console.log("hello",geocoder)
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        this.marker = new window.google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  //   setMapElementReference (mapElementReference) {
  //   this.mapElement = mapElementReference;
  // }

    // setMapElementReference(mapElementReference){
    //   this.mapElement = mapElementReference
    // }

    // initMap() {
    //     console.log("google")
    //     // var uluru = {lat: -25.363, lng: 131.044};
    //     // var map = new window.google.maps.Map(document.getElementById('map'), {
    //     //   zoom: 4,
    //     //   center: uluru
    //     // });
    //     // var marker = new window.google.maps.Marker({
    //     //   position: uluru,
    //     //   map: map
    //     // });
    //
    //   }




  render() {

    return(
      <div id="map" ref="thamap">
        <div className="map" ref="thamap"></div>

      </div>
    )
  }
}

// const mapStateToProps = ({ faq }) => ({ faq })
// const mapDispatchToProps = { fetchFaq }

export default Maps
