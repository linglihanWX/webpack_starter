import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import Icon from './t010a38863785a67569.jpg';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    // Lodash��Ŀǰͨ��һ�� script �ű����룩����ִ����һ���Ǳ����
    element.innerHTML = _.join(['Hello', 'webpack1'], ' ');
    element.classList.add('hello');

    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());