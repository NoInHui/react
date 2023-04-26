import React, { Component } from 'react';
import './App.css';
// import TodaysPlan from './03/TodaysPlan';
import PropsComponent from './03/PropsComponent';
import ChildComponent from './03/ChildComponent';
import BooleanComponent from './03/BooleanComponent';
import ChildComponent2 from './03/ChildComponent2';
import DefaultPropsComponent from './03/DefaultPropsComponent';
import ChildProperty from './03/ChildProperty';
import StateExample from './03/StateExample';
import ForceUpdateExample from './03/ForceUpdateExample';
import Counter from './03/Counter';

class App extends Component {
  render() {
    return (
      // 아래는 JSX 양식입니다.

      <div className='body'>
          {/* <TodaysPlan /> */}
          <MyComponent name="message" /> {/* 다음과 같이 속성(attribute) 형태로 전달되는 값을 프로퍼티라고 합니다. */}
          <PropsComponent name='두잇 리엑트'></PropsComponent>
          <ChildComponent
            boolValue={true}
            numValue={3}
            arrayValue={[1,2,3]}
            objValue={{name: '제목', age: '30'}}
            nodeValue={<h1>노드</h1>}
            funcValue={() => console.log('func1')}
          >
          </ChildComponent>
          <div><b>지루할 때 : </b> <BooleanComponent bored></BooleanComponent></div>
          <div><b>즐거울 떄 : </b> <BooleanComponent></BooleanComponent></div>
          
          <ChildComponent2 objValue={{name: 'inhui', age: 32}} requiredStringValue='123'></ChildComponent2>
          <DefaultPropsComponent></DefaultPropsComponent>  {/* 두 boolean 프로퍼티 모두 지정하지 않아 undefined 값이 전달됨, 기본값이 정해져있으면 기본값으로 설정됨 */}

          {/* 
            자식 프로퍼티 사용하기
            마크업 방식 중 다음과 같이 중간 노드를 배치하는 표현식이 있습니다.
            JSX 도 마크업 표현식을 모두 사용할 수 있지요.
            JSX 에서는 컴포넌트 하위에 배치한 노드(또는 컴포넌트)를 하위 컴포넌트에서 프로퍼티로 접근할 수 있게 해줍니다.
            다음과 같이 App 컴포넌트에 포함시킨 ChildProperty 컴포넌트 하위에 자식 노드를 배치한 경우를 생각해 봅시다.
          */}
          <ChildProperty>
              <div><span>자식 노드</span></div>
          </ChildProperty>
          <StateExample></StateExample>
          <ForceUpdateExample></ForceUpdateExample>
          <Counter></Counter>
      </div>
    );
  }
}

class MyComponent extends Component {
  render() {
    // MyComponent 컴포넌트에서 name 이라는 이름의 프로퍼티로 전달받은 'message' 라는 문자열값은 render() 함수에서 참조할 수 있습니다.
    const name = this.props.name;
    return <span>{name}</span>
  }
}

// 여기서 중요한 것은 프로퍼티가 상위 컴포넌트에서 하위 컴포넌트로 전달된다는 것입니다.
// 코드를 다시 보면 App 컴포넌트가 MyComponent 컴포넌트를 포함하고 있으므로 프로퍼티는 App > MyComponent 방향으로 전달됩니다.
// 이것을 단방향으로 데이터가 흐른다 라고 표현합니다.

 

export default App;

// render() 함수는 HTML 을 반환합니다.
// 읻것은 웹 브라우저에 출력되지요.
// HTML 의 스타일 클래스 이름은 자바스크립트 클래스(class) 키워드와 같으므로 리액트에서는 class 가 아니라 className 으로 정의하여 사용합니다.

// 리액트 앱을 구동한 상태라면 파일을 저장한 즉시 화면이 바뀔 것입니다.
// 이렇게 되는 이유는 create-react-app 의 핫 리로딩(hot reloading) 이라는 모듈 덕분입니다.


// 03-1 컴포넌트를 표현하는 JSX

// JSX 는 Javasceript XML 의 줄임말로 '자바스크립트에 XML을 추가한 확장현 문법' 으로 이해하면 됩니다.
// XML 또한 HTML 의 표현법을 확장한 문법이므로 자바스크립트와 HTML 을 안다면 JSX 도 쉽게 이해할 수 있을 것입니다.
// 또한 기존의 자바스크립트와 HTML 을 분리하여 작성하던 번거로운 방식과 달리 JSX 는 하나의 파일에 자바스크립트와 HTML 을 동시에 작성할 수 있어 편리합니다.

