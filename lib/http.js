// lib/http.js
// github api https://www.cnblogs.com/ygunoil/p/13607491.html

// 通过 axios 处理请求
const axios = require('axios')

axios.interceptors.response.use(res => {
    return res.data;
})


/**
 * 获取模板列表
 * @returns Promise
 */
async function getRepoList() {
    return axios.get('https://api.github.com/users/ch106/repos')
}

/**
 * 获取版本信息
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function getTagList(repo) {
    // https://api.github.com/repos/ch106/ch-cli/tags
    return axios.get(`https://api.github.com/repos/ch106/${repo}/tags`)
}

module.exports = {
    getRepoList,
    getTagList
}
