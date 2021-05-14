import './styles.scss';
import 'react-toastify/dist/ReactToastify.css';

import { storiesOf } from '@storybook/react';

import AccordionStory from './accordion';
import AutoCompleteStory from './autocomplete';
import BannersStory from './banners';
import ButtonsStory from './buttons';
import CheckboxStory from './checkbox';
import ChipStory from './chip';
import ContentHighlightStory from './content-highlight';
import DropzoneStory from './dropzone';
import FileUploaderStory from './file-uploader';
import FormsStory from './forms';
import GridStory from './grid';
import IconsStory from './icons';
import LinkStory from './link';
import NotificationStory from './notification';
import PaginationStory from './pagination';
import RadioStory from './radiobutton';
import ResponsiveTableStory from './responsive-table';
import SelectStory from './select';
import SliderStory from './slider';
import StampStory from './stamp';
import SwitchStory from './switch';
import TextStory from './text';
import TooltipStory from './tooltip';
import WizardStory from './wizard';

// import AvatarStory from './avatar';
storiesOf('Accordion', AccordionStory);
storiesOf('AutoComplete', AutoCompleteStory);
storiesOf('Button', ButtonsStory);
storiesOf('Chip', ChipStory);
storiesOf('CheckBox', CheckboxStory);
storiesOf('ContentHighlight', ContentHighlightStory);
storiesOf('Grid', GridStory);
// storiesOf('Avatar', AvatarStory);
storiesOf('Icon', IconsStory);
storiesOf('Icon', TextStory);
storiesOf('Forms', FormsStory);
storiesOf('ResponsiveTable', ResponsiveTableStory);
storiesOf('Slider', SliderStory);
storiesOf('Stamp', StampStory);
storiesOf('Link', LinkStory);
storiesOf('RadioButton', RadioStory);
storiesOf('Select', SelectStory);
storiesOf('Dropzone', DropzoneStory);
storiesOf('FileUploader', FileUploaderStory);
storiesOf('Notification', NotificationStory);
storiesOf('Pagination', PaginationStory);
storiesOf('Wizard', WizardStory);
storiesOf('Banners', BannersStory);
storiesOf('Switcher', SwitchStory);
storiesOf('Tooltip', TooltipStory);
