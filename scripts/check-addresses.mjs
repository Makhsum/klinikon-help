// Fails when an address of permanent-addresses.txt has no page in the built site (dist/),
// so a renamed or moved article cannot break a link the program already ships.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const addresses = readFileSync('permanent-addresses.txt', 'utf8')
	.split('\n')
	.map((line) => line.trim())
	.filter((line) => line && !line.startsWith('#'));

const missing = addresses.filter((address) => !existsSync(join('dist', address, 'index.html')));

if (missing.length > 0) {
	console.error(`Permanent addresses without a page:\n${missing.map((address) => `  ${address}`).join('\n')}`);
	process.exit(1);
}
console.log(`All ${addresses.length} permanent addresses have a page.`);
