const form = document.forms.form;
form.onsubmit = async (e) => {
   e.peventDefault();
   const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: new FormData(form),
   });
   const result = await response.json();
   console.log(result);
};
