import Component from './_classes/Component';
import {Components} from '@formio/js';
import editForm from './_classes/editForm';
import TextField from './textfield/Textfield';
Components.baseEditForm = editForm;
export default {
    component: Component,
    base: Component,
    textfield: TextField,
}