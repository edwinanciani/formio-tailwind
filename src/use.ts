import { Formio } from '@formio/js';
import tailwind from './index';
(Formio as any).use(tailwind);
export default tailwind;
