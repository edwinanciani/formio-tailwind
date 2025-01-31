import {Components} from '@formio/js';
const TextField = Components.components.textfield;
export default class TextFieldComponent extends TextField {

 constructor(component: any, options: any, data: any) {
    super(component, options, data);
    console.log(this.component);
    this.component.inputClasses = 'px-3 py-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm';
    this.component.outerClasses = 'mb-6';
    this.component.innerClasses = 'px-4 py-2 rounded-lg';
}
}
