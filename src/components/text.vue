<script>
import { actions } from "../store";

export default {
  vuex: {
    actions: actions,
    getters: {
      currentId: ({ currentSessionId }) => currentSessionId
    }
  },
  data() {
    return {
      content: ""
    };
  },

  methods: {
    clearInfo: function() {// 发送数据
      this.sendMessage(this.content);
      this.content = "";
      this.changeList(this.currentId);
    },
    onKeyup(e) {//按下键盘发送数据
      if (e.keyCode === 13 && this.content.length) {
        this.clearInfo();
      }
    },
    sendInfo: function() {// 鼠标点击发送数据
      this.clearInfo();
      // this.showTime(this);
    }
  }
};
</script>

<template>
<div class="text">
    <!-- 工具箱 -->
    <div class="toolBox">
    </div>
    <textarea placeholder="按 Enter 发送" v-model="content" @keyup="onKeyup" id="area"></textarea>
    <button class="sendBtn"  @click.stop="sendInfo" >发送</button>
</div>
</template>

<style lang="less" scoped>
.text {
  height: 160px;
  border-top: solid 1px #ddd;
  position: relative;
  .toolBox {
    height: 44px;
    width: 100%;
    background-color: #eaeaea;
    position: relative;
  }
  textarea {
    padding: 10px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    font-family: "Micrsofot Yahei";
    resize: none;
    background-color: #eee;
  }
  .sendBtn {
    padding: 4px 22px;
    border: 1px solid #ddd;
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 6;
    color: #4d4d4d;
    background-color: #fff;
  }
}
</style>