import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/App';
import store from './store';

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: {
    App
  },
});



$("#clear").click(function() {
  var retVal = confirm("完全に消去されます。全データ消去しますか? ");
  if (retVal == true) {
    localStorage.clear();
    $('nonainkaigi-lists').val('');
    localStorage.removeItem('nonainkaigi-lists');
    alert("削除しました");
    location.reload();
  } else {
    return false;
  }
});
