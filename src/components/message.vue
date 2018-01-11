<script>
import {actions} from "../store"
export default {
  vuex: {
    actions: actions,
    getters: {
      user: ({ user }) => user,
      // isShow:({isShow})=>isShow,
      session: ({ sessions, currentSessionId }) =>
        sessions.find(session => session.id === currentSessionId)
    }
  },
  filters: {
    // 将日期过滤为 hour:minutes
    time(date) {
      if (typeof date === "string") {
        date = new Date(date)
      }
    //  处理显示的时间
      let hour=date.getHours()>9?date.getHours():"0"+date.getHours();
      let seconds=date.getMinutes()>9?date.getMinutes():"0"+date.getMinutes();
      return hour + ":" + seconds;
    }
  },
  directives: {
    // 发送消息后滚动到底部
    "scroll-bottom"() {
      this.vm.$nextTick(() => {
        this.el.scrollTop = this.el.scrollHeight - this.el.clientHeight;
      });
    }
  }
}
</script>

<template>
    
    <div class="message" v-scroll-bottom="session.messages">
        <p class="messageTitle">{{session.user.project}}</p>
        <ul v-if="session">
            <li v-for="item in session.messages">
                <p class="time" v-if="item.isShow">
                    <span>{{ item.date | time }}</span>
                </p>
                <div class="main" :class="{ self: item.self }">
                    <img class="avatar" width="40" height="40" :src="item.self ? user.img : session.user.img" />
                    <div class="text">{{ item.content }}</div>
                </div>
            </li>
        </ul>
    </div>


</template>

<style lang="less" scoped>
body {
  position: relative;
}
.message {
  padding: 62px 15px 10px;
  overflow-y: scroll;
  li {
    margin-bottom: 15px;
  }
  .time {
    margin: 7px 0;
    text-align: center;

    > span {
      display: inline-block;
      padding: 0 18px;
      font-size: 12px;
      color: #fff;
      border-radius: 2px;
      background-color: #dcdcdc;
    }
  }
  .avatar {
    float: left;
    margin: 0 10px 0 0;
    border-radius: 3px;
  }
  .text {
    display: inline-block;
    position: relative;
    padding: 0 10px;
    max-width: ~"calc(100% - 40px)";
    min-height: 30px;
    line-height: 2.5;
    font-size: 12px;
    text-align: left;
    word-break: break-all;
    background-color: #fafafa;
    border-radius: 4px;

    &:before {
      content: " ";
      position: absolute;
      top: 9px;
      right: 100%;
      border: 6px solid transparent;
      border-right-color: #fafafa;
    }
  }

  .self {
    text-align: right;

    .avatar {
      float: right;
      margin: 0 0 0 10px;
    }
    .text {
      background-color: #b2e281;

      &:before {
        right: inherit;
        left: 100%;
        border-right-color: transparent;
        border-left-color: #b2e281;
      }
    }
  }
}
.messageTitle {
  height: 52px;
  width: 100%;
  line-height: 52px;
  text-align: center;
  position: absolute;
  z-index: 7;
  top: 0px;
  left: 0px;
  background-color: #eee;
  margin: 0px;
  border-bottom: 1px solid #ddd;
}
</style>