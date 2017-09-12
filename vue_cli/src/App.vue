<template>
  <div id="app">
    <mt-loadmore :top-method="topFn"
                 @top-status-change="handleTopChange"
                 :bottom-method="botFn"
                 :bottom-all-loaded="allLoaded"
                 ref="loadmore">
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">Loading...</span>
      </div>
      <ul class="list" ref="list">
        <li>
          <div class="con">
            list
          </div>
        </li>
        <li>
          <div class="con">
            list
          </div>
        </li>
        <li>
          <div class="con">
            list
          </div>
        </li>
        <li>
          <div class="con">
            list
          </div>
        </li>
        <li>
          <div class="con">
            list
          </div>
        </li>
        <li>
          <div class="con">
            list
          </div>
        </li>
        <li>
          <div class="con">
            list
          </div>
        </li>
        <li>
          <div class="con">
            list
          </div>
        </li>
        <li>
          <div class="con">
            list
          </div>
        </li>
        <li>
          <div class="con">
            list
          </div>
        </li>
        <li>
          <div class="con">
            list
          </div>
        </li>
        <li>
          <div class="con">
            list
          </div>
        </li>
        <li>
          <div class="con">
            list
          </div>
        </li>
        <li>
          <div class="con">
            list
          </div>
        </li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
  //  import list from '@/components/list'

  export default {
    name: 'app',
    data(){
      return{
        topStatus:'',
        allLoaded:false
      }
    },
    mounted(){
      var list = this.$refs.list;
      console.log(list)
      window.addEventListener('touchemove',function(){
        console.log('touch')

        console.log(list.scrollTop)

      },false)
    },
    methods:{
      topFn:function(){
        const self = this;
        var timer = setTimeout(function(){
          self.$refs.loadmore.onTopLoaded();
        },3000)
      },
      botFn:function(){
        const self = this;
        var timer = setTimeout(function(){
          self.allLoaded = true;// 若数据已全部获取完毕
          self.$refs.loadmore.onBottomLoaded();
        },3000)
      },
      handleTopChange:function(status){
        this.topStatus = status;
      },
    }
//  components:{
//    list
//  }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

  .list {
    font-size: 18px;
    list-style: none;
  }

  li {
    height: 60px;
    width: 100%;
    background: #ccc;
  }

  .con {
    font-size: 10px;

  }
</style>
