import React, { Component } from 'react';

// 컴포넌트 상태 관리하기

// 03-3 에서는 프로퍼티를 알아보았습니다.
// 프로퍼티의 특징은 '컴포넌트 내부에서 값을 바꿀수 없다' 였지요?
// 그러면 값을 바꿔야 하는 경우에는 어떻게 할까요? 
// 그럴 때 state 를 사용합니다.
// 이번에는 state 를 사용하여 컴포넌트 상태를 관리하는 방법에 대해 알아봅시다.


// state 로 상태 관리하기
// state 는 값을 저장하거나 변경할 수 있는 객체로 보통 버튼을 클릭하거나 값을 입력하는 등의 이벤트와 함께 사용됩니다.
// 예를 들어 어떤 버튼을 눌렀을 때 버튼 색을 변경하거나 글씨 모양을 바꿀 때 사용됩니다.
// 이제부터 state 의 사용 방법을 자세히 알아보겠습니다.

class StateExample extends Component {
    constructor(props) {
        super(props);
        // state 정의
        this.state = {
            loading: true,
            formData: 'no data',
        };

        this.handleData = this.handleData.bind(this);
        setTimeout(this.handleData, 4000);
    }

    
    handleData() {
        const data = 'new Data';
        const { formData } = this.state;

        // this.setState({
        //         loading: false,
        //         formData: data + formData,
        // });

        // setState() 함수의 인자로 함수를 전달하면 이전 state 값을 쉽게 읽을 수 있습니다.
        // 마지막으로 setState() 함수의 인자로 함수를 전달하면 이전 state 값을 따로 읽는 과정을 생략할 수도 있습니다.

        // 일반함수 예
        // this.setState(function(prevState) {
        //     console.log(prevState);
        //     return {
        //         loading: false,
        //         formData: data + formData
        //     }
        // });

        // 화살표 함수 예
        this.setState(prevState => ({
            loading: false,
            formData: data + formData,
        }));

        console.log('loading 값', this.state.loading);
    }

    render() {
        return (
            <div>
                <span>로딩중: {String(this.state.loading)}</span>
                <span>결과: {this.state.formData}</span>
            </div>
        );
    }
}

// 결과를 보면 화면이 4초 뒤에 바뀝니다.
// 프로퍼티에서 단순히 값을 읽어 화면에 출력한 것과 비교해 보면 state 의 유용함이 더 잘 느껴질 것입니다.
// 그런데 state 를 사용할 때에는 몆 가지 사항을 주의해야 합니다.

// state 를 사용할 때 주의할 점
// 1. 생성자(constructor) 에서 반드시 초기화해야 합니다.
// 2. state 값을 변경할 때는 setState() 함수를 반드시 사용해야 합니다.
// 3. setState() 함수는 비동기로 처리되며, setState() 코드 이후로 연결된 함수들의 실행이 완료된 시점에 화면 동기화 과정을 거칩니다.

// 정리한 내용에서 보듯 state 에 저장되는 객체는 반드시 초기화해야 합니다.
// 그렇지 않으면 내부 함수에서 state 값에 접근할 수 없습니다.
// 만약 마땅한 초깃값이 없다면 state에 빈 객체라도 넣어야 합니다. this.state = {};
// 그리고 state 에 저장되는 객체의 값은 직접 변경하면 안됩니다.

// state 값은 setState() 함수로 변경합니다.
// state 값을 직접 변경하면 안 되는 이유는 render() 함수로 화면을 그려주는 시점은 리액트 엔진이 정하기 때문입니다.
// 즉, 여러분이 state 값을 직접 변경해도 render() 함수는 새로 호출되지 않습니다.
// 하지만 setState() 함수를 호출하여 state 값을 변경하면 리액트 엔진이 자동으로 render() 함수를 호출하므로 화면에 변경된 state 값을 새롭게 출력할 수 있습니다.
// setState() 함수는 03-5 절에서 살펴볼 컴포넌트의 생명주기와 깊이 연관되어 있습니다.
// 실제로 리액트 엔진은 setState() 함수로 state 값을 변경하면 몆 단계의 검증 과정을 거쳐 render() 함수를 호출합니다.



export default StateExample;