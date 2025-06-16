<script>
	import Header from './header.svelte';
	// Consider adding icons (e.g., using 'svelte-icons' or FontAwesome)
	// import { IconApi, IconChartBar, IconUsersGroup } from 'svelte-icons/fa'; // Example
</script>

<Header />

<div class="page-container">
	<div class="hero">
		<h1>Explora el Proyecto de Mario Tur</h1>
		<p>
			¡Bienvenido! Soy Mario Tur, alumno de <strong>SOS</strong>. He construido una plataforma
			demostrando mis habilidades en desarrollo de servicios y aplicaciones web.
		</p>
		<p>Aquí puedes ver un resumen de mi trabajo.</p>
	</div>

	<div class="features-grid">
		<!-- Feature Card 1: APIs -->
		<div class="feature-card">
			<!-- Icon placeholder -->
			<span class="icon">⚙️</span>
			<!-- Or a more specific API icon -->
			<h2>API RESTful</h2>
			<p>
				He diseñado e implementado una API RESTful para gestionar datos relacionados con las
				pensiones y las ayudas a las personas vulnerables en el país. Incluyen operaciones CRUD
				completas y documentación detallada.
			</p>
			<!-- API Buttons inside the card -->
			<!-- Basic styling added inline for demonstration; move to <style> block for best practice -->
			<div
				class="api-buttons-card-container"
				style="margin-top: 1rem; display: flex; flex-wrap: wrap; justify-content: center; gap: 0.8rem;"
			>
				<a
					href="/api/v1/management-evolutions"
					class="api-button mtp-button"
					style="text-decoration: none; padding: 0.6rem 1.2rem; border-radius: 6px; background-color: #45daed; color: white; transition: background-color 0.3s ease; display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.9rem;"
				>
					<!-- Consider using a more specific icon if available -->
					<span class="icon-small" style="font-size: 1.2em;">🫂</span> API MTP (Ayudas sociales)
				</a>
			</div>
		</div>

		<!-- Feature Card 2: Visualizations -->
		<div class="feature-card">
			<!-- Icon placeholder -->
			<span class="icon">📈</span>
			<h2>Visualizaciones Interactivas</h2>
			<p>
				Explora mis gráficos dinámicos y análisis visuales que te permitirán entender los datos
				de manera más intuitiva.
			</p>
			<!-- Visualization Buttons --><br><br><br>  
			<div
				class="api-buttons-card-container"
				style="margin-top: 1rem; display: flex; flex-wrap: wrap; justify-content: center; gap: 0.8rem;"
			>
				<a
					href="/MTP/graph"
					class="api-button mtp-button"
					style="text-decoration: none; padding: 0.6rem 1.2rem; border-radius: 6px; background-color: #45daed; color: white; transition: background-color 0.3s ease; display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.9rem;"
				>
					<span class="icon-small" style="font-size: 1.2em;">📉</span> Visualización MTP
				</a>
			</div>
		</div>

		<!-- Feature Card 3: Integraciones y Frontend -->
		<div class="feature-card">
			<!-- Icon placeholder -->
			<span class="icon">💻</span>
			<h2>Frontend y Experiencia</h2>
			<p>
				He desarrollado una interfaz de usuario moderna y responsive con SvelteKit, integrando
				mi API y visualizaciones para ofrecer una experiencia de usuario fluida y atractiva.
			</p>
		</div>

		<!-- Add more cards as needed for other achievements -->
		<!-- Example:
		<div class="feature-card">
			<span class="icon">🔧</span>
			<h2>Integraciones Externas</h2>
			<p>Hemos integrado con éxito APIs externas para enriquecer nuestros datos y funcionalidades.</p>
		</div>
		-->
	</div>
</div>

<style>
	/* Simple fade-in animation */
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Staggered fade-in for cards */
	@keyframes fadeInCard {
		from {
			opacity: 0;
			transform: scale(0.95) translateY(10px);
		}
		to {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}

	.page-container {
		max-width: 1100px;
		margin: 2rem auto;
		padding: 0 1rem;
	}

	.hero {
		text-align: center;
		padding: 3rem 2rem;
        background: linear-gradient(to right, #81D4FA, #BE93E4);
		color: white;
		border-radius: 16px; /* Smoother radius */
		margin-bottom: 3rem; /* Space below hero */
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
		animation: fadeIn 0.8s ease-out forwards;
	}

	.hero h1 {
		font-size: 2.8rem; /* Adjusted size */
		font-weight: 700; /* Bolder */
		margin-bottom: 1rem;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
	}

	.hero p {
		font-size: 1.15rem; /* Adjusted size */
		line-height: 1.6;
		margin-bottom: 1rem;
		max-width: 700px; /* Limit paragraph width */
		margin-left: auto;
		margin-right: auto;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Responsive grid */
		gap: 1.8rem; /* Space between cards */
		padding: 0;
	}

	.feature-card {
		background-color: #ffffff;
		border-radius: 12px;
		padding: 2rem 1.5rem;
		text-align: center;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		display: flex;
		flex-direction: column;
		justify-content: flex-start; /* Align items to the start */
		min-height: 250px; /* Adjusted min-height */
		opacity: 0; /* Start hidden for animation */
		animation: fadeInCard 0.6s ease-out forwards;
		/* Stagger animation delay */
	}

	/* Apply staggered delay */
	.feature-card:nth-child(1) {
		animation-delay: 0.2s;
	}
	.feature-card:nth-child(2) {
		animation-delay: 0.35s;
	}
	.feature-card:nth-child(3) {
		animation-delay: 0.5s;
	}
	/* Add more delays if more cards */
	.feature-card:nth-child(4) {
		animation-delay: 0.65s;
	}

	.feature-card:hover {
		transform: translateY(-6px) scale(1.02); /* Lift and slightly enlarge */
		box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
	}

	.feature-card .icon {
		font-size: 3rem; /* Larger icon */
		margin-bottom: 1rem;
		display: block;
		color: #6e8efb; /* Use a theme color */
	}

	.feature-card h2 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 0.8rem;
		color: #333;
	}

	.feature-card p {
		font-size: 1rem;
		line-height: 1.6;
		color: #555;
		margin-bottom: 1rem; /* Adjusted margin */
		/* Removed flex-grow */
	}

	/* Removed .card-button styles as they are no longer used */

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.hero h1 {
			font-size: 2.4rem;
		}
		.hero p {
			font-size: 1.1rem;
		}
		.features-grid {
			grid-template-columns: 1fr; /* Stack cards on smaller screens */
			gap: 1.5rem;
		}
		.feature-card {
			min-height: auto; /* Adjust min-height */
		}
	}

	.analytics-section {
		background-color: #f5f5f5;
		padding: 20px;
		border-radius: 8px;
		text-align: center;
		margin-bottom: 30px;
	}
	
	.analytics-btn {
		display: inline-block;
		padding: 10px 20px;
		background-color: #1976d2;
		color: #fff;
		border-radius: 5px;
		text-decoration: none;
		font-weight: bold;
		margin-top: 10px;
		transition: background 0.2s;
	}
	
	.analytics-btn:hover {
		background-color: #125ea2;
	}
</style>
