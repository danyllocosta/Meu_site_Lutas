document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if(name && email) {
        alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contato através do e-mail ${email}.`);
        // Aqui você poderia adicionar um código para enviar os dados para um servidor
        this.reset(); // Limpa o formulário após o envio
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});