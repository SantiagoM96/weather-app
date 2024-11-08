# Weather App

Este proyecto, desarrollado con React y Vite, utiliza TypeScript para un desarrollo más robusto, Tailwind CSS para un diseño estilizado y moderno, y Luxon para formateo de fechas y horas. Además, se incluye Chart.js para la representación gráfica del índice UV en un rango de 0 a 12. 

Los datos se obtienen mediante la API de *"OpenWeather", complementada con la API **"sunrisesunset.io"* para proporcionar información más precisa que la primera sobre los amaneceres y atardeceres. El proyecto ofrece información detallada del clima actual y proyecciones a intervalos de 3 horas durante 5 días.

## Instrucciones de Instalación

#### 1. Clona el repositorio:
git clone https://github.com/SantiagoM96/weather-app

cd weather-app

#### 2. Instala las dependencias:
npm install

#### 3. Configura las variables de entorno: 
Crea un archivo .env y añade la clave API de OpenWeather
- VITE_API_KEY=tu_clave_api_openweather

#### 4. Inicia el proyecto en modo de desarrollo:
npm run dev