<template>
<div class="container">
<input type="text" v-model='search'>
<p>Search Term: {{search}}</p>

<ul v-for='name in matchingNames' :key='name'>
<li>{{name}}</li>
</ul>
</div>

</template>

<script>
import {computed,ref} from 'vue'
export default {
setup(){
const search=ref('')
const names=ref(['zeeshan','naveed','arsalan','harris'])

const matchingNames=computed(()=>{
 return names.value.filter((name)=>{
   name.includes(search.value)
 })
})
  return {names,search, matchingNames }
}
}
</script>
<style>
.container {
  border:2px solid black;
  padding:20px;
  margin:20px;
  width:100%;
  height:100%;
}
</style>