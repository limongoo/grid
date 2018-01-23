import Template from '../Template';
import html from './app.html';
import './app.css';
import Header from '../header/Header';
import Pie from '../pie/Pie.js';
import Resources from '../resources/Resources.js';
import { removeChildren } from '../dom';

const template = new Template(html);

// Hash Navigation
const map = new Map();
map.set('#pie', Pie);
map.set('#resources', Resources);


export default class App {
  
  constructor() {
    window.onhashchange = () => {
      this.setPage();
    };
  }
  
  setPage() {
    const Component = map.get(window.location.hash) || Pie;
    const component = new Component();
    removeChildren(this.main);
    this.main.appendChild(component.render());
  }
  
  render() {
    const dom = template.clone();   
      
    dom.querySelector('header').appendChild(new Header().render());
    this.main = dom.querySelector('main');
    this.setPage();
  
    return dom;
  }
}