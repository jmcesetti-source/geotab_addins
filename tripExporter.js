/**
 * Opens a new Chrome tab when the button is clicked.
 *
 * @param {object} event - The event dispatched from the button click.
 * @param {object} api - The GeotabApi object.
 * @param {object} state - The page state object.
 */
geotab.customButtons.tripExporter = (event, api, state) => {
  'use strict';

  event.preventDefault();

  // Example: open Google in a new tab
  const newTabUrl = 'https://www.google.com';

  // Open a new browser tab
  window.open(newTabUrl, '_blank');
};
