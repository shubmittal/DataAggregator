import Service from '@ember/service';
import _ from 'lodash'

export default Service.extend({

  getAllCountries() {
    return $.getJSON("/assets/world_cities.json")
      .then(results => {
        return results

      })
  },

getDemographicsForCountry(country)
{
    if(country === "") return;
    return $.ajax({
        url: `https://restcountries.eu/rest/v2/name/${country}?fullText=true`,
        method: "get",
        "dataType": "JSON"
      }, function(results) { return results.responseJSON})
      
      

}



  


});