// 여러분이 집중해야 할 부분은 render() 함수의 반환값입니다.
// 반환값만 보면 HTML 과 거의 비슷합니다.
// 하지만 img 엘리먼트 끝에 마침 표시 /> 가 있다는 차이점이 있습니다.
// JSX 는 HTML 이 아니라 XML 마크업 규칙을 따르므로 이런 표시를 자주 볼 수 있습니다.
// 만약 엘리먼트의 시작 표시와 마침 표시의 짝이 맞지 않으면 리액트 엔진이 JSX 를 분석하 때 요류가 발생합니다.


// JSX 의 작동 원리 알아보기
// 다음은 리액트 엔진이 JSX 를 자바스크립트로 변환한 코드의 일부입니다.

React.createElement(
  'div',
  null,
  React.createElement('img', {
    src: 'http://www.easyspub.co.kr/images/logo_footer.png'
  }),
  React.createElement(
    'div',
    null,
    '안녕하세요'
  )
);

// 리액트 엔진은 JSX 의 XML 구조를 분석하여 위와 같은 자바스크립트 함수 코드로 변환합니다.
// React.createElement() 함수는 리액트 엔진에 포함되어 있으며, 이 함수는 기존 자바스크립트의 document.createElement() 함수를 사용하여 객체 모델을 생성합니다.

// 하지만 리액트를 사용하면 이런 과정들을 일일이 알 필요 없이 JSX 로 화면을 빠르게 구성하면 됩니다.
// 개발자는 JSX 만 작성하고, 리액트 엔진은 JSX 를 기존 자바스크립트로 해석하는 역할만 하면 됩니다.
// 이것을 '선언형 화면' 기술이라 부릅니다.
// 이처럼 JSX 는 개발자가 화면 구성에만 집중할 수 있도록 도와줍니다.


// 03-2 컴포넌트와 구성 요소

// 이제 컴포넌트를 알아보겠습니다.
// 컴포넌트는 리액트의 꽃이라 불릴 정도로 리액트에서 가장 중요한 요소입니다.
// 리액트로 작성된 화면은 컴포넌트만으로 구성되어 있기 때문입니다.


// 컴포넌트의 개념

// 컴포넌트의 개념을 정확히 이해하기 위해 기존의 웹 프레임워크가 어떻게 동작하는지 간단히 알아보겠습니다.
// 기본의 웹 프레임워크는 MVC 방식으로 정보, 화면, 구동 코드를 분리하여 관리했습니다.
// 정보 담당을 모델, 화면 담당을 뷰, 구동 담당을 컨트롤러라고 부르는 것에서 MVC 라는 용어가 나왔습니다.
// 이 방식은 코드 관리를 효율적으로 할 수 있다는 장점이 있으나 MVC 각 요소의 의존성이 높아 재활용은 어려웠습니다.

// 하지만 웹 사이트의 화면은 각 요소가 비슷하고 반복적으로 사용한 경우가 많습니다.
// 이점을 착안하여 컴포넌트가 등장하게 된 것이지요.
// 컴포넌트는 MVC 의 뷰를 독립적으로 구성하여 재사용도 할 수 있고 컴포넌트를 통해 새로운 컴포넌트를 쉽게 만들 수도 있습니다.
// 다양한 모양의 블록을 조립한다고 상상하면 됩니다.



// 컴포넌트 구성 요소 미리 살펴보기

// 앞으로 여러분이 공부하게 될 컴포넌트 주요 구성 요소는 다음과 같습니다.

// 프로퍼티 : 상위 컴포넌트에서 하위 컴포넌트로 전달되는 읽기 전용 데이터입니다.
// state : 컴포넌트의 상태를 저장하고 변경할 수 있는 데이터입니다.
// 컨텍스트 : 부모 컴포넌트에서 생성하여 모든 자식 컴포넌트에 전달하는 데이터입니다.


// 03-3 컴포넌트에 데이터를 전달하는 프로퍼티

// 프로퍼티는 상위 컴포넌트가 하위 컴포넌트에 값을 전달할 때 사용합니다.
// 이때 프로퍼티값은 수정할 수 없다는 특징이 있습니다.
// 