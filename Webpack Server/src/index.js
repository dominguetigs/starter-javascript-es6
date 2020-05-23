import * as utils from './utils';
import ClasseUsuario, { idade as idadeUsuario } from './functions';

ClasseUsuario.info();

const bodyElement = document.querySelector('body');

const spanElement = utils.createElement('span');
const text = utils.createTextNode(idadeUsuario);

spanElement.appendChild(text);
bodyElement.appendChild(spanElement);
