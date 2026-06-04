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
		image: '/image/Проживание/проживание1.jpg',
		perks: [
			'Размер комнаты: 20 кв.м',
			'Кондиционер и телевизор',
			'Двуспальная и двухъярусная кровати',
			'Санузел с тёплым полом',
			'Отопление круглый год',
			'Домики в правом и левом ряду',
		],
		perkImages: {
			'Размер комнаты: 20 кв.м': '/image/Проживание/проживание1.jpg',
			'Кондиционер и телевизор': '/image/Проживание/проживание2.jpg',
			'Двуспальная и двухъярусная кровати': '/image/Проживание/проживание3.jpg',
			'Санузел с тёплым полом': '/image/Проживание/проживание4.jpg',
			'Отопление круглый год': '/image/Проживание/проживание5.jpg',
			'Домики в правом и левом ряду': '/image/Проживание/проживание6.jpg',
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
		image: '/image/питание/питание1.jpg',
		perks: ['Фото кухни (1 этаж)', 'Фото беседки', 'Завтрак, обед, ужин по заказу'],
		perkImages: {
			'Фото кухни (1 этаж)': '/image/питание/питание1.jpg',
			'Фото беседки': '/image/питание/Питание2.jpg',
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
		image: '/image/Бассейн/бассейн1.jpg',
		perks: [
			'Подогрев круглый год',
			'Две чаши: детская 0.45 м, взрослая 1.4 м',
			'Размер чаши 12×16 м',
			'Шезлонги и пледы',
		],
		perkImages: {
			'Подогрев круглый год': '/image/Бассейн/бассейн2.jpg',
			'Две чаши: детская 0.45 м, взрослая 1.4 м': '/image/Бассейн/бассейн3.jpg',
			'Размер чаши 12×16 м': '/image/Бассейн/бассейн4.jpg',
			'Шезлонги и пледы': '/image/Бассейн/бассейн5.jpg',
		},
	},
	{
		id: 6,
		title: 'Бани',
		subtitle: 'Русская баня, прогрев и релакс',
		description: 'Прогрев, веники, релакс-зона. Традиционное парение в окружении горной природы.',
		icon: <Flame className="w-8 h-8" />,
		gradient: 'from-red-400 to-orange-500',
		image: '/image/Бани/Баня1.jpg',
		perks: ['Фото бани', 'Парение', 'Комната отдыха'],
		perkImages: {
			'Фото бани': '/image/Бани/Баня2.jpg',
			'Парение': '/image/Бани/Баня3.jpg',
			'Комната отдыха': '/image/Бани/Баня4.jpg',
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
		image: '/image/Развлечения/Развлечения1.jpg',
		perks: [
			'Моторная лодка и сплав',
			'Прогулки на лошадях',
			'Аквапарк на озере Ая',
			'Прокат квадроциклов',
			'Джип-туры',
		],
		perkImages: {
			'Моторная лодка и сплав': '/image/Развлечения/Развлечения2.jpg',
			'Прогулки на лошадях': '/image/Развлечения/Развлечения3.jpg',
			'Аквапарк на озере Ая': '/image/Развлечения/Развлечения4.jpg',
			'Прокат квадроциклов': '/image/Развлечения/Развлечения5.jpg',
			'Джип-туры': '/image/Развлечения/Развлечения6.jpg',
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
		image: '/image/Локации/Локации1.jpg',
		perks: ['Озеро Ая', 'Чёртов палец', 'Комплекс Манжерок'],
		perkImages: {
			'Озеро Ая': '/image/Локации/Локации1.jpg',
			'Чёртов палец': '/image/Локации/Локации2.jpg',
			'Комплекс Манжерок': '/image/Локации/Локации3.jpg',
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
		image: '/image/Услуги/Услуги1.jpg',
		perks: ['Фото летней кухни', 'Мангал для гостей'],
		perkImages: {
			'Фото летней кухни': '/image/Услуги/Услуги2.jpg',
			'Мангал для гостей': '/image/Услуги/Услуги3.jpg',

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
		image: '/image/Конференц/Конференц1.jpg',
		perks: [
			'Фото конференц-зала',
			'Санузел + кухонная зона',
			'Телевизор и звук',
			'Для мероприятий и банкетов',
		],
		perkImages: {
			'Фото конференц-зала': '/image/Конференц/Конференц2.jpg',
			'Санузел + кухонная зона': '/image/Конференц/Конференц3.jpg',
			'Телевизор и звук': '/image/Конференц/Конференц4.jpg',
			'Для мероприятий и банкетов': '/image/Конференц/Конференц5.jpg',
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
		image: '/image/Территория/Территория1.jpg',
		perks: ['Фото территории', 'Футбольные ворота', 'Волейбольная площадка', 'Детский комплекс'],
		perkImages: {
			'Фото территории': '/image/Территория/Территория2.jpg',

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
		<section className="relative overflow-hidden section-padding bg-white">
			<div className="container-width relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-12 md:mb-16"
				>
					<p className="text-forest text-sm font-medium tracking-[0.2em] uppercase mb-4">
						Услуги
					</p>
					<h2 className="heading-section mb-5">Услуги и сервис</h2>
					<p className="text-body max-w-2xl mx-auto">
						Всё для комфортного отдыха на базе — от проживания до развлечений и мероприятий
					</p>
				</motion.div>

			<div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-6 lg:gap-12 items-start">
				{/* Mobile Navigation */}
				<div className="lg:hidden w-full overflow-x-auto pb-2 -mt-4 flex gap-3 no-scrollbar snap-x px-1">
					{services.map((service, idx) => (
						<button
							key={service.id}
							onClick={() => goTo(idx)}
							className={`flex-none snap-start whitespace-nowrap px-4 py-2.5 rounded-full border text-sm font-medium transition-all ${idx === currentIndex
								? 'bg-forest text-white border-forest shadow-lg shadow-forest/20'
								: 'bg-white/70 border-black/10 text-foreground/60 hover:bg-white'
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
								className={`w-full text-left rounded-3xl border transition-all px-4 py-3 backdrop-blur-md ${idx === currentIndex
									? 'glass-card border-forest/15 shadow-lg'
									: 'bg-white/50 border-black/5 hover:bg-white/70'
									}`}
							>
								<div className="flex items-center justify-between gap-3">
									<div className="flex items-center gap-3 text-base font-semibold">
										<span
											className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl ${idx === currentIndex
												? 'bg-forest text-white shadow-lg shadow-forest/20'
												: 'bg-forest/8 text-forest'
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
														? 'text-forest text-base leading-snug'
														: 'text-foreground/50 text-base leading-snug'
												}
											>
												{service.subtitle}
											</div>
										</div>
									</div>
									<div
										className={
											idx === currentIndex
												? 'text-forest text-sm font-medium'
												: 'text-foreground/40 text-sm font-medium hover:text-foreground/70'
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
						className="relative overflow-hidden rounded-4xl glass-card min-h-[500px] sm:min-h-[900px]"
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
											<h3 className="text-3xl font-semibold text-foreground tracking-tight">{service.title}</h3>
											<p className="text-forest font-medium">{service.subtitle}</p>
										</div>
										{service.price && (
											<div className="text-right">
												<div className="text-2xl font-bold text-primary">{service.price}</div>
												<p className="text-xs text-amber-500">{service.minTime}</p>
											</div>
										)}
									</div>

									<p className="text-foreground/65 leading-relaxed">{service.description}</p>

									<div className="grid sm:grid-cols-2 gap-2">
										{service.perks?.map((perk, perkIdx) => (
											<button
												key={perkIdx}
												type="button"
												onClick={() => openGallery(service, service.perkImages?.[perk])}
												className="flex flex-col items-start gap-1.5 px-3.5 py-2.5 rounded-2xl bg-forest/5 border border-forest/10 text-sm text-foreground/80 text-left hover:bg-forest/8 transition-colors"
											>
												<span className="inline-flex rounded-full bg-white/90 border border-forest/10 px-2.5 py-0.5 text-[10px] italic uppercase tracking-wide text-forest/70">
													нажми для просмотра
												</span>
												<span className="flex items-center gap-2">
													<span className="h-1.5 w-1.5 rounded-full bg-forest" />
													{perk}
												</span>
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
					<div className="mt-6 flex items-center justify-between gap-4 rounded-3xl glass px-4 py-3">
						<div className="flex items-center gap-2">
							{services.map((_, idx) => (
								<button
									key={idx}
									onClick={() => goTo(idx)}
									className={`h-2 rounded-full transition-all ${idx === currentIndex
										? 'w-10 bg-forest'
										: 'w-2 bg-forest/20 hover:bg-forest/35'
										}`}
									aria-label={`Показать ${idx + 1}-й слайд`}
								/>
							))}
						</div>
						<div className="flex items-center gap-2">
							<button
								onClick={() => goTo(currentIndex - 1)}
								className="px-3 py-2 rounded-full bg-white border border-black/10 text-foreground hover:bg-forest/5 transition"
								aria-label="Предыдущий"
							>
								‹
							</button>
							<button
								onClick={() => goTo(currentIndex + 1)}
								className="px-3 py-2 rounded-full bg-white border border-black/10 text-foreground hover:bg-forest/5 transition"
								aria-label="Следующий"
							>
								›
							</button>
						</div>
					</div>
				</motion.div>
			</div>
			</div>
		</section>
	);
}
