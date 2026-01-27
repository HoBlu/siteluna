'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Waves, Home, Thermometer, TreePine, Users, Flame, Sparkles, MapPin, Phone, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const services = [
	{
		id: 1,
		title: 'Проживание',
		subtitle: 'Уютные домики 20 кв.м с полным комфортом',
		description:
			'Отдельные домики в правом и левом ряду площадью 20 кв.м. Каждый домик оборудован кондиционером, телевизором, двуспальной кроватью и односпальной двухъярусной кроватью. Санузел с полом с подогревом. Современное отопление позволяет комфортно проживать круглый год.',
		icon: <Home className="w-8 h-8" />,
		gradient: 'white',
		image: '/image/baza3.jpg',
		perks: [
			'Размер комнаты: 20 кв.м',
			'Кондиционер и телевизор',
			'Двуспальная и двухъярусная кровати',
			'Санузел с тёплым полом',
			'Отопление круглый год',
			'Домики в правом и левом ряду',
		],
		perkImages: {
			'Размер комнаты: 20 кв.м': '/image/gost-suite-interior.jpg',
			'Кондиционер и телевизор': '/image/tv.jpg',
			'Двуспальная и двухъярусная кровати': '/image/gost-suite-terrace.jpg',
			'Санузел с тёплым полом': '/image/family-suite-7jpg.jpg',
			'Отопление круглый год': '/image/baza4.jpg',
			'Домики в правом и левом ряду': '/image/doma.jpg',
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
		image: '/image/kitcchen.jpg',
		perks: ['Фото кухни (1 этаж)', 'Фото беседки', 'Завтрак, обед, ужин по заказу'],
		perkImages: {
			'Фото кухни (1 этаж)': '/image/kitcchen.jpg',
			'Фото беседки': '/image/2-etaj.jpg',
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
		image: '/image/poll3.jpg',
		perks: [
			'Подогрев круглый год',
			'Две чаши: детская 0.45 м, взрослая 1.4 м',
			'Размер чаши 12×16 м',
			'Шезлонги и пледы',
		],
		perkImages: {
			'Подогрев круглый год': '/image/poll2.jpg',
			'Две чаши: детская 0.45 м, взрослая 1.4 м': '/image/pooll.jpg',
			'Размер чаши 12×16 м': '/image/poll3.jpg',
			'Шезлонги и пледы': '/image/gallery-6.jpg',
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
		image: '/image/gallery-3.jpg',
		perks: ['Фото бани', 'Парение', 'Комната отдыха'],
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
		image: '/image/ozeroaya.jpg',
		perks: ['Озеро Ая', 'Чёртов палец', 'Комплекс Манжерок'],
		perkImages: {
			'Озеро Ая': '/image/ozeroaya.jpg',
			'Чёртов палец': '/image/palec.jpg',
			'Комплекс Манжерок': '/image/majerok.jpg',
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
			'Фото конференц-зала': '/image/2etaj4.jpg',
			'Санузел + кухонная зона': '/image/2etaj.jpg',
			'Телевизор и звук': '/image/2-etaj.jpg',
			'Для мероприятий и банкетов': '/image/2etaj2.jpg',
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
	const [touchStartX, setTouchStartX] = useState(null);
	const [touchEndX, setTouchEndX] = useState(null);

	// Gallery State
	const [isGalleryOpen, setIsGalleryOpen] = useState(false);
	const [galleryImages, setGalleryImages] = useState([]);
	const [galleryIndex, setGalleryIndex] = useState(0);

	const goTo = (idx) => setCurrentIndex((idx + services.length) % services.length);

	// Gallery Logic
	const openGallery = (service, startImage = null) => {
		// Collect all images: Main image first, then perk images
		// Use Set to remove duplicates
		const images = Array.from(new Set([
			service.image,
			...Object.values(service.perkImages || {})
		])).filter(Boolean);

		setGalleryImages(images);

		// Find start index
		let startIndex = 0;
		if (startImage) {
			const foundIndex = images.indexOf(startImage);
			if (foundIndex !== -1) startIndex = foundIndex;
		}

		setGalleryIndex(startIndex);
		setIsGalleryOpen(true);
	};

	const closeGallery = () => {
		setIsGalleryOpen(false);
		setGalleryImages([]);
		setGalleryIndex(0);
	};

	const nextGalleryImage = (e) => {
		e?.stopPropagation();
		setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
	};

	const prevGalleryImage = (e) => {
		e?.stopPropagation();
		setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
	};

	// Keyboard navigation for gallery
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (!isGalleryOpen) return;
			if (e.key === 'Escape') closeGallery();
			if (e.key === 'ArrowRight') nextGalleryImage();
			if (e.key === 'ArrowLeft') prevGalleryImage();
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [isGalleryOpen, galleryImages.length]);

	// Main Carousel Swipe
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

	// Gallery Swipe
	const onGalleryTouchStart = (e) => {
		setTouchEndX(null);
		setTouchStartX(e.targetTouches[0].clientX);
		// Reset vertical swipe tracking
		e.target.dataset.touchStartY = e.targetTouches[0].clientY;
	};
	const onGalleryTouchMove = (e) => {
		setTouchEndX(e.targetTouches[0].clientX);
	};
	const onGalleryTouchEnd = (e) => {
		const touchStartY = parseFloat(e.target.dataset.touchStartY);
		const touchEndY = e.changedTouches[0].clientY;
		const diffY = touchEndY - touchStartY;

		// Swipe Down to Close (threshold 100px)
		if (diffY > 100) {
			closeGallery();
			return;
		}

		if (touchStartX == null || touchEndX == null) return;
		const distance = touchStartX - touchEndX;
		const isLeftSwipe = distance > 50;
		const isRightSwipe = distance < -50;
		if (isLeftSwipe) nextGalleryImage();
		if (isRightSwipe) prevGalleryImage();
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

			<div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-[0.82fr_1.18fr] gap-6 lg:gap-12 items-start">
				{/* Mobile Navigation */}
				<div className="lg:hidden w-full overflow-x-auto pb-2 -mt-4 flex gap-3 no-scrollbar snap-x px-1">
					{services.map((service, idx) => (
						<button
							key={service.id}
							onClick={() => goTo(idx)}
							className={`flex-none snap-start whitespace-nowrap px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all ${idx === currentIndex
								? 'bg-primary text-white border-primary shadow-lg shadow-primary/25'
								: 'bg-white/70 border-stone-200 text-stone-600 hover:bg-white'
								}`}
						>
							{service.title}
						</button>
					))}
				</div>

				{/* Left rail */}
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className="space-y-8 hidden lg:block"
				>
					<div className="space-y-3" />

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
						className="relative overflow-hidden rounded-3xl sm:rounded-4xl bg-white/72 border border-stone-200/70 backdrop-blur-2xl shadow-2xl shadow-stone-300/30 ring-1 ring-black/5 min-h-[500px] sm:min-h-[900px]"
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
								<div
									className="relative h-[240px] sm:h-[340px] md:h-[420px] w-full overflow-hidden cursor-pointer"
									onClick={() => openGallery(service, service.image)} // Click main image to open gallery
								>
									<Image
										src={service.image || '/image/hero-bg.jpg'}
										alt={service.title}
										fill
										className="object-cover transition-transform duration-700 hover:scale-105" // Added hover scale
										sizes="(max-width:768px) 100vw, 60vw"
									/>
									{/* Removed heavy gradients: service.gradient and white-to-transparent */}
									<div className="absolute inset-0 bg-black/5" /> {/* Minimal tint for text protection or just to define edges */}

									<div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-sm shadow-lg shadow-stone-200/70 border border-stone-200/70">
										{service.icon}
										<span className="font-medium text-gray-700">{service.subtitle}</span>
									</div>
									{service.status && (
										<div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold">
											{service.status}
										</div>
									)}
								</div>

								<div className="p-5 sm:p-8 md:p-10 space-y-5">
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
												onClick={() => openGallery(service, service.perkImages?.[perk])}
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


					{/* Full Screen Gallery - Variant 2: Sheet / Card Style */}
					{isGalleryOpen && galleryImages.length > 0 && typeof document !== 'undefined' && createPortal(
						<div className="fixed inset-0 z-[2147483647] flex items-end md:items-center justify-center pointer-events-none">
							{/* Backdrop */}
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="absolute inset-0 bg-black/80 backdrop-blur-sm pointer-events-auto"
								onClick={closeGallery}
							/>

							{/* Card Container */}
							<motion.div
								initial={{ y: '100%' }}
								animate={{ y: 0 }}
								exit={{ y: '100%' }}
								transition={{ type: "spring", damping: 25, stiffness: 200 }}
								className="relative w-full md:w-[95vw] md:max-w-6xl h-[92vh] md:h-[90vh] bg-stone-900 rounded-t-3xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto border border-white/10"
								onClick={(e) => e.stopPropagation()} // Prevent close on card click
							>
								{/* Drag Handle / Header */}
								<div className="flex-none h-14 bg-stone-900 border-b border-white/5 flex items-center justify-between px-4 z-50">
									<div className="w-8" /> {/* Balance */}

									{/* Mobile Handle Visual */}
									<div className="md:hidden w-12 h-1.5 bg-stone-700 rounded-full mb-1" />

									<span className="hidden md:block text-stone-400 text-sm font-medium">
										{galleryIndex + 1} / {galleryImages.length}
									</span>

									<button
										onClick={closeGallery}
										className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-800 text-stone-300 hover:bg-stone-700 transition"
									>
										<X className="w-5 h-5 stroke-[2.5]" />
									</button>
								</div>

								{/* Main Image Area */}
								<div
									className="flex-1 relative w-full bg-stone-950 overflow-hidden"
									onTouchStart={onGalleryTouchStart}
									onTouchMove={onGalleryTouchMove}
									onTouchEnd={onGalleryTouchEnd}
								>
									{/* Navigation Arrows */}
									{galleryImages.length > 1 && (
										<>
											<button
												onClick={prevGalleryImage}
												className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-800/80 text-white hover:bg-stone-700 transition z-40 hidden md:flex"
											>
												<ChevronLeft className="w-6 h-6" />
											</button>
											<button
												onClick={nextGalleryImage}
												className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-800/80 text-white hover:bg-stone-700 transition z-40 hidden md:flex"
											>
												<ChevronRight className="w-6 h-6" />
											</button>
										</>
									)}

									<motion.div
										key={galleryIndex}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 0.3 }}
										className="w-full h-full relative"
									>
										<Image
											src={galleryImages[galleryIndex]}
											alt="Gallery Image"
											fill
											className="object-contain p-2"
											sizes="100vw"
											priority
										/>
									</motion.div>
								</div>

								{/* Footer / Caption area */}
								<div className="h-16 bg-stone-900 border-t border-white/5 flex items-center justify-center px-4">
									<div className="flex gap-2">
										{galleryImages.map((_, idx) => (
											<button
												key={idx}
												onClick={() => setGalleryIndex(idx)}
												className={`h-1.5 rounded-full transition-all ${idx === galleryIndex ? 'w-6 bg-primary' : 'w-1.5 bg-stone-700'}`}
											/>
										))}
									</div>
								</div>
							</motion.div>
						</div>,
						document.body
					)}

					{/* Controls for Main Carousel */}
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
