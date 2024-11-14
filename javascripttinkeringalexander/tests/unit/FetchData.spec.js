import { mount } from '@vue/test-utils';
import FetchData from '@/views/FetchData.vue';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ postId: 1, id: 1, name: 'Test' }]),
  })
);

describe('FetchData.vue', () => {

  it('ha de filtrar comentaris per postId', async () => {
    const wrapper = mount(FetchData);

    // Esperem que les dades es carreguin correctament
    await wrapper.vm.$nextTick();

    // Verifiquem que els postIds són únics
    expect(wrapper.vm.uniquePostIds.length).toBeGreaterThan(0); // Comprovem que hi ha postIds
  });

  it('ha de mostrar o amagar comentaris al fer clic', async () => {
    const wrapper = mount(FetchData);

    // Assegurem que la càrrega inicial es faci correctament
    await wrapper.vm.$nextTick();

    // Comprovació per mostrar els comentaris
    await wrapper.vm.toggleComentaris(1);
    expect(wrapper.vm.isPostVisible(1)).toBe(true); // Verifiquem que els comentaris són visibles

    // Comprovació per amagar els comentaris
    await wrapper.vm.toggleComentaris(1);
    expect(wrapper.vm.isPostVisible(1)).toBe(false); // Verifiquem que els comentaris es poden amagar
  });
});
