import Vuex from 'vuex';
import Vue from 'vue'
import axios from "axios";

Vue.use(Vuex)
let usercookie


let httpbefore = 'https://service-o15lm07j-1300177834.cd.apigw.tencentcs.com/release';
let getuserqr;
const actions = {
    async getlovemassage(countx, value) {
        try {
            const res = await axios.get('https://api.mcloc.cn/love');
            countx.commit('setlove', res.data);
        } catch (err) {
            console.log(err);
        }
    },
    async gettodayshici(countx, value) {
        try {
            const res = await axios.get('https://v1.jinrishici.com/all.json');
            countx.commit('settodayshici', res.data);
        } catch (err) {
            console.log(err);
        }
    },
};

const mutations = {
    setNewKey(state, value) {
        state.newkey = value
    },
    setNewqrimg(state, value) {
        state.newqrimg = value
    },
    setqrState(state, value) {
        state.qrState = value
        if (value.data.status === 803) {
            state.qrState = value
            clearInterval(getuserqr)
        }
    },
    setlove(state, value) {
        console.log(value)
        state.lovemassage = value
    },
    setsingbynetizens(state, value) {
        state.singbynetizens = value
    },
    settodayshici(state, value) {
        state.todayshici = value
    },
    setallbumnew(state, value) {
        state.allbumnew = value
    },
    sethotartists(state, value) {
        state.hotartists = value
    },
    setpersonalized(state, value) {
        state.personalized = value
    },
    setloginmassage(state, value) {
        state.loginmassage = value.data.data.account.id
    },
    setusermassgae(state, value) {
        state.usermassgae = value
    },
    setuserlogin(state, value) {
        state.userlogin = value
    },
    setuserdetail(state, value) {
        state.userdetail = value
    }
};

const state = {
    newkey: '',
    newqrimg: '',
    qrState: '',
    lovemassage: '',
    singbynetizens: '',
    todayshici: '',
    allbumnew: '',
    hotartists: '',
    personalized: '',
    loginmassage: '',
    userlogin: '',
    userdetail: '',
    songsid:''
};
const store = new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
    strict: true,
})

export default store


