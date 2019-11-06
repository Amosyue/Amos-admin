<template>
        <div>
               children 
              <slot name="first">wwwww</slot>
              <slot name="second"></slot>
        </div>
</template>
<script>
export default {
  data(){
    return {
//       code:'1111'
    }
  },
  
  mounted () {
      // debugger
      console.log(this.code)
  }
  
}
</script>
