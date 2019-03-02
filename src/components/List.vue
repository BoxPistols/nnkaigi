<template>
<div class="list" @dragover.prevent>
  <div class="close-button" @click="removeList">
    <img src="/img/close16.png" alt="">
  </div>
  <div class="title">
    {{ title }}
  </div>
  <div class="cards" v-if="cardCount > 0">
    <card v-for="({ body }, index) in cards" :body="body" :index="index"></card>
  </div>
  <card-draft></card-draft>
</div>
</template>

<script>
import {
  mapState
} from 'vuex';
import Card from './Card';
import CardDraft from './CardDraft';

import * as types from '../store/mutation-types';

const List = {
  props: ['title', 'cards', 'index'],
  components: {
    Card,
    CardDraft
  },
  computed: {
    cardCount() {
      return this.cards.length;
    }
  },
  methods: {
    removeList() {

      var listIndex = this.index;
      var check = confirm('追加リスト以外の削除を行うと他のリストも削除される事があります。本当に削除しますか？');
      if (check === true) {
        this.$store.commit(types.REMOVE_LIST, {
          listIndex: this.index
        });
      }
    }
  }
}


// methods: {
//     deleteToDo(id) {
//         var deleteIndex = '';
//         var check = confirm('本当に削除しますか？');
//         if (check === true) {    //アラートでOKが押下されたら
//             this.list.some(function (value, index) {
//                 if (value.id === id) {
//                     deleteIndex = index;
//                 }
//             });
//             this.list.splice(deleteIndex, 1);
//         }
//     },
// }



export default List;
</script>

<style lang="scss" scoped>
.list {
    margin: 0 10px 20px;
    position: relative;

    // display: flex;
    // flex-direction: column;

    // align-items: flex-start;
    // min-width: 290px;
    // width: 290px;

    // min-heigh: 400px;
    min-height: 60vh;
    background-color: #e0e0e0;
    border-radius: 4px;
    padding: 15px;
    max-width: 280px;
    overflow-y: scroll;

    display: inline-block;
    // width: 100%;
    background: #efefef;

    &:first-of-type {
        // color: teal;
        background-color: rgb(191, 237, 162);
        height: 100%;
        max-height: 100vh;
        // display: block;
    }
    &:nth-child(2) {
        // color: orange;
        background-color: rgb(246, 206, 128);
    }
    &:nth-child(3) {
        background-color: rgb(128, 218, 246);
    }
    &:nth-child(4) {
        background-color: rgb(241, 135, 112);
    }
    &:nth-child(5) {
        background-color: rgb(222, 144, 238);
    }
    &:nth-child(6) {
        background-color: rgb(127, 231, 215);
    }
    &:nth-child(7) {
        background-color: rgb(227, 222, 107);
    }

    .close-button {
        position: absolute;
        top: 6px;
        right: 14px;
        font-size: 28px;
        cursor: pointer;
    }

    .close-button:hover {
        opacity: 0.8;
    }

    .title {
        // margin: 5px 0;
        font-size: 24px;
        width: calc(100% - 20px);
        word-break: break-word;
        margin: 0;
        padding: 0;
        line-height: 1;
    }

    .cards {
        margin-top: 15px;
        width: 100%;
    }
}
</style>
