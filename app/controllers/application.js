import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service'
import _ from  'lodash'


export default Controller.extend({
    readcountries: service("read-countries") ,
    tagName : "",
    country : "",

    init()
    {
        this._super(...arguments)
        this.get('readcountries').readCountries()
        .then(results => 
            {
                this.set("countries",results )
                      
        })
      
    },

    counties : computed("country", () => {
        
    }),
      
    isCountrySelected : computed("country", () => !!this.country),

    actions:{
        handleChange(name, value)
        {
            this.set(name, value)
        }
    }
  
  
});
