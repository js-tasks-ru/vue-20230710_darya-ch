import { defineComponent } from '../vendor/vue.esm-browser.js';
import MeetupCover from '../../03-MeetupCover/components/MeetupCover.js';
import MeetupDescription from '../../02-MeetupDescription/components/MeetupDescription.js';
import MeetupAgenda from '../../05-MeetupAgenda/components/MeetupAgenda.js';
import MeetupInfo from '../../04-MeetupInfo/components/MeetupInfo.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupCover,
    MeetupDescription,
    MeetupInfo,
    MeetupAgenda
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>
      <MeetupCover
        :title="meetup.title"
        :image="meetup.image"
      />

      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <MeetupDescription :description="meetup.description" />

            <h3>Программа</h3>
            <MeetupInfo
              v-if="meetup.organizer"
              :organizer="meetup.organizer"
              :place="meetup.place"
              :date="meetup.date"
            />
            <UiAlert v-else >Программа пока пуста...</UiAlert>
          </div>
          <div class="meetup__aside">
            <MeetupAgenda :agenda="meetup.agenda" />
          </div>
        </div>
      </UiContainer>
    </div>`,
});
