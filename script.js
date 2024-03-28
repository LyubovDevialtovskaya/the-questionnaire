const form = document.querySelector(".form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const secondName = document.getElementById("secondName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const agree = document.getElementById("agree").checked;

  const formData = {
    name,
    secondName,
    email,
    phone,
    agree,
  };

  try {
 
    const response = await fetch(`https://polinashneider.space/user`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer: LyubovDevialtovskaya'
      },
      body: JSON.stringify(formData),
    });


    if (!response.ok) {
      throw new Error('Ошибка при отправке данных на сервер');
    }
    form.reset();


    console.log('Данные успешно отправлены на сервер');

  } catch (error) {
    
    console.error('Произошла ошибка:', error.message);
  }
});

