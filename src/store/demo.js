//
// async function checkStatus(key) {
//     const res = await axios({
//         url: `/login/qr/check?key=${key}&amp;timerstamp=${Date.now()}`,
//     })
//     return res.data
// }
// async function getLoginStatus(cookie = '') {
//     const res = await axios({
//         url: `/login/status?timerstamp=${Date.now()}`,
//         method: 'post',
//         data: {
//             cookie,
//         },
//     })
//     document.querySelector('#info').innerText = JSON.stringify(res.data, null, 2)
// }
// async function login() {
//     let timer
//     let timestamp = Date.now()
//     const cookie = localStorage.getItem('cookie')
//     this.getLoginStatus(cookie)
//     const res = await axios({
//         url: `/login/qr/key?timerstamp=${Date.now()}`,
//     })
//     const key = res.data.data.unikey
//     const res2 = await axios({
//         url: `/login/qr/create?key=${key}&amp;qrimg=true&amp;timerstamp=${Date.now()}`,
//     })
//     document.querySelector('#qrImg').src = res2.data.data.qrimg
//
//     timer = setInterval(async () =&gt; {
//         const statusRes = await this.checkStatus(key)
//         if (statusRes.code === 800) {
//         alert('二维码已过期,请重新获取')
//         clearInterval(timer)
//     }
//     if (statusRes.code === 803) {
//         // 这一步会返回cookie
//         clearInterval(timer)
//         alert('授权登录成功')
//         await this.getLoginStatus(statusRes.cookie)
//         localStorage.setItem('cookie', statusRes.cookie)
//     }
// }, 3000)
// }
// login()
