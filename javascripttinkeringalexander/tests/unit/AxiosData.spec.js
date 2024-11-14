import { mount } from '@vue/test-utils';
import AxiosData from '@/views/AxiosData.vue';

// Mock de la crida d'axios
jest.mock('axios');
 
describe('AxiosData.vue', () => {

  it('ha de mostrar o amagar detalls d\'usuari', async () => {
    const wrapper = mount(AxiosData);
    await wrapper.vm.$nextTick();
    
    wrapper.vm.detallsUsuari(1);
    expect(wrapper.vm.visible(1)).toBe(true); // Verifiquem que els detalls es mostren per l'usuari amb id 1
    wrapper.vm.detallsUsuari(1);
    expect(wrapper.vm.visible(1)).toBe(false); // Verifiquem que els detalls es poden amagar
  });

  it('ha de mostrar o amagar seccions d\'usuari', async () => {
    const wrapper = mount(AxiosData);
    await wrapper.vm.$nextTick();
    
    wrapper.vm.seccioAmagada('address', 1);
    expect(wrapper.vm.seccioVisible('address', 1)).toBe(true); // Verifiquem que la secció d'adreça es pot mostrar
    wrapper.vm.seccioAmagada('address', 1);
    expect(wrapper.vm.seccioVisible('address', 1)).toBe(false); // Verifiquem que la secció d'adreça es pot amagar
  });
});
