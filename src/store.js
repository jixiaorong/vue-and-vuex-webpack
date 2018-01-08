/**
 * Vuex
 * http://vuex.vuejs.org/zh-cn/intro.html
 */
import Vue from 'vue';
import Vuex from 'vuex';
import common from './common.js'

Vue.use(Vuex);

const now = new Date();
const store = new Vuex.Store({
    state: {// 相当于数据库
        // 当前用户
        user: {
            name: '苹果',
            department:"橙工厂市场部",
            img: 'dist/images/apple.jpg'
        },
        // 会话列表
        sessions: [
            {
                id: 1,
                user: {
                    name: '猫咪',
                    department:"龙湖天街",
                    img: 'dist/images/cat.jpg',
                    project:"河马先生"
                },
                messages: [
                    {
                        content: 'Hello',
                        date: now
                    }, {
                        content: '干啥呢',
                        date: now
                    }
                ]
            },
            {
                id: 2,
                user: {
                    name: '女孩',
                    department:"蓝色港湾",
                    img: 'dist/images/girl.jpg',
                    project:"天猫超市"
                },
                messages: [
                    {
                        content: '咋样是',
                        date: now
                    }
                ]
            },
            {
                id: 3,
                user: {
                    name: '财神',
                    department:"朝阳大悦城",
                    img: 'dist/images/moneyFather.jpg',
                    project:"百度外卖"
                },
                messages: []
            }
        ],
        // 当前选中的会话
        currentSessionId:1,
        // 过滤出只包含这个key的会话
        filterKey: ''
    },
    mutations: {// 修改数据
        INIT_DATA (state) {// 初始化数据
            // console.log(state.sessions)
            let data = localStorage.getItem('vue-chat-session');
            if (data) {
                state.sessions = JSON.parse(data);
            }
        },
        // 发送消息
        SEND_MESSAGE ({ sessions, currentSessionId }, content) {
            let session = sessions.find(item => item.id === currentSessionId);
            session.messages.push({
                content: content,
                date: new Date(),
                self: true
            });
        },
        // 选择会话
        SELECT_SESSION (state, id) {
            state.currentSessionId = id;
        } ,
        // 搜索
        SET_FILTER_KEY (state, value) {
            state.filterKey = value;
        },
        // 修改session里面的数据排序
        CHANGE_LIST(state,id){
            const curSession = state.sessions;// 
            var index;
            for(var i=0;i<curSession.length;i++){
                if(curSession[i].id==id){
                    index=i;
                }
            }
            var currentList = state.sessions[index]
            state.sessions.remove(currentList);
            state.sessions.unshift(currentList);
            localStorage.setItem('vue-chat-session', JSON.stringify(state.sessions));
        }
    }
});

store.watch(
    (state) => state.sessions,
    (val) => {
        // console.log('CHANGE: ', val);
        localStorage.setItem('vue-chat-session', JSON.stringify(val));
    },
    {
        deep: true
    }
);

export default store;
export const actions = {
    initData: ({ dispatch }) => dispatch('INIT_DATA'),
    sendMessage: ({ dispatch }, content) => dispatch('SEND_MESSAGE', content),
    selectSession: ({ dispatch }, id) => dispatch('SELECT_SESSION', id),
    search: ({ dispatch }, value) => dispatch('SET_FILTER_KEY', value),
    changeList:({dispatch},id) => dispatch('CHANGE_LIST',id)
};

