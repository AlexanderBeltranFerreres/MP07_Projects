<template>
  <div class="obtindre-dades">
    <h1 class="titol-dades">Dades obtingudes amb Fetch</h1>
    <ul class="llista-dades">
      <li v-for="postId in uniquePostIds" :key="postId" class="element-llista">
        <h2 @click="toggleComentaris(postId)" class="titol-comentari">Post ID #{{ postId }}</h2>
        <ul v-show="isPostVisible(postId)" class="llista-comentaris">
          <li v-for="comentari in filteredComentaris(postId)" :key="comentari.id" class="element-comentari">
            <p class="detall-comentari"><strong>Nom:</strong> {{ comentari.name }}</p>
            <p class="detall-comentari"><strong>Email:</strong> {{ comentari.email }}</p>
            <p class="contingut-comentari"><strong>Contingut:</strong> {{ comentari.body }}</p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ObtenirDades',
  data() {
    return {
      comentaris: [],
      visibles: {}
    };
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => {
        this.comentaris = data;
      })
  },
  computed: {
    uniquePostIds() {
      return [...new Set(this.comentaris.map(comentari => comentari.postId))];
    }
  },
  methods: {
    toggleComentaris(postId) {
      // Canviarem directament l'objecte visibles sense $set
      this.visibles[postId] = !this.visibles[postId];
    },
    isPostVisible(postId) {
      return this.visibles[postId] || false;
    },
    filteredComentaris(postId) {
      return this.comentaris.filter(comentari => comentari.postId === postId);
    }
  }
}
</script>

<style scoped>
.obtindre-dades {
  background-color: #1c1c1e;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #e5e5e5;
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
  margin: auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

.titol-dades {
  color: #d4af37;
  font-size: 2.2em;
  font-weight: 700;
  text-align: center;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.llista-dades {
  list-style-type: none;
  padding: 0;
}

.element-llista {
  background-color: #2a2a2e;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #444;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.element-llista:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(212, 175, 55, 0.3);
}

.titol-comentari {
  color: #d4af37;
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 10px;
  text-transform: uppercase;
  border-bottom: 2px solid #d4af37;
  padding-bottom: 5px;
  cursor: pointer;
}

.llista-comentaris {
  padding-left: 20px;
}

.element-comentari {
  background-color: #333;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #555;
}

.detall-comentari {
  color: #e5e5e5;
  font-size: 1em;
  margin: 5px 0;
}

.contingut-comentari {
  color: #c0c0c0;
  font-size: 1em;
  line-height: 1.6;
  padding-top: 10px;
  font-style: italic;
}

/* Responsive */
@media (max-width: 768px) {
  .obtindre-dades {
    padding: 15px;
    max-width: 100%;
  }

  .titol-dades {
    font-size: 1.8em;
    margin-bottom: 20px;
  }

  .element-llista {
    padding: 15px;
  }

  .titol-comentari {
    font-size: 1.3em;
  }

  .llista-comentaris {
    padding-left: 15px;
  }

  .element-comentari {
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .obtindre-dades {
    padding: 10px;
    max-width: 100%;
  }

  .titol-dades {
    font-size: 1.5em;
    margin-bottom: 15px;
  }

  .element-llista {
    padding: 10px;
  }

  .titol-comentari {
    font-size: 1.2em;
  }

  .llista-comentaris {
    padding-left: 10px;
  }

  .element-comentari {
    padding: 10px;
  }
}
</style>

