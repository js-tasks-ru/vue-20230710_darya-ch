import { defineComponent } from '../vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from '../meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: Object,
      required: true,
      default: () => {}
    }
  },

  computed: {
    icon () {
      return agendaItemIcons[this.agendaItem.type]
    },
    title () {
      if (!this.agendaItem.title) {
        return agendaItemDefaultTitles[this.agendaItem.type]
      }

      return this.agendaItem.title
    },
    isMeetupTalk () {
      return this.agendaItem.type === 'talk'
    }
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="\`/assets/icons/icon-\${icon}.svg\`" class="icon" alt="key" />
      </div>
      <div class="agenda-item__col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{ title }}</h3>
        <p
          v-if="isMeetupTalk"
          class="agenda-item__talk"
        >
          <span>{{ agendaItem.speaker }}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
