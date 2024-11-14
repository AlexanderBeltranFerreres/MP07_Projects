import { mount } from '@vue/test-utils';
import Calculadora from '@/views/Calculadora.vue';

describe('Calculadora.vue', () => {
  it('renderitza correctament', () => {
    const wrapper = mount(Calculadora);
    expect(wrapper.exists()).toBe(true); // Verifiquem que el component existeix
  });

  it('ha de mostrar números quan es prem un botó numèric', async () => {
    const wrapper = mount(Calculadora);
    await wrapper.vm.afegir(5);
    expect(wrapper.vm.pantalla).toBe('5'); // El valor de la pantalla hauria de ser "5"
  });

  it('ha de mostrar operacions quan es prem un botó d\'operació', async () => {
    const wrapper = mount(Calculadora);
    await wrapper.vm.afegirOperacio('+');
    expect(wrapper.vm.pantalla).toBe('+'); // La pantalla hauria de mostrar "+"
  });

  it('ha de borrar la pantalla quan es prem el botó de borrar', async () => {
    const wrapper = mount(Calculadora);
    await wrapper.vm.afegir(5);
    await wrapper.vm.borrar();
    expect(wrapper.vm.pantalla).toBe(''); // La pantalla hauria d'estar buida
  });

  it('ha de calcular correctament l\'expressió', async () => {
    const wrapper = mount(Calculadora);
    await wrapper.vm.afegir(5);
    await wrapper.vm.afegirOperacio('+');
    await wrapper.vm.afegir(3);
    await wrapper.vm.calcular();
    expect(wrapper.vm.pantalla).toBe('8'); // El resultat de 5 + 3 hauria de ser 8
  });

  it('ha de mostrar un error per a una expressió incorrecta', async () => {
    const wrapper = mount(Calculadora);
    await wrapper.vm.afegir('5/0');
    await wrapper.vm.calcular();
    expect(wrapper.vm.pantalla).toBe('Error'); // No es pot dividir per zero
  });
});
