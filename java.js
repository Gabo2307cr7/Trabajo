// Seleccionamos todas las áreas de los mapas y el cuadro de información
const areas = document.querySelectorAll('area');
const infoBox = document.getElementById('info-box');

areas.forEach(area => {
    // Cuando el mouse entra al componente
    area.addEventListener('mouseenter', (e) => {
        const info = e.target.getAttribute('data-info');
        infoBox.textContent = info;
        infoBox.classList.remove('hidden');
    });

    // Cuando el mouse sale del componente
    area.addEventListener('mouseleave', () => {
        infoBox.classList.add('hidden');
    });
});
