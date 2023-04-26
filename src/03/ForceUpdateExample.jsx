import React, { Component } from 'react';

// 클래스 인스턴스 변수와 forceUpdate() 함수로 state 관리하기

// 꼭 setState() 함수로 state 를 관리할 필요는 없습니다.
// setState() 함수를 사용하는 이유는 앞에서 언급했던 것처럼 리액트 엔진이 state 의 변경과 화면 동기화 과정을 처리해야 하기 때문입니다.
// 만약 출력 검증 작업 없이 함수가 호출될 때마다 새롭게 화면을 출력하고 싶다면 클래스 인스턴스 변수와 화면을 강제로 출력해주는 forceUpdate() 함수를 사용하면 됩니다.
// 클래스 인스턴스 변수와 forceUpdate() 함수의 사용 방법은 코드를 작성하며 알아보겠습니다.

class ForceUpdateExample extends Component {
    constructor(props) {
        super(props);

        // state 정의
        this.loading = true;
        this.formData = 'no data';
        
        this.handleData = this.handleData.bind(this);

        setTimeout(this.handleData, 4000);
    }

    handleData() {
        const data = 'new data';
        this.loading = false;
        this.formData = data + this.formData;
        this.forceUpdate();
        // 단, 이 방법은 리액트 성능에 제약이 있으므로 매번 새롭게 화면을 출력해야 되는 경우가 아니라면 가급적 사용하지 않기를 권합니다.
    }

    render() {
        return (
            <div>
                <span>로딩중: {String(this.loading)}</span>
                <span>결과: {this.formData}</span>
            </div>
        );
    }
}

export default ForceUpdateExample;