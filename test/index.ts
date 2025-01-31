import { Formio } from '@formio/js';
import tailwind from '../src/index';
(Formio as any).use(tailwind);
Formio.Templates.framework = 'tailwind';
// Create a simple form
const form = {
  components: [
    {
      type: 'textfield',
      key: 'firstName',
      label: 'First Name',
      placeholder: 'Enter your first name',
      input: true
    },
    {
      type: 'textfield',
      key: 'lastName',
      label: 'Last Name',
      placeholder: 'Enter your last name',
      input: true
    },
    {
      type: 'button',
      action: 'submit',
      label: 'Submit',
      theme: 'primary'
    }
  ]
};

// Render the form
Formio.createForm(document.getElementById('formio'), form)
  .then((instance: any) => {
    instance.on('submit', (submission: any) => {
      console.log('Form submission:', submission);
    });
  }); 

  Formio.builder(document.getElementById('builder'), {}, {}).then((instance: any) => {
    console.log(instance);
    instance.on('change', (submission: any) => {
        console.log('Form submission:', submission);
    });
  });
