import { v4 as uuid } from 'uuid';
export const products = [
  {
    _id: uuid(),
    title: 'Himalaya Diabecon Tablet',
    price: '130',
    categoryName: 'medicine',
    imgSrc:
      'https://www.practostatic.com/practopedia-images/v3/res-750/diabecon-tablet-diabetic-care-60-s_6a8ac606-7b1a-45e6-aa9f-0ac58fae5e8e.JPG',
    isBestSeller: true,
    rating: 4,
    inStock: true,
    company: 'Himalaya Drug Company',
    description:
      'The herbal actives in diabecon decrease hepatic glucose production and prevent hyperglycemia, they also have a hepato-protective action on b-cells of the pancreas, and promotes endogenous insulin action. The antidiabetic properties reduce excessive blood sugar and produce a regenerative effect on pancreatic beta cells and decrease sugar cravings, increase the activity of enzymes responsible for glucose absorption and utilization. The principal constituent in the Indian Kino Tree’s extract is epicatechin, has alpha-glucosidase inhibitory property and regularizes metabolic enzymes involved in carbohydrate metabolism.',
    inStock: true,
  },
  {
    _id: uuid(),
    title: 'Himalaya Diabecon DS Tablet',
    price: '200',
    categoryName: 'medicine',
    company: 'Himalaya Drug Company',
    imgSrc:
      'https://www.practostatic.com/practopedia-images/v3/res-750/diabecon-ds-tablet-60-s_57b224a1-a36b-4190-b15e-abc3bf57f918.JPG',
    rating: 3.5,
    inStock: true,
    description:
      'The herbal actives in diabecon decrease hepatic glucose production and prevent hyperglycemia, they also have a hepato-protective action on b-cells of the pancreas, and promotes endogenous insulin action. The antidiabetic properties reduce excessive blood sugar and produce a regenerative effect on pancreatic beta cells and decrease sugar cravings, increase the activity of enzymes responsible for glucose absorption and utilization. The principal constituent in the Indian Kino Tree’s extract is epicatechin, has alpha-glucosidase inhibitory property and regularizes metabolic enzymes involved in carbohydrate metabolism.',
    inStock: true,
  },
  {
    _id: uuid(),
    title: 'Vicks Cough Drops 200',
    price: '20',
    categoryName: 'medicine',
    imgSrc: '',
    rating: 4.5,
    inStock: true,
    companyName: 'Procter & Gamble Hygiene & Healthcare Ltd.',
    description:
      'Vicks Cough Drops is formulated with natural plant-based herbs to provide relief from throat irritation. It contains herbal ingredients that act as a cough suppressant and/or oral anaesthetic and provide fast relief from dry cough and sore throat. It is available in three exciting flavours of Menthol, Ginger, and Honey.',
    inStock: true,
  },
  {
    _id: uuid(),
    title: 'Himalaya Koflet-H Lemon Lozenges',
    price: '30',
    categoryName: 'medicine',
    imgSrc:
      'https://www.practostatic.com/practopedia-images/v3/res-750/koflet-h-lemon-lozenges-6-s_ec0b306d-8f0c-4929-b05c-b391cedf423a.JPG',
    rating: 4.1,
    inStock: true,
    description:
      'The multi ingredient formulation is made with the combination of honey and clove to effectively manage cough and soothe sore throat and provide relief from throat irritation quickly.',
    inStock: false,
  },
  {
    _id: uuid(),
    title: 'HealthVit Cenvitan Adults Multivitamin & Multimineral Tablet 60',
    price: '1000',
    companyName: 'West Coast Pharma Works',
    categoryName: 'medicine',
    imgSrc:
      'https://www.practostatic.com/practopedia-images/v3/res-750/healthvit-cenvitan-adults-tablet-60-s_0f2d7844-d473-4cfb-abc9-d482ba97c902.JPG',
    rating: 3.9,
    inStock: true,
    description:
      'HealthVit Cenvitan Adults Multivitamin & Multimineral Tablet is used in the prevention and treatment of vitamin and mineral deficiencies. It provides 26 essential nutrients to help enhance your immunity and metabolism. It helps to maintain eye, brain, and heart health, improves bone and muscle health and overall body functioning.',
    inStock: false,
  },
  {
    _id: uuid(),
    title: 'Eno Fruit Salt Orange Flavour Sachet 5 g',
    price: '300',
    companyName: 'Glaxosmithkline Pharmaceuticals Ltd.',
    inWishlist: true,
    categoryName: 'medicine',
    imgSrc:
      'https://www.practostatic.com/practopedia-images/v3/res-750/eno-orange-powder-sachet-5gm_a81932ba-69c9-43c2-bfbd-56a1c2603ef1.JPG',
    rating: 3.8,
    inStock: false,
    description:
      'Eno Fruit Salt Orange Flavour Sachet neutralises the excess acid in your stomach and gives a quick relief within six seconds. It also relieves heartburn, nausea, stomach discomfort caused due to acidity. It also provides temporary relief in indigestion, flatulence & bloating.',
    inStock: true,
  },
  {
    _id: uuid(),
    title: 'Threptin Lite Biscuit',
    price: '459',
    categoryName: 'protein',
    imgSrc:
      'https://www.practostatic.com/practopedia-images/v3/res-750/threptin-lite-diskettes-275gm_d359005d-766c-4785-83ef-abe411dc659b.JPG',
    companyName: 'Raptakos',
    rating: 4.5,
    inStock: false,
    description:
      'Threptin Lite Biscuit is a protein supplementation for diabetic and cardiac patients. It is composed of proteins, antioxidants, and essential vitamins. It is also an abundant source of fiber and helps to maintain digestive health.',
    inStock: true,
  },

  {
    _id: uuid(),
    title: 'Aminofit Soflets',
    price: '500',
    categoryName: 'protein',
    imgSrc:
      'https://www.practostatic.com/practopedia-images/v3/res-750/aminofit-soflets-15-s_d0179459-fb11-4bc2-a9ed-9bf131c42737.JPG',
    rating: 2.5,
    inStock: true,
    companyName: 'Sanofi India Ltd.',
    description:
      'Aminofit Soflets is a high protein formula containing 18 amino acids indicated to treat nutritional deficiency. It is a high protein formula that helps in proper growth and development. It ensures complete absorption of vitamins and minerals in the body.',
    inStock: false,
  },
  {
    _id: uuid(),
    title: 'B-Protin Powder Chocolate 200 g',
    price: '1000',
    categoryName: 'protein',
    imgSrc: '',
    rating: 3,
    inStock: false,
    description:
      'B-Protin Powder is a good health drink enriched with a mixture of time released proteins, casein, whey and soy. These give the proper and continuous supply of amino acids for the production of enzymes, maintaining tissues and formation of haemoglobin.',
    inStock: false,
  },
  {
    _id: uuid(),
    title: 'Endura Mass Banana Powder 500 g',
    price: '625',
    categoryName: 'protein',
    imgSrc:
      'https://www.practostatic.com/practopedia-images/v3/res-750/endura-mass-banana-500gm_61ca4a32-ccd7-4150-8235-cb140df1fa58.JPG',
    rating: 4.9,
    inStock: false,
    companyName: 'Medinn Belle Herbal Care Pvt. Ltd.',
    description:
      'Endura Mass is formulated for individuals who desire to gain weight. It is 100% vegetarian with superior quality proteins, vitamins, minerals, and complex carbohydrates.',
    inStock: true,
  },
  {
    _id: uuid(),
    title: 'Himalaya Baby Powder 50 g',
    price: '100',
    categoryName: 'babyCare',
    imgSrc:
      'https://www.practostatic.com/practopedia-images/v3/res-750/himalaya-baby-powder-50gm_4db7a12a-df02-44bb-b0ca-cfe62e1d4a44.JPG',
    rating: 3.5,
    inStock: false,
    companyName: 'Himalaya Drug Company',
    description:
      'Himalaya Baby Powder is good for the babies. It is safe and effective as it has all the natural herbal actives. It helps in managing the body odour caused due to excess sweat. It helps in nourishing, gives protection, moisturizes the skin. It also helps in keeping the baby dry all day and also has astringent and antipersistent properties.',
    inStock: true,
  },
  {
    _id: uuid(),
    title: 'Dexolac Stage 2 Follow-up Formula Refill 500 g',
    price: '500',
    categoryName: 'babyCare',
    imgSrc:
      'https://www.practostatic.com/practopedia-images/v3/res-750/dexolac-2-refill-400gm_5ded76da-d3a5-4c7d-aa57-077a25857cc3.JPG',
    companyName: 'Danone India',
    description:
      'Dexolac Stage 2 is formulated for over all growth and development of the babies. Satge 2 is specially designed for babies above 6 months of age. It is enriched with nutrients and proteins.',
    rating: 2.5,
    inStock: true,
  },
  {
    _id: uuid(),
    title: 'Junior Horlicks 456 Refill 500 g',
    price: '900',
    categoryName: 'babyCare',
    imgSrc: '',
    inStock: true,
    rating: 2,
    description:
      'Junior Horlicks 456 is a nutritional powder which can be given as part of balanced diet to help childs nutritional requirement. Recommended for age of 4 to 6 years',
    companyName: 'Glaxosmithkline Pharmaceuticals Ltd.',
    inStock: false,
  },
  {
    _id: uuid(),
    title: 'Nestle Pre NAN Tin 400 g',
    price: '1000',
    inWishlist: true,
    categoryName: 'babyCare',
    imgSrc: '',
    rating: 4.9,
    inStock: false,
    companyName: 'Nestle India Ltd.',
    description:
      'NestlePre NAN Powder is a nutritional supplement that comes with spray-dried infant formula, for premature or low birth weight infants during and after hospitalization. It helps in infants growth, brain development and keeps them healthy.',
    inStock: true,
  },
];
