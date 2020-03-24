window.Vue = require('vue'); 
import axios from 'axios';

window.onload=()=>{console.log("Hello")}

new Vue({
  el:"#app",
  data:{
    text:"",
    lists:[],
    seigen:40,
    cnt:0
  },
  mounted(){
    axios.get("/api/todos").then(response=>
      response.data.forEach(value=>{
        this.lists.push(value.memo)
      }))
  },
  methods:{
    post:function(){
      if(this.text ===""){
        alert("文字を入力してください")
        return
      }else if(this.text.length > this.seigen){
        alert(`${this.seigen}文字以内にしてください`)
        return
      }
      
      // axios.get("/users").then(response=>console.log(response))
      axios.post("/api/todos/post",{text:this.text}).then(response=>console.log(response))

      this.lists.push(this.text)
      this.text=""
    },
    delone:function(index){
      this.lists.splice(index,1)
      // console.log(index)
      // axios.post("/api/todos/delone",{ind:index}).then(res=>console.log(res))
    },
    alldel:function(){
      if(confirm("全て削除しますか?")){
        this.lists=[]
      }
      axios.post("/api/todos/alldel")
    },
    sample:function(){
      axios.post("/api/todos/sample",{text:this.text,status:this.cnt}).then(response=>console.log(response))
    }
  }
})