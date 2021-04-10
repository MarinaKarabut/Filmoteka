import formHeaderTemplate from '../../templates/formHeader.hbs'
import buttonsHeaderTemplate from '../../templates/buttonsHeader.hbs'
import { searchFormHandler } from "./searchFormHandler";
import {onFilmAction} from "./onFilmAction"

export const headerMenuLinks = [
    {
        pathname: "/",
        template: formHeaderTemplate,
        selector: "#search-film",
        actionType: "submit",
        listener: searchFormHandler,
        headerClass: "header-home-bg",
    },
    {
        pathname: "/my-library",
        template: buttonsHeaderTemplate,
        selector: "#profile-films-actions",
        actionType: "submit",
        listener: onFilmAction,
        headerClass: "header-my-library-bg",
    }
];