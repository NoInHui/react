import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 프로퍼티의 다양한 사용 방법 알아보기

// 프로퍼티에서는 자바스크립트의 자료형을 모두 사용할 수 있습니다.
// 이때 프로퍼티의 자료형은 미리 선언해주는 것이 좋습니다.
// 프로퍼티의 자료형을 미리 선언하면 리액트 엔진이 프로퍼티로 전달하는 값의 변화를 효율적으로 감지할 수 있고, 개발자가 실수로 지정되지 않은 자료형을 프로퍼티에 전달하려고 할 때 경고 메시지로 알려주기 때문입니다.

class PropsComponent extends Component {
    render() {
        return (
            <div className='message-container'>
                {this.props.name}
            </div>
        );
    }
}

// 문자열형 프로퍼티 사용하기
// 프로퍼티의 자료형을 선언하는 방법은 리액트에서 제공하는 prop-types 를 이용하면 됩니다.

PropsComponent.propTypes = {
    name: PropTypes.string,
}

export default PropsComponent;


