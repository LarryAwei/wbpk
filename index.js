import img from './src/kouzhao.jpg'
import style from './src/index.scss'
var pic = new Image();
pic.src = img;
pic.classList.add(style.kouzhao);
var root = document.getElementById('root');
console.log('???');
root.append(pic);
