new Vue ({
    el:'#app',
    data:{
        total: 50,
        items: [
            {title: 'Item 1'},
            {title: 'Item 2'},
            {title: 'Item 3'}
        ],
        cart: []
    },
    methods:{
        addPrice: function() {
            this.total += 9.99;
        }
    }
});
