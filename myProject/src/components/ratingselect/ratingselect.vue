<template>
  <div class="page">

  </div>
</template>

<script type="text/ecmascript-6">
  const POSITIVE = 0 // 
  const NEGATIVE = 1
  const ALL = 2

  export default {
    props: {
      ratings: {
        type: Array,
        default () {
          return []
        }
      },
      selectType: {
        type: Number,
        default: ALL
      }
    },
    data() {
      return {
  
      }
    },
    components: {
  
    }
  }
</script>

<style scoped lang="stylus">
</style>
