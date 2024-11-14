<template>
  <div class="inici">
    <h1 class="titol-inici">Alexander Beltran Javascript VUE SPA</h1>
    <p class="descripcio-inici">En aquesta aplicacio web creada amb Javascript amb el framework vue tius SPA</p>
    <p class="descripcio-inici">Es pot trobar una calculadora, una pàgina que mostra dades amb Fetch i una altra amb Axios</p>
    <router-link to="/calculadora" class="link-inici">Calculadora</router-link>
    <router-link to="/fetch-data" class="link-inici">Fetch Data</router-link>
    <router-link to="/axios-data" class="link-inici">Axios Data</router-link>
  </div>
</template>

  
<script>
  export default {
    name: 'Home'
  }
</script>
<style scoped>
.inici {
  background-color: #1c1c1e;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #e5e5e5;
  padding: 30px;
  border-radius: 10px;
  max-width: 900px;
  margin: 40px auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

.titol-inici {
  color: #d4af37;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.descripcio-inici {
  font-size: 1.2rem;
  color: #bdc3c7;
  line-height: 1.6;
  margin-bottom: 25px;
  text-align: center;
}

.enllaços-inici {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.link-inici {
  display: inline-block;
  padding: 12px 25px;
  font-size: 1.1rem;
  text-decoration: none;
  color: #d4af37;
  background-color: transparent;
  border: 2px solid #d4af37;
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.link-inici:hover {
  background-color: #d4af37;
  color: #1c1c1e;
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
  .inici {
    padding: 20px;
    max-width: 100%;
    margin: 20px auto;
  }

  .titol-inici {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .descripcio-inici {
    font-size: 1.1rem;
  }

  .enllaços-inici {
    flex-direction: column;
    gap: 10px;
  }

  .link-inici {
    font-size: 1rem;
    padding: 10px 20px;
  }
}

@media (max-width: 480px) {
  .inici {
    padding: 15px;
    margin: 15px auto;
  }

  .titol-inici {
    font-size: 1.7rem;
    margin-bottom: 15px;
  }

  .descripcio-inici {
    font-size: 1rem;
  }

  .link-inici {
    font-size: 0.9rem;
    padding: 8px 15px;
  }
}
</style>

