<script>
import { actions } from "../store.js";
import { mapState } from 'vuex'
export default {

  vuex: {

    actions:actions,
    getters: {
      currentId: ({ currentSessionId }) => currentSessionId,
      count:({sessions})=>sessions.count
    }
  },
  data(){
      return{
          newid:"",
      }
  },
  methods: {
    acceptInfo() {
      //模拟接受当前聊天对话框的信息
      this.newInfo(this.newid);
      this.addNum(this.newid);
    },
    num(){
       this.newInfo(2);
      this.addNum(2);
    },
    num2(){
       this.newInfo(3);
      this.addNum(3);
    }
  }
};
</script>
<template>
    <div>
        <input type="button" value="1" v-model="newid"  @click="acceptInfo">
        <br>
        <input type="button" value="2"   @click="num">
        <br>
        <input type="button" value="3"   @click="num2">
    </div>
</template>

<style lang="less" scoped>
input {
  width: 80px;
  height: 30px;
  background-color: red;
}
</style>
