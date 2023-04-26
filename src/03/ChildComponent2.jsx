import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 객체형 프로퍼티 사용하기
// 객체는 여러 값을 저장할 수 있는 자료형입니다.

class ChildComponent2 extends Component {
    render() {
        const {
            objValue,
            requiredStringValue,
        } = this.props;

        return (
            <div>
                <div>객체값: {String(Object.entries(objValue))}</div>
                <div>필수값: {requiredStringValue}</div>
            </div>
        );
    }
}

ChildComponent2.propTypes = {
    // 객체 프로퍼티
    objValue: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
    }),

    // 필수 프로퍼티
    requiredStringValue: PropTypes.string.isRequired,
}

// ProTypes.shape 를 사용하여 객체 프로퍼티를 정의하면 객체 목록을 한눈에 확인할 수 있어 편리합니다.
// 객체 프로퍼티의 실행 결과는 필수 프로퍼티의 사용 방법을 공부한 다음에 살펴보겠습니다.

// 필수 프로퍼티 사용하기
// 특정 컴포넌트에 꼭 전달되어야 하는 프로퍼티가 있다면 해당 프로퍼티를 필수 프로퍼티로 지정하면 됩니다.

export default ChildComponent2;