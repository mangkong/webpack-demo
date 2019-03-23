// lodash를 모듈로 가져오는 방법 : CommonJS 스펙
//var _ = require('lodash');

// es6 방식의 모듈 가져오는 방법 : import
import _ from 'lodash';
import "./style.css";
import "./hello.scss";

// named import: 반드시 {} 안에 동일한 이름으로 넣어야 한다.
import {area, circumference} from "./js/circle";
// default import는 {}없이 가져올수 있고 이름을 마음대로 바꿀수 있다.
import aaa from './js/cube';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

console.log('hello webpack dev server');

//console.log(area(5),circumference(5));

console.log(aaa(5));