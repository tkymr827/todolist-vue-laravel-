window.Vue = require('vue'); 
import axios from 'axios';

new Vue({
  el:"#app",
  data:{
    text:"",
    lists:[],
    seigen:40
  },
  mounted(){
    this.take()
  },
  methods:{
    take:function(){
      axios.get("/api/todos").then(response=>{
        let keep = [];
        let c = response.data.filter(e => {
          if (keep.indexOf(e["id"]) === -1) {
            keep.push(e["id"]);
            return e;
          }
        });
        this.lists = c
      })
    },
    post:function(){
      if(this.text ===""){
        alert("文字を入力してください")
        return
      }else if(this.text.length > this.seigen){
        alert(`${this.seigen}文字以内にしてください`)
        return
      }
    
      axios.post("/api/todos/post",{text:this.text})

      this.text=""
      this.take()
    },
    delone:function(e){
      axios.post("/api/todos/delone",{id:e})
      this.take()
    },
    alldel:function(){
      if(confirm("全て削除しますか?")){
        this.take()
        axios.post("/api/todos/alldel")
      }
    }
  }
})