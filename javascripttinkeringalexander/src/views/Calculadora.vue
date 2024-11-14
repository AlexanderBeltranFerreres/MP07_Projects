<template>
  <div class="calculadora">
    <h1 class="titol-calculadora">Calculadora</h1>
    <div class="pantalla" id="pantalla">{{ pantalla }}</div>
    <div class="botons">
      <button v-for="n in numeros" :key="n" class="boton" @click="afegir(n)">{{ n }}</button>
      <button class="boton" @click="afegirOperacio('+')">+</button>
      <button class="boton" @click="afegirOperacio('-')">-</button>
      <button class="boton" @click="afegirOperacio('*')">*</button>
      <button class="boton" @click="afegirOperacio('/')">/</button>
      <button class="boton" @click="borrar">Esborrar</button>
      <button class="boton" @click="calcular">Calcular</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculadora',
  data() {
    return {
      pantalla: '',
      numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    };
  },
  methods: {
    afegir(num) {
      this.pantalla += num;
    },
    afegirOperacio(operacio) {
      this.pantalla += operacio;
    },
    borrar() {
      this.pantalla = '';
    },
    calcular() {
  try {
    const result = eval(this.pantalla); 
    if (result === Infinity || isNaN(result)) {
      this.pantalla = 'Error'; 
    } else {
      this.pantalla = result.toString(); 
    }
  } catch (e) {
    this.pantalla = 'Error'; 
  }
}
  }
}
</script>

<style>
  .calculadora {
    width: 500px;
    margin: 50px auto;
    padding: 20px;
    background-color: #1a1a1a;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.1);
    text-align: center;
    font-family: 'Helvetica Neue', sans-serif;
    color: #e0e0e0;
  }

  .titol-calculadora {
    font-size: 26px;
    font-weight: 700;
    color: #b3b3b3;
    text-transform: uppercase;
    margin-bottom: 20px;
    letter-spacing: 1px;
  }

  .pantalla {
    width: 94%;
    height: 55px;
    margin-bottom: 20px;
    font-size: 28px;
    text-align: right;
    padding: 15px;
    background-color: #333333;
    border-radius: 8px;
    border: none;
    color: #e0e0e0;
    box-shadow: inset 0 -3px 10px rgba(255, 255, 255, 0.1), 0 3px 3px rgba(0, 0, 0, 0.4);
  }

  .botons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  .boton {
    padding: 20px;
    font-size: 20px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(145deg, #4a4a4a, #2f2f2f);
    color: #f2f2f2;
    cursor: pointer;
    transition: transform 0.1s ease-in, box-shadow 0.3s ease-in;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.05);
  }

  .boton:hover {
    background: linear-gradient(145deg, #5a5a5a, #3f3f3f);
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.5), inset 0 2px 2px rgba(255, 255, 255, 0.1);
  }

  .boton:active {
    transform: translateY(2px);
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.07);
  }

  /* Botons numèrics (inclou el 0) */
  .boton:nth-child(-n+10) {
    background: linear-gradient(145deg, #4a4a4a, #2f2f2f);
  }

  .boton:nth-child(-n+10):hover {
    background: linear-gradient(145deg, #5a5a5a, #3f3f3f);
  }

  /* Botons d'operacions (ex: +, -, *, /) en blau */
  .boton:nth-child(11),
  .boton:nth-child(12),
  .boton:nth-child(13),
  .boton:nth-child(14) {
    background: linear-gradient(145deg, #457b9d, #315c73);
  }

  .boton:nth-child(11):hover,
  .boton:nth-child(12):hover,
  .boton:nth-child(13):hover,
  .boton:nth-child(14):hover {
    background: linear-gradient(145deg, #5a93b1, #3b6d8d);
  }

  /* Botó Esborrar en vermell */
  .boton:nth-last-child(2) {
    background: linear-gradient(145deg, #e63946, #b32f36);
  }

  .boton:nth-last-child(2):hover {
    background: linear-gradient(145deg, #f34d5c, #c23a46);
  }

  /* Botó Calcular en verd */
  .boton:nth-last-child(1) {
    background: linear-gradient(145deg, #4caf50, #388e3c);
  }

  .boton:nth-last-child(1):hover {
    background: linear-gradient(145deg, #66bb6a, #4caf50);
  }

  /* Responsivitat per a pantalles petites */
  @media (max-width: 768px) {
    .calculadora {
      width: 90%;
      padding: 15px;
    }

    .pantalla {
      font-size: 24px;
      height: 50px;
    }

    .botons {
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }

    .boton {
      font-size: 18px;
      padding: 15px;
    }

    .titol-calculadora {
      font-size: 22px;
    }
  }

  /* Responsivitat per a pantalles més petites (telèfons) */
  @media (max-width: 480px) {
    .calculadora {
      width: 100%;
      padding: 10px;
    }

    .pantalla {
      font-size: 20px;
      height: 45px;
    }

    .botons {
      grid-template-columns: repeat(3, 1fr);
      gap: 6px;
    }

    .boton {
      font-size: 16px;
      padding: 12px;
    }

    .titol-calculadora {
      font-size: 20px;
    }
  }
</style>
