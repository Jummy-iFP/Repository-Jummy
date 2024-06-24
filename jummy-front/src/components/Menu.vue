<script>
import { ref, computed } from 'vue';
import Menu from '../components/Menu.vue';

export default {
  components: { Menu },
  setup() {
    const busqueda = ref('');
    const restaurantes = ref([
      { id: 1, nombre: 'Restaurante 1', descripcion: 'Descripción del restaurante 1' },
      { id: 2, nombre: 'Restaurante 2', descripcion: 'Descripción del restaurante 2' },
      { id: 3, nombre: 'Restaurante 3', descripcion: 'Descripción del restaurante 3' }
      // Agrega más restaurantes según tu base de datos
    ]);

    const restaurantesFiltrados = computed(() => {
      return restaurantes.value.filter(restaurante =>
        restaurante.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
      );
    });

    const buscar = () => {
      console.log('Buscando...');
    };

    const verCarta = (idRestaurante) => {
      console.log('Ver Carta del restaurante con ID:', idRestaurante);
    };

    return {
      busqueda,
      restaurantesFiltrados,
      buscar,
      verCarta
    };
  }
};
</script>

<template>
  <h1>Primera GUI</h1>
    <!-- Componente de búsqueda -->
    <div class="search-container">
      <input type="text" v-model="busqueda" placeholder="Buscar en Jummy" class="search-input">
      <button @click="buscar" class="search-button">Buscar</button>
    </div>
    <!-- Lista de restaurantes -->
    <div class="restaurant-list">
      <!-- Iteración sobre la lista de restaurantes filtrada -->
      <div v-for="(restaurante, index) in restaurantesFiltrados" :key="index" class="restaurant-item">
        <h2>{{ restaurante.nombre }}</h2>
        <p>{{ restaurante.descripcion }}</p>
        <button @click="verCarta(restaurante.id)" class="ver-carta-button">Ver Carta</button>
      </div>
    </div>
</template>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  background-color: var(--bg-200);
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
}

.search-container {
  margin-bottom: 20px;
}

.search-input {
  padding: 10px;
  border: none;
  border-radius: 5px;
}

.search-button {
  padding: 10px 20px;
  background-color: var(--primary-100);
  color: var(--text-100);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.restaurant-list {
  display: flex;
  flex-wrap: wrap;
}

.restaurant-item {
  width: calc(33.33% - 20px);
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: var(--bg-100);
  border-radius: 5px;
}

.ver-carta-button {
  padding: 10px 20px;
  background-color: var(--accent-100);
  color: var(--text-100);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
