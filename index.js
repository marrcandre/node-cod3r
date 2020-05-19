// Função Alô Mundo
function helloWorld() {
  console.log('Hello World!');
}

// Função saudação
const saudacao = () => {
  const hora = new Date().getHours();
  if (hora <= 12) return 'Bom dia!';
  if (hora <= 18) return 'Bom tarde!';
  return 'Bom noite!';
};

// Aqui começa a chamar as funções
helloWorld();
console.log(`A saudação do momento é ${saudacao()}`);
