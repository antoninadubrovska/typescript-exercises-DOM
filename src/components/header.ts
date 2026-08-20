export function createHeader(): HTMLElement {
	const header = document.createElement('header');
	header.className = 'site-header';

	const title = document.createElement('h1');
	title.innerText = 'DOM-manipulation with TypeScript';

	const subtitle = document.createElement('p');
	subtitle.innerText = 'small Vanilla TypeScript projects';

	header.append(title, subtitle);

	return header;
  }