const { ref, onMounted } = Vue;

const Count = {
    setup() {
        const count = ref(3);

        function changeCount() {
            count.value++;
        }

        onMounted(() => {
            console.log('Component mounted. Count is ' + count.value);
        });

        return {
            count,
            changeCount,
        };
    },
    template: `
          <p>Count is {{ count }}</p>
          <button @click="changeCount">Click me</button>
        `
};

export default Count;