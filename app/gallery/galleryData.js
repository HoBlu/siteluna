const image = (id) => ({
  id,
  src: `/image/${id}.jpg`,
  type: 'image',
});

const video = (id, src) => ({
  id,
  src,
  type: 'video',
});

/** Фото 1–48.jpg (единый формат JPEG, до 1920px). Видео: 49.MOV */
export const gallerySections = [
  {
    id: 'territory',
    title: 'Территория',
    description: 'Общие фото базы и окружения',
    images: [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17].map(image),
  },
  {
    id: 'houses',
    title: 'Домики',
    description: 'Домики внутри и снаружи, а также номер',
    subsections: [
      {
        title: 'Снаружи',
        images: [1.3, 1.2, 2.1, 2.2, 2.3, 2.4].map(image),
      },
      {
        title: 'Внутри',
        images: [3, 3.1, 3.2, 3.4, 3.5, 3.6, 3.7].map(image),
      },
      {
        title: 'Номер',
        images: [4, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7].map(image),
      },
    ],
  },
  {
    id: 'gazebo',
    title: 'Беседка',
    description: 'Кухня и зона отдыха',
    images: [5, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9].map(image),
  },
  {
    id: 'bbq',
    title: 'Бания и барбекю',
    description: 'Место для барбекю и отдыха на свежем воздухе',
    images: [6, 6.1].map(image),
  },
  {
    id: 'pool',
    title: 'Бассейн',
    description: 'Бассейн с подогревом',
    images: [7, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8].map(image).concat([video(49, '/image/49.MOV')]),
  },
];

export function flattenGallery(sections = gallerySections) {
  const items = [];

  sections.forEach((section) => {
    if (section.images) {
      section.images.forEach((item) => items.push({ ...item, sectionId: section.id, sectionTitle: section.title }));
    }
    section.subsections?.forEach((sub) => {
      sub.images.forEach((item) =>
        items.push({
          ...item,
          sectionId: section.id,
          sectionTitle: section.title,
          subsectionTitle: sub.title,
        })
      );
    });
  });

  return items;
}

export const galleryImages = flattenGallery();
