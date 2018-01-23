import html from './pie.html';
import './pie.css';
import Template from '../Template';

const template = new Template(html);

export default class Pie {

  render() {
    const dom = template.clone();

    return dom;
  }
}