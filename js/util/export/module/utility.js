/**
 * @param {URL} redirectLocation
 */

function redirect(redirectLocation) {
  window.location.href = redirectLocation;
}

/**
 * @param {URL} redirectLocation
 */

function openNewPage(redirectLocation) {
  parent.open(redirectLocation);
}

/**
 * 
 * @returns {USER Selected Text}.
 */

function getSelectionText() {
  if (document.getSelection) return document.getSelection().toString();
}

