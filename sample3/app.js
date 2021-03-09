// ex1. 'todo-footer' 컴포넌트 전역 등록
Vue.component('todo-footer', {
    template: '<p>This is another global child component</p>'
})
var localComponent1 = {
    template: '<p>This is another local child component</p>'
}
var app = new Vue({
    el: '#app',
    data: {
        message: 'This is a parent Component'
    },
    // ex2. 'todo-list' 컴포넌트 지역 등록
    components : {
        'todo-list': localComponent1
    }
})