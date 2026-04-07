// MENU MOBILE
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// SCROLL SUAVE PARA SEÇÕES
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
    // Fecha menu mobile após clique
    navList.classList.remove('active');
    hamburger.classList.remove('active');
}

// NAVEGAÇÃO ATIVA
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// EFEITO DE ANIMAÇÃO AO SCROLL
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observa todas as seções
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// EFEITO PARALLAX NO HERO
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ALERTA DE SUCESSO PARA CTA
document.querySelector('.cta-btn').addEventListener('click', () => {
    // Simula ação de inscrição
    setTimeout(() => {
        alert('🌱 Pronto para transformar o mundo com o Agrinho?\nAcesse o site oficial do SENAR do seu estado!');
    }, 300);
});
