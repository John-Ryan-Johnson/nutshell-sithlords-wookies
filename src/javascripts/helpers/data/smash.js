import eventData from './eventData';
import eventFoodData from './eventFoodData';
import foodData from './foodData';
import eventSouvenirData from './eventSouvenirData';
import souvenirsData from './souvenirsData';
import animalData from './animalData';
import eventAnimalData from './eventAnimalData';
import showData from './showData';
import eventShowData from './eventShowData';
import eventStaffData from './eventStaffData';
import staffData from './staffData';


const getEventFood = (eventId) => new Promise((resolve, reject) => {
  eventFoodData.getEventFoodByEventId(eventId)
    .then((eventFoods) => {
      foodData.getFoods().then((allFoods) => {
        const selectedEventFoodItems = [];
        eventFoods.forEach((eventFoodItem) => {
          const foundEventFoodItem = allFoods.find((x) => x.id === eventFoodItem.foodId);
          foundEventFoodItem.parentEventFoodId = eventFoodItem.id;
          foundEventFoodItem.parentQuantity = eventFoodItem.quantity;
          foundEventFoodItem.parentEventId = eventFoodItem.eventId;
          selectedEventFoodItems.push(foundEventFoodItem);
        });
        resolve(selectedEventFoodItems);
      });
    })
    .catch((error) => reject(error));
});

const getEventSouvenirs = (eventId) => new Promise((resolve, reject) => {
  eventSouvenirData.getEventSouvenirByEventId(eventId)
    .then((eventSouvenir) => {
      souvenirsData.getSouvenirs().then((allSouvenirs) => {
        const selectedEventSouvenirItems = [];
        eventSouvenir.forEach((eventSouvenirItem) => {
          const foundEventSouvenirItem = allSouvenirs.find((x) => x.id === eventSouvenirItem.souvenirId);
          foundEventSouvenirItem.parentEventSouvenirId = eventSouvenirItem.id;
          foundEventSouvenirItem.parentQuantity = eventSouvenirItem.quantity;
          foundEventSouvenirItem.parentEventId = eventSouvenirItem.eventId;
          selectedEventSouvenirItems.push(foundEventSouvenirItem);
        });
        resolve(selectedEventSouvenirItems);
      });
    })
    .catch((error) => reject(error));
});

const getEventShow = (eventId) => new Promise((resolve, reject) => {
  eventShowData.getEventShowByEventId(eventId)
    .then((eventShows) => {
      showData.getShows().then((allShows) => {
        const selectedEventShowItems = [];
        eventShows.forEach((eventShowItem) => {
          const foundEventShowItem = allShows.find((x) => x.id === eventShowItem.showId);
          foundEventShowItem.parentEventShowId = eventShowItem.id;
          foundEventShowItem.parentEventId = eventShowItem.eventId;
          selectedEventShowItems.push(foundEventShowItem);
        });
        resolve(selectedEventShowItems);
      });
    })
    .catch((error) => reject(error));
});

const getEventStaff = (eventId) => new Promise((resolve, reject) => {
  eventStaffData.getEventStaffByEventId(eventId)
    .then((eventStaff) => {
      staffData.getStaff().then((allStaff) => {
        const selectedEventStaffMembers = [];
        eventStaff.forEach((eventStaffMember) => {
          const foundEventStaffMember = allStaff.find((x) => x.id === eventStaffMember.staffId);
          foundEventStaffMember.parentEventStaffId = eventStaffMember.id;
          foundEventStaffMember.parentEventId = eventStaffMember.eventId;
          selectedEventStaffMembers.push(foundEventStaffMember);
        });
        resolve(selectedEventStaffMembers);
      });
    })
    .catch((error) => reject(error));
});

const getEventAnimals = (eventId) => new Promise((resolve, reject) => {
  eventAnimalData.getEventAnimalByEventId(eventId)
    .then((eventAnimals) => {
      animalData.getAnimals().then((allAnimals) => {
        const selectedEventAnimalItems = [];
        eventAnimals.forEach((eventAnimalItem) => {
          const foundEventAnimalItem = allAnimals.find((x) => x.id === eventAnimalItem.animalId);
          foundEventAnimalItem.parentEventAnimalId = eventAnimalItem.id;
          foundEventAnimalItem.parentQuantity = eventAnimalItem.quantity;
          foundEventAnimalItem.parentEventId = eventAnimalItem.eventId;
          selectedEventAnimalItems.push(foundEventAnimalItem);
        });
        resolve(selectedEventAnimalItems);
      });
    })
    .catch((error) => reject(error));
});

const getCompleteEvent = (eventId) => new Promise((resolve, reject) => {
  eventData.getEventById(eventId)
    .then((event) => {
      getEventFood(eventId).then((eventFood) => {
        getEventSouvenirs(eventId).then((eventSouvenirs) => {
          getEventStaff(eventId).then((eventStaff) => {
            getEventShow(eventId).then((eventShows) => {
              getEventAnimals(eventId).then((eventAnimals) => {
                const finalEvent = { ...event };
                finalEvent.food = eventFood;
                finalEvent.souvenirs = eventSouvenirs;
                finalEvent.shows = eventShows;
                finalEvent.staff = eventStaff;
                finalEvent.animals = eventAnimals;
                resolve(finalEvent);
              });
            });
          });
        });
      })
        .catch((error) => reject(error));
    });
});

export default {
  getEventFood,
  getCompleteEvent,
  getEventStaff,
  getEventAnimals,
};
