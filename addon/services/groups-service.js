import Ember from 'ember';
import serviceMixin from '../mixins/service-mixin';

export default Ember.Service.extend(serviceMixin,{

  /**
   * Group Search
   */
  search(form){

    let qs = this.encodeForm(form);

    let portalBaseUrl = 'https://www.arcgis.com';
    if(this.get('hostAppConfig.APP.portalBaseUrl')){
      portalBaseUrl = this.get('hostAppConfig.APP.portalBaseUrl');
    }
    portalBaseUrl = portalBaseUrl + '/sharing/rest';
    //q=title%3A${window.encodeURIComponent(q)}+AND+access%3Apublic+AND+isopendata%3Atrue&sortField=title&num=100&f=json
    let url = `${portalBaseUrl}/community/groups?${qs}`;

    return this.request(url);
  }

});
