<script>
import { actions } from "../store";

export default {
  vuex: {
    actions: actions,
    getters: {
      user: ({ user }) => user,
      filterKey: ({ filterKey }) => filterKey
    }
  },
  methods: {
    // onKeyup(e) {
    //   this.search(e.target.value);
    // }  
  }
};
</script>

<template>
<div class="card">
    <header>
        <img class="avatar" width="40" height="40" :alt="user.name" :src="user.img">
         <p  class="name">
            <span>{{user.name}}</span> <br>
            <span>{{user.department}}</span>
        </p>
    </header>
    <footer>
        <!-- <input class="search" type="text" placeholder="search user..." @keyup="onKeyup | debounce 150"> -->
    </footer>
</div>
</template>

<style scoped lang="less">
.card {
  padding: 12px;
  border-bottom: solid 1px #24272c;

  footer {
    margin-top: 10px;
    height: 15px;
    border-top:1px solid #292C33;
  }

  .avatar,
  .name {
    vertical-align: middle;
  }
  .avatar {
    border-radius: 2px;
  }
  .name {
    display: inline-block;
    margin: 0 0 0 12px;
    font-size: 16px;
    width: calc (100% - 45px);
    overflow: hidden;
    span {
      display: inline-block;
      &:nth-child(1) {
        font-size: 16px;
        // color:#333;
      }
      &:nth-child(3) {
        font-size: 10px;
        color: #f0f0f0;
      }
    }
  }
  .search {
    padding: 0 10px;
    width: 100%;
    font-size: 12px;
    color: #fff;
    height: 30px;
    line-height: 30px;
    border: solid 1px #3a3a3a;
    border-radius: 4px;
    outline: none;
    background-color: #26292e;
  }
}
</style>