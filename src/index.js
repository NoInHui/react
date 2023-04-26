import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// index.js 파일은 yarn start 명령어로 리액트 서버를 구동했을 때 최초로 실행됩니다.
// <App /> 으로 표시한 코드가 바로 앞에서 작성한 App 컴포넌트를 의미합니다.
ReactDOM.render(<App />, document.getElementById('root'));

// JSX 와 기존 개발 방법의 차이점 알아보기
// JSX 의 장점을 알아보기 위해 JSX 없이 화면을 구성해 보겠습니다.

// 1. App 컴포넌트를 사용하지 않고 화면 구성해 보기
// 만약 App 컴포넌트를 사용하지 않는다면 index.js 파일은 아래와 같이 수정해야 합니다.

// let img = document.createElement('img');
// img.setAttribute('src','http://www.easyspub.co.kr/images/logo_footer.png');
// let divEl = document.createElement('div');
// divEl.innerText = '안녕하세요';
// let welcomeEl = document.createElement('div');
// welcomeEl.append(img);
// welcomeEl.append(divEl);

// let root = document.getElementById('root');
// root.append(welcomeEl);

// 앞서 App 컴포넌트를 사용해 구현했던 코드보다 복잡해졌습니다.


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


