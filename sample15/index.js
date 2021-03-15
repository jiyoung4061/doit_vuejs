var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js',
        // 1. 새로운 데이터 속성 1개를 추가하고, {{}} 데이터 바인딩을 이용해 화면에 표시하기
        message2: 'Hi Vue.js!',

        // 2. uid를 변경하고 해당 uid의 변경 여부를 크롬 개발자 도구의 '화면 요소 검사'기능으로 확인하기
        uid: '100',

        // 4. flag값을 false로 변경했을 때 화면에 어떤 영향을 주는가
        flag: false,
    }, 
    methods: {
        // ES6 문법
        clickBtn() {
            console.log("hi");
        },
        // ES5 문법 - 위와 동일한 코드
        // clickBtn: function() {
        //     console.log("hi");
        // },

        // 3. eventMethod를 하나 추가하고 index.html #3 영역에 해당 이벤트를 실행하는 버튼 추가
        clickEvent() {
            console.log("click!");
        }
    }
});