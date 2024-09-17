const api = axios.create({
    baseURL: 'http://localhost:3000/api'
});

// Obtendo o formulário
const $form = document.querySelector('#form-login');

const loginUsers = async (email, password) => {
    try {
        const response = await api.post('/login', { email, password });
        
        if (response.status === 200) {
            // Redireciona para a página home.html
            location.assign("http://localhost:5500/client/public/assets/pages/home.html");           
        }
    } catch (error) {
        console.error(error);
    }
}

$form.addEventListener('submit', async (evt) => {
    evt.preventDefault(); // evita o envio padrão do formulário

    // Obtendo os campos de input
    const $email = document.querySelector('#email').value;
    const $password = document.querySelector('#password').value;

    if ($email.length === 0 || $password.length === 0) {
        alert('Todos os campos devem ser preenchidos corretamente');
        return;
    }

    await loginUsers($email, $password);
})