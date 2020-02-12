var app = new Vue({
    el: '#app',
    data: {
        appTitle: 'To do app',
        toDoValue: '',
        toDoList: ['one','two','three','four'],
        count : 0
    },
    
    methods:{
        addItem : function(){
            this.toDoList.push(this.toDoValue)
            this.toDoValue = ''
        },
        addBtn : function(){
            this.count += 1;
        },
        deleteBtn : function(){
            if(this.count>0)
            this.count -= 1;
        }
    }
  })