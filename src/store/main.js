import Vuex from 'vuex';
import Vue from 'vue'
import axios from "axios";

Vue.use(Vuex)
let usercookie


let httpbefore = 'https://service-o15lm07j-1300177834.cd.apigw.tencentcs.com/release';
let getuserqr;
const actions = {
    async getqrkey(countx, value) {
        const res = await axios.post(`${httpbefore}/login/qr/key`);
        countx.commit('setNewKey', res.data.data.unikey);
    },
    async getqrimg(countx, value) {
        const res = await axios.post(`${httpbefore}/login/qr/create?key=${countx.state.newkey}&qrimg=true`);
        countx.commit('setNewqrimg', res.data.data.qrimg);
    },
    async getqrstate(countx, value) {
        getuserqr = setInterval(async () => {
            const res = await axios.post(`${httpbefore}/login/qr/check?key=${countx.state.newkey}&timerstamp=${Date.now()}`);
            console.log(res, '全部信息');
            countx.commit('setqrState', res);
            if (res.data.code === 803) {
                window.localStorage.setItem('cookie', res.data.cookie)
                console.log(res)
                clearInterval(getuserqr);
            }
        }, 1000);
    },
    //获取用户登陆状态
    async getuserlogin(countx, value) {
        console.log(window.localStorage.getItem('cookie'), '用户登陆cook')
        usercookie = window.localStorage.getItem('cookie')
        const res = await axios({
            url: `${httpbefore}/login/status?timerstamp=${Date.now()}`,
            method: 'post',
            data: {
                cookie: usercookie,
            },
        })
        console.log(usercookie, '用户登陆cook')
        console.log(res, '用户登陆状态');
        countx.commit('setuserlogin', res);
    },
    //获取用户信息
    async getuserdetail(countx, value) {
        const res = await axios.get(`${httpbefore}/user/detail?${usercookie}`);
        countx.commit('setuserdetail', res);
        console.log(res, '用户信息');
    },

    async getlovemassage(countx, value) {
        try {
            const res = await axios.get('https://api.mcloc.cn/love');
            countx.commit('setlove', res.data);
        } catch (err) {
            console.log(err);
        }
    },
    async getnetizens(countx, value) {
        const res = await axios.get(`${httpbefore}/top/playlist?${usercookie}&limit=6`);
        countx.commit('setsingbynetizens', res);
    },
    async gettodayshici(countx, value) {
        try {
            const res = await axios.get('https://v1.jinrishici.com/all.json');
            countx.commit('settodayshici', res.data);
        } catch (err) {
            console.log(err);
        }
    },
    async getallbumnew(countx, value) {
        try {
            const res = await axios.get(`${httpbefore}/album/new?${usercookie}&area=ALL&limit=6`);
            countx.commit('setallbumnew', res);
        } catch (err) {
            console.log(err);
        }
    },

    async gethotartists(countx, value) {
        try {
            const res = await axios.get(`${httpbefore}/top/artists?${usercookie}&limit=30`);
            countx.commit('sethotartists', res);
        } catch (err) {
            console.log(err);
        }
    },
    async getpersonalized(countx, value) {
        try {
            const res = await axios.get(`${httpbefore}/personalized?${usercookie}&limit=8`);
            countx.commit('setpersonalized', res);
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


