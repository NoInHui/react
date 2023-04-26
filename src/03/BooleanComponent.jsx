import React, { Component } from 'react';

// 불리언 프로퍼티 사용하기

// boolean 은 ture 또는 false 만 정의할 수 있는 특수한 자료형입니다.
// 앞에서 문자열 외의 값은 중괄호로 감싸 전달해야 한다고 했지요.
// boolean 값은 특별한 방법으로 전달할 수 있습니다.
// true 의 경우 프로퍼티 이름만 선언해도 전달할 수 있습니다.
// <ChildComponent boolValue/>

// false 는 이름을 생략하면 됩니다. 다음은 boolean 프로퍼티에 false 를 전달한 예제입니다.=
// <ChildComponent />

// true 는 그렇다 치고 false 는 프로퍼티의 이름을 아예 생략하는 방법을 사용하는데, 과연 잘 전달이 될까요?

class BooleanComponent extends Component {
    render() {
        const message = this.props.bored ? '놀러 가자' : '하던 일 열심히 마무리하기';
        return (
            <div className='message-container'>
                {message}
            </div>
        );
    }
}

export default BooleanComponent;