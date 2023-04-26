import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildProperty extends Component {
    render() {
        return (
            <div>
                {/* =그러면 ChildProperty 컴포넌트에서는 this.props.children 과 같은 방법으로 받을 수 있습니다.*/}
                {this.props.children}
            </div>
        );
    }
}

// 결과를 확인해 보면 this.props.children 위치에 <div><span>자식 노드</span></div> 가 출력될 것입니다.
// 별도의 프로퍼티를 통해 자식 노드를 전달해도 됩니다.
// 하지만 이 방법이 훨씬 간편하지요.

ChildProperty.propTypes = {
    children: PropTypes.node,
}

export default ChildProperty;