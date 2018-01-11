<script>
import { actions } from '../store';

export default {
    vuex: {
        actions: actions,
        getters: {
            // 过滤后的会话列表
            sessions: ({ sessions, filterKey }) => {
                let result = sessions.filter(session => session.user.name.includes(filterKey));
                return result;
            },
            // 当前会话index
            currentId: ({ currentSessionId }) => currentSessionId,
            isRead:({sessions})=>sessions.unRead,
            count:({sessions})=>sessions.count,
        }
    },

 
};
</script>

<template>
<div class="list">
    <ul>
        <li v-for="item in sessions" :class="{ active: item.id === currentId }" @click="selectSession(item.id)">
            <a href="javascript:;">
                <img class="avatar"  width="40" height="40" :alt="item.user.name" :src="item.user.img">
                <span v-if="item.unRead">{{item.count}}</span>
            </a>
            <p  class="name">
                <span>{{item.user.name}}</span> <br>
                <span>{{item.user.department}}</span>
            </p>
        </li>
    </ul>
</div>
</template>

<style scoped lang="less">
.list {
    li {
        padding: 12px 15px;
        border-bottom: 1px solid #292C33;
        cursor: pointer;
        transition: background-color .1s;

        &:hover {
            background-color: rgba(255, 255, 255, 0.03);
        }
        &.active {
            background-color: rgba(255, 255, 255, 0.1);
        }
        a{
            display: inline-block;
            position: relative;
            span{
                position: absolute;
                top:-9px;
                left:34px;
                display: block;
                padding:0px 6px;
                border-radius:20px;
                background-color: red;
                color:#fff;
                z-index: 5;
                font-size: 10px;
            }
        }
    }
    .avatar, .name {
        vertical-align: middle;
    }
    .avatar {
        border-radius: 2px;
    }
    .name {
        display: inline-block;
        margin: 0 0 0 12px;
        width: calc (100% - 45px);
        overflow: hidden;
        span{
            display: inline-block;
            &:nth-child(1){
                font-size: 14px;
                // color:#333;
            }
            &:nth-child(3){
                font-size: 10px;
                color:#f0f0f0;
            }
        }
    }
}
</style>