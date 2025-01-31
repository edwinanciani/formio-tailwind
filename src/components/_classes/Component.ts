import { Formio } from '@formio/js';
import editForm from './editForm/index';

const BaseComponent = Formio.Components.components.component;

export default class Component extends BaseComponent {

  static schema(...sources: any[]) {
    return {
      ...super.schema(...sources),
      outerClasses: '',
      innerClasses: '',
      inputClasses: '',
    };
  }

  static editForm = editForm;
}

