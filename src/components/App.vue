<template>
  <div class="app">
    <header>
      <a href="#">
        <h1 class="logo">脳内会議</h1>
      </a>
    </header>
    <main>
      <list v-for="({ title, cards }, index) in lists" :title="title" :cards="cards" :index="index"></list>
      <list-draft></list-draft>
    </main>
  </div>
</template>

<script>
import List from './List';
import ListDraft from './ListDraft';
import { mapState } from 'vuex';

const App = {
  components: {
    List,
    ListDraft
  },
  computed: {
    ...mapState([
      'lists'
    ])
  },
  data() {
    return {
      message: 'hello, world!',
    }
  }
}

export default App;

</script>


<style>
html, body {
  width: 100%;
  height: 100%;
}
body {
  background-color: #345;
  /* background: linear-gradient(-45deg, rgba(229,93,135,.7), rgba(95,195,228,.7)),url(https://goo.gl/LqKys6) center center / cover no-repeat; */
}
h1, h2, h3, h4 {
  margin: 0;
}

@font-face {
  font-family: 'Noto Sans Japanese';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-Bold.woff2) format('woff2'),
  url(https://fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-Bold.woff) format('woff'),
  url(https://fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-Bold.otf) format('opentype');
}
</style>
<style lang="scss" scoped>
.app {
  font-family: "Noto Sans Japanese", "Noto Sans", sans-serif;
  font-weight: 400;
  color: #333;
  width: 100%;
  height: auto;
  max-height: 100vh;

  header {
    padding: 0 20px;
    margin: 0px auto 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 40px);
    height: 100px;
    border-bottom: 1px solid #ccc;

    a {
      text-decoration: none;
      ;
      h1.logo {
        // font-family: 'Playfair Display', serif;
        font-family: serif;
        text-align: center;
        font-weight: 100;
        font-size: 2.5rem;
        color: #cde;
        // margin: 20px 5px 5px 10px;
        margin: 20px auto 10px;

      }
    }

    a:hover {
      h1.logo {
        opacity: 0.7;
      }
    }
  }

  main {
    padding: 0 20px;

    // display: flex;
    // flex-wrap: wrap;

    // justify-content: center;
    // overflow-x: scroll;

    // width: calc(100% - 40px);
    // height: calc(100% - 100px);

    column-width: 260px;
    column-gap: 1em;
    margin: auto;

  }
}
</style>
