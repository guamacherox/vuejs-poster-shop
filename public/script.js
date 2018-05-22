new Vue({
    el: '#app',
    data: {
        total: 50,
        items: [{
                id: 1,
                title: 'Item 2'
            },
            {
                id: 2,
                title: 'Item 1'
            },
            {
                id: 3,
                title: 'Item 3'
            }
        ],
        cart: []
    },
    methods: {
        addItem: function (index) {
            this.total += 9.99;
            var item = this.items[index];

            this.cart.push(item);
        }
    }
});