// Fails when an address of permanent-addresses.txt or program-links.txt has no page in the built site (dist/),
// so a renamed or moved article cannot break a link the program already ships. program-links.txt is what the
// program's «?» opens; Serkor's `.\build.ps1 help-pr` writes it with every release.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const lists = ['permanent-addresses.txt', 'program-links.txt'];

const addresses = [
	...new Set(
		lists.flatMap((list) =>
			readFileSync(list, 'utf8')
				.split('\n')
				.map((line) => line.trim())
				.filter((line) => line && !line.startsWith('#')),
		),
	),
];

const missing = addresses.filter((address) => !existsSync(join('dist', address, 'index.html')));

if (missing.length > 0) {
	console.error(`Addresses the program or other sites link to without a page:\n${missing.map((address) => `  ${address}`).join('\n')}`);
	process.exit(1);
}
console.log(`All ${addresses.length} linked addresses have a page.`);
