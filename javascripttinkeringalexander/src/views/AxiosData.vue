<template>
  <div class="axios-data">
    <h1 class="titol-dades">Dades obtingudes amb Axios</h1>
    <ul class="llista-dades">
      <li v-for="user in users" :key="user.id" class="element-llista">
        <h2 @click="detallsUsuari(user.id)" class="titol-usuari">Usuari ID #{{ user.id }}</h2>
        
        <ul v-show="visible(user.id)" class="detalls-usuari">
          
          <!-- Informació bàsica -->
          <li class="detall-usuari">
            <button @click="seccioAmagada('basic', user.id)" class="seccio-titol">Informació Bàsica</button>
            <ul v-show="seccioVisible('basic', user.id)" class="seccio-contenidor">
              <li><strong>Nom:</strong> {{ user.firstName }} {{ user.lastName }}</li>
              <li><strong>Nom de soltera:</strong> {{ user.maidenName }}</li>
              <li><strong>Edat:</strong> {{ user.age }}</li>
              <li><strong>Gènere:</strong> {{ user.gender }}</li>
              <li><strong>Data de naixement:</strong> {{ user.birthDate }}</li>
              <li><strong>Correu electrònic:</strong> {{ user.email }}</li>
              <li><strong>Telèfon:</strong> {{ user.phone }}</li>
              <li><strong>Nom d'usuari:</strong> {{ user.username }}</li>
              <li><strong>Contrasenya:</strong> {{ user.password }}</li>
            </ul>
          </li>

          <!-- Dades físiques -->
          <li class="detall-usuari">
            <button @click="seccioAmagada('physical', user.id)" class="seccio-titol">Dades Físiques</button>
            <ul v-show="seccioVisible('physical', user.id)" class="seccio-contenidor">
              <li><strong>Grup sanguini:</strong> {{ user.bloodGroup }}</li>
              <li><strong>Alçada:</strong> {{ user.height }} cm</li>
              <li><strong>Pes:</strong> {{ user.weight }} kg</li>
              <li><strong>Color d'ulls:</strong> {{ user.eyeColor }}</li>
              <li><strong>Color de cabell:</strong> {{ user.hair.color }}</li>
              <li><strong>Tipus de cabell:</strong> {{ user.hair.type }}</li>
            </ul>
          </li>

          <!-- Adreça -->
          <li class="detall-usuari">
            <button @click="seccioAmagada('address', user.id)" class="seccio-titol">Adreça</button>
            <ul v-show="seccioVisible('address', user.id)" class="seccio-contenidor">
              <li><strong>Adreça:</strong> {{ user.address.address }}</li>
              <li><strong>Ciutat:</strong> {{ user.address.city }}</li>
              <li><strong>Estat:</strong> {{ user.address.state }}</li>
              <li><strong>Codi postal:</strong> {{ user.address.postalCode }}</li>
              <li><strong>País:</strong> {{ user.address.country }}</li>
            </ul>
          </li>

          <!-- Dades de la companyia -->
          <li class="detall-usuari">
            <button @click="seccioAmagada('company', user.id)" class="seccio-titol">Dades de la Companyia</button>
            <ul v-show="seccioVisible('company', user.id)" class="seccio-contenidor">
              <li><strong>Empresa:</strong> {{ user.company.name }}</li>
              <li><strong>Departament:</strong> {{ user.company.department }}</li>
              <li><strong>Títol:</strong> {{ user.company.title }}</li>
              <li><strong>Adreça de l'empresa:</strong> {{ user.company.address.address }}</li>
              <li><strong>Ciutat de l'empresa:</strong> {{ user.company.address.city }}</li>
              <li><strong>Estat de l'empresa:</strong> {{ user.company.address.state }}</li>
              <li><strong>Codi postal de l'empresa:</strong> {{ user.company.address.postalCode }}</li>
              <li><strong>País de l'empresa:</strong> {{ user.company.address.country }}</li>
            </ul>
          </li>

          <!-- Dades bancàries -->
          <li class="detall-usuari">
            <button @click="seccioAmagada('bank', user.id)" class="seccio-titol">Dades Bancàries</button>
            <ul v-show="seccioVisible('bank', user.id)" class="seccio-contenidor">
              <li><strong>Card Expire:</strong> {{ user.bank.cardExpire }}</li>
              <li><strong>Card Number:</strong> {{ user.bank.cardNumber }}</li>
              <li><strong>Card Type:</strong> {{ user.bank.cardType }}</li>
              <li><strong>IBAN:</strong> {{ user.bank.iban }}</li>
            </ul>
          </li>

          <!-- Altres dades -->
          <li class="detall-usuari">
            <button @click="seccioAmagada('other', user.id)" class="seccio-titol">Altres Dades</button>
            <ul v-show="seccioVisible('other', user.id)" class="seccio-contenidor">
              <li><strong>MAC Address:</strong> {{ user.macAddress }}</li>
              <li><strong>Direcció IP:</strong> {{ user.ip }}</li>
              <li><strong>Agent d'usuari:</strong> {{ user.userAgent }}</li>
              <li><strong>SSN:</strong> {{ user.ssn }}</li>
              <li><strong>Crypto Wallet:</strong> {{ user.crypto.wallet }}</li>
              <li><strong>Crypto Network:</strong> {{ user.crypto.network }}</li>
            </ul>
          </li>

          <!-- Imatge de l'usuari -->
          <li class="detall-usuari">
            <p><strong>Imatge de perfil:</strong></p>
            <img :src="user.image" alt="Image of {{ user.firstName }} {{ user.lastName }}" />
          </li>
          
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AxiosData',
  data() {
    return {
      users: [],
      visibles: {},
      sections: {}
    };
  },
  mounted() {
    axios.get('https://dummyjson.com/users')
      .then(response => {
        this.users = response.data.users;
      });
  },
  methods: {
    detallsUsuari(userId) {
      this.visibles[userId] = !this.visibles[userId];
    },
    visible(userId) {
      return this.visibles[userId] || false;
    },
    seccioAmagada(section, userId) {
      this.sections[userId] = this.sections[userId] || {};
      this.sections[userId][section] = !this.sections[userId][section];
    },
    seccioVisible(section, userId) {
      return this.sections[userId] && this.sections[userId][section];
    }
  }
}
</script>

