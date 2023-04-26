import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 다양한 프로퍼티 사용하기
// 프로퍼티 문자열을 전달할 때는 큰따옴표(" ")를 사용합니다. (작은 따옴표도 가능한데? ` 는 안되는듯)
// 하지만 숫자형이나 불리언등의 값을 전달할 때는 큰따옴표를 사용할 수 없습니다.
// 예를 들어 value="123" 이나 value="true" 와 같은 방법으로 숫자형이나 불리언값을 프로퍼티에 전달하면 그냥 문자열로 인식됩니다.
// 리액트에서 문자열 외의 값은 따옴표 대신 중괄호{} 를 사용해야 합니다.

class ChildComponent extends Component {
    render() {
        const {
            boolValue,
            numValue,
            arrayValue,
            objValue,
            nodeValue,
            funcValue,
        } = this.props;

        return (
            <div>
                <span>불리언값 : {String(boolValue)}</span>
                <span>숫자값 : {numValue}</span>
                <span>배열값 : {arrayValue}</span>
                <span>객체값 : {String(objValue)}</span>
                <span>노드값 : {nodeValue}</span>
                <span>함수값 : {String(funcValue)}</span>
            </div>
        );
    }
}

ChildComponent.propTypes = {
    boolValue: PropTypes.bool,
    numValue: PropTypes.number,
    arrayValue: PropTypes.arrayOf(PropTypes.number),
    objValue: PropTypes.object,
    nodeValue: PropTypes.node,
    funcValue: PropTypes.func,
}

export default ChildComponent;