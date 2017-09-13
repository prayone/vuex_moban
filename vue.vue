 // vuex状态管理    vuex存储数据
   that.$store.dispatch('username',that.userName)
   that.$store.dispatch('sid',rs.data.sid)



//vuex获取数据
    let username=this.$store.state.Vuex_use.username;
    let sid=this.$store.state.Vuex_use.sid;
