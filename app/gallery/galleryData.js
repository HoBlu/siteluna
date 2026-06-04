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
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(image),
  },
  {
    id: 'houses',
    title: 'Домики',
    description: 'Домики внутри и снаружи, а также номер',
    subsections: [
      {
        title: 'Снаружи',
        images: [19, 20, 21, 22, 23, 24, 25].map(image),
      },
      {
        title: 'Внутри',
        images: [26, 27, 28, 29, 30, 31].map(image),
      },
      {
        title: 'Номер',
        images: [32, 33, 34, 35, 36, 37, 38, 39, 40, 41].map(image),
      },
    ],
  },
  {
    id: 'gazebo',
    title: 'Беседка',
    description: 'Кухня и зона отдыха',
    images: [42, 43].map(image),
  },
  {
    id: 'bbq',
    title: 'Мангальная зона',
    description: 'Место для барбекю и отдыха на свежем воздухе',
    images: [44, 45].map(image),
  },
  {
    id: 'pool',
    title: 'Бассейн',
    description: 'Бассейн с подогревом',
    images: [46, 47, 48].map(image).concat([video(49, '/image/49.MOV')]),
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
