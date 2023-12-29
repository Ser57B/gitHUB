const form = document.forms.form;
form.onsubmit = async (e) => {
   e.peventDefault();
   const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
      headers: { 'Content-Type': 'text/plain' },
      body: form
   });
};
