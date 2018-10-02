import Service from '@ember/service';
import $ from 'jquery'
import _ from  'lodash'

export default Service.extend({
    countries : null,

    readCountries()
    {
        return $.getJSON("/assets/world_cities.json")
        .then(results => {
            const countries = _.uniqBy(results, "country")
           const uniquecountries = countries.map(result => {return {id : result.country, label: result.country}})
           return uniquecountries
            
        })
    }
});