<style scoped>
.axios-data {
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

.titol-usuari {
  color: #d4af37;
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 10px;
  text-transform: uppercase;
  border-bottom: 2px solid #d4af37;
  padding-bottom: 5px;
  cursor: pointer;
}

.detalls-usuari {
  padding-left: 20px;
}

.detall-usuari {
  background-color: #333;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #555;
}

.seccio-titol {
  background-color: #333;
  color: #d4af37;
  padding: 10px;
  width: 100%;
  text-align: left;
  border: none;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 600;
  border-radius: 5px;
}

.seccio-contenidor {
  padding-left: 20px;
}

.seccio-contenidor li {
  margin-bottom: 10px;
}

img {
  max-width: 200px;
  border-radius: 10px;
  margin-top: 10px;
}

/* Responsivitat per a dispositius mòbils */
@media (max-width: 600px) {
  .axios-data {
    padding: 15px;
    max-width: 100%;
  }

  .titol-dades {
    font-size: 1.8em;
  }

  .element-llista {
    padding: 15px;
  }

  .titol-usuari {
    font-size: 1.2em;
  }

  .detall-usuari {
    padding: 12px;
  }

  .seccio-titol {
    font-size: 1em;
    padding: 8px;
  }

  img {
    max-width: 100%; /* Imatges més petites i adaptables */
    margin-top: 10px;
  }
}

/* Responsivitat per a pantalles mitjanes (tablets) */
@media (max-width: 1024px) and (min-width: 601px) {
  .axios-data {
    padding: 18px;
    max-width: 90%;
  }

  .titol-dades {
    font-size: 2em;
  }

  .element-llista {
    padding: 18px;
  }

  .titol-usuari {
    font-size: 1.4em;
  }

  .detall-usuari {
    padding: 14px;
  }

  .seccio-titol {
    font-size: 1.1em;
  }

  img {
    max-width: 180px;
  }
}

/* Pantalles grans (desktops) */
@media (min-width: 1025px) {
  .axios-data {
    padding: 20px;
    max-width: 800px;
  }

  .titol-dades {
    font-size: 2.2em;
  }

  .element-llista {
    padding: 20px;
  }

  .titol-usuari {
    font-size: 1.5em;
  }

  .detall-usuari {
    padding: 15px;
  }

  .seccio-titol {
    font-size: 1.2em;
  }

  img {
    max-width: 200px;
  }
}
</style>

