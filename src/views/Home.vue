<template>
  <h1>This is Home</h1>
  <p>{{name}}</p>
  <p @click='age++' style='cursor:pointer'>The Age is {{age}}</p>
  <button @click="onClick">Click here</button>
  <p>{{books.title}}</p>
  <input type="text" v-model="name">
  <p style='cursor:pointer'>{{booksTwo.title}}</p>
  <input type="text" v-model="booksTwo.title">
</template>

<script>
import {ref,reactive} from 'vue'

export default {
  name: 'Home',
  setup(){

    const name=ref('Naveed')
    const height=ref(6)
    const age=ref(11)
    const books=ref({title:'Loh o Qalam', author:'QBA'})
    const booksTwo=reactive({title:'Sharh e Loh o Qalam', author:'HAJ'})
    const onClick=()=>{
        name.value="Naveed Hayat Azeemi"
    }

    const onClickBooksTwo=()=>{
      booksTwo.title="Nazria Rang o Noor"
    }

    return {booksTwo,name,age,height,onClick, books}
  }
};
</script>
