const app = Vue.createApp({
    data(){
        //return data object
        return {
            subTotal:0.0,
            items:[{
                id:1,
                itemname:"New Item1",
                qun:1,
                total:300.00,
                isshow:true
            },{
                id:2,
                itemname:"New Item2",
                qun:1,
                total:400.00,
                isshow:true
            },{
                id:3,
                itemname:"New Item3",
                qun:1,
                total:600.00,
                isshow:true
            }],
            
        }
    },
    methods:{
        increaseQuntity(ids){
             this.items.filter((item =>{
                 if(item.id === ids){
                    // alert(this.items.indexOf(ids))
                    index = this.items.findIndex(item => item.id === ids); //find index
                    this.items[index].qun =  this.items[index].qun +1  //increase qun given id
                 }
             }))    
        },
        eventhadler(e,data1){
            console.log(e.type)
            
            if(data1){
                 console.log(data1)
            }
        }
        
    
    }
})

app.mount('#app')