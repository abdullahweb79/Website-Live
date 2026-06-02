// ═══════════════════════════════════════════════════════
//  DUFFLECRAFTCO — Multi-Page Site JS
//  Pages: index.html · products.html · contact.html
//  Navigation uses real href links (no SPA router).
// ═══════════════════════════════════════════════════════

// ─── FORMSPREE CONFIG ────────────────────────────────
// Replace with your own Formspree endpoint.
// Sign up free at https://formspree.io → create a form → copy your endpoint.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

// ─── PRODUCTS DATA ───────────────────────────────────
const PRODUCTS = [
{
  id: 1,
  name: 'Executive Leather Duffle',
  description: 'Premium full-grain leather duffle bag with spacious interior and reinforced handles. Ideal for weekend getaways and business trips.',
  category: 'duffle-bags',
  featured: false,
  images: [
    { src: 'img/Duffle bags/P(1.1)front.jpeg', label: 'Front' },
    { src: 'img/Duffle bags/P(1.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Duffle bags/P(1.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Duffle bags/P(1.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 2,
  name: 'Executive Leather Duffle',
  description: 'Premium full-grain leather duffle bag with spacious interior and reinforced handles. Ideal for weekend getaways and business trips.',
  category: 'duffle-bags',
  featured: false,
  images: [
    { src: 'img/Duffle bags/P(2.1)front.jpeg', label: 'Front' },
    { src: 'img/Duffle bags/P(2.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Duffle bags/P(2.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Duffle bags/P(2.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 3,
  name: 'Executive Leather Duffle',
  description: 'Premium full-grain leather duffle bag with spacious interior and reinforced handles. Ideal for weekend getaways and business trips.',
  category: 'duffle-bags',
  featured: false,
  images: [
    { src: 'img/Duffle bags/P(3.1)front.jpeg', label: 'Front' },
    { src: 'img/Duffle bags/P(3.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Duffle bags/P(3.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Duffle bags/P(3.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 4,
  name: 'Executive Leather Duffle',
  description: 'Premium full-grain leather duffle bag with spacious interior and reinforced handles. Ideal for weekend getaways and business trips.',
  category: 'duffle-bags',
  featured: false,
  images: [
    { src: 'img/Duffle bags/P(4.1)front.jpeg', label: 'Front' },
    { src: 'img/Duffle bags/P(4.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Duffle bags/P(4.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Duffle bags/P(4.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 5,
  name: 'Executive Leather Duffle',
  description: 'Premium full-grain leather duffle bag with spacious interior and reinforced handles. Ideal for weekend getaways and business trips.',
  category: 'duffle-bags',
  featured: false,
  images: [
    { src: 'img/Duffle bags/P(5.1)front.jpeg', label: 'Front' },
    { src: 'img/Duffle bags/P(5.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Duffle bags/P(5.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Duffle bags/P(5.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 6,
  name: 'Executive Leather Duffle',
  description: 'Premium full-grain leather duffle bag with spacious interior and reinforced handles. Ideal for weekend getaways and business trips.',
  category: 'duffle-bags',
  featured: false,
  images: [
    { src: 'img/Duffle bags/P(6.1)front.jpeg', label: 'Front' },
    { src: 'img/Duffle bags/P(6.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Duffle bags/P(6.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Duffle bags/P(6.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 7,
  name: 'Executive Leather Duffle',
  description: 'Premium full-grain leather duffle bag with spacious interior and reinforced handles. Ideal for weekend getaways and business trips.',
  category: 'duffle-bags',
  featured: false,
  images: [
    { src: 'img/Duffle bags/P(7.1)front.jpeg', label: 'Front' },
    { src: 'img/Duffle bags/P(7.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Duffle bags/P(7.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Duffle bags/P(7.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 8,
  name: 'Executive Leather Duffle',
  description: 'Premium full-grain leather duffle bag with spacious interior and reinforced handles. Ideal for weekend getaways and business trips.',
  category: 'duffle-bags',
  featured: false,
  images: [
    { src: 'img/Duffle bags/P(8.1)front.jpeg', label: 'Front' },
    { src: 'img/Duffle bags/P(8.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Duffle bags/P(8.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Duffle bags/P(8.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 9,
  name: 'Executive Leather Duffle',
  description: 'Premium full-grain leather duffle bag with spacious interior and reinforced handles. Ideal for weekend getaways and business trips.',
  category: 'duffle-bags',
  featured: false,
  images: [
    { src: 'img/Duffle bags/P(9.1)front.jpeg', label: 'Front' },
    { src: 'img/Duffle bags/P(9.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Duffle bags/P(9.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Duffle bags/P(9.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 10,
  name: 'Executive Leather Duffle',
  description: 'Premium full-grain leather duffle bag with spacious interior and reinforced handles. Ideal for weekend getaways and business trips.',
  category: 'duffle-bags',
  featured: false,
  images: [
    { src: 'img/Duffle bags/P(10.1)front.jpeg', label: 'Front' },
    { src: 'img/Duffle bags/P(10.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Duffle bags/P(10.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Duffle bags/P(10.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 11,
  name: 'Cross Body Bag',
  description: 'Robust canvas and leather duffle bag with multiple compartments for organized travel. Durable YKK zippers and brass hardware.',
  category: 'crossbody-bags',
  featured: false,
  images: [
    { src: 'img/Cross Body Bags/P(1.1)front.jpeg', label: 'Front' },
    { src: 'img/Cross Body Bags/P(1.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Cross Body Bags/P(1.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Cross Body Bags/P(1.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 12,
  name: 'Cross Body Bag',
  description: 'Robust canvas and leather duffle bag with multiple compartments for organized travel. Durable YKK zippers and brass hardware.',
  category: 'bags',
  featured: false,
  images: [
    { src: 'img/Cross Body Bags/P(2.1)front.jpeg', label: 'Front' },
    { src: 'img/Cross Body Bags/P(2.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Cross Body Bags/P(2.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Cross Body Bags/P(2.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 13,
  name: 'Cross Body Bag',
  description: 'Robust canvas and leather duffle bag with multiple compartments for organized travel. Durable YKK zippers and brass hardware.',
  category: 'bags',
  featured: false,
  images: [
    { src: 'img/Cross Body Bags/P(3.1)front.jpeg', label: 'Front' },
    { src: 'img/Cross Body Bags/P(3.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Cross Body Bags/P(3.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Cross Body Bags/P(3.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 14,
  name: 'Cross Body Bag',
  description: 'Robust canvas and leather duffle bag with multiple compartments for organized travel. Durable YKK zippers and brass hardware.',
  category: 'crossbody-bags',
  featured: false,
  images: [
    { src: 'img/Cross Body Bags/P(4.1)front.jpeg', label: 'Front' },
    { src: 'img/Cross Body Bags/P(4.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Cross Body Bags/P(4.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Cross Body Bags/P(4.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 15,
  name: 'Cross Body Bag',
  description: 'Robust canvas and leather duffle bag with multiple compartments for organized travel. Durable YKK zippers and brass hardware.',
  category: 'crossbody-bags',
  featured: false,
  images: [
    { src: 'img/Cross Body Bags/P(5.1)front.jpeg', label: 'Front' },
    { src: 'img/Cross Body Bags/P(5.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Cross Body Bags/P(5.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Cross Body Bags/P(5.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 16,
  name: 'Cross Body Bag',
  description: 'Robust canvas and leather duffle bag with multiple compartments for organized travel. Durable YKK zippers and brass hardware.',
  category: 'crossbody-bags',
  featured: false,
  images: [
    { src: 'img/Cross Body Bags/P(6.1)front.jpeg', label: 'Front' },
    { src: 'img/Cross Body Bags/P(6.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Cross Body Bags/P(6.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Cross Body Bags/P(6.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 17,
  name: 'Cross Body Bag',
  description: 'Robust canvas and leather duffle bag with multiple compartments for organized travel. Durable YKK zippers and brass hardware.',
  category: 'crossbody-bags',
  featured: false,
  images: [
    { src: 'img/Cross Body Bags/P(7.1)front.jpeg', label: 'Front' },
    { src: 'img/Cross Body Bags/P(7.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Cross Body Bags/P(7.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Cross Body Bags/P(7.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 18,
  name: 'Cross Body Bag',
  description: 'Robust canvas and leather duffle bag with multiple compartments for organized travel. Durable YKK zippers and brass hardware.',
  category: 'crossbody-bags',
  featured: false,
  images: [
    { src: 'img/Cross Body Bags/P(8.1)front.jpeg', label: 'Front' },
    { src: 'img/Cross Body Bags/P(8.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Cross Body Bags/P(8.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Cross Body Bags/P(8.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 19,
  name: 'Cross Body Bag',
  description: 'Robust canvas and leather duffle bag with multiple compartments for organized travel. Durable YKK zippers and brass hardware.',
  category: 'crossbody-bags',
  featured: false,
  images: [
    { src: 'img/Cross Body Bags/P(9.1)front.jpeg', label: 'Front' },
    { src: 'img/Cross Body Bags/P(9.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Cross Body Bags/P(9.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Cross Body Bags/P(9.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 20,
  name: 'Cross Body Bag',
  description: 'Robust canvas and leather duffle bag with multiple compartments for organized travel. Durable YKK zippers and brass hardware.',
  category: 'crossbody-bags',
  featured: false,
  images: [
    { src: 'img/Cross Body Bags/P(10.1)front.jpeg', label: 'Front' },
    { src: 'img/Cross Body Bags/P(10.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Cross Body Bags/P(10.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Cross Body Bags/P(10.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 21,
  name: 'Cross Body Bag',
  description: 'Robust canvas and leather duffle bag with multiple compartments for organized travel. Durable YKK zippers and brass hardware.',
  category: 'crossbody-bags',
  featured: false,
  images: [
    { src: 'img/Cross Body Bags/P(11.1)front.jpeg', label: 'Front' },
    { src: 'img/Cross Body Bags/P(11.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Cross Body Bags/P(11.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Cross Body Bags/P(11.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 22,
  name: 'Cross Body Bag',
  description: 'Robust canvas and leather duffle bag with multiple compartments for organized travel. Durable YKK zippers and brass hardware.',
  category: 'crossbody-bags',
  featured: false,
  images: [
    { src: 'img/Cross Body Bags/P(12.1)front.jpeg.png', label: 'Front' },
    { src: 'img/Cross Body Bags/P(12.2)back.jpeg.png',  label: 'Back'  },
    { src: 'img/Cross Body Bags/P(12.3)side.jpeg.png',  label: 'Side'  },
    { src: 'img/Cross Body Bags/P(12.4)inner.jpeg.png', label: 'Inner' },
  ]
},
  {
  id: 23,
  name: 'Business Bag',
  description: 'Robust canvas and leather duffle bag with multiple compartments for organized travel. Durable YKK zippers and brass hardware.',
  category: 'business-bags',
  featured: false,
  images: [
    { src: 'img/Business bags/P(1.1).jpeg', label: 'Front' },
    { src: 'img/Business bags/P(1.2).jpeg',  label: 'Back'  },
    { src: 'img/Business bags/P(1.3).jpeg',  label: 'Side'  },
    { src: 'img/Business bags/P(1.4).jpeg', label: 'Inner' },
  ]
},
{
  id: 24,
  name: 'Business Bag',
  description: 'Robust canvas and leather duffle bag with multiple compartments for organized travel. Durable YKK zippers and brass hardware.',
  category: 'business-bags',
  featured: false,
  images: [
    { src: 'img/Business bags/P(2.1)top.jpeg', label: 'Top' },
    { src: 'img/Business bags/P(2.2)inner.jpeg',  label: 'Inner'  },
    { src: 'img/Business bags/P(2.3)Front.jpeg',  label: 'Front'  },
    { src: 'img/Business bags/P(2.4)back.jpeg', label: 'Back' },
  ]
},
{
  id: 25,
  name: 'Business Bag',
  description: 'Robust canvas and leather duffle bag with multiple compartments for organized travel. Durable YKK zippers and brass hardware.',
  category: 'business-bags',
  featured: false,
  images: [
    { src: 'img/Business bags/P(3.1)Front.jpeg', label: 'Front' },
    { src: 'img/Business bags/P(3.2)top.jpeg',  label: 'Top'  },
    { src: 'img/Business bags/P(3.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Business bags/P(3.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 26,
  name: 'Business Bag',
  description: 'Robust canvas and leather duffle bag with multiple compartments for organized travel. Durable YKK zippers and brass hardware.',
  category: 'business-bags',
  featured: false,
  images: [
    { src: 'img/Business bags/P(4.1)front.jpeg', label: 'Front' },
    { src: 'img/Business bags/P(4.1)top.jpeg',  label: 'Top'  },
    { src: 'img/Business bags/P(4.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Business bags/P(4.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 27,
  name: 'Business Bag',
  description: 'Robust canvas and leather duffle bag with multiple compartments for organized travel. Durable YKK zippers and brass hardware.',
  category: 'business-bags',
  featured: false,
  images: [
    { src: 'img/Business bags/P(5.1)front.jpeg', label: 'Front' },
    { src: 'img/Business bags/P(5.2)top.jpeg',  label: 'Top'  },
    { src: 'img/Business bags/P(5.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Business bags/P(5.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 28,
  name: 'Business Bag',
  description: 'Robust canvas and leather duffle bag with multiple compartments for organized travel. Durable YKK zippers and brass hardware.',
  category: 'business-bags',
  featured: false,
  images: [
    { src: 'img/Business bags/P(6.1)top.jpeg', label: 'Top' },
    { src: 'img/Business bags/P(6.2)side.jpeg',  label: 'Side'  },
    { src: 'img/Business bags/P(6.3)back.jpeg',  label: 'Back '  },
    { src: 'img/Business bags/P(6.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 29,
  name: 'Business Bag',
  description: 'Robust canvas and leather duffle bag with multiple compartments for organized travel. Durable YKK zippers and brass hardware.',
  category: 'business-bags',
  featured: false,
  images: [
    { src: 'img/Business bags/P(7.1)top.jpeg', label: 'Top' },
    { src: 'img/Business bags/P(7.2)side.jpeg',  label: 'Side'  },
    { src: 'img/Business bags/P(7.3)front.jpeg',  label: 'Front'  },
    { src: 'img/Business bags/P(7.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 30,
  name: 'Business Bag',
  description: 'Robust canvas and leather duffle bag with multiple compartments for organized travel. Durable YKK zippers and brass hardware.',
  category: 'business-bags',
  featured: false,
  images: [
    { src: 'img/Business bags/P(8.1)front.jpeg', label: 'Front' },
    { src: 'img/Business bags/P(8.2)side.jpeg',  label: 'Side'  },
    { src: 'img/Business bags/P(8.3)top.jpeg',  label: 'Top'  },
    { src: 'img/Business bags/P(8.4)inner.jpeg', label: 'Inner' },
  ]
},

  {
    id: 32,
    name: 'Leather Belt',
    description: 'Full-grain leather belt with brushed silver buckle. Available in brown and black. Sizes 28–46 available.',
    category: 'accessories',
    price: '$55',
    featured: false,
    image: 'img/Belts/WhatsApp Image 2026-05-06 at 17.49.23.jpeg'
  },
  {
    id: 33,
    name: 'Leather Belt',
    description: 'Full-grain leather belt with brushed silver buckle. Available in brown and black. Sizes 28–46 available.',
    category: 'accessories',
    price: '$55',
    featured: false,
    image: 'img/Belts/WhatsApp Image 2026-05-06 at 17.49.24.jpeg'
  },
  {
    id: 34,
    name: 'Leather Belt',
    description: 'Full-grain leather belt with brushed silver buckle. Available in brown and black. Sizes 28–46 available.',
    category: 'accessories',
    price: '$55',
    featured: false,
    image: 'img/Belts/WhatsApp Image 2026-05-06 at 17.49.25 (1).jpeg'
  },
  {
    id: 35,
    name: 'Leather Belt',
    description: 'Full-grain leather belt with brushed silver buckle. Available in brown and black. Sizes 28–46 available.',
    category: 'accessories',
    price: '$55',
    featured: false,
    image: 'img/Belts/WhatsApp Image 2026-05-06 at 17.49.25 (2).jpeg'
  },
  {
    id: 36,
    name: 'Leather Belt',
    description: 'Full-grain leather belt with brushed silver buckle. Available in brown and black. Sizes 28–46 available.',
    category: 'accessories',
    price: '$55',
    featured: false,
    image: 'img/Belts/WhatsApp Image 2026-05-06 at 17.49.25.jpeg'
  },
  {
    id: 37,
    name: 'Leather Belt',
    description: 'Full-grain leather belt with brushed silver buckle. Available in brown and black. Sizes 28–46 available.',
    category: 'accessories',
    price: '$55',
    featured: true,
    image: 'img/Belts/WhatsApp Image 2026-05-06 at 17.49.26.jpeg'
  },
  {
    id: 38,
    name: 'Leather Belt',
    description: 'Full-grain leather belt with brushed silver buckle. Available in brown and black. Sizes 28–46 available.',
    category: 'accessories',
    price: '$55',
    featured: false,
    image: 'img/Belts/WhatsApp Image 2026-05-06 at 17.49.27.jpeg'
  },
  {
    id: 39,
    name: 'Leather Belt',
    description: 'Full-grain leather belt with brushed silver buckle. Available in brown and black. Sizes 28–46 available.',
    category: 'accessories',
    price: '$55',
    featured: false,
    image: 'img/Belts/WhatsApp Image 2026-05-06 at 17.49.29.jpeg'
  },
  {
    id: 40,
    name: 'Leather Belt',
    description: 'Full-grain leather belt with brushed silver buckle. Available in brown and black. Sizes 28–46 available.',
    category: 'accessories',
    price: '$55',
    featured: true,
    image: 'img/Belts/WhatsApp Image 2026-05-06 at 17.49.23.jpeg'
  },
 {
  id: 41,
  name: 'Motorbike Gloves',
  description: 'Premium leather motorbike gloves with reinforced knuckles and padded palms. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: true,
  image: 'img/Gloves/Motorbike gloves/Glove(1).jpeg'
},
{
  id: 42,
  name: 'Motorbike Gloves',
  description: 'Premium leather motorbike gloves with reinforced knuckles and padded palms. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: true,
  image: 'img/Gloves/Motorbike gloves/Glove(2).jpeg'
},
{
  id: 43,
  name: 'Motorbike Gloves',
  description: 'Premium leather motorbike gloves with reinforced knuckles and padded palms. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Gloves/Motorbike gloves/Glove(3).jpeg'
},
{
  id: 44,
  name: 'Motorbike Gloves',
  description: 'Premium leather motorbike gloves with reinforced knuckles and padded palms. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Gloves/Motorbike gloves/Glove(4).jpeg'
},
{
  id: 45,
  name: 'Motorbike Gloves',
  description: 'Premium leather motorbike gloves with reinforced knuckles and padded palms. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Gloves/Motorbike gloves/Glove(5).jpeg'
},
{
  id: 46,
  name: 'Motorbike Gloves',
  description: 'Premium leather motorbike gloves with reinforced knuckles and padded palms. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: true,
  image: 'img/Gloves/Motorbike gloves/Glove(6).jpeg'
},
{
  id: 47,
  name: 'Motorbike Gloves',
  description: 'Premium leather motorbike gloves with reinforced knuckles and padded palms. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: true,
  image: 'img/Gloves/Motorbike gloves/Glove(7).jpeg'
},
{
  id: 48,
  name: 'Safety Gloves',
  description: 'Premium leather safety gloves with reinforced knuckles and padded palms. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Gloves/Safety gloves/sAFETYg(1).jpeg'
},
{
  id: 49,
  name: 'Safety Gloves',
  description: 'Premium leather safety gloves with reinforced knuckles and padded palms. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Gloves/Safety gloves/sAFETYg(2).jpeg'
},
{
  id: 50,
  name: 'Safety Gloves',
  description: 'Premium leather safety gloves with reinforced knuckles and padded palms. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Gloves/Safety gloves/sAFETYg(3).jpeg'
},
{
  id: 51,
  name: 'Safety Gloves',
  description: 'Premium leather safety gloves with reinforced knuckles and padded palms. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Gloves/Safety gloves/sAFETYg(4).jpeg'
},
{
  id: 52,
  name: 'Safety Gloves',
  description: 'Premium leather safety gloves with reinforced knuckles and padded palms. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Gloves/Safety gloves/sAFETYg(5).jpeg'
},
{
  id: 53,
  name: 'Safety Gloves',
  description: 'Premium leather safety gloves with reinforced knuckles and padded palms. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Gloves/Safety gloves/sAFETYg(6).jpeg'
},
{
  id: 54,
  name: 'Leather Wallets',
  description: 'Premium leather wallets with multiple card slots and a secure snap closure. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(1).jpeg'
},
{
  id: 55,
  name: 'Leather Wallets',
  description: 'Premium leather wallets with multiple card slots and a secure snap closure. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(2).jpeg'
},
{
  id: 56,
  name: 'Leather Wallets',
  description: 'Premium leather wallets with multiple card slots and a secure snap closure. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(3).jpeg'
},
{
  id: 57,
  name: 'Leather Wallets',
  description: 'Premium leather wallets with multiple card slots and a secure snap closure. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(4).jpeg'
},
{
  id: 58,
  name: 'Leather Wallets',
  description: 'Premium leather wallets with multiple card slots and a secure snap closure. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(5).jpeg'
},
{
  id: 59,
  name: 'Leather Wallets',
  description: 'Premium leather wallets with multiple card slots and a secure snap closure. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(6).jpeg'
},
{
  id: 60,
  name: 'Leather Wallets',
  description: 'Premium leather wallets with multiple card slots and a secure snap closure. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(7).jpeg'
},
{
  id: 61,
  name: 'Leather Wallets',
  description: 'Premium leather wallets with multiple card slots and a secure snap closure. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(8).jpeg'
},
{
  id: 62,
  name: 'Leather Wallets',
  description: 'Premium leather wallets with multiple card slots and a secure snap closure. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(9).jpeg'
},
{
  id: 63,
  name: 'Leather Wallets',
  description: 'Premium leather wallets with multiple card slots and a secure snap closure. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(10).jpeg'
},
{
  id: 64,
  name: 'Leather Wallets',
  description: 'Premium leather wallets with multiple card slots and a secure snap closure. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(11).jpeg'
},
{
  id: 65,
  name: 'Leather Wallets',
  description: 'Premium leather wallets with multiple card slots and a secure snap closure. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(12).jpeg'
},
{
  id: 66,
  name: 'Leather Wallets',
  description: 'Premium leather wallets with multiple card slots and a secure snap closure. Available in black and brown. Sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(13).jpeg'
},
{
  id: 67,
  name: 'Baseball Bag',
  description: 'Baseball bag with multiple compartments for bats, gloves, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Baseball bags/P(1.1)front.jpeg', label: 'Front' },
    { src: 'img/Baseball bags/P(1.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Baseball bags/P(1.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Baseball bags/P(1.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 68,
  name: 'Baseball Bag',
  description: 'Baseball bag with multiple compartments for bats, gloves, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Baseball bags/P(2.1)front.jpeg', label: 'Front' },
    { src: 'img/Baseball bags/P(2.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Baseball bags/P(2.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Baseball bags/P(2.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 69,
  name: 'Baseball Bag',
  description: 'Baseball bag with multiple compartments for bats, gloves, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Baseball bags/P(3.1)front.jpeg', label: 'Front' },
    { src: 'img/Baseball bags/P(3.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Baseball bags/P(3.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Baseball bags/P(3.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 70,
  name: 'Baseball Bag',
  description: 'Baseball bag with multiple compartments for bats, gloves, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Baseball bags/P(4.1)front.jpeg', label: 'Front' },
    { src: 'img/Baseball bags/P(4.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Baseball bags/P(4.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Baseball bags/P(4.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 71,
  name: 'Baseball Bag',
  description: 'Baseball bag with multiple compartments for bats, gloves, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Baseball bags/P(5.1)front.jpeg', label: 'Front' },
    { src: 'img/Baseball bags/P(5.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Baseball bags/P(5.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Baseball bags/P(5.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 72,
  name: 'Baseball Bag',
  description: 'Baseball bag with multiple compartments for bats, gloves, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Baseball bags/P(6.1)front.jpeg', label: 'Front' },
    { src: 'img/Baseball bags/P(6.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Baseball bags/P(6.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Baseball bags/P(6.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 73,
  name: 'Baseball Bag',
  description: 'Baseball bag with multiple compartments for bats, gloves, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Baseball bags/P(7.1)front.jpeg', label: 'Front' },
    { src: 'img/Baseball bags/P(7.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Baseball bags/P(7.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Baseball bags/P(7.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 74,
  name: 'Baseball Bag',
  description: 'Baseball bag with multiple compartments for bats, gloves, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Baseball bags/P(8.1)front.jpeg', label: 'Front' },
    { src: 'img/Baseball bags/P(8.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Baseball bags/P(8.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Baseball bags/P(8.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 75,
  name: 'Basketball Bag',
  description: 'Basketball bag with multiple compartments for bats, gloves, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Basketball bags/P(1.1)front.jpeg', label: 'Front' },
    { src: 'img/Basketball bags/P(1.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Basketball bags/P(1.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Basketball bags/P(1.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 76,
  name: 'Basketball Bag',
  description: 'Basketball bag with multiple compartments for bats, gloves, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Basketball bags/P(2.1)front.jpeg', label: 'Front' },
    { src: 'img/Basketball bags/P(2.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Basketball bags/P(2.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Basketball bags/P(2.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 77,
  name: 'Basketball Bag',
  description: 'Basketball bag with multiple compartments for bats, gloves, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Basketball bags/P(3.1)front.jpeg', label: 'Front' },
    { src: 'img/Basketball bags/P(3.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Basketball bags/P(3.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Basketball bags/P(3.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 78,
  name: 'Basketball Bag',
  description: 'Basketball bag with multiple compartments for bats, gloves, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Basketball bags/P(4.1)front.jpeg', label: 'Front' },
    { src: 'img/Basketball bags/P(4.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Basketball bags/P(4.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Basketball bags/P(4.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 79,
  name: 'Basketball Bag',
  description: 'Basketball bag with multiple compartments for bats, gloves, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Basketball bags/P(5.1)front.jpeg', label: 'Front' },
    { src: 'img/Basketball bags/P(5.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Basketball bags/P(5.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Basketball bags/P(5.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 80,
  name: 'Basketball Bag',
  description: 'Basketball bag with multiple compartments for bats, gloves, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Basketball bags/P(6.1)front.jpeg', label: 'Front' },
    { src: 'img/Basketball bags/P(6.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Basketball bags/P(6.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Basketball bags/P(6.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 81,
  name: 'Football Bag',
  description: 'Football bag with multiple compartments for bats, gloves, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Football bags/P(1.1)front.jpeg', label: 'Front' },
    { src: 'img/Football bags/P(1.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Football bags/P(1.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Football bags/P(1.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 82,
  name: 'Football Bag',
  description: 'Football bag with multiple compartments for bats, gloves, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Football bags/P(2.1)front.jpeg', label: 'Front' },
    { src: 'img/Football bags/P(2.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Football bags/P(2.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Football bags/P(2.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 83,
  name: 'Football Bag',
  description: 'Football bag with multiple compartments for bats, gloves, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Football bags/P(3.1)front.jpeg', label: 'Front' },
    { src: 'img/Football bags/P(3.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Football bags/P(3.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Football bags/P(3.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 84,
  name: 'Football Bag',
  description: 'Football bag with multiple compartments for bats, gloves, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Football bags/P(4.1)front.jpeg', label: 'Front' },
    { src: 'img/Football bags/P(4.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Football bags/P(4.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Football bags/P(4.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 85,
  name: 'Football Bag',
  description: 'Football bag with multiple compartments for bats, gloves, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Football bags/P(5.1)front.jpeg', label: 'Front' },
    { src: 'img/Football bags/P(5.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Football bags/P(5.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Football bags/P(5.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 86,
  name: 'Football Bag',
  description: 'Football bag with multiple compartments for bats, gloves, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Football bags/P(6.1)front.jpeg', label: 'Front' },
    { src: 'img/Football bags/P(6.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Football bags/P(6.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Football bags/P(6.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 87,
  name: 'Football Bag',
  description: 'Football bag with multiple compartments for bats, gloves, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Football bags/P(7.1)front.jpeg', label: 'Front' },
    { src: 'img/Football bags/P(7.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Football bags/P(7.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Football bags/P(7.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 88,
  name: 'Football Bag',
  description: 'Football bag with multiple compartments for bats, gloves, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Football bags/P(8.1)front.jpeg', label: 'Front' },
    { src: 'img/Football bags/P(8.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Football bags/P(8.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Football bags/P(8.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 89,
  name: 'Football Bag',
  description: 'Football bag with multiple compartments for bats, gloves, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Football bags/P(9.1)front.jpeg', label: 'Front' },
    { src: 'img/Football bags/P(9.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Football bags/P(9.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Football bags/P(9.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 90,
  name: 'Football Bag',
  description: 'Football bag with multiple compartments for bats, gloves, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Football bags/P(10.1)front.jpeg', label: 'Front' },
    { src: 'img/Football bags/P(10.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Football bags/P(10.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Football bags/P(10.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 91,
  name: 'Tennis Bag',
  description: 'Tennis bag with multiple compartments for racquets, balls, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Tenis bags/P(1.1)front.jpeg', label: 'Front' },
    { src: 'img/Tenis bags/P(1.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tenis bags/P(1.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tenis bags/P(1.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 92,
  name: 'Tennis Bag',
  description: 'Tennis bag with multiple compartments for racquets, balls, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Tenis bags/P(2.1)front.jpeg', label: 'Front' },
    { src: 'img/Tenis bags/P(2.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tenis bags/P(2.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tenis bags/P(2.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 93,
  name: 'Tennis Bag',
  description: 'Tennis bag with multiple compartments for racquets, balls, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Tenis bags/P(3.1)front.jpeg', label: 'Front' },
    { src: 'img/Tenis bags/P(3.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tenis bags/P(3.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tenis bags/P(3.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 94,
  name: 'Tennis Bag',
  description: 'Tennis bag with multiple compartments for racquets, balls, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Tenis bags/P(4.1)front.jpeg', label: 'Front' },
    { src: 'img/Tenis bags/P(4.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tenis bags/P(4.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tenis bags/P(4.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 95,
  name: 'Tennis Bag',
  description: 'Tennis bag with multiple compartments for racquets, balls, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Tenis bags/P(5.1)front.jpeg', label: 'Front' },
    { src: 'img/Tenis bags/P(5.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tenis bags/P(5.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tenis bags/P(5.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 96,
  name: 'Tennis Bag',
  description: 'Tennis bag with multiple compartments for racquets, balls, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Tenis bags/P(6.1)front.jpeg', label: 'Front' },
    { src: 'img/Tenis bags/P(6.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tenis bags/P(6.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tenis bags/P(6.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 97,
  name: 'Tennis Bag',
  description: 'Tennis bag with multiple compartments for racquets, balls, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Tenis bags/P(7.1)front.jpeg', label: 'Front' },
    { src: 'img/Tenis bags/P(7.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tenis bags/P(7.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tenis bags/P(7.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 98,
  name: 'Tennis Bag',
  description: 'Tennis bag with multiple compartments for racquets, balls, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Tenis bags/P(8.1)front.jpeg', label: 'Front' },
    { src: 'img/Tenis bags/P(8.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tenis bags/P(8.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tenis bags/P(8.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 99,
  name: 'Tennis Bag',
  description: 'Tennis bag with multiple compartments for racquets, balls, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Tenis bags/P(9.1)front.jpeg', label: 'Front' },
    { src: 'img/Tenis bags/P(9.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tenis bags/P(9.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tenis bags/P(9.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 100,
  name: 'Tennis Bag',
  description: 'Tennis bag with multiple compartments for racquets, balls, and gear. Durable nylon construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Tenis bags/P(10.1)front.jpeg', label: 'Front' },
    { src: 'img/Tenis bags/P(10.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tenis bags/P(10.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tenis bags/P(10.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 101,
  name: 'Leather Duffle Bag',
  description: 'Leather duffle bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'leather-duffle-bags',
  featured: false,
  images: [
    { src: 'img/Ld bags/P(1.1)front.jpeg', label: 'Front' },
    { src: 'img/Ld bags/P(1.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Ld bags/P(1.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Ld bags/P(1.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 102,
  name: 'Leather Duffle Bag',
  description: 'Leather duffle bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'leather-duffle-bags',
  featured: false,
  images: [
    { src: 'img/Ld bags/P(2.2)front.jpeg', label: 'Front' },
    { src: 'img/Ld bags/P(2.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Ld bags/P(2.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Ld bags/P(2.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 103,
  name: 'Leather Duffle Bag',
  description: 'Leather duffle bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'leather-duffle-bags',
  featured: false,
  images: [
    { src: 'img/Ld bags/P(3.1)front.jpeg', label: 'Front' },
    { src: 'img/Ld bags/P(3.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Ld bags/P(3.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Ld bags/P(3.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 104,
  name: 'Leather Duffle Bag',
  description: 'Leather duffle bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'leather-duffle-bags',
  featured: false,
  images: [
    { src: 'img/Ld bags/P(4.1)front.jpeg', call: 'Front' },
    { src: 'img/Ld bags/P(4.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Ld bags/P(4.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Ld bags/P(4.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 105,
  name: 'Leather Duffle Bag',
  description: 'Leather duffle bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'leather-duffle-bags',
  featured: false,
  images: [
    { src: 'img/Ld bags/P(5.1)front.jpeg', label: 'Front' },
    { src: 'img/Ld bags/P(5.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Ld bags/P(5.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Ld bags/P(5.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 106,
  name: 'Leather Duffle Bag',
  description: 'Leather duffle bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'leather-duffle-bags',
  featured: false,
  images: [
    { src: 'img/Ld bags/P(6.1)front.jpeg', label: 'Front' },
    { src: 'img/Ld bags/P(6.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Ld bags/P(6.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Ld bags/P(6.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 107,
  name: 'Leather Duffle Bag',
  description: 'Leather duffle bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'leather-duffle-bags',
  featured: false,
  images: [
    { src: 'img/Ld bags/P(7.1)front.jpeg', label: 'Front' },
    { src: 'img/Ld bags/P(7.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Ld bags/P(7.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Ld bags/P(7.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 108,
  name: 'Leather Duffle Bag',
  description: 'Leather duffle bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'leather-duffle-bags',
  featured: false,
  images: [
    { src: 'img/Ld bags/P(8.1)front.jpeg', label: 'Front' },
    { src: 'img/Ld bags/P(8.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Ld bags/P(8.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Ld bags/P(8.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 109,
  name: 'Leather Duffle Bag',
  description: 'Leather duffle bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'leather-duffle-bags',
  featured: false,
  images: [
    { src: 'img/Ld bags/P(9.1)front.jpeg', label: 'Front' },
    { src: 'img/Ld bags/P(9.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Ld bags/P(9.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Ld bags/P(9.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 110,
  name: 'Leather Duffle Bag',
  description: 'Leather duffle bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'leather-duffle-bags',
  featured: false,
  images: [
    { src: 'img/Ld bags/P(10.1)front.jpeg', label: 'Front' },
    { src: 'img/Ld bags/P(10.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Ld bags/P(10.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Ld bags/P(10.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 111,
  name: 'Tactical Bag',
  description: 'Tactical bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'tactical-bags',
  featured: false,
  images: [
    { src: 'img/Tac bags/P(1.1)front.jpeg', label: 'Front' },
    { src: 'img/Tac bags/P(1.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tac bags/P(1.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tac bags/P(1.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 112,
  name: 'Tactical Bag',
  description: 'Tactical bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'tactical-bags',
  featured: false,
  images: [
    { src: 'img/Tac bags/P(2.1)front.jpeg', label: 'Front' },
    { src: 'img/Tac bags/P(2.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tac bags/P(2.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tac bags/P(2.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 113,
  name: 'Tactical Bag',
  description: 'Tactical bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'tactical-bags',
  featured: false,
  images: [
    { src: 'img/Tac bags/P(3.1)front.jpeg', label: 'Front' },
    { src: 'img/Tac bags/P(3.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tac bags/P(3.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tac bags/P(3.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 114,
  name: 'Tactical Bag',
  description: 'Tactical bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'tactical-bags',
  featured: false,
  images: [
    { src: 'img/Tac bags/P(4.1)front.jpeg', label: 'Front' },
    { src: 'img/Tac bags/P(4.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tac bags/P(4.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tac bags/P(4.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 115,
  name: 'Tactical Bag',
  description: 'Tactical bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'tactical-bags',
  featured: false,
  images: [
    { src: 'img/Tac bags/P(5.1)front.jpeg', label: 'Front' },
    { src: 'img/Tac bags/P(5.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tac bags/P(5.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tac bags/P(5.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 116,
  name: 'Tactical Bag',
  description: 'Tactical bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'tactical-bags',
  featured: false,
  images: [
    { src: 'img/Tac bags/P(6.1)front.jpeg', label: 'Front' },
    { src: 'img/Tac bags/P(6.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tac bags/P(6.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tac bags/P(6.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 117,
  name: 'Tactical Bag',
  description: 'Tactical bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'tactical-bags',
  featured: false,
  images: [
    { src: 'img/Tac bags/P(7.1)front.jpeg', label: 'Front' },
    { src: 'img/Tac bags/P(7.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tac bags/P(7.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tac bags/P(7.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 118,
  name: 'Tactical Bag',
  description: 'Tactical bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'tactical-bags',
  featured: false,
  images: [
    { src: 'img/Tac bags/P(8.1)front.jpeg', label: 'Front' },
    { src: 'img/Tac bags/P(8.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tac bags/P(8.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tac bags/P(8.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 119,
  name: 'Tactical Bag',
  description: 'Tactical bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'tactical-bags',
  featured: false,
  images: [
    { src: 'img/Tac bags/P(9.1)front.jpeg', label: 'Front' },
    { src: 'img/Tac bags/P(9.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tac bags/P(9.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tac bags/P(9.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 120,
  name: 'Tactical Bag',
  description: 'Tactical bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'tactical-bags',
  featured: false,
  images: [
    { src: 'img/Tac bags/P(10.1)front.jpeg', label: 'Front' },
    { src: 'img/Tac bags/P(10.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tac bags/P(10.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tac bags/P(10.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 121,
  name: 'Bike Saddle Bag',
  description: 'Bike saddle bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'bike-saddle-bags',
  featured: false,
  images: [
    { src: 'img/Bike saddle bags/P(1.1)front.jpeg', label: 'Front' },
    { src: 'img/Bike saddle bags/P(1.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Bike saddle bags/P(1.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Bike saddle bags/P(1.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 122,
  name: 'Bike Saddle Bag',
  description: 'Bike saddle bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'bike-saddle-bags',
  featured: false,
  images: [
    { src: 'img/Bike saddle bags/P(2.1)front.jpeg', label: 'Front' },
    { src: 'img/Bike saddle bags/P(2.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Bike saddle bags/P(2.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Bike saddle bags/P(2.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 123,
  name: 'Bike Saddle Bag',
  description: 'Bike saddle bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'bike-saddle-bags',
  featured: false,
  images: [
    { src: 'img/Bike saddle bags/P(3.1)front.jpeg', label: 'Front' },
    { src: 'img/Bike saddle bags/P(3.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Bike saddle bags/P(3.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Bike saddle bags/P(3.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 124,
  name: 'Bike Saddle Bag',
  description: 'Bike saddle bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'bike-saddle-bags',
  featured: false,
  images: [
    { src: 'img/Bike saddle bags/P(4.1)front.jpeg', label: 'Front' },
    { src: 'img/Bike saddle bags/P(4.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Bike saddle bags/P(4.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Bike saddle bags/P(4.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 125,
  name: 'Bike Saddle Bag',
  description: 'Bike saddle bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'bike-saddle-bags',
  featured: false,
  images: [
    { src: 'img/Bike saddle bags/P(5.1)front.jpeg', label: 'Front' },
    { src: 'img/Bike saddle bags/P(5.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Bike saddle bags/P(5.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Bike saddle bags/P(5.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 126,
  name: 'Bike Saddle Bag',
  description: 'Bike saddle bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'bike-saddle-bags',
  featured: false,
  images: [
    { src: 'img/Bike saddle bags/P(6.1)front.jpeg', label: 'Front' },
    { src: 'img/Bike saddle bags/P(6.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Bike saddle bags/P(6.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Bike saddle bags/P(6.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 127,
  name: 'Bike Saddle Bag',
  description: 'Bike saddle bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'bike-saddle-bags',
  featured: false,
  images: [
    { src: 'img/Bike saddle bags/P(7.1)front.jpeg', label: 'Front' },
    { src: 'img/Bike saddle bags/P(7.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Bike saddle bags/P(7.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Bike saddle bags/P(7.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 128,
  name: 'Bike Saddle Bag',
  description: 'Bike saddle bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'bike-saddle-bags',
  featured: false,
  images: [
    { src: 'img/Bike saddle bags/P(8.1)front.jpeg', label: 'Front' },
    { src: 'img/Bike saddle bags/P(8.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Bike saddle bags/P(8.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Bike saddle bags/P(8.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 129,
  name: 'Bike Saddle Bag',
  description: 'Bike saddle bag with multiple compartments for gear. Premium leather construction with reinforced stitching. Adjustable shoulder strap.',
  category: 'bike-saddle-bags',
  featured: false,
  images: [
    { src: 'img/Bike saddle bags/P(9.1)front.jpeg', label: 'Front' },
    { src: 'img/Bike saddle bags/P(9.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Bike saddle bags/P(9.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Bike saddle bags/P(9.4)inner.jpeg', label: 'Inner' },
  ]
},
];

const CATEGORIES = [
  { slug: 'leather-duffle-bags', label: 'Leather Duffle Bags', icon: 'shopping-bag' },
  { slug: 'duffle-bags', label: 'Duffle Bags', icon: 'briefcase' },
  { slug: 'business-bags', label: 'Business Bags', icon: 'briefcase' },
  { slug: 'crossbody-bags', label: 'Crossbody Bags', icon: 'shopping-bag' },
  { slug: 'accessories', label: 'Accessories', icon: 'wallet' },
  { slug: 'sports-bags', label: 'Sports Bags', icon: 'zap' },
  { slug: 'bike-saddle-bags', label: 'MotorBike Saddle Bags', icon: 'bike' },
  { slug: 'tactical-bags', label: 'Tactical Bags', icon: 'shield' }
];


// ─── NAVIGATION HELPER ───────────────────────────────
// Used by buttons/cards to navigate to another page with optional params.
const app = {
  navigate(page, params = {}) {
    if (page === 'home') {
      location.href = 'index.html';
    } else if (page === 'products') {
      const qs = params.category ? `?category=${encodeURIComponent(params.category)}` : '';
      location.href = 'products.html' + qs;
    } else if (page === 'contact') {
      const qs = params.product ? `?product=${encodeURIComponent(params.product)}` : '';
      location.href = 'contact.html' + qs;
    }
  }
};

// ─── URL PARAMS HELPER ────────────────────────────────
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name) || '';
}

// ─── NAV ─────────────────────────────────────────────
function initNav() {
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }
  // Scroll shadow
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (navbar) navbar.style.boxShadow = window.scrollY > 20 ? '0 2px 20px rgba(44,36,32,0.1)' : '';
  }, { passive: true });
}

// ─── HOME PAGE ────────────────────────────────────────
function initHomePage() {
  // Categories grid
const catGrid = document.getElementById('home-cat-grid');

if (catGrid) {
  catGrid.innerHTML = CATEGORIES.map(cat => `
    <div class="cat-card" data-reveal
      onclick="app.navigate('products', { category: '${cat.slug}' })">

      <div class="cat-icon" data-lucide="${cat.icon}"></div>

      <h3>${cat.label}</h3>
      <span class="cat-arrow">→</span>

    </div>
  `).join('');

  lucide.createIcons();
}

  // Featured products
  const featGrid = document.getElementById('home-featured-grid');
  if (featGrid) {
    const featured = PRODUCTS.filter(p => p.featured);
    featGrid.innerHTML = featured.map(p => `
      <div class="product-card" data-reveal>
        <div class="product-img">
          <img src="${p.image}" alt="${p.name}" onerror="this.src='img/placeholder.svg'" loading="lazy">
          <div class="product-overlay">
            <button class="btn btn-primary btn-sm" onclick="app.navigate('contact',{product:'${encodeURIComponent(p.name)}'})">Order Now</button>
          </div>
        </div>
        <div class="product-info">
          <span class="product-cat">${p.category.replace(/-/g,' ')}</span>
          <h3>${p.name}</h3>
          <p>${p.description.substring(0, 80)}...</p>
          <div class="product-footer">
            <span class="product-price">${p.price || 'Contact for Price'}</span>
            <button class="btn-link" onclick="app.navigate('contact',{product:'${encodeURIComponent(p.name)}'})">Inquire →</button>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// ─── PRODUCTS PAGE ────────────────────────────────────

function productCardHTML(p) {
  // Build the full images list — supports both {src,label} objects and plain strings
  const allImages = (p.images && p.images.length)
    ? p.images
    : [{ src: p.image, label: 'Front' }];
 
  // Encode data for inline handlers
  const imagesJSON  = encodeURIComponent(JSON.stringify(allImages));
  const colorsJSON  = encodeURIComponent(JSON.stringify(p.colors || []));
  const safeName    = p.name.replace(/'/g, "\\'");
  const encodedName = encodeURIComponent(p.name);
 
  // Color swatches (only show if colors exist)
  const colorSwatches = (p.colors && p.colors.length)
    ? `<div class="color-swatches">
         ${p.colors.map((c, i) =>
           `<span class="color-swatch${i === 0 ? ' active' : ''}"
                  title="${c.label}"
                  data-index="${i}"
                  style="background:${c.hex}"></span>`
         ).join('')}
         <span class="color-label"></span>
       </div>`
    : '';
 
  return `
    <div class="product-card" data-reveal
         data-images="${imagesJSON}"
         data-colors="${colorsJSON}">
 
      <!-- Image Gallery -->
      <div class="product-img-wrap">
        <div class="product-img" onclick="openLightbox(this.querySelector('img').src,'${safeName}')">
          <img class="product-main-img"
               src="${allImages[0].src}"
               alt="${p.name}"
               onerror="this.src='img/placeholder.svg'"
               loading="lazy">
          <div class="product-overlay">
            <button class="btn btn-primary btn-sm"
                    onclick="event.stopPropagation();app.navigate('contact',{product:'${encodedName}'})">
              Order Now
            </button>
          </div>
        </div>
 
        ${allImages.length > 1 ? `
        <div class="angle-thumbs">
          ${allImages.map((img, i) =>
            `<img class="angle-thumb${i === 0 ? ' active' : ''}"
                  src="${img.src}"
                  alt="${p.name} ${img.label}"
                  onerror="this.src='img/placeholder.svg'"
                  loading="lazy"
                  data-index="${i}"
                  data-label="${img.label}">`
          ).join('')}
        </div>
        <div class="angle-label">${allImages[0].label} view</div>` : ''}
 
      </div>
 
      <!-- Product Info -->
      <div class="product-info">
        <span class="product-cat">${p.category.replace(/-/g, ' ')}</span>
        <h3>${p.name}</h3>
        <p>${p.description.length > 90 ? p.description.substring(0, 90) + '...' : p.description}</p>
 
        ${colorSwatches}
 
        <div class="product-footer">
          <span class="product-price">${p.price || 'Contact for Price'}</span>
          <button class="btn-link"
                  onclick="app.navigate('contact',{product:'${encodedName}'})">
            Inquire →
          </button>
        </div>
      </div>
    </div>
  `;
} 
// ─── PRODUCT CARD INTERACTIVITY ───────────────────────────────────────────────
// Call once after cards are injected into the DOM (replaces / extends initReveal)
 
function initProductCards() {
  document.querySelectorAll('.product-card').forEach(card => {
    const images  = JSON.parse(decodeURIComponent(card.dataset.images || '[]'));
    const colors  = JSON.parse(decodeURIComponent(card.dataset.colors || '[]'));
    const mainImg = card.querySelector('.product-main-img');
    if (!mainImg) return;
 
    // ── helpers ──────────────────────────────────────────────────────────────
    let currentColorIndex = 0;
 
    function getImagesForColor(colorIdx) {
      const c = colors[colorIdx];
      return (c && c.images && c.images.length) ? c.images : images;
    }
 
    function switchMainImage(idx, colorIdx = currentColorIndex) {
      const pool = getImagesForColor(colorIdx);
      const src  = pool[idx] || pool[0];
      if (!src) return;
 
      mainImg.classList.add('img-switching');
      setTimeout(() => {
        mainImg.src = src;
        mainImg.classList.remove('img-switching');
      }, 150);
 
      // sync dots
      card.querySelectorAll('.angle-dot').forEach((d, i) =>
        d.classList.toggle('active', i === idx));
 
      // sync thumbs
      card.querySelectorAll('.angle-thumb').forEach((t, i) =>
        t.classList.toggle('active', i === idx));
    }
 
    function switchColor(colorIdx) {
      currentColorIndex = colorIdx;
      const c = colors[colorIdx];
      if (!c) return;
 
      // Update swatch active state
      card.querySelectorAll('.color-swatch').forEach((s, i) =>
        s.classList.toggle('active', i === colorIdx));
 
      // Update color label
      const label = card.querySelector('.color-label');
      if (label) label.textContent = c.label || '';
 
      // Rebuild angle thumbs for this color's images
      const pool = getImagesForColor(colorIdx);
      const thumbWrap = card.querySelector('.angle-thumbs');
      if (thumbWrap) {
        thumbWrap.querySelectorAll('.angle-thumb').forEach((t, i) => {
          t.src = pool[i] || pool[0];
          t.classList.toggle('active', i === 0);
        });
      }
 
      // Reset main image to first in new pool
      switchMainImage(0, colorIdx);
    }
 
    // ── angle thumbnail clicks ────────────────────────────────────────────────
    card.querySelectorAll('.angle-thumb').forEach(thumb => {
      thumb.addEventListener('click', e => {
        e.stopPropagation();
        switchMainImage(parseInt(thumb.dataset.index, 10));
      });
    });
 
    // ── dot clicks ────────────────────────────────────────────────────────────
    card.querySelectorAll('.angle-dot').forEach(dot => {
      dot.addEventListener('click', e => {
        e.stopPropagation();
        switchMainImage(parseInt(dot.dataset.index, 10));
      });
    });
 
    // ── color swatch clicks ───────────────────────────────────────────────────
    card.querySelectorAll('.color-swatch').forEach(swatch => {
      swatch.addEventListener('click', e => {
        e.stopPropagation();
        switchColor(parseInt(swatch.dataset.index, 10));
      });
 
      // Show color label on hover
      swatch.addEventListener('mouseenter', () => {
        const label = card.querySelector('.color-label');
        if (label) label.textContent = colors[parseInt(swatch.dataset.index, 10)]?.label || '';
      });
    });
 
    // ── keyboard arrow navigation on focused card ─────────────────────────────
    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', e => {
      const dots  = card.querySelectorAll('.angle-dot');
      const active = card.querySelector('.angle-dot.active');
      if (!active) return;
      const cur = parseInt(active.dataset.index, 10);
      if (e.key === 'ArrowRight') switchMainImage(Math.min(cur + 1, dots.length - 1));
      if (e.key === 'ArrowLeft')  switchMainImage(Math.max(cur - 1, 0));
    });
  });
}
 
// ─── UPDATED renderProducts ───────────────────────────────────────────────────
 
function renderProducts(category = 'all', search = '') {
  const searchLower = search.toLowerCase();
 
  let filtered = PRODUCTS;
  if (category !== 'all') filtered = filtered.filter(p => p.category === category);
  if (search) filtered = filtered.filter(p =>
    p.name.toLowerCase().includes(searchLower) ||
    p.description.toLowerCase().includes(searchLower) ||
    p.category.toLowerCase().includes(searchLower)
  );
 
  // Update filter tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.cat === category);
    tab.onclick = () => {
      const cat      = tab.dataset.cat;
      const searchVal = document.getElementById('prod-search-input')?.value || '';
      renderProducts(cat, cat === 'all' ? searchVal : '');
    };
  });
 
  // Update search input
  const searchInput = document.getElementById('prod-search-input');
  if (searchInput) searchInput.value = search;
 
  // Results info
  const resultsInfo = document.getElementById('results-info');
  if (resultsInfo) {
    resultsInfo.innerHTML = `${search ? `Showing results for "<strong>${search}</strong>" — ` : ''}<strong>${filtered.length}</strong> product${filtered.length !== 1 ? 's' : ''} found`;
  }
 
  // Render grid
  const grid = document.getElementById('products-grid');
  if (!grid) return;
 
  if (category === 'all' && !search) {
    grid.innerHTML = CATEGORIES.map(cat => {
      const catProducts = PRODUCTS.filter(p => p.category === cat.slug);
      if (!catProducts.length) return '';
      return `
        <div class="category-section">
          <div class="category-header">
            <h2>${cat.label}</h2>
            <span class="see-all" onclick="renderProducts('${cat.slug}','')">See all →</span>
          </div>
          <div class="products-grid">
            ${catProducts.map(p => productCardHTML(p)).join('')}
          </div>
        </div>
      `;
    }).join('');
  } else if (filtered.length > 0) {
    grid.innerHTML = `<div class="products-grid">${filtered.map(p => productCardHTML(p)).join('')}</div>`;
  } else {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>No products found</h3>
        <p>Try a different search or <span style="color:var(--brown);cursor:pointer" onclick="renderProducts('all','')">view all products</span>.</p>
      </div>
    `;
  }
 
  // Init reveal animations + NEW card interactivity
  setTimeout(() => {
    initReveal();
    initProductCards();
  }, 100);
}
 
// ─── UPDATED initProductsPage ─────────────────────────────────────────────────
 
function initProductsPage() {
  const category = getParam('category') || 'all';
  const search   = getParam('search')   || '';
  renderProducts(category, search);
}

// ─── CONTACT PAGE ─────────────────────────────────────
function initContactPage() {
  const product     = getParam('product');
  const productInput = document.getElementById('contact-product');
  const messageArea  = document.getElementById('contact-message');
  if (productInput && product) {
    const decoded = decodeURIComponent(product);
    productInput.value = decoded;
    if (messageArea && !messageArea.value) {
      messageArea.value = `I am interested in: ${decoded}. Please send me more information about pricing and availability.`;
    }
  }
  // Clear any stale alerts
  const alertEl = document.getElementById('contact-alert');
  if (alertEl) alertEl.className = 'alert alert-hidden';
}




// ─── REVEAL ANIMATIONS ───────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('revealed'), i * 80);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('[data-reveal]:not(.revealed)').forEach(el => obs.observe(el));
}

// ─── INIT — detect which page we're on ────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();

  const path = location.pathname;

  if (path.endsWith('products.html')) {
    initProductsPage();
  } else if (path.endsWith('contact.html')) {
    initContactPage();
  } else {
    // index.html / home
    initHomePage();
  }

  initReveal();
});
function openLightbox(src, name) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-title').textContent = name;
  lb.style.display = 'flex';
  requestAnimationFrame(() => lb.classList.add('open'));
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('open');
  setTimeout(() => { lb.style.display = 'none'; }, 260);
}
document.getElementById('products-grid').addEventListener('mouseover', function(e) {
  const thumb = e.target.closest('.angle-thumb');
  if (!thumb) return;

  const card = thumb.closest('.product-card');
  const mainImg = card.querySelector('.product-main-img');
  const label = card.querySelector('.angle-label');
  const allThumbs = card.querySelectorAll('.angle-thumb');

  allThumbs.forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');

  mainImg.style.opacity = '1';
  setTimeout(() => {
    mainImg.src = thumb.src;
    mainImg.style.opacity = '1';
  }, 1000);

  if (label) label.textContent = (thumb.dataset.label || '') + ' view';
});
