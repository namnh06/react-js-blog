import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFilePdf,
  faThLarge,
  faList,
  faUsers,
  faThList,
  faTachometerAlt,
  faNewspaper,
  faPlus,
  faMinus
} from '@fortawesome/free-solid-svg-icons';

const fontAwesome = () => {
  library.add(
    faFilePdf,
    faThLarge,
    faList,
    faUsers,
    faThList,
    faTachometerAlt,
    faNewspaper,
    faPlus,
    faMinus
  );
};

export default fontAwesome;
