import Controller from '@ember/controller';
import {
  computed
} from '@ember/object';
import {
  inject as service
} from '@ember/service'
import _ from 'lodash'
import moment from 'moment'


export default Controller.extend({
  globalInfo: service("country-details"),
  tagName: "",
  country: "",


  init() {
    this._super(...arguments)
    this.set("date", moment().format("YYYY-MM-DD"))
    this.get('globalInfo').getAllCountries()
      .then(results => {
        let countries = []
        countries = _.uniqBy(results, "country").map(item => {
          return {
            id: item.country,
            label: item.country
          }
        })
        this.set("countries", countries)
        this.set("allGeoData", results)
      })
  },

  cities: computed("country", function () {
    let country = this.country;
    if (!country) return
    return this.allGeoData.filter(item => item.country === country).map(item => {
      return {
        id: item.name,
        label: item.name
      }
    })

  }),

  isCountrySelected: computed("country", function () {
     
    return !!this.country
  }),

  demographics: computed("country", function () {
    
    return $.ajax({
        url: `https://restcountries.eu/rest/v2/name/${this.country}?fullText=true`,
        method: "get",
        "dataType": "JSON"
      }).then(results =>{this.set("demographics", results[0])})
   

  }),

  actions: {
    handleChange(name, value) {
      this.set(name, value)

     
    }
  }


});
