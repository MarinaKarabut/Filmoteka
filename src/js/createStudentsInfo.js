import openModal from './openModal.js';
import modalStudentsTemplate from '../templates/modalStudents.hbs';
import Masha from "../images/goit-students-photos/Maria.jpg"
import Marina from "../images/goit-students-photos/Marina.jpg"
import Sasha from "../images/goit-students-photos/Sasha.jpg"
import Maks from "../images/goit-students-photos/Maks1.jpg"
import Fahriddin from "../images/goit-students-photos/Fahriddin.jpg"
import Akbar from "../images/goit-students-photos/Akbar.jpg"
import Danilo from "../images/goit-students-photos/Hezalek.jpg"
import Bogdan from "../images/goit-students-photos/Bogdan.jpg"
// import Andrii from "../images/goit-students-photos/Andrii.jpg"

function renderModalStudents() {
    const contentMarkup = modalStudentsTemplate();
    openModal(contentMarkup);
}

export default renderModalStudents;