import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 프로퍼티에 기본값 지정하기
// 만약 프로퍼티에 기본값을 지정하고 싶다면 기본값을 지정할 컴포넌트의 defaultProps 값을 이용하면 됩니다.

class DefaultPropsComponent extends Component {
    render() {
        let message1 = '';
        if(this.props.boolValue === false) {
            message1 = 'boolValue 기본값이 false 입니다.'
        }
        let message2 = '';
        if(this.props.boolValueWithoutDefault === false) {
            message2 = 'boolValueWithoutDefault 기본값이 false 입니다.';
        }

        return (
            <div>
                {message1}
                {message2}
            </div>
        );
    }
}

// boolean 프로퍼티의 사용 방법을 이야기할 때 '프로퍼티를 생략하면 undefined 가 전달된다' 라고 했었지요.
// 그래서 boolean 프로퍼티 2개를 선언하고 하나의 프로퍼티에만 기본값을 지정했습니다.


DefaultPropsComponent.propTypes = {
    boolValue: PropTypes.bool,
    boolValueWithoutDefault: PropTypes.bool,
};

// 기본값을 선언하는 예제
DefaultPropsComponent.defaultProps = {
    boolValue: false,
};

export default DefaultPropsComponent;