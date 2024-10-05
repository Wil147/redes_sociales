document.addEventListener('DOMContentLoaded', () => {
    const words = document.querySelectorAll('.word');
    const selectedWord = document.getElementById('selectedWord');
    const wordDescription = document.getElementById('wordDescription');

    const descriptions = {
        'Social Media': 'Plataformas en línea que permiten a los usuarios crear, compartir y interactuar con contenido digital.',
        'Algorithm': 'Conjunto de reglas utilizadas por las plataformas de redes sociales para determinar qué contenido mostrar a los usuarios.',
        'Engagement': 'Nivel de interacción que los usuarios tienen con el contenido en redes sociales, incluyendo likes, comentarios y compartidos.',
        'Hashtag': 'Palabra o frase precedida por el símbolo #, utilizada para categorizar y hacer que el contenido sea más fácil de encontrar.',
        'Influencer': 'Persona con una gran cantidad de seguidores en redes sociales que puede influir en las opiniones y decisiones de compra de otros.',
        'Analytics': 'Herramientas y métricas utilizadas para medir y analizar el rendimiento del contenido en redes sociales.',
        'Viral Content': 'Contenido que se vuelve extremadamente popular y se comparte ampliamente en un corto período de tiempo.',
        'Blogger': 'Persona que crea y mantiene un blog, a menudo compartiendo contenido personal o especializado.',
        'Brands': 'Empresas o productos que utilizan las redes sociales para promocionarse y conectar con sus clientes.',
        'Social Media Post': 'Cualquier pieza de contenido compartida en una plataforma de redes sociales, como texto, imágenes o videos.'
    };

    words.forEach(word => {
        word.addEventListener('click', () => {
            words.forEach(w => w.classList.remove('active'));
            word.classList.add('active');
            const wordText = word.getAttribute('data-word');
            selectedWord.textContent = wordText;
            wordDescription.textContent = descriptions[wordText];
        });
    });
});