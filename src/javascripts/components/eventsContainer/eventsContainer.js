import eventData from '../../helpers/data/eventData';
import eventCard from '../eventCard/eventCard';
import eventSingleView from '../eventSingleView/eventSingleView';
import editEventForm from '../editEventForm/editEventForm';

import utils from '../../helpers/utils';

const removeEvent = (e) => {
  e.preventDefault();
  const eventId = e.target.closest('.card').id;
  eventData.deleteEvent(eventId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildAllEvents();
    })
    .catch((err) => console.error('delete event failed', err));
};

const editNewEvent = (e) => {
  e.preventDefault();
  const eventId = e.target.closest('.card').id;
  $('#modalEditEvent').modal('show');
  editEventForm.showEditEventForm(eventId);
};

const updateEvent = (e) => {
  e.preventDefault();
  const eventId = $('.edit-event-form-tag').data('id');
  console.error('event id from update function', eventId);
  const editedEvent = {
    name: $('#edit-event-name').val(),
    location: $('#edit-event-location').val(),
    timeStart: $('#edit-event-timeStart').val(),
    timeEnd: $('#edit-event-timeEnd').val(),
    date: $('#edit-event-date').val() * 1,
    cost: $('#edit-event-cost').val() * 1,
    uid: utils.getMyUid(),
  };
  eventData.updateEvent(eventId, editedEvent)
    .then(() => {
      $('#modalEditEvent').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildAllEvents();
    })
    .catch((error) => console.error('could not update the event', error));
};

const buildAllEvents = () => {
  let domString = '';
  eventData.getEvents()
    .then((events) => {
      domString += '<div class="text-center" id="eventTitle">';
      domString += '<h2 class="mt-3">Events</h2>';
      domString += '<h3>Fun celebrations for the whole family!</h3>';
      domString += '<button class="btn btn-lg addEventBtn" id="addEventBtn"><i class="fas fa-plus"></i> Add a New Event</button>';
      domString += '<button class="btn btn-lg editEventBtn" id="addEventBtn"><i class="fas fa-plus"></i> Modify an Existing Event</button>';
      domString += '</div>';
      domString += '<div class="container-fluid d-flex flex-wrap col-md-9 col-sm-10">';
      events.forEach((event) => {
        domString += eventCard.buildEventCard(event);
      });
      domString += '</div>';
      utils.printToDom('events', domString);
      $('body').on('click', '#viewEventBtn', eventSingleView.viewSingleEventCall);
    })
    .catch((error) => console.error('build all events has failed', error));
};

const eventActions = () => {
  $('body').on('click', '#deleteEventBtn', removeEvent);
  $('body').on('click', '#button-save-edit-event', updateEvent);
  $('body').on('click', '#editEventBtn', editNewEvent);
};

export default { buildAllEvents, eventActions, editNewEvent };
