const Count = {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        changeCount() {
            this.count++;
        }
    },
    mounted() {
        console.log('Component mounted. Count is ' + this.count)
    },
    template: `
          <p>Count is {{ count }}</p>
          <button @click="changeCount">Click me</button>
        `
};

export default Count;