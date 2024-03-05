import { translate } from './i18n.js'

export const SCHEMA = {
  zoom: {
    type: Number,
  },
  scrollWheelZoom: {
    type: Boolean,
    label: translate('Allow scroll wheel zoom?'),
  },
  scaleControl: {
    type: Boolean,
    label: translate('Do you want to display the scale control?'),
    default: true,
  },
  moreControl: {
    type: Boolean,
    label: translate('Do you want to display the «more» control?'),
    default: true,
  },
  miniMap: {
    type: Boolean,
    label: translate('Do you want to display a minimap?'),
    default: false,
  },
  displayPopupFooter: {
    type: Boolean,
    label: translate('Do you want to display popup footer?'),
    default: false,
  },
  onLoadPanel: {
    type: String,
    label: translate('Do you want to display a panel on load?'),
    choices: [
      ['none', translate('None')],
      ['caption', translate('Caption')],
      ['databrowser', translate('Data browser')],
      ['facet', translate('Facet search')],
    ],
    default: 'none',
  },
  defaultView: {
    type: String,
    label: translate('Default view'),
    choices: [
      ['center', translate('Saved center and zoom')],
      ['data', translate('Fit all data')],
      ['latest', translate('Latest feature')],
      ['locate', translate('User location')],
    ],
    default: 'center',
  },
  name: {
    type: String,
    label: translate('name'),
  },
  description: {
    label: translate('description'),
    type: 'Text',
    helpEntries: 'textFormatting',
  },
  licence: {
    type: String,
    label: translate('licence'),
  },
  tilelayer: {
    type: Object,
  },
  overlay: {
    type: Object,
  },
  limitBounds: {
    type: Object,
  },
  color: {
    type: String,
    handler: 'ColorPicker',
    label: translate('color'),
    helpEntries: 'colorValue',
    inheritable: true,
    default: 'DarkBlue',
  },
  iconClass: {
    type: String,
    label: translate('Icon shape'),
    inheritable: true,
    choices: [
      ['Default', translate('Default')],
      ['Circle', translate('Circle')],
      ['Drop', translate('Drop')],
      ['Ball', translate('Ball')],
    ],
    default: 'Default',
  },
  iconUrl: {
    type: String,
    handler: 'IconUrl',
    label: translate('Icon symbol'),
    inheritable: true,
    // helpText: translate(
    //   'Symbol can be either a unicode character or an URL. You can use feature properties as variables: ex.: with "http://myserver.org/images/&lcub;name&rcub;.png", the &lcub;name&rcub; variable will be replaced by the "name" value of each marker.'
    // ),
  },
  smoothFactor: {
    type: Number,
    min: 0,
    max: 10,
    step: 0.5,
    label: translate('Simplify'),
    helpEntries: 'smoothFactor',
    inheritable: true,
    default: 1.0,
  },
  iconOpacity: {
    type: Number,
    min: 0.1,
    max: 1,
    step: 0.1,
    label: translate('icon opacity'),
    inheritable: true,
    default: 1,
  },
  opacity: {
    type: Number,
    min: 0.1,
    max: 1,
    step: 0.1,
    label: translate('opacity'),
    inheritable: true,
    default: 0.5,
  },
  weight: {
    type: Number,
    min: 1,
    max: 20,
    step: 1,
    label: translate('weight'),
    inheritable: true,
    default: 3,
  },
  fill: {
    type: Boolean,
    label: translate('fill'),
    helpEntries: 'fill',
    inheritable: true,
    default: true,
  },
  fillColor: {
    type: String,
    handler: 'ColorPicker',
    label: translate('fill color'),
    helpEntries: 'fillColor',
    inheritable: true,
  },
  fillOpacity: {
    type: Number,
    min: 0.1,
    max: 1,
    step: 0.1,
    label: translate('fill opacity'),
    inheritable: true,
    default: 0.3,
  },
  dashArray: {
    type: String,
    label: translate('dash array'),
    helpEntries: 'dashArray',
    inheritable: true,
  },
  popupShape: {
    type: String,
    label: translate('Popup shape'),
    inheritable: true,
    choices: [
      ['Default', translate('Popup')],
      ['Large', translate('Popup (large)')],
      ['Panel', translate('Side panel')],
    ],
    default: 'Default',
  },
  popupTemplate: {
    type: String,
    label: translate('Popup content style'),
    inheritable: true,
    choices: [
      ['Default', translate('Default')],
      ['Table', translate('Table')],
      ['GeoRSSImage', translate('GeoRSS (title + image)')],
      ['GeoRSSLink', translate('GeoRSS (only link)')],
      ['OSM', translate('OpenStreetMap')],
    ],
    default: 'Default',
  },
  popupContentTemplate: {
    type: 'Text',
    label: translate('Popup content template'),
    helpEntries: ['dynamicProperties', 'textFormatting'],
    placeholder: '# {name}',
    inheritable: true,
    default: '# {name}\n{description}',
  },
  zoomTo: {
    type: Number,
    placeholder: translate('Inherit'),
    helpEntries: 'zoomTo',
    label: translate('Default zoom level'),
    inheritable: true,
  },
  captionBar: {
    type: Boolean,
    label: translate('Do you want to display a caption bar?'),
    default: false,
  },
  captionMenus: {
    type: Boolean,
    label: translate('Do you want to display caption menus?'),
    default: true,
  },
  slideshow: {
    type: Object,
  },
  sortKey: {
    type: String,
  },
  labelKey: {
    type: String,
    helpEntries: 'labelKey',
    placeholder: translate('Default: name'),
    label: translate('Label key'),
    inheritable: true,
  },
  filterKey: {
    type: String,
  },
  facetKey: {
    type: String,
  },
  slugKey: {
    type: String,
  },
  showLabel: {
    type: Boolean,
    nullable: true,
    label: translate('Display label'),
    inheritable: true,
    default: false,
  },
  labelDirection: {
    type: String,
    label: translate('Label direction'),
    inheritable: true,
    choices: [
      ['auto', translate('Automatic')],
      ['left', translate('On the left')],
      ['right', translate('On the right')],
      ['top', translate('On the top')],
      ['bottom', translate('On the bottom')],
    ],
    default: 'auto',
  },
  labelInteractive: {
    type: Boolean,
    label: translate('Labels are clickable'),
    inheritable: true,
  },
  outlinkTarget: {
    type: String,
    label: translate('Open link in…'),
    inheritable: true,
    default: 'blank',
    choices: [
      ['blank', translate('new window')],
      ['self', translate('iframe')],
      ['parent', translate('parent window')],
    ],
  },
  shortCredit: {
    type: String,
    label: translate('Short credits'),
    helpEntries: ['shortCredit', 'textFormatting'],
  },
  longCredit: {
    type: 'Text',
    label: translate('Long credits'),
    helpEntries: ['longCredit', 'textFormatting'],
  },
  permanentCredit: {
    type: 'Text',
    label: translate('Permanent credits'),
    helpEntries: ['permanentCredit', 'textFormatting'],
  },
  permanentCreditBackground: {
    type: Boolean,
    label: translate('Permanent credits background'),
    default: true,
  },
  zoomControl: {
    type: Boolean,
    nullable: true,
    label: translate('Display the zoom control'),
    default: true,
  },
  datalayersControl: {
    type: Boolean,
    nullable: true,
    handler: 'DataLayersControl',
    label: translate('Display the data layers control'),
    default: true,
  },
  searchControl: {
    type: Boolean,
    nullable: true,
    label: translate('Display the search control'),
    default: true,
  },
  locateControl: {
    type: Boolean,
    nullable: true,
    label: translate('Display the locate control'),
  },
  fullscreenControl: {
    type: Boolean,
    nullable: true,
    label: translate('Display the fullscreen control'),
    default: true,
  },
  editinosmControl: {
    type: Boolean,
    nullable: true,
    label: translate('Display the control to open OpenStreetMap editor'),
    default: null,
  },
  embedControl: {
    type: Boolean,
    nullable: true,
    label: translate('Display the embed control'),
    default: true,
  },
  measureControl: {
    type: Boolean,
    nullable: true,
    label: translate('Display the measure control'),
  },
  tilelayersControl: {
    type: Boolean,
    nullable: true,
    label: translate('Display the tile layers control'),
  },
  starControl: {
    type: Boolean,
    nullable: true,
    label: translate('Display the star map button'),
  },
  easing: {
    type: Boolean,
    default: false,
  },
  interactive: {
    type: Boolean,
    label: translate('Allow interactions'),
    helpEntries: 'interactive',
    inheritable: true,
    default: true,
  },
  fromZoom: {
    type: Number,
    label: translate('From zoom'),
    helpText: translate('Optional.'),
  },
  toZoom: {
    type: Number,
    label: translate('To zoom'),
    helpText: translate('Optional.'),
  },
  stroke: {
    type: Boolean,
    label: translate('stroke'),
    helpEntries: 'stroke',
    inheritable: true,
    default: true,
  },
  outlink: {
    label: translate('Link to…'),
    helpEntries: 'outlink',
    placeholder: 'http://...',
    inheritable: true,
  },
}
