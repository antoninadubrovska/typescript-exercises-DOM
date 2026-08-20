export function createCounter(): HTMLElement {
	const section = document.createElement('main');
	section.className = 'counter';

	const title = document.createElement('h2');
	title.innerText = 'How many times can you click?';

	const info = document.createElement('p');
	info.className = 'info';
	info.innerText = 'You have clicked 0 times.';

	const button = document.createElement('button');
	button.className = 'counter-button';
	button.innerText = 'Click me';

	let clicks = 0;

	button.addEventListener('click', () => {
	  clicks++;

	  info.innerText = `You have clicked ${clicks} ${
		clicks === 1 ? 'time' : 'times'
	  }.`;
	});

	section.append(title, info, button);

	return section;
  }