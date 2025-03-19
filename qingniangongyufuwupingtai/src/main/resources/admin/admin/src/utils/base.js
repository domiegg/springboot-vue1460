const base = {
    get() {
        return {
            url : "http://localhost:8080/qingniangongyufuwupingtai/",
            name: "qingniangongyufuwupingtai",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/qingniangongyufuwupingtai/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "青年公寓服务平台"
        } 
    }
}
export default base
