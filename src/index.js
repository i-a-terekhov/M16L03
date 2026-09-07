import Count from './components/Count.js';

const { createApp } = Vue;

const app = createApp();

app.component('App', {
    template: `
        <Count />
        <Count />
        <Count />
`
})

app.component('Count', Count);

app.mount('#app');