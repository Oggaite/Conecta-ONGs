window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const progressPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    
    // Atualiza a altura da linha de progresso
    document.getElementById('progress-line').style.height = progressPercentage + '%';
  

  });

  const linhaHorizontal = document.querySelector('.linha-horizontal');
const elementosAnimados = document.querySelectorAll('.apresentacao__links'); 
linhaHorizontal.addEventListener('click', () => {
  elementosAnimados.forEach(elemento => {
    elemento.classList.add('slide-up');
  });
});