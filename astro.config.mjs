// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// The help of Klinikon on https://help.klinikon.online, Russian only for now.
// The address of every article is permanent: the program links to it, so a page
// is never renamed or moved (see permanent-addresses.txt and npm run check).
export default defineConfig({
	site: 'https://help.klinikon.online',
	integrations: [
		starlight({
			title: 'Справка Klinikon',
			description: 'Как работать в Klinikon: установка, регистратура, врач, администратор клиники.',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Русский', lang: 'ru' },
			},
			logo: { src: './src/assets/klinikon-mark.svg', alt: 'Klinikon' },
			favicon: '/favicon.svg',
			customCss: ['./src/styles/klinikon.css'],
			lastUpdated: false,
			social: [{ icon: 'external', label: 'klinikon.online', href: 'https://klinikon.online' }],
			sidebar: [
				{
					label: 'Начало работы',
					items: [
						{ label: 'Установка программы', slug: 'start/install' },
						{ label: 'Первая клиника', slug: 'start/first-clinic' },
						{ label: 'Подключение компьютеров', slug: 'start/connect-computers' },
					],
				},
				{
					label: 'Регистратура',
					items: [
						{ label: 'Пациенты', slug: 'reception/patients' },
						{ label: 'Расписание и записи', slug: 'reception/schedule' },
						{ label: 'Оплата и долги', slug: 'reception/payments' },
					],
				},
				{
					label: 'Врач',
					items: [
						{ label: 'Мой день', slug: 'doctor/day' },
						{ label: 'Карточка пациента', slug: 'doctor/patient-card' },
						{ label: 'Зубная формула и лечение', slug: 'doctor/dental-chart' },
					],
				},
				{
					label: 'Администратор клиники',
					items: [
						{ label: 'Пробный период и лицензия', slug: 'admin/license' },
						{ label: 'Сотрудники', slug: 'admin/staff' },
						{ label: 'Услуги и цены', slug: 'admin/services' },
						{ label: 'Аналитика и расходы', slug: 'admin/analytics' },
						{ label: 'Обновление программы', slug: 'admin/update' },
						{ label: 'Резервные копии', slug: 'admin/backups' },
					],
				},
				{ label: 'Вопросы и ответы', slug: 'faq' },
				{ label: 'Что нового', slug: 'whats-new' },
			],
		}),
	],
});
