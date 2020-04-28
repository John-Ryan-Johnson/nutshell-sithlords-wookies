import './eventCard.scss';

const buildEventCard = (event) => {
  let domString = '';
  domString += '<div>';
  domString += `<div class="card" id="${event.id}">`;
  domString += `<img src="${event.imageUrl}" class="card-img-top" alt="...">`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title text-center">${event.name}</h5>`;
  domString += `<p class="card-text">Location: ${event.location}</p>`;
  domString += `<p class="card-text">Date: ${event.date}</p>`;
  domString += `<p class="card-text">Time: ${event.timeStart} - ${event.timeEnd}</p>`;
  domString += '<div class="d-flex justify-content-center">';
  domString += `<button id="viewEventBtn" class="btn btn-default viewEventBtn" data-id="${event.id}"><i class="fas fa-eye"></i></<button>`;
  domString += '<button id="editEventBtn" class="btn btn-default editEventBtn"><i class="fas fa-feather-alt"></i></<button>';
  domString += '<button id="deleteEventBtn" class="btn btn-default deleteEventBtn"><i class="far fa-trash-alt"></i></button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { buildEventCard };
