// Datos de ejemplo simulando una respuesta de la API
const mockData = [
    {
        foto: 'F:\menuHTML_CSS\Trabajo_Final\Boruto.jpg',
        nombre_usuario: 'Usuario1',
        fecha_actualizacion: '2023-10-20',
        proyecto: 'Diseño Web',
        nombre_tarea: 'Crear Header',
        estado: 'En Progreso'
    },
    {
        foto: 'https://via.placeholder.com/50',
        nombre_usuario: 'Usuario2',
        fecha_actualizacion: '2023-10-19',
        proyecto: 'Desarrollo Backend',
        nombre_tarea: 'API de Autenticación',
        estado: 'Finalizado'
    }
];

// Simular una URL de la API
//const API_URL = 'https://api.example.com/news-feed-items';


// Función para renderizar el feed
function renderNewsFeed(data) {
    let feedHtml = '';
    data.forEach(item => {
        feedHtml += `
            <div class="news-feed-item">
                <img src="${item.foto}" alt="User Profile Picture" class="news-image">
                <div class="news-content">
                    <div class="news-username">${item.nombre_usuario}</div>
                    <div class="news-date">Fecha de actualización: ${item.fecha_actualizacion}</div>
                    <div class="news-project">Proyecto: ${item.proyecto}</div>
                    <div class="news-task">Tarea: ${item.nombre_tarea}</div>
                    <div class="news-status">Estado: ${item.estado}</div>
                </div>
            </div>
        `;
    });
    document.getElementById('news-feed').innerHTML = feedHtml;
}

// Llamar la función al cargar la página con datos simulados
renderNewsFeed(mockData);