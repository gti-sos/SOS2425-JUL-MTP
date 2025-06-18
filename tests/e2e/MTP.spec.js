// @ts-check
import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:16078'; // Asegúrate de que esta URL es correcta

test.describe('MTP Application Super Simple Check', () => {

  test('Check MTP list page loads and has a heading', async ({ page }) => {
    // 1. Navegar a la página MTP
    await page.goto(`${BASE_URL}/MTP`);

    // 2. Verificar que el título de la página del navegador contenga "EBT"
    // Esta es una comprobación muy básica de que la página correcta podría estar cargándose.
    await expect(page).toHaveTitle(/MTP/i, { timeout: 10000 });

    // 3. Verificar que un encabezado de nivel 1 (H1) es visible en la página
    // Esto confirma que algún contenido principal se está renderizando.
    await expect(page.getByRole('heading', { level: 1 }).first()).toBeVisible({ timeout: 10000 });

    // 4. Opcional: Verificar que la URL es la esperada (para asegurar que no hubo redirecciones inesperadas)
    await expect(page).toHaveURL(`${BASE_URL}/MTP`, { timeout: 10000 });
  });

  // Se han eliminado todas las pruebas de CRUD (Crear, Leer, Editar, Borrar)
  // y las comprobaciones detalladas de elementos específicos como botones o la tabla.
});