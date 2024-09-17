const api = axios.create({
    baseURL: 'http://localhost:3000/api'
});

const $form = document.querySelector('#form-register');

const registerUser = async (name, age, email, password) => {
    try {
        const response = await api.post('/users', { name, age, email, password });

        if (response.status === 201) {
            alert('Usuário cadastrado com sucesso!');
        }
    } catch (error) {
        console.error(error);
    }
}

$form.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const $name = document.querySelector('#name').value;
    const $email = document.querySelector('#email').value;
    const $password = document.querySelector('#password').value;
    
    const $age = parseInt(document.querySelector('#age').value);

    await registerUser($name, $age, $email, $password);
})