<template>
  <header class="capcalera">
    <nav class="navegacio">
      <router-link to="/" class="link">Inici</router-link>
      <router-link to="/calculadora" class="link">Calculadora</router-link>
      <router-link to="/fetch-data" class="link">Fetch Data</router-link>
      <router-link to="/axios-data" class="link">Axios Data</router-link>
    </nav>
  </header>
</template>

  
  <script>
  export default {
    name: 'Header'
  }
  </script>

<style scoped>
.capcalera {
  background-color: #1c1c1e;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
}

.navegacio {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap; /* Permet que els enllaços es moguin a la següent línia si és necessari */
}

.link {
  text-decoration: none;
  font-size: 1.1rem;
  color: #d4af37; /* Color daurat */
  font-weight: 600;
  text-transform: uppercase;
  padding: 10px 20px;
  border: 2px solid transparent;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
}

.link:hover {
  background-color: #d4af37;
  color: #1c1c1e;
  border-color: #d4af37;
  transform: translateY(-2px);
}

/* Responsivitat per a pantalles petites (mòbils) */
@media (max-width: 600px) {
  .link {
    font-size: 1rem; /* Reduïm la mida de la font en mòbils */
    padding: 8px 15px; /* Menys espai als enllaços */
  }

  .navegacio {
    gap: 15px; /* Menys espai entre els enllaços en dispositius petits */
  }

  .capcalera {
    padding: 15px; /* Menys espai al voltant de la capçalera */
  }
}

/* Pantalles mitjanes (tablets) */
@media (max-width: 1024px) and (min-width: 601px) {
  .link {
    font-size: 1.05rem; /* Una mica més gran per a tablets */
  }

  .navegacio {
    gap: 20px; /* Ajustem l'espai entre enllaços */
  }

  .capcalera {
    padding: 20px; /* Manté l'espai en pantalles mitjanes */
  }
}

/* Pantalles grans (desktops) */
@media (min-width: 1025px) {
  .link {
    font-size: 1.2rem; /* Mida més gran per a pantalles grans */
  }

  .capcalera {
    padding: 25px; /* Més espai a la capçalera */
  }
}
</style>

