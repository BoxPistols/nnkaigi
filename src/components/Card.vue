<template>
<div class="cardArea">
  <div class="card" draggable="true" @drop="onDrop" @dragstart="onDragStart" @dragover.prevent>

    <div class="close-button" @click="removeCardFromList">
      <img src="/img/close16.png" alt="">
    </div>

    <div class="body">
      {{ body }}
    </div>
    <div class="arrows">
      <div :class="['arrow', 'left', movableToLeft ? '' : 'disabled']" @click="moveCardToLeft">
        ←
      </div>
      <div :class="['arrow', 'right', movableToRight ? '' : 'disabled']" @click="moveCardToRight">
        →
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapGetters,
  mapMutations
} from 'vuex';
import * as types from '../store/mutation-types.js';

const Card = {
  props: ['body', 'index'],
  computed: {
    movableToLeft() {
      return this.$parent.index > 0;
    },
    movableToRight() {
      return this.listsCount > this.$parent.index + 1;
    },
    ...mapGetters([
      'listsCount'
    ])
  },
  methods: {
    removeCardFromList() {
      this.$store.commit(types.REMOVE_CARD_FROM_LIST, {
        from: this.$parent.index,
        cardIndex: this.index
      });
    },
    moveCardToRight() {
      if (this.movableToRight) {
        this.moveCardToList({
          from: {
            listIndex: this.$parent.index,
            cardIndex: this.index
          },
          to: {
            listIndex: this.$parent.index + 1,
            cardIndex: null
          }
        });
      }
    },
    moveCardToLeft() {
      if (this.movableToLeft) {
        this.moveCardToList({
          from: {
            listIndex: this.$parent.index,
            cardIndex: this.index
          },
          to: {
            listIndex: this.$parent.index - 1,
            cardIndex: null
          }
        });
      }
    },
    onDragStart({
      dataTransfer
    }) {
      dataTransfer.effectAllowed = 'move';
      dataTransfer.setData("application/json", JSON.stringify({
        from: {
          listIndex: this.$parent.index,
          cardIndex: this.index
        }
      }));
    },
    onDrop({
      dataTransfer
    }) {
      const {
        from
      } = JSON.parse(dataTransfer.getData("application/json"));
      const to = {
        listIndex: this.$parent.index,
        cardIndex: this.index
      }
      this.moveCardToList({
        from,
        to
      });
    },
    ...mapMutations({
      moveCardToList: types.MOVE_CARD_TO_LIST
    })
  }
}

export default Card;
</script>

<style lang="scss" scoped>
.cardArea {
    witdh: auto;
}
.card {
    margin: 10px 0 18px;
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px 12px 25px;
    background-color: #fff;
    border-radius: 4px;
    width: calc(100% - 24px);
    min-height: 30px;
    cursor: pointer;

    .close-button img {
        position: absolute;
        display: block;
        width: 14px;
        top: 6px;
        right: 6px;
        font-size: 22px;
        opacity: 0.8;
        cursor: pointer;
    }

    .close-button:hover {
        opacity: 0.8;
    }

    .body {
        font-size: 16px;
        width: 100%;
        word-wrap: break-word;
        font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
    }

    .arrows {
        display: flex;
        justify-content: space-between;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;

        .arrow {
            // margin: 15px 10px 5px;
            // font-size: 14px;
            // color: #cc003F;
            // cursor: pointer;
            margin: 0 -7px;
            font-size: 16px;
            color: #ffb241;
            cursor: pointer;
            transform: scale(1,1.5);
            padding: 1px 8px 2px;
            transition:.2s;
        }

        .arrow:hover {
            // opacity: 0.8;
            cursor: pointer;
            background: rgba(236, 244, 251, 0.84);
        }

        .arrow.disabled {
            color: #bbb;
            pointer-events: none;
        }
    }
}

.card:last-child {
    margin-bottom: 0;
}
</style>
