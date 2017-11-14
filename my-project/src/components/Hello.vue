<template>
  <form class="hello">
    姓名；
    <input type="text" v-model="data.name" placeholder="">
    <br/>
    性别：
    <input type="radio" id="man" value="One" v-model="data.sex">
    <label for="man">男</label>
    <input type="radio" id="male" value="Two" v-model="data.sex">
    <label for="male">女</label>
    <br/>
    兴趣；
    <input type="checkbox" id="book" value="book" v-model="data.interest">
    <label for="book">阅读</label>
    <input type="checkbox" id="swim" value="swim" v-model="data.interest">
    <label for="swim">游泳</label>
    <input type="checkbox" id="game" value="game" v-model="data.interest">
    <label for="game">游戏</label>
    <input type="checkbox" id="song" value="song" v-model="data.interest">
    <label for="song">唱歌</label>
    <br/>
    身份；
    <select v-model="data.identity">
      <option value="teacher" selected>教师</option>
      <option value="doctor">医生</option>
      <option value="lawyer">律师</option>
    </select>
  </form>
</template>

<script>
export default {
  name: 'hello',
  data: function () {
    return {
      data: {
        name: '',
        sex: '',
        interest: [],
        identity: 'teacher'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
