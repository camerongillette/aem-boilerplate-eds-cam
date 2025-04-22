import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the camFile
 * @param {Element} block The camFile block element
 */
export default async function decorate(block) {
  // load camFile as fragment
  const camfileMeta = getMetadata('camfile');
  const camfilePath = camfileMeta ? new URL(camfileMeta, window.location).pathname : '/camfile';
  const fragment = await loadFragment(camfilePath);

  // decorate camFile DOM
  block.textContent = '';
  const camFile = document.createElement('div');
  while (fragment.firstElementChild) camFile.append(fragment.firstElementChild);

  block.append(camFile);
}
