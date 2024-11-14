<template>
  <footer class="peu">
    <p class="text-peu">&copy; Alexander Beltran Ferreres - 2024</p>
  </footer>
</template>
  
<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.peu {
  background-color: #1c1c1e;
  color: #e5e5e5;
  text-align: center;
  padding: 20px;
  border-top: 2px solid #d4af37;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.3);
}

.text-peu {
  font-size: 1rem;
  color: #bdc3c7;
  font-weight: 500;
  margin: 0;
}

/* Responsivitat per a pantalles petites (mòbils) */
@media (max-width: 600px) {
  .text-peu {
    font-size: 0.9rem; /* Reduïm la mida de la font */
    padding: 10px;
  }

  .peu {
    padding: 15px; /* Menys espai al voltant en mòbils */
  }
}

/* Pantalles mitjanes (tablets) */
@media (max-width: 1024px) and (min-width: 601px) {
  .text-peu {
    font-size: 1.1rem; /* Una mica més gran que en mòbils */
  }

  .peu {
    padding: 20px;
  }
}

/* Pantalles grans (desktops) */
@media (min-width: 1025px) {
  .text-peu {
    font-size: 1rem; /* Mida de font per a escriptoris */
  }

  .peu {
    padding: 30px; /* Més espai al voltant per a pantalles grans */
  }
}
</style>

