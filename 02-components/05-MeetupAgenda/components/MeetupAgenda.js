import { defineComponent } from '../vendor/vue.esm-browser.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupAgenda',

  components: { MeetupAgendaItem },

  props: {
    agenda: {
      type: Array,
      required: true,
      default: () => []
    }
  },

  template: `
    <ul class="agenda">
      <li class="agenda__item">
        <template v-for="(agendaItem, index) in agenda" :key="\`MeetupAgenda-\${index}\`">
          <MeetupAgendaItem :agenda-item="agendaItem" />
        </template>
      </li>
    </ul>`,
});
