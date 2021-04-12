import openModal from './openModal.js';
import modalStudentsTemplate from '../templates/modalStudents.hbs';

function renderModalStudents() {
    const contentMarkup = modalStudentsTemplate();
    openModal(contentMarkup);
}

export default renderModalStudents;