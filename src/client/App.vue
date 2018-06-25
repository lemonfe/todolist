<template>
    <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <div id="test">
      <p>{{counter}}</p>
      <p>{{fullName}}</p>
      <p>{{textA}}</p>
      <p>{{textC}}</p>
      <p>{{textAdd}}</p>
    </div>
    <!-- <Todo></Todo> -->
    <router-link to="/todo">todo</router-link>
    <router-link to="/login">login</router-link>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
    </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'

import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

export default {
  data () {
    return {
      text: 'lessssa'
    }
  },
  components: {
    Header,
    Footer
    // Todo
  },
  mounted () {
    // let i = 1
    this.updateCountAsync({
      num: 5,
      num1: 6,
      time: 2000
    })
    this['a/updateText']('llll')
    this['a/add']()
    this['b/test']()
    // setInterval(() => {
    //   // commit值可以接受两个参数，第一个参数为state，第二个是我们自己的参数
    //   // 如果要传多个参数，可以通过对象方式来传递, mutations中通过解构的方式来接受
    //   this.$store.commit('updateCount', {
    //     num: i++,
    //     num1: 2
    //   })
    // }, 1000)
  },
  computed: {
    ...mapState({
      counter: state => state.count,
      textA: state => state.a.text,
      textB: state => state.b.text,
      textC: state => state.c.comment
    }),
    ...mapGetters({
      fullName: 'fullName',
      textAdd: 'a/textAdd'
    })
  },
  methods: {
    ...mapMutations([
      'updateCount',
      'a/updateText'
    ]),
    ...mapActions([
      'updateCountAsync',
      'a/add',
      'b/test'
    ])
  }
}
</script>

<style lang="stylus" scoped>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#test
  color red

#cover {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.6;
  z-index: -1;
}

#loading {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
