import './food.scss';
import utils from '../../helpers/utils';

const newFoodForm = () => {
  $('#foodModal').modal('show');
  let domString = '';
  domString += '<form id="foodForm">';
  domString += '<div class="form-group">';
  domString += '<label for="foodType">Type of Food</label>';
  domString += '<input type="text" class="form-control" id="foodType" placeholder="Type">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="foodDescription">Description of Food</label>';
  domString += '<input type="text" class="form-control" id="foodDescription" placeholder="Description">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="foodImageUrl">Image Url of Food</label>';
  domString += '<input type="text" class="form-control" id="foodImageUrl" placeholder="image Url">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="foodPrice">Price of Food</label>';
  domString += '<input type="number" class="form-control" id="foodPrice" placeholder="Price">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="foodLocation">Locations Of Food:</label>';
  domString += '<select id="foodLocation" class="form-control" placeholder="">';
  domString += '<option value="">Select your option</option>';
  domString += '<option value="Edinson Tudor Festival">Edinson Tudor Festival</option>';
  domString += '<option value="North Illinois Pleasure Faire">North Illinois Pleasure Faire</option>';
  domString += '<option value="Hopscote-by-Sea Faire">Edinson Tudor Festival</option>';
  domString += '</select>';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="availabilityOfFood">Availability Of Food:</label>';
  domString += '<select id="availabilityOfFood" class="form-control" placeholder="">';
  domString += '<option value="">Select your option</option>';
  domString += '<option value=true>Available</option>';
  domString += '<option value=false>Not Available</option>';
  domString += '</select>';
  domString += '</div>';
  domString += '</div>';
  domString += '</form>';

  $('#newFoodSubmit').removeClass('hide');
  $('#editFoodSubmit').addClass('hide');
  utils.printToDom('modalFoodForm', domString);
};

export default { newFoodForm };
