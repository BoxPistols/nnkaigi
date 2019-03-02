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
  var retVal = confirm("完全に消去/初期化されます。消去を実行しますか? ");
  if (retVal == true) {
    localStorage.clear();
    $('nonainkaigi-lists').val('');
    localStorage.removeItem('nonainkaigi-lists');
    alert("消去/初期化しました");
    location.reload();
  } else {
    return false;
  }
});
