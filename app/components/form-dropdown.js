import Component from '@ember/component';

export default Component.extend({
    tagName : "",

    actions: 
    {
        handleChange(value)
        {
            this.onSelect(this.name, value)
        }

    }
});
