'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, Play, Expand } from 'lucide-react';
import Layout from '../components/Layout';
import { gallerySections, galleryImages } from './galleryData';

function GalleryTile({ image, index, onOpen }) {
  const alt = image.subsectionTitle
    ? `${image.sectionTitle} — ${image.subsectionTitle}`
    : image.sectionTitle;

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.03, 0.3) }}
      onClick={onOpen}
      className="group relative block w-full mb-3 md:mb-4 break-inside-avoid overflow-hidden rounded-2xl md:rounded-3xl bg-gray-100 ring-1 ring-black/5 text-left"
    >
      {image.type === 'video' ? (
        <video
          src={image.src}
          muted
          playsInline
          preload="metadata"
          className="block w-full h-auto"
        />
      ) : (
        <img
          src={image.src}
          alt={alt}
          loading="lazy"
          className="block w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <span className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
          {image.type === 'video' ? (
            <Play className="w-5 h-5 text-white fill-white ml-0.5" />
          ) : (
            <Expand className="w-5 h-5 text-white" />
          )}
        </span>
      </div>

      {image.type === 'video' && (
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-forest/90 text-white text-[10px] font-semibold uppercase tracking-wider">
          Видео
        </span>
      )}
    </motion.button>
  );
}

function SectionGrid({ images, startIndex, onOpen }) {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
      {images.map((image, index) => (
        <GalleryTile
          key={`${image.src}-${index}`}
          image={image}
          index={index}
          onOpen={() => onOpen(startIndex + index)}
        />
      ))}
    </div>
  );
}

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeSection, setActiveSection] = useState('all');
  const [mounted, setMounted] = useState(false);

  const isOpen = selectedIndex !== null;
  const selectedImage = isOpen ? galleryImages[selectedIndex] : null;

  const sectionBlocks = useMemo(() => {
    let offset = 0;
    return gallerySections.map((section) => {
      if (section.subsections) {
        const blocks = section.subsections.map((sub) => {
          const block = { section, subsection: sub, startIndex: offset, images: sub.images };
          offset += sub.images.length;
          return block;
        });
        return { section, blocks, hasSubsections: true };
      }
      const block = { section, startIndex: offset, images: section.images };
      offset += section.images.length;
      return { section, blocks: [block], hasSubsections: false };
    });
  }, []);

  useEffect(() => setMounted(true), []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    if (sectionId === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.getElementById(`gallery-${sectionId}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const closeLightbox = () => setSelectedIndex(null);

  const nextImage = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prevImage = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, nextImage, prevImage]);

  return (
    <Layout>
      <div className="min-h-screen bg-cream pt-28 pb-24">
        <div className="container-width">
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mb-10"
          >
            <p className="text-forest text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Галерея
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight mb-5">
              Фотогалерея
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Посмотрите, как выглядит наша база отдыха и убедитесь в красоте горной природы Алтая
            </p>
          </motion.header>

          <nav className="sticky top-[4.5rem] z-30 -mx-4 px-4 py-3 mb-10 bg-cream/90 backdrop-blur-xl border-y border-black/5">
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              <button
                type="button"
                onClick={() => scrollToSection('all')}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSection === 'all'
                    ? 'bg-forest text-white shadow-md shadow-forest/20'
                    : 'bg-white text-gray-600 ring-1 ring-black/5 hover:bg-forest/5'
                }`}
              >
                Все разделы
              </button>
              {gallerySections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeSection === section.id
                      ? 'bg-forest text-white shadow-md shadow-forest/20'
                      : 'bg-white text-gray-600 ring-1 ring-black/5 hover:bg-forest/5'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </nav>

          <div className="space-y-16 md:space-y-24">
            {sectionBlocks.map(({ section, blocks, hasSubsections }) => (
              <section
                key={section.id}
                id={`gallery-${section.id}`}
                className="scroll-mt-36"
              >
                <div className="mb-8 md:mb-10">
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-2">
                    {section.title}
                  </h2>
                  <p className="text-gray-600">{section.description}</p>
                </div>

                {hasSubsections ? (
                  <div className="space-y-12">
                    {blocks.map(({ subsection, startIndex, images }) => (
                      <div key={subsection.title}>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-forest mb-4">
                          {subsection.title}
                        </h3>
                        <SectionGrid
                          images={images}
                          startIndex={startIndex}
                          onOpen={setSelectedIndex}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <SectionGrid
                    images={blocks[0].images}
                    startIndex={blocks[0].startIndex}
                    onOpen={setSelectedIndex}
                  />
                )}
              </section>
            ))}
          </div>
        </div>
      </div>

      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && selectedImage && (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-end md:items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
                onClick={closeLightbox}
              />

              <motion.div
                initial={{ y: '100%', opacity: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '100%', opacity: 0 }}
                transition={{ type: 'spring', damping: 28, stiffness: 320 }}
                className="relative w-full md:w-[min(94vw,1100px)] md:mx-4 bg-[#0f0f0f] md:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between px-4 md:px-6 h-14 border-b border-white/10 gap-4">
                  <div className="min-w-0">
                    <p className="text-white text-sm font-medium truncate">
                      {selectedImage.sectionTitle}
                      {selectedImage.subsectionTitle ? ` · ${selectedImage.subsectionTitle}` : ''}
                    </p>
                    <p className="text-white/40 text-xs tabular-nums">
                      {selectedIndex + 1} / {galleryImages.length}
                    </p>
                  </div>
                  <button
                    onClick={closeLightbox}
                    className="shrink-0 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    aria-label="Закрыть"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="relative w-full min-h-[50vh] max-h-[85vh] bg-black flex items-center justify-center p-3 md:p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedIndex}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center justify-center w-full h-full"
                    >
                      {selectedImage.type === 'video' ? (
                        <video
                          src={selectedImage.src}
                          controls
                          autoPlay
                          playsInline
                          preload="metadata"
                          className="w-full max-h-[min(78vh,760px)] object-contain rounded-lg"
                        />
                      ) : (
                        <img
                          src={selectedImage.src}
                          alt={selectedImage.sectionTitle}
                          className="w-auto h-auto max-w-full max-h-[min(78vh,760px)] object-contain rounded-lg"
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {galleryImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-black/70 transition-colors flex items-center justify-center"
                        aria-label="Предыдущее"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-black/70 transition-colors flex items-center justify-center"
                        aria-label="Следующее"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </Layout>
  );
}
