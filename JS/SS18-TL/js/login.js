const ipnElement = document.querySelector('#login__password');
      const btnElement = document.querySelector('#btnPassword');
      const iconElement = document.querySelector('#iconEye');

      btnElement.addEventListener('click', function(){
        const currentType = ipnElement.getAttribute('type');
        ipnElement.setAttribute(
          'type',
          currentType === 'password' ? 'text' : 'password'
        )
        iconElement.classList.toggle("fa-eye")
      })