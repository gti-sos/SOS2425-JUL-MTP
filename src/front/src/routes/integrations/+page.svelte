<script>

    import { onMount } from 'svelte';
	import Header from '../Header.svelte';
    const otherIntegrations = [
        {
            name: 'G10 - Estadísticas de Registros (Radar con chart.js)',
            path: '/integrations/g10-registration-stats'
        },
        {
            name: 'G12 - Estadísticas de consumo (Barras con chart.js)',
            path: '/integrations/g12-annual-evolutions'
        },
        {
            name: 'G14 - Estadísticas de métodos de enseñanza (Dispersión con chart.js)',
            path: '/integrations/g14-education-data'
        },
        {
            name: 'G21 - Estadísticas de compra y venta de viviendas (TreeMap con plotly)',
            path: '/integrations/g21-home-buying-selling-stats'
        },
        {
            name: 'Tasa de cambio (Frankfurter, Proxy, Líneas con Plotly)',
            path: '/integrations/api-frankfurter'
        },
        {
            name: 'Estadísticas covid EEUU (Covid Tracking, Proxy, Indicadores con Plotly)',
            path: '/integrations/api-covid'
        },
        {
            name: 'Rick and Morty (Rick and Morty API, Proxy, Personajes con Chart.js)',
            path: '/integrations/rick-and-morty'
        },
        {
            name: 'Buscador de Fotos de la NASA (NASA API, Proxy, Galería de imágenes)',
            path: '/integrations/nasa'
        }          
    ];

</script>

<main>
    <h1>Portal de Integraciones MTP</h1>
    <p>
        Esta página sirve como punto de acceso para las visualizaciones de datos desarrolladas en el contexto de mi api.
    </p>

    {#if otherIntegrations.length > 0}
        <h2>Integraciones MTP Disponibles</h2>
        <p>Selecciona una integración de la lista para ver sus detalles:</p>
        <ul>
            {#each otherIntegrations as integration}
                <li>
                    <a href="{integration.path}">{integration.name}</a>
                </li>
            {/each}
        </ul>
    {:else}
        <h2>Integraciones MTP</h2>
        <p>No hay integraciones configuradas para mostrar en esta carpeta. Edita el array 'otherIntegrations' en el script de esta página para añadir enlaces.</p>
    {/if}


</main>

<style>
    main {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        padding: 20px 30px;
        max-width: 800px;
        margin: 40px auto;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    h1 {
        color: #1a2b48; 
        text-align: center;
        margin-bottom: 25px;
        font-size: 2em;
    }

    h2 {
        color: #2c3e50; 
        margin-top: 35px;
        margin-bottom: 15px;
        padding-bottom: 8px;
        border-bottom: 2px solid #eaecee; 
        font-size: 1.5em;
    }

    p {
        line-height: 1.65;
        color: #333333;
        margin-bottom: 15px;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin-bottom: 10px;
        background-color: #f8f9fa; 
        border-radius: 6px;
        transition: background-color 0.2s ease-in-out;
    }

    li:hover {
        background-color: #e9ecef; 
    }

    a {
        display: block;
        padding: 12px 18px;
        text-decoration: none;
        color: #007bff; 
        font-weight: 500;
        font-size: 1.1em;
        transition: color 0.2s ease-in-out;
    }

    a:hover {
        color: #0056b3; 
    }
</style>