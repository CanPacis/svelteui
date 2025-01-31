import { theme } from '../../../index.js';
import type { SvelteUIColor } from '../../../index';

export type ColorShades = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export function themeColor(color: SvelteUIColor, shade: ColorShades = 0) {
	let _shade = '50';

	if (!isSvelteUIColor(color)) return color;
	if (shade !== Number(0)) _shade = `${shade.toString()}00`;

	return theme.colors[`${color}${_shade}`]?.value;
}

function isSvelteUIColor(color: SvelteUIColor | string): boolean {
	let valid = false;
	switch (color) {
		case 'dark':
			valid = true;
			break;

		case 'gray':
			valid = true;
			break;

		case 'red':
			valid = true;
			break;

		case 'pink':
			valid = true;
			break;

		case 'grape':
			valid = true;
			break;

		case 'violet':
			valid = true;
			break;

		case 'indigo':
			valid = true;
			break;

		case 'blue':
			valid = true;
			break;

		case 'cyan':
			valid = true;
			break;

		case 'teal':
			valid = true;
			break;

		case 'green':
			valid = true;
			break;

		case 'lime':
			valid = true;
			break;

		case 'yellow':
			valid = true;
			break;

		case 'orange':
			valid = true;
			break;

		default:
			valid = false;
			break;
	}

	return valid;
}
