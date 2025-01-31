import {Components} from '@formio/js';
import display from './display';
const baseEditForm = Components.baseEditForm;
export default function (...extend: any[]){
    return baseEditForm([
        {
            key: 'tailwind',
            label: 'Tailwind',
            components: display
        },
    ], ... extend)
}
