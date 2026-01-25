'use client';

import { motion } from 'framer-motion';
import { Waves, Home, Thermometer, TreePine, Users, Flame, Sparkles, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const services = [
	{
		id: 1,
		title: 'Проживание',
		subtitle: 'Уютные домики 20 кв.м с полным комфортом',
		description:
			'Отдельные домики в правом и левом ряду площадью 20 кв.м. Каждый домик оборудован кондиционером, телевизором, двуспальной кроватью и односпальной двухъярусной кроватью. Санузел с полом с подогревом. Современное отопление позволяет комфортно проживать круглый год.',
		icon: <Home className="w-8 h-8" />,
		gradient: 'from-blue-400 to-blue-700',
		image: '/image/guest-house.jpg',
		perks: [
			'Размер комнаты: 20 кв.м',
			'Кондиционер и телевизор',
			'Двуспальная и двухъярусная кровати',
			'Санузел с тёплым полом',
			'Отопление круглый год',
			'Домики в правом и левом ряду',
		],
		perkImages: {
			'Кондиционер и телевизор': '/image/guest-house.jpg',
			'Двуспальная и двухъярусная кровати': '/image/guest-house.jpg',
		},
	},
	{
		id: 2,
		title: 'Питание',
		subtitle: 'Кухня, беседки и комплексные приемы пищи',
		description:
			'Первый этаж с кухней и просторными беседками. Возможность заказать питание на весь период проживания: завтрак, обед и ужин. Меню обновим и добавим позже.',
		icon: <Waves className="w-8 h-8" />,
		gradient: 'from-cyan-400 to-blue-500',
		image: '/image/kitchen.jpg',
		perks: ['Фото кухни (1 этаж)', 'Фото беседки', 'Завтрак, обед, ужин по заказу'],
		perkImages: {
			'Фото кухни (1 этаж)': '/image/kitchen.jpg',
			'Фото беседки': '/image/gazebo.jpg',
		},
	},
	{
		id: 5,
		title: 'Просторный бассейн с подогревом',
		subtitle: 'Две чаши: детская и взрослая',
		description:
			'Бассейн с подогревом, две чаши: взрослая 12×16 м (глубина 1.4 м) и детская (глубина 0.45 м). Комфортные шезлонги и зона отдыха, тёплая вода круглый год.',
		icon: <Users className="w-8 h-8" />,
		gradient: 'from-purple-400 to-pink-500',
		image: '/image/pool.jpg',
		perks: [
			'Фото бассейна',
			'Подогрев круглый год',
			'Две чаши: детская 0.45 м, взрослая 1.4 м',
			'Размер чаши 12×16 м',
			'Шезлонги и пледы',
		],
		perkImages: {
			'Фото бассейна': '/image/pool.jpg',
		},
	},
	{
		id: 6,
		title: 'Бани',
		subtitle: 'Русская баня, прогрев и релакс',
		description: 'Прогрев, веники, релакс-зона. Традиционное парение в окружении горной природы.',
		icon: <Flame className="w-8 h-8" />,
		price: '2000 ₽/час',
		minTime: 'Минимум 2 часа',
		gradient: 'from-red-400 to-orange-500',
		image: '/image/banya.jpg',
		perks: ['Фото бани', 'Парение', 'Травяной чай', 'Комната отдыха'],
		perkImages: {
			'Фото бани': '/image/banya.jpg',
		},
	},
	{
		id: 7,
		title: 'Развлечения',
		subtitle: 'Экскурсии, вода, скорость и горные виды',
		description:
			'Катание на моторной лодке, сплав по реке, прогулки на лошадях, аквапарк на озере Ая, прокат квадроциклов и джип-туры. Подберём программу под ваш темп и интересы.',
		icon: <Waves className="w-8 h-8" />,
		gradient: 'from-sky-400 to-indigo-500',
		image: '/image/activities.jpg',
		perks: [
			'Фото развлечений',
			'Моторная лодка и сплав',
			'Прогулки на лошадях',
			'Аквапарк на озере Ая',
			'Прокат квадроциклов',
			'Джип-туры',
		],
		perkImages: {
			'Фото развлечений': '/image/activities.jpg',
		},
	},
	{
		id: 8,
		title: 'Интересные локации',
		subtitle: 'Озеро Ая, Чёртов палец, комплекс Манжерок',
		description:
			'Лучшие виды рядом: озеро Ая для купания и актива, скала Чёртов палец для панорам и фото, горнолыжный и всесезонный комплекс Манжерок для прогулок и подъёмов.',
		icon: <MapPin className="w-8 h-8" />,
		gradient: 'from-emerald-400 to-cyan-500',
		image: '/image/locations.jpg',
		perks: ['Фото локаций', 'Озеро Ая', 'Чёртов палец', 'Комплекс Манжерок'],
		perkImages: {
			'Фото локаций': '/image/locations.jpg',
		},
	},
	{
		id: 9,
		title: 'Услуги',
		subtitle: 'Комфорт и  чистота',
		description:
			'Летняя кухня с мангалами для самостоятельного приготовления, а также возможность самостоятелной стирки во время проживания.',
		icon: <Home className="w-8 h-8" />,
		gradient: 'from-slate-400 to-slate-600',
		image: '/image/summer-kitchen.jpg',
		perks: ['Фото летней кухни', 'Мангал для гостей', 'Самостоятельная стирка'],
		perkImages: {
			'Фото летней кухни': '/image/summer-kitchen.jpg',
		},
	},
	{
		id: 10,
		title: 'Конференц-зал',
		subtitle: 'Мероприятия и банкеты',
		description:
			'Просторный зал с санузлом и кухонной зоной для самостоятельного приготовления. Подходит для мероприятий и банкетов, оснащён телевизором и звуковым сопровождением.',
		icon: <Users className="w-8 h-8" />,
		gradient: 'from-slate-500 to-indigo-600',
		image: '/image/conference.jpg',
		perks: [
			'Фото конференц-зала',
			'Санузел + кухонная зона',
			'Телевизор и звук',
			'Для мероприятий и банкетов',
		],
		perkImages: {
			'Фото конференц-зала': '/image/conference.jpg',
		},
	},
	{
		id: 11,
		title: 'На нашей территории',
		subtitle: 'Спорт, отдых и детская зона',
		description:
			'Футбольные ворота, волейбольная площадка и детский комплекс прямо на территории. Подходит для активного отдыха детей и взрослых.',
		icon: <TreePine className="w-8 h-8" />,
		gradient: 'from-emerald-400 to-lime-500',
		image: '/image/territory.jpg',
		perks: ['Фото территории', 'Футбольные ворота', 'Волейбольная площадка', 'Детский комплекс'],
		perkImages: {
			'Фото территории': '/image/territory.jpg',
		},
	},
];

export default function ServicesCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [activePerk, setActivePerk] = useState(null);
	const [activeImage, setActiveImage] = useState(null);
	const [touchStartX, setTouchStartX] = useState(null);
	const [touchEndX, setTouchEndX] = useState(null);

	const goTo = (idx) => setCurrentIndex((idx + services.length) % services.length);
	const openPerkImage = (perk, image) => {
		if (!image) return;
		setActivePerk(perk);
		setActiveImage(image);
	};
	const closePerkImage = () => {
		setActivePerk(null);
		setActiveImage(null);
	};

	const onTouchStart = (e) => {
		setTouchEndX(null);
		setTouchStartX(e.targetTouches[0].clientX);
	};
	const onTouchMove = (e) => {
		setTouchEndX(e.targetTouches[0].clientX);
	};
	const onTouchEnd = () => {
		if (touchStartX == null || touchEndX == null) return;
		const distance = touchStartX - touchEndX;
		const isLeftSwipe = distance > 60;
		const isRightSwipe = distance < -60;
		if (isLeftSwipe) goTo(currentIndex + 1);
		if (isRightSwipe) goTo(currentIndex - 1);
	};

	return (
		<section className="relative overflow-hidden py-16 px-4 sm:py-20 bg-gradient-to-br from-stone-450 via-white to-stone-50">
			{/* Ambient glows */}
			<motion.div
				animate={{ y: [0, 24, 0] }}
				transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
				className="pointer-events-none absolute -top-32 -left-16 w-[28rem] h-[28rem] bg-amber-100/25 blur-3xl"
			/>
			<motion.div
				animate={{ y: [0, -20, 0] }}
				transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
				className="pointer-events-none absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-emerald-100/20 blur-3xl"
			/>

			<div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-[0.82fr_1.18fr] gap-12 items-start">
				{/* Left rail */}
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className="space-y-8 hidden lg:block"
				>
					<div className="space-y-3" />

					{/* Контактные кнопки убраны по запросу */}

					{/* Допблок преимуществ убран по запросу */}

					{/* Vertical nav like spa menu */}
					<div className="space-y-3">
						{services.map((service, idx) => (
							<button
								key={service.id}
								onClick={() => goTo(idx)}
								className={`w-full text-left rounded-2xl border transition-all px-4 py-3 backdrop-blur-md ${idx === currentIndex
									? 'bg-white/85 border-stone-200 shadow-xl shadow-stone-300/40'
									: 'bg-white/65 border-stone-200/70 hover:bg-white/80 shadow-lg shadow-stone-200/30'
									}`}
							>
								<div className="flex items-center justify-between gap-3">
									<div className="flex items-center gap-3 text-base font-semibold">
										<span
											className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${idx === currentIndex
												? 'bg-primary text-white shadow-lg shadow-primary/30'
												: 'bg-white/70 text-stone-700'
												}`}
										>
											{service.icon}
										</span>
										<div>
											<div
												className={
													idx === currentIndex
														? 'text-stone-900 font-bold text-xl'
														: 'text-stone-800 font-semibold text-xl'
												}
											>
												{service.title}
											</div>
											<div
												className={
													idx === currentIndex
														? 'text-primary text-base leading-snug'
														: 'text-stone-600 text-base leading-snug'
												}
											>
												{service.subtitle}
											</div>
										</div>
									</div>
									<div
										className={
											idx === currentIndex
												? 'text-primary text-sm font-semibold'
												: 'text-stone-700 text-sm font-semibold hover:text-stone-900'
										}
									>
										Выбрать
									</div>
								</div>
							</button>
						))}
					</div>
				</motion.div>

				{/* Hero slide area */}
				<motion.div
					initial={{ opacity: 0, x: 40 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.05 }}
					className="relative w-full"
				>
					<div
						className="relative overflow-hidden rounded-3xl sm:rounded-4xl bg-white/72 border border-stone-200/70 backdrop-blur-2xl shadow-2xl shadow-stone-300/30 ring-1 ring-black/5 min-h-[900px]"
						onTouchStart={onTouchStart}
						onTouchMove={onTouchMove}
						onTouchEnd={onTouchEnd}
					>
						{services.map((service, idx) => (
							<motion.div
								key={service.id}
								initial={{ opacity: 0, x: 40 }}
								animate={
									idx === currentIndex
										? { opacity: 1, x: 0, position: 'relative' }
										: { opacity: 0, x: -40, position: 'absolute' }
								}
								transition={{ duration: 0.45 }}
								className={idx === currentIndex ? 'block' : 'hidden'}
							>
								<div className="relative h-[280px] sm:h-[340px] md:h-[420px] w-full overflow-hidden">
									<Image
										src={service.image || '/image/hero-bg.jpg'}
										alt={service.title}
										fill
										className="object-cover"
										sizes="(max-width:768px) 100vw, 60vw"
									/>
									<div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-40`} />
									<div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

									<div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/88 backdrop-blur-md text-xs shadow-lg shadow-stone-200/70 border border-stone-200/70">
										{service.icon}
										<span className="font-medium text-gray-700">{service.subtitle}</span>
									</div>
									{service.status && (
										<div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold">
											{service.status}
										</div>
									)}
								</div>

								<div className="p-8 md:p-10 space-y-5">
									<div className="flex flex-wrap items-start justify-between gap-4">
										<div className="space-y-1">
											<h3 className="text-3xl font-semibold text-gray-900">{service.title}</h3>
											<p className="text-primary font-medium">{service.subtitle}</p>
										</div>
										{service.price && (
											<div className="text-right">
												<div className="text-2xl font-bold text-primary">{service.price}</div>
												<p className="text-xs text-amber-500">{service.minTime}</p>
											</div>
										)}
									</div>

									<p className="text-gray-700 leading-relaxed">{service.description}</p>

									<div className="grid sm:grid-cols-2 gap-2">
										{service.perks?.map((perk, perkIdx) => (
											<button
												key={perkIdx}
												type="button"
												onClick={() => openPerkImage(perk, service.perkImages?.[perk])}
												className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-amber-50/80 to-rose-50/80 border border-amber-200/40 text-sm text-gray-700 text-left hover:from-amber-100/80 hover:to-rose-100/80 transition-colors shadow-sm"
											>
												<span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
												{perk}
											</button>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>

					{/* Drawer with perk image */}
					{activeImage && (
						<motion.div
							initial={{ x: 320, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: 320, opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="fixed right-4 bottom-4 z-20 w-80 max-w-[90vw] rounded-2xl overflow-hidden bg-white/85 backdrop-blur-xl border border-amber-200/40 shadow-2xl shadow-amber-200/10"
						>
							<div className="flex items-center justify-between px-4 py-3 border-b border-amber-200/20">
								<p className="text-sm font-medium text-amber-800">{activePerk}</p>
								<button
									onClick={closePerkImage}
									className="text-amber-600 hover:text-amber-800 transition"
									aria-label="Закрыть"
								>
									✕
								</button>
							</div>
							<div className="relative h-52">
								<Image
									src={activeImage}
									alt={activePerk || 'Perk'}
									fill
									className="object-cover"
									sizes="320px"
								/>
							</div>
						</motion.div>
					)}

					{/* Controls */}
					<div className="mt-6 flex items-center justify-between gap-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-stone-200/70 px-4 py-3 shadow-lg shadow-stone-200/40 ring-1 ring-black/5">
						<div className="flex items-center gap-2">
							{services.map((_, idx) => (
								<button
									key={idx}
									onClick={() => goTo(idx)}
									className={`h-2.5 rounded-full transition-all ${idx === currentIndex
										? 'w-10 bg-black shadow-md shadow-black/20'
										: 'w-4 bg-black/25 hover:bg-black/35 shadow-sm shadow-black/10'
										}`}
									aria-label={`Показать ${idx + 1}-й слайд`}
								/>
							))}
						</div>
						<div className="flex items-center gap-2">
							<button
								onClick={() => goTo(currentIndex - 1)}
								className="px-3 py-2 rounded-xl bg-white/85 border border-stone-200 text-stone-900 hover:bg-white transition shadow-md shadow-stone-200/60"
								aria-label="Предыдущий"
							>
								‹
							</button>
							<button
								onClick={() => goTo(currentIndex + 1)}
								className="px-3 py-2 rounded-xl bg-white/85 border border-stone-200 text-stone-900 hover:bg-white transition shadow-md shadow-stone-200/60"
								aria-label="Следующий"
							>
								›
							</button>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
