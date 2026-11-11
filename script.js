/**
 * CAFÉ OBREGATO — FIKA-STYLE INTERACTIVE MENU & IMAGE GENERATION ENGINE
 * Complete dataset, Canvas/SVG luxury generator, mega dropdown, and hero modal engine.
 */

(function () {
    'use strict';

    /* ==========================================================================
       1. COMPLETE MENU DATASET
       ========================================================================== */
    const MENU_ITEMS = [
        // --- HOT BREWS: BLACK ---
        {
            id: 'espresso',
            name: 'Espresso',
            category: 'HOT BREWS',
            subCategory: 'Black',
            price: 180,
            description: 'Intense single-origin Arabica extraction featuring a dense tiger-striped golden crema, deep dark chocolate undertones, and a velvety lingering finish.',
            allergens: ['None'],
            badge: 'Artisan Roast',
            pairings: ['poee-chicken', 'lotus-biscoff-frappe', 'french-toast'],
            bakeNote: 'Extracted at 9 bars of pressure on La Marzocco using freshly ground estate beans.'
        },
        {
            id: 'pour-over',
            name: 'Pour Over',
            category: 'HOT BREWS',
            subCategory: 'Black',
            price: 240,
            description: 'Meticulously hand-dripped V60 pour over showcasing floral jasmine fragrance, gentle citrus brightness, and exceptional single-estate clarity.',
            allergens: ['None'],
            badge: 'Manual Brew',
            pairings: ['poee-veg', 'chickpea-smash', 'kashmiri-kahwa'],
            bakeNote: 'Slow spiral water dispersion at 92°C with pre-infusion bloom time of 45 seconds.'
        },
        {
            id: 'americano',
            name: 'Americano',
            category: 'HOT BREWS',
            subCategory: 'Black',
            price: 220,
            description: 'Double shot of bold Arabica espresso gently poured over hot mineral water, preserving the nuanced oils while yielding a clean, extended cup.',
            allergens: ['None'],
            badge: 'Classic',
            pairings: ['poee-paneer', 'house-fries', 'croissant-toast'],
            bakeNote: 'Custom calibrated espresso yield over 180ml hot mineral-balanced water.'
        },

        // --- HOT BREWS: WHITE ---
        {
            id: 'cortado',
            name: 'Cortado',
            category: 'HOT BREWS',
            subCategory: 'White',
            price: 220,
            description: 'Equal 1:1 proportion of intense double espresso cut cleanly with velvety textured micro-foamed warm milk in a heavy glass.',
            allergens: ['Dairy'],
            badge: 'Barista Choice',
            pairings: ['poee-chicken', 'jalapeno-poppers', 'french-toast'],
            bakeNote: 'Steamed to exactly 60°C to accentuate natural sweetness without scalding.'
        },
        {
            id: 'macchiato',
            name: 'Macchiato',
            category: 'HOT BREWS',
            subCategory: 'White',
            price: 200,
            description: 'Potent single-origin Arabica espresso marked with just a delicate spoonful of cloud-like warm milk froth.',
            allergens: ['Dairy'],
            badge: 'Classic',
            pairings: ['poee-mutton-kheema', 'margherita-pizza', 'espresso'],
            bakeNote: 'Pure contrast between dark, robust roast and silky milk head.'
        },
        {
            id: 'flat-white',
            name: 'Flat White',
            category: 'HOT BREWS',
            subCategory: 'White',
            price: 240,
            description: 'Double ristretto shots folded seamlessly with glossy whole milk micro-foam, delivering a velvety mouthfeel and robust coffee character.',
            allergens: ['Dairy'],
            badge: 'House Favorite',
            pairings: ['poee-chicken', 'pesto-pasta', 'french-toast'],
            bakeNote: 'Silky micro-foam with latte art rosette poured freehand.'
        },
        {
            id: 'spanish-latte',
            name: 'Spanish Latte',
            category: 'HOT BREWS',
            subCategory: 'White',
            price: 310,
            description: 'Decadent slow-simmered sweetened condensed milk balanced with double-shot dark roast espresso and velvety steamed milk.',
            allergens: ['Dairy'],
            badge: 'Popular',
            pairings: ['ros-omelette', 'zaatar-fries', 'orange-cold-brew'],
            bakeNote: 'Layered caramel sweetness harmonized with freshly extracted espresso.'
        },
        {
            id: 'sea-salt-mocha',
            name: 'Sea Salt Mocha',
            category: 'HOT BREWS',
            subCategory: 'White',
            price: 330,
            description: 'Molten Belgian dark chocolate combined with bold espresso, textured milk, and crowned with hand-harvested sea salt crystal flakes.',
            allergens: ['Dairy'],
            badge: 'Signature',
            pairings: ['poee-chicken-kheema', 'french-toast', 'lotus-biscoff-frappe'],
            bakeNote: 'Single-origin 70% dark chocolate melted into espresso with sea salt flakes.'
        },
        {
            id: 'latte-cappuccino',
            name: 'Latte / Cappuccino',
            category: 'HOT BREWS',
            subCategory: 'White',
            price: 250,
            description: 'The golden standard of café comfort. Silky micro-textured warm milk poured over freshly extracted Arabica espresso with graceful latte art.',
            allergens: ['Dairy'],
            badge: 'Classic',
            pairings: ['poee-veg', 'chilli-cheese-bruschetta', 'herbed-paneer-steak'],
            bakeNote: 'Crafted with premium whole milk and dual origin roasted beans.'
        },
        {
            id: 'orange-zest-mocha',
            name: 'Orange Zest Mocha',
            category: 'HOT BREWS',
            subCategory: 'White',
            price: 340,
            description: 'Fresh organic orange peel essence expressed over molten dark chocolate, pulled espresso, and steamed milk for an intoxicating aroma.',
            allergens: ['Dairy'],
            badge: 'Chef Special',
            pairings: ['poee-paneer', 'chicken-katsu-sandwich', 'spanish-latte'],
            bakeNote: 'Infused with cold-pressed orange oil and natural citrus zest shavings.'
        },
        {
            id: 'signature-hot-chocolate',
            name: 'Signature Hot Chocolate',
            category: 'HOT BREWS',
            subCategory: 'White',
            price: 380,
            description: 'Real Belgian Callebaut 70% dark chocolate slow-melted into whole milk and topped with toasted marshmallow fluff and dark cocoa dusting.',
            allergens: ['Dairy'],
            badge: 'Decadent',
            pairings: ['french-toast', 'roast-chicken-sandwich', 'sea-salt-mocha'],
            bakeNote: 'Zero artificial syrups; crafted exclusively with slow-melted solid chocolate callets.'
        },

        // --- COLD BREWS: BLACK ---
        {
            id: 'iced-americano',
            name: 'Iced Americano',
            category: 'COLD BREWS',
            subCategory: 'Black',
            price: 240,
            description: 'Double shot of aromatic espresso extracted over crystal-clear artisan ice and chilled mineral water. Refreshing, crisp, and bold.',
            allergens: ['None'],
            badge: 'Chilled Classic',
            pairings: ['poee-chicken', 'zaatar-fries', 'loaded-chicken-pizza'],
            bakeNote: 'Instant flash-chilled to preserve volatile aromatic floral coffee compounds.'
        },
        {
            id: 'iced-pour-over',
            name: 'Iced Pour Over',
            category: 'COLD BREWS',
            subCategory: 'Black',
            price: 260,
            description: 'Japanese flash-brewed pour over dripped directly onto handcrafted ice to lock in bright fruity acidity and vibrant berry notes.',
            allergens: ['None'],
            badge: 'Single Origin',
            pairings: ['poee-veg', 'chickpea-smash', 'citrus-cloud-brew'],
            bakeNote: 'High extraction ratio with immediate ice lock for peak aromatic preservation.'
        },
        {
            id: 'orange-cold-brew',
            name: 'Orange Cold Brew',
            category: 'COLD BREWS',
            subCategory: 'Black',
            price: 360,
            description: '18-hour slow steeped cold brew layered over fresh Valencia orange reduction, served on the rocks with a dehydrated orange wheel.',
            allergens: ['None'],
            badge: 'Top Seller',
            pairings: ['poee-chicken-kheema', 'chicken-pepperoni-pizza', 'spanish-latte'],
            bakeNote: 'Cold steep cycle at 4°C for low acidity and gentle natural fruit sweetness.'
        },

        // --- COLD BREWS: WHITE ---
        {
            id: 'affogato',
            name: 'Affogato',
            category: 'COLD BREWS',
            subCategory: 'White',
            price: 310,
            description: 'Two generous scoops of Madagascar vanilla bean gelato drenched tableside in a piping hot double shot of bold espresso.',
            allergens: ['Dairy'],
            badge: 'Dessert Brew',
            pairings: ['french-toast', 'poee-chicken', 'tiramisu-iced-latte'],
            bakeNote: 'Artisanal dense gelato pairing with hot Italian roast extraction.'
        },
        {
            id: 'iced-latte',
            name: 'Iced Latte',
            category: 'COLD BREWS',
            subCategory: 'White',
            price: 280,
            description: 'Double espresso layered gracefully over whole chilled milk and handcrafted ice spheres. Creamy, smooth, and thirst-quenching.',
            allergens: ['Dairy'],
            badge: 'Daily Staple',
            pairings: ['poee-paneer', 'pesto-pasta', 'french-toast'],
            bakeNote: 'Served in tall fluted glass with distinct ombre layer separation.'
        },
        {
            id: 'island-brew',
            name: 'Island Brew',
            category: 'COLD BREWS',
            subCategory: 'White',
            price: 350,
            description: 'A coastal escape in a glass. Rich cold brew coffee infused with creamy coconut milk, touch of vanilla, and toasted coconut flakes.',
            allergens: ['Nuts'],
            badge: 'Coastal Special',
            pairings: ['coastal-prawns-curry', 'poee-chicken', 'lotus-biscoff-frappe'],
            bakeNote: 'Fresh coastal coconut cream folded gently into 18-hour cold brew.'
        },
        {
            id: 'coffee-milkshake',
            name: 'Coffee Milkshake',
            category: 'COLD BREWS',
            subCategory: 'White',
            price: 320,
            description: 'Old-school thick café shake prepared with premium vanilla bean ice cream, double espresso, and chilled whole milk.',
            allergens: ['Dairy'],
            badge: 'Creamy Classic',
            pairings: ['house-fries', 'chicken-katsu-sandwich', 'belgian-obsession'],
            bakeNote: 'Whipped thick with slow-churned real dairy ice cream.'
        },
        {
            id: 'tiramisu-affogato',
            name: 'Tiramisu Affogato',
            category: 'COLD BREWS',
            subCategory: 'White',
            price: 360,
            description: 'Mascarpone gelato, soaked ladyfinger biscuits, and dark cocoa powder drowned in piping hot double espresso.',
            allergens: ['Dairy', 'Gluten'],
            badge: 'Gourmet',
            pairings: ['poee-mutton-kheema', 'pesto-pasta', 'tiramisu-iced-latte'],
            bakeNote: 'Italian mascarpone churn paired with rich espresso wash.'
        },
        {
            id: 'citrus-cloud-brew',
            name: 'Citrus Cloud Brew',
            category: 'COLD BREWS',
            subCategory: 'White',
            price: 350,
            description: 'Smooth cold brew topped with an ethereal aerated citrus vanilla sweet cream cloud that gently cascades down the glass.',
            allergens: ['Dairy'],
            badge: 'Innovative',
            pairings: ['poee-veg', 'herbed-ricotta-toast', 'orange-cold-brew'],
            bakeNote: 'Nitrogen-whipped sweet cream with fresh citrus zest essence.'
        },
        {
            id: 'house-cold-coffee',
            name: 'House Cold Coffee',
            category: 'COLD BREWS',
            subCategory: 'White',
            price: 310,
            description: 'Our nostalgic, ultra-thick Indian café cold coffee blended with rich coffee decoction, cream, and crowned with cocoa powder.',
            allergens: ['Dairy'],
            badge: 'Crowd Favorite',
            pairings: ['poee-chicken', 'desi-bombay-sandwich', 'zaatar-fries'],
            bakeNote: 'Frappe-whipped for a dense creamy froth head that stays persistent.'
        },
        {
            id: 'tiramisu-iced-latte',
            name: 'Tiramisu Iced Latte',
            category: 'COLD BREWS',
            subCategory: 'White',
            price: 420,
            description: 'Chilled espresso and milk crowned with thick house-whipped mascarpone cream, savoiardi biscuit crumbs, and Valrhona cocoa.',
            allergens: ['Dairy', 'Gluten'],
            badge: 'Chef Signature',
            pairings: ['poee-chicken', 'french-toast', 'belgian-obsession'],
            bakeNote: 'Hand-whipped Italian mascarpone cream float made fresh per order.'
        },
        {
            id: 'iced-coconut-latte',
            name: 'Iced Coconut Latte',
            category: 'COLD BREWS',
            subCategory: 'White',
            price: 390,
            description: 'Double espresso poured over velvety coconut milk and pure organic coconut syrup over ice. Naturally dairy-free and tropical.',
            allergens: ['Nuts'],
            badge: 'Plant-Based',
            pairings: ['poee-veg', 'garden-pesto-sandwich', 'island-brew'],
            bakeNote: 'Smooth emulsion of tropical coconut and rich nutty Arabica.'
        },
        {
            id: 'lotus-biscoff-frappe',
            name: 'Lotus Biscoff Frappe',
            category: 'COLD BREWS',
            subCategory: 'White',
            price: 380,
            description: 'Spiced speculoos cookie butter whipped with double espresso, vanilla cream, and crunchy caramelized Biscoff biscuit crumbs.',
            allergens: ['Dairy', 'Gluten'],
            badge: 'Best Seller',
            pairings: ['poee-chicken-kheema', 'loaded-chicken-pizza', 'french-toast'],
            bakeNote: 'Swirled with Belgian Lotus spread and whole crushed biscuit base.'
        },
        {
            id: 'vietnamese-iced-coffee',
            name: 'Vietnamese Iced Coffee',
            category: 'COLD BREWS',
            subCategory: 'White',
            price: 320,
            description: 'Traditional slow phin-style dark roast coffee stirred into a generous layer of sweet condensed milk over crushed mountain ice.',
            allergens: ['Dairy'],
            badge: 'Bold & Sweet',
            pairings: ['ros-omelette', 'roast-chicken-sandwich', 'house-fries'],
            bakeNote: 'Deep caramelized dark roast profile balanced with rich condensed milk.'
        },
        {
            id: 'belgian-obsession',
            name: 'Belgian Obsession (OG Cold Chocolate)',
            category: 'COLD BREWS',
            subCategory: 'White',
            price: 450,
            description: 'Pure melted Belgian chocolate ganache shaken with chilled milk, shaved chocolate curls, and rich dark cocoa. Total indulgence.',
            allergens: ['Dairy'],
            badge: 'Luxury Indulgence',
            pairings: ['french-toast', 'poee-chicken', 'tiramisu-iced-latte'],
            bakeNote: 'Crafted with 70% Callebaut ganache and rich dark chocolate flakes.'
        },

        // --- ON THE ROCKS ---
        {
            id: 'mint-mojito',
            name: 'Mint Mojito',
            category: 'ON THE ROCKS',
            price: 260,
            description: 'Muddled fresh garden mint, lime wedges, pure organic cane sugar, and chilled sparkling club soda over crushed ice.',
            allergens: ['None'],
            badge: 'Refreshing',
            pairings: ['poee-chicken', 'fish-fries', 'gochujang-pasta'],
            bakeNote: 'Hand-muddled fresh organic spearmint and juicy lime.'
        },
        {
            id: 'blue-lagoon',
            name: 'Blue Lagoon',
            category: 'ON THE ROCKS',
            price: 260,
            description: 'Vibrant blue curacao citrus cordial, fresh lime spritz, and effervescent sparkling soda garnished with lemon slices and mint.',
            allergens: ['None'],
            badge: 'Vibrant',
            pairings: ['golden-panko-prawns', 'farm-fresh-pizza', 'chicken-nuggets'],
            bakeNote: 'Crisp citrus fizz with bright tropical coloring and tart lime.'
        },
        {
            id: 'iced-tea',
            name: 'Iced Tea (Lemon / Peach)',
            category: 'ON THE ROCKS',
            price: 270,
            description: 'Slow-steeped high-grown Darjeeling black tea infused with natural lemon or juicy white peach nectar, served frosty cold.',
            allergens: ['None'],
            badge: 'Artisanal Sip',
            pairings: ['poee-paneer', 'herbed-paneer-steak', 'chilli-cheese-bruschetta'],
            bakeNote: 'Whole leaf black tea brewed cold to prevent bitter tannins.'
        },

        // --- SMOOTHIES ---
        {
            id: 'sunshine-slurp',
            name: 'Sunshine Slurp',
            category: 'SMOOTHIES',
            price: 440,
            description: 'Alphonso mango pulp, golden passion fruit, Greek yogurt, chia seeds, and raw honey whipped into a bright tropical smoothie.',
            allergens: ['Dairy'],
            badge: 'Immunity Boost',
            pairings: ['poee-veg', 'chickpea-smash', 'pancakes-blue-drip'],
            bakeNote: '100% natural real fruit puree with zero added preservatives.'
        },
        {
            id: 'berry-smoothie-bowl',
            name: 'Berry Smoothie Bowl',
            category: 'SMOOTHIES',
            price: 550,
            description: 'Thick acai and wild blueberry smoothie bowl crowned with toasted granola, banana coins, chia seeds, and wildflower honey.',
            allergens: ['Gluten', 'Nuts'],
            badge: 'Superfood',
            pairings: ['flat-white', 'herbed-ricotta-toast', 'pour-over'],
            bakeNote: 'Flash-frozen organic berries blended with creamy Greek yogurt.'
        },
        {
            id: 'cacao-banana-elixir',
            name: 'Cacao Banana Seed Elixir',
            category: 'SMOOTHIES',
            price: 390,
            description: 'Raw Peruvian cacao nibs, ripe banana, pumpkin seeds, almond butter, and almond milk blended into an energizing power elixir.',
            allergens: ['Nuts'],
            badge: 'Plant Power',
            pairings: ['chickpea-smash', 'french-toast', 'espresso'],
            bakeNote: 'Rich in magnesium and plant protein; sweetened naturally with dates.'
        },

        // --- MATCHA ---
        {
            id: 'tonic-matcha',
            name: 'Tonic Matcha',
            category: 'MATCHA',
            price: 390,
            description: 'Ceremonial grade Uji Japanese matcha whisked tableside and poured over crisp botanical tonic water and fresh lime over ice.',
            allergens: ['None'],
            badge: 'Uji Ceremonial',
            pairings: ['poee-veg', 'hummus-platter-falafel', 'iced-matcha-latte'],
            bakeNote: 'Whisked with bamboo chasen at 80°C to create fine emerald micro-foam.'
        },
        {
            id: 'iced-matcha-latte',
            name: 'Iced Matcha Latte',
            category: 'MATCHA',
            price: 350,
            description: 'Stone-ground emerald matcha green tea whisked with whole milk or oat milk over ice. Earthy, smooth, and naturally calming.',
            allergens: ['Dairy'],
            badge: 'Best Seller',
            pairings: ['french-toast', 'poee-chicken', 'herbed-ricotta-toast'],
            bakeNote: 'Single-origin Kyoto matcha paired with velvety textured chilled milk.'
        },
        {
            id: 'iced-coconut-matcha',
            name: 'Iced Coconut Matcha',
            category: 'MATCHA',
            price: 380,
            description: 'Layered visual stunner with sweet creamy coconut milk at the base and vibrant Uji matcha green tea floated gracefully on top.',
            allergens: ['Nuts'],
            badge: 'Aesthetic Favorite',
            pairings: ['poee-paneer', 'chickpea-smash', 'tonic-matcha'],
            bakeNote: 'Distinct two-tone emerald and coconut separation.'
        },
        {
            id: 'sparkling-matcha-lemonade',
            name: 'Sparkling Matcha Lemonade',
            category: 'MATCHA',
            price: 370,
            description: 'Zesty freshly squeezed lemonade topped with effervescent sparkling water and a potent shot of whisked ceremonial matcha.',
            allergens: ['None'],
            badge: 'Zesty Glow',
            pairings: ['poee-chicken', 'house-fries', 'zaatar-fries'],
            bakeNote: 'Fresh tart lemons balanced with gentle vegetal green tea notes.'
        },

        // --- KOMBUCHA ---
        {
            id: 'kombucha-ginger-lime',
            name: 'Kombucha Ginger Lime',
            category: 'KOMBUCHA',
            price: 260,
            description: 'Raw small-batch fermented probiotic tea brewed with organic spicy ginger root and fresh squeezed limes. Crisp & gut-friendly.',
            allergens: ['None'],
            badge: 'Probiotic',
            pairings: ['poee-chicken-kheema', 'fish-fries', 'margherita-pizza'],
            bakeNote: '21-day slow fermentation yielding natural effervescence.'
        },
        {
            id: 'kombucha-pineapple-spice',
            name: 'Kombucha Pineapple Spice',
            category: 'KOMBUCHA',
            price: 260,
            description: 'Tropical pineapple kombucha steeped with toasted Ceylon cinnamon, star anise, and cloves for a refreshing spiced finish.',
            allergens: ['None'],
            badge: 'Artisan Batch',
            pairings: ['ros-omelette', 'golden-panko-prawns', 'chicken-xacuti-curry'],
            bakeNote: 'Wild-fermented with whole tropical fruits and spice infusion.'
        },
        {
            id: 'kombucha-pomegranate-mint',
            name: 'Kombucha Pomegranate Mint',
            category: 'KOMBUCHA',
            price: 260,
            description: 'Ruby red pomegranate juice fermented with mountain black tea and infused with crushed garden spearmint leaves.',
            allergens: ['None'],
            badge: 'Antioxidant',
            pairings: ['poee-mutton-kheema', 'pesto-pasta', 'chicken-katsu-sandwich'],
            bakeNote: 'Tart, sparkling, and enriched with live active cultures.'
        },

        // --- ARTISANAL TEAS ---
        {
            id: 'kashmiri-kahwa',
            name: 'Kashmiri Kahwa',
            category: 'ARTISANAL TEAS',
            price: 210,
            description: 'Traditional green tea slow-simmered with real saffron strands, crushed green cardamom, cinnamon bark, and roasted almond slivers.',
            allergens: ['Nuts'],
            badge: 'Heritage Sip',
            pairings: ['poee-chicken', 'french-toast', 'egg-akuri'],
            bakeNote: 'Authentic saffron infusion brewed in copper kettle style.'
        },
        {
            id: 'zingly-ginger-tea',
            name: 'Zingly Ginger Tea',
            category: 'ARTISANAL TEAS',
            price: 210,
            description: 'Whole leaf orthodox Assam black tea brewed with freshly crushed ginger root, cracked black pepper, and whole spices.',
            allergens: ['None'],
            badge: 'Comfort Classic',
            pairings: ['poee-veg', 'desi-bombay-sandwich', 'house-fries'],
            bakeNote: 'Deep warming spice notes brewed to aromatic perfection.'
        },
        {
            id: 'chamomile-infusion',
            name: 'Chamomile Infusion',
            category: 'ARTISANAL TEAS',
            price: 220,
            description: 'Whole Egyptian golden chamomile blossoms steeped in hot water. Naturally caffeine-free with gentle honey and floral notes.',
            allergens: ['None'],
            badge: 'Caffeine-Free',
            pairings: ['french-toast', 'herbed-ricotta-toast', 'chickpea-smash'],
            bakeNote: 'Whole whole-flower herbal infusion for unhurried evenings.'
        },
        {
            id: 'calming-lavender-tea',
            name: 'Calming Lavender Tea',
            category: 'ARTISANAL TEAS',
            price: 210,
            description: 'French Provence organic lavender buds delicately blended with tender white peony tea leaves. A soothing floral sanctuary.',
            allergens: ['None'],
            badge: 'Floral Bliss',
            pairings: ['pancakes-blue-drip', 'poee-paneer', 'chamomile-infusion'],
            bakeNote: 'Delicate steeping temperature at 85°C to preserve floral bouquet.'
        },

        // --- POEE'S ---
        {
            id: 'poee-veg',
            name: 'Veg Poee Pocket',
            category: "POEE'S",
            price: 360,
            description: 'Oven-fresh Goan fermented wheat poee pocket stuffed with charred sweet bell peppers, sweet corn, spiced cottage cheese, and mint mayo.',
            allergens: ['Gluten', 'Dairy'],
            badge: 'House Special',
            pairings: ['spanish-latte', 'orange-cold-brew', 'house-fries'],
            bakeNote: 'Baked fresh in stone-deck oven using traditional fermentation.'
        },
        {
            id: 'poee-paneer',
            name: 'Paneer Poee Pocket',
            category: "POEE'S",
            price: 390,
            description: 'Smoky tandoori marinated cottage cheese cubes, pickled shallots, coriander sprigs, and creamy kasundi mustard inside warm puffed poee.',
            allergens: ['Gluten', 'Dairy'],
            badge: 'Popular',
            pairings: ['orange-cold-brew', 'flat-white', 'zaatar-fries'],
            bakeNote: 'Crispy blistered outer poee crust with pillowy hollow inner pocket.'
        },
        {
            id: 'poee-chicken',
            name: 'Chicken Poee Pocket',
            category: "POEE'S",
            price: 410,
            description: 'Signature specialty. Pulled Goan Cafreal spiced roast chicken, pickled onions, and fresh herb aioli packed in warm fermented poee.',
            allergens: ['Gluten'],
            badge: 'Chef Signature',
            pairings: ['iced-latte', 'belgian-obsession', 'mint-mojito'],
            bakeNote: 'Goan cafreal masala ground fresh with coriander, cloves, and cinnamon.'
        },
        {
            id: 'ros-omelette',
            name: 'Ros Omelette with Poee',
            category: "POEE'S",
            price: 380,
            description: 'Goa’s iconic culinary treasure. Fluffy spiced coriander omelette submerged in rich, savory coconut ros curry, served with 2 hot poees.',
            allergens: ['Egg', 'Gluten'],
            badge: 'Goan Authentic',
            pairings: ['vietnamese-iced-coffee', 'espresso', 'kombucha-ginger-lime'],
            bakeNote: 'Curry slow-simmered with roasted ground coconut, kokum, and green chilies.'
        },
        {
            id: 'poee-mutton-kheema',
            name: 'Mutton Kheema Poee Pocket',
            category: "POEE'S",
            price: 440,
            description: 'Slow-braised spiced minced mutton cooked with caramelized onions, black cardamom, and mint, stuffed generously in freshly baked poee.',
            allergens: ['Gluten'],
            badge: 'Gourmet Meat',
            pairings: ['americano', 'mint-mojito', 'sea-salt-mocha'],
            bakeNote: 'Slow simmered for 3 hours until intensely tender and fragrant.'
        },
        {
            id: 'poee-chicken-kheema',
            name: 'Chicken Kheema Poee Pocket',
            category: "POEE'S",
            price: 420,
            description: 'Rustic country-style minced chicken stewed with ginger, garlic, green chilies, and fresh coriander, tucked inside hot crusty poee.',
            allergens: ['Gluten'],
            badge: 'Comfort Favorite',
            pairings: ['orange-cold-brew', 'lotus-biscoff-frappe', 'rosemary-wedges'],
            bakeNote: 'Traditional Goan bakery staple baked daily at dawn.'
        },

        // --- STARTERS ---
        {
            id: 'fish-fries',
            name: 'Fish Fries',
            category: 'STARTERS',
            price: 480,
            description: 'Fresh local coastal fish fillets marinated in red recheado spice paste, crusted in semolina (rawa), and pan-fried crisp.',
            allergens: ['Fish', 'Gluten'],
            badge: 'Coastal Gold',
            pairings: ['mint-mojito', 'poee-chicken', 'iced-tea'],
            bakeNote: 'Semolina crust pan-seared to a crunchy golden crust.'
        },
        {
            id: 'house-fries',
            name: 'House Fries',
            category: 'STARTERS',
            price: 270,
            description: 'Double-cooked crisp russet potato fries tossed in roasted garlic sea salt, served with our house signature smoky paprika aioli.',
            allergens: ['None'],
            badge: 'Crispy Staple',
            pairings: ['house-cold-coffee', 'poee-chicken', 'margherita-pizza'],
            bakeNote: 'Double blanched and flash-fried for enduring crispiness.'
        },
        {
            id: 'fish-fingers',
            name: 'Fish Fingers',
            category: 'STARTERS',
            price: 480,
            description: 'Tender batons of sea fish coated in seasoned Japanese panko breadcrumbs, flash-fried golden and served with caper-dill tartar sauce.',
            allergens: ['Fish', 'Gluten', 'Egg'],
            badge: 'Crispy Catch',
            pairings: ['blue-lagoon', 'house-fries', 'mint-mojito'],
            bakeNote: 'Panko breadcrumbs deliver an airy, shatteringly crisp crust.'
        },
        {
            id: 'chicken-nuggets',
            name: 'Chicken Nuggets',
            category: 'STARTERS',
            price: 390,
            description: 'Juicy buttermilk-brined chicken breast pieces encased in light golden tempura batter, accompanied by chipotle mayo dip.',
            allergens: ['Gluten'],
            badge: 'Classic Snack',
            pairings: ['house-cold-coffee', 'french-toast', 'margherita-pizza'],
            bakeNote: 'Brined for 12 hours for maximum tenderness and flavor.'
        },
        {
            id: 'golden-panko-prawns',
            name: 'Golden Panko Prawns',
            category: 'STARTERS',
            price: 480,
            description: 'Plump butterflied tiger prawns crusted in crisp Japanese panko, served with sriracha lemon dip and pickled radish.',
            allergens: ['Shellfish', 'Gluten'],
            badge: 'Seafood Special',
            pairings: ['blue-lagoon', 'coastal-prawns-curry', 'mint-mojito'],
            bakeNote: 'Crisped to golden amber perfection with juicy tender prawns inside.'
        },
        {
            id: 'rawa-chicken-popcorn',
            name: 'Rawa Chicken Popcorn',
            category: 'STARTERS',
            price: 410,
            description: 'Bite-sized chicken nuggets seasoned with coastal Goan spices and crusted in crunchy semolina, served with green chutney.',
            allergens: ['Gluten'],
            badge: 'Popcorn Crunch',
            pairings: ['orange-cold-brew', 'poee-chicken', 'house-fries'],
            bakeNote: 'Signature Indian-Goan fusion street snack crunch.'
        },
        {
            id: 'jalapeno-poppers',
            name: 'Jalapeno Cheese Poppers',
            category: 'STARTERS',
            price: 370,
            description: 'Crunchy golden crumbed spheres oozing with molten aged cheddar, cream cheese, and finely chopped spicy pickled jalapenos.',
            allergens: ['Dairy', 'Gluten'],
            badge: 'Molten Cheese',
            pairings: ['spanish-latte', 'poee-veg', 'farm-fresh-pizza'],
            bakeNote: 'Filled with dual cheese blend that stretches delightfully on bite.'
        },
        {
            id: 'rosemary-wedges',
            name: 'Rosemary Potato Wedges',
            category: 'STARTERS',
            price: 350,
            description: 'Thick hand-cut skin-on potato wedges roasted with fresh garden rosemary sprigs, garlic cloves, extra virgin olive oil, and sea salt.',
            allergens: ['None'],
            badge: 'Herb Roasted',
            pairings: ['cortado', 'poee-chicken-kheema', 'flat-white'],
            bakeNote: 'Oven-roasted on cast iron for rustic blistered skins.'
        },
        {
            id: 'zaatar-fries',
            name: 'Za\'atar Fries with Garlic Dip',
            category: 'STARTERS',
            price: 330,
            description: 'Crisp golden fries tossed in aromatic Middle-Eastern za\'atar (wild thyme, sumac, toasted sesame), served with creamy toum garlic dip.',
            allergens: ['Sesame'],
            badge: 'Exotic Spice',
            pairings: ['orange-cold-brew', 'poee-paneer', 'spanish-latte'],
            bakeNote: 'Herbaceous za\'atar spice dusting added straight out of the fryer.'
        },

        // --- PIZZA ---
        {
            id: 'margherita-pizza',
            name: 'Margherita Pizza',
            category: 'PIZZA',
            price: 330,
            description: 'Traditional Neapolitan style. San Marzano plum tomato sauce, fresh creamy buffalo mozzarella, extra virgin olive oil, and sweet basil leaves.',
            allergens: ['Gluten', 'Dairy'],
            badge: 'Wood-Fired',
            pairings: ['house-cold-coffee', 'house-fries', 'mint-mojito'],
            bakeNote: 'Slow-fermented 48-hour sourdough base baked on stone deck.'
        },
        {
            id: 'farm-fresh-pizza',
            name: 'Farm Fresh Pizza',
            category: 'PIZZA',
            price: 350,
            description: 'Stone-baked pizza crowned with colorful bell peppers, sliced red onions, button mushrooms, Kalamata black olives, and mozzarella.',
            allergens: ['Gluten', 'Dairy'],
            badge: 'Garden Fresh',
            pairings: ['blue-lagoon', 'pesto-pasta', 'iced-latte'],
            bakeNote: 'Hand-stretched sourdough with charred leopard spotting.'
        },
        {
            id: 'loaded-chicken-pizza',
            name: 'Loaded Chicken Pizza',
            category: 'PIZZA',
            price: 400,
            description: 'Smoky barbecue roast chicken, spicy chicken salami, caramelized red onions, roasted peppers, stringy mozzarella, and chili oil.',
            allergens: ['Gluten', 'Dairy'],
            badge: 'Carnivore Feast',
            pairings: ['iced-americano', 'lotus-biscoff-frappe', 'fish-fries'],
            bakeNote: 'Generously topped with dual chicken preparations.'
        },
        {
            id: 'chicken-pepperoni-pizza',
            name: 'Chicken Pepperoni Pizza',
            category: 'PIZZA',
            price: 380,
            description: 'Crispy cured spiced chicken pepperoni discs layered over rich crushed tomato sugo, molten mozzarella, and hot honey drizzle.',
            allergens: ['Gluten', 'Dairy'],
            badge: 'Fan Favorite',
            pairings: ['orange-cold-brew', 'zaatar-fries', 'belgian-obsession'],
            bakeNote: 'Pepperoni cups crisp up in the oven holding aromatic spiced oils.'
        },

        // --- PASTA ---
        {
            id: 'pesto-pasta',
            name: 'Pesto Pasta',
            category: 'PASTA',
            price: 460,
            description: 'Al dente penne folded into house-made Genovese basil pesto with roasted pine nuts, extra virgin olive oil, and aged Parmigiano [Add chicken: +₹120].',
            allergens: ['Gluten', 'Dairy', 'Nuts'],
            badge: 'House Pesto',
            pairings: ['flat-white', 'farm-fresh-pizza', 'iced-latte'],
            bakeNote: 'Pesto pounded fresh without heat to retain vibrant emerald hue.'
        },
        {
            id: 'creamy-arrabbiata',
            name: 'Creamy Arrabbiata',
            category: 'PASTA',
            price: 450,
            description: 'Penne tossed in slow-simmered fiery San Marzano tomato sauce infused with garlic and red chili flakes, smoothed with rich mascarpone [Add chicken: +₹120].',
            allergens: ['Gluten', 'Dairy'],
            badge: 'Spicy & Creamy',
            pairings: ['tiramisu-iced-latte', 'poee-chicken', 'margherita-pizza'],
            bakeNote: 'Perfect marriage of fiery chili heat and luxurious mascarpone cream.'
        },
        {
            id: 'gochujang-pasta',
            name: 'Gochujang Pasta',
            category: 'PASTA',
            price: 490,
            description: 'Innovative fusion. Penne pasta in rich Korean fermented gochujang chili paste cream, garlic, scallions, and parmesan [Add chicken: +₹120].',
            allergens: ['Gluten', 'Dairy'],
            badge: 'Fusion Special',
            pairings: ['mint-mojito', 'fish-fries', 'citrus-cloud-brew'],
            bakeNote: 'Umami-rich fermented red pepper paste balanced with sweet cream.'
        },

        // --- ALL DAY PLATES ---
        {
            id: 'french-toast',
            name: 'French Toast',
            category: 'ALL DAY PLATES',
            price: 450,
            description: 'Thick slices of artisanal brioche soaked in vanilla bean custard, pan-seared in butter, topped with caramelized bananas, berries, and maple syrup.',
            allergens: ['Gluten', 'Dairy', 'Egg'],
            badge: 'Brunch Star',
            pairings: ['espresso', 'sea-salt-mocha', 'signature-hot-chocolate'],
            bakeNote: 'Brioche baked in-house and soaked through for a soufflé-like interior.'
        },
        {
            id: 'herbed-paneer-steak',
            name: 'Herbed Paneer Steak',
            category: 'ALL DAY PLATES',
            price: 450,
            description: 'Charred herb-crusted paneer steak served over warm ratatouille vegetables, balsamic reduction, and crusty garlic sourdough toast.',
            allergens: ['Dairy', 'Gluten'],
            badge: 'Chef Creation',
            pairings: ['iced-tea', 'latte-cappuccino', 'zaatar-fries'],
            bakeNote: 'Paneer marinated in fresh rosemary, thyme, garlic, and cold-pressed olive oil.'
        },
        {
            id: 'chickpea-smash',
            name: 'Chickpea Smash Toast',
            category: 'ALL DAY PLATES',
            price: 380,
            description: 'Zesty crushed spiced chickpeas, creamy avocado smash, lemon tahini dressing, chili flakes, and microgreens on toasted sourdough.',
            allergens: ['Gluten', 'Sesame'],
            badge: 'Healthy Brunch',
            pairings: ['pour-over', 'tonic-matcha', 'berry-smoothie-bowl'],
            bakeNote: 'Served on our naturally fermented 36-hour slow sourdough loaf.'
        },
        {
            id: 'desi-bombay-sandwich',
            name: 'Desi Bombay Sandwich',
            category: 'ALL DAY PLATES',
            price: 320,
            description: 'The beloved classic. Layered sliced potatoes, beetroot, cucumber, tomatoes, and spicy mint chutney toasted golden with butter.',
            allergens: ['Gluten', 'Dairy'],
            badge: 'Nostalgic',
            pairings: ['zingly-ginger-tea', 'house-cold-coffee', 'house-fries'],
            bakeNote: 'Pressed in cast-iron toaster until shatteringly crisp.'
        },
        {
            id: 'chilli-cheese-bruschetta',
            name: 'Chilli Cheese Bruschetta',
            category: 'ALL DAY PLATES',
            price: 380,
            description: 'Toasted baguette slices smothered in melted sharp cheddar, diced green chilies, bell peppers, oregano, and garlic butter.',
            allergens: ['Gluten', 'Dairy'],
            badge: 'Melted Gold',
            pairings: ['americano', 'latte-cappuccino', 'iced-tea'],
            bakeNote: 'Broiled until golden brown and bubbly.'
        },
        {
            id: 'chicken-katsu-sandwich',
            name: 'Chicken Katsu Sandwich',
            category: 'ALL DAY PLATES',
            price: 450,
            description: 'Crispy panko-breaded chicken cutlet, crunchy shredded cabbage slaw, Japanese bulldog tonkatsu sauce, and kewpie mayo on toasted brioche.',
            allergens: ['Gluten', 'Egg'],
            badge: 'Best Seller',
            pairings: ['orange-zest-mocha', 'coffee-milkshake', 'kombucha-pomegranate-mint'],
            bakeNote: 'Crispy chicken katsu with sweet savory tonkatsu glaze.'
        },
        {
            id: 'roast-chicken-sandwich',
            name: 'Roast Chicken Sandwich',
            category: 'ALL DAY PLATES',
            price: 440,
            description: 'Tender herb-roasted sliced chicken breast, whole grain dijon mustard, wild arugula, and melted provolone in warm crusty ciabatta.',
            allergens: ['Gluten', 'Dairy'],
            badge: 'Hearty Classic',
            pairings: ['signature-hot-chocolate', 'vietnamese-iced-coffee', 'rosemary-wedges'],
            bakeNote: 'Slow roasted chicken breast infused with garlic and fresh thyme.'
        },
        {
            id: 'egg-akuri',
            name: 'Egg Akuri with Sourdough',
            category: 'ALL DAY PLATES',
            price: 380,
            description: 'Parsi-style spiced soft scrambled eggs cooked with fresh green chilies, ginger, turmeric, and coriander, served with toasted sourdough.',
            allergens: ['Egg', 'Gluten', 'Dairy'],
            badge: 'Heritage Breakfast',
            pairings: ['kashmiri-kahwa', 'flat-white', 'espresso'],
            bakeNote: 'Gently scrambled to silky, creamy custard texture.'
        },
        {
            id: 'pesto-cheese-sourdough',
            name: 'Pesto Cheese in Sourdough',
            category: 'ALL DAY PLATES',
            price: 320,
            description: 'Melted aged gouda cheese, buffalo mozzarella, and fragrant walnut basil pesto pressed between thick slices of slow-fermented sourdough.',
            allergens: ['Gluten', 'Dairy', 'Nuts'],
            badge: 'Gourmet Melt',
            pairings: ['pour-over', 'cortado', 'iced-americano'],
            bakeNote: 'Toasted with golden butter until cheese stretches generously.'
        },
        {
            id: 'cheese-capsicum-sandwich',
            name: 'Cheese Capsicum Sandwich',
            category: 'ALL DAY PLATES',
            price: 340,
            description: 'Crisp green bell peppers, melted cheddar cheese, cracked black pepper, and herb butter grilled between artisanal bread slices.',
            allergens: ['Gluten', 'Dairy'],
            badge: 'Classic Grilled',
            pairings: ['house-cold-coffee', 'americano', 'house-fries'],
            bakeNote: 'Classic Indian café toastie with sharp melted cheese.'
        },
        {
            id: 'paneer-akuri',
            name: 'Paneer Akuri with Sourdough',
            category: 'ALL DAY PLATES',
            price: 400,
            description: 'Crumbled fresh cottage cheese tempered with roasted cumin, turmeric, caramelized onions, green chilies, and served with sourdough toast.',
            allergens: ['Dairy', 'Gluten'],
            badge: 'Vegetarian Heritage',
            pairings: ['zingly-ginger-tea', 'spanish-latte', 'rosemary-wedges'],
            bakeNote: 'Spiced aromatic cottage cheese scramble with fresh herbs.'
        },
        {
            id: 'hummus-platter-chicken',
            name: 'Hummus Platter with Chicken',
            category: 'ALL DAY PLATES',
            price: 450,
            description: 'Silky smooth chickpea tahini hummus topped with warm spiced chicken, toasted pine nuts, extra virgin olive oil, and warm pita bread.',
            allergens: ['Gluten', 'Sesame', 'Nuts'],
            badge: 'Mediterranean Platter',
            pairings: ['tonic-matcha', 'iced-pour-over', 'zaatar-fries'],
            bakeNote: 'Hand-blended hummus with ice water technique for ultra-velvety texture.'
        },
        {
            id: 'pancakes-blue-drip',
            name: 'Pancakes with House Blue Drip',
            category: 'ALL DAY PLATES',
            price: 480,
            description: 'Stack of 3 fluffy golden buttermilk pancakes topped with warm blueberry compote reduction, whipped vanilla butter, and pure maple drip.',
            allergens: ['Gluten', 'Dairy', 'Egg'],
            badge: 'Brunch Delight',
            pairings: ['sunshine-slurp', 'calming-lavender-tea', 'flat-white'],
            bakeNote: 'Cooked on griddle to a light, airy, golden-brown fluff.'
        },
        {
            id: 'herbed-ricotta-toast',
            name: 'Herbed Ricotta Sourdough Toast',
            category: 'ALL DAY PLATES',
            price: 420,
            description: 'House-whipped lemon ricotta spread thickly over toasted sourdough, crowned with blistered cherry tomatoes, basil, and aged balsamic glaze.',
            allergens: ['Gluten', 'Dairy'],
            badge: 'Artisan Toast',
            pairings: ['citrus-cloud-brew', 'berry-smoothie-bowl', 'iced-matcha-latte'],
            bakeNote: 'Whipped whole milk ricotta with organic lemon zest and thyme.'
        },
        {
            id: 'hummus-platter-falafel',
            name: 'Hummus Platter with Moong Falafel',
            category: 'ALL DAY PLATES',
            price: 400,
            description: 'Golden fried sprouted moong bean falafels, velvety tahini hummus, Kalamata olives, pickled cucumbers, and warm za\'atar pita bread.',
            allergens: ['Gluten', 'Sesame'],
            badge: 'Plant-Powered',
            pairings: ['tonic-matcha', 'chamomile-infusion', 'iced-coconut-latte'],
            bakeNote: 'Falafels ground with green herbs and freshly cracked spices.'
        },
        {
            id: 'garden-pesto-sandwich',
            name: 'Garden Pesto Cottage Cheese Sandwich',
            category: 'ALL DAY PLATES',
            price: 390,
            description: 'Grilled cottage cheese steaks, house-made walnut basil pesto, sun-dried tomatoes, and crisp rocket leaves in warm ciabatta.',
            allergens: ['Gluten', 'Dairy', 'Nuts'],
            badge: 'Gourmet Veg',
            pairings: ['iced-coconut-latte', 'chickpea-smash', 'latte-cappuccino'],
            bakeNote: 'Sun-dried tomatoes imported from Italy and house walnut pesto.'
        },

        // --- CURRY BOWLS ---
        {
            id: 'coastal-veg-curry',
            name: 'Coastal Veg Curry Bowl',
            category: 'CURRY BOWLS',
            price: 440,
            description: 'Farm-fresh garden vegetables simmered gently in rich coconut milk, tart Goan kokum, and roasted coastal spices. Served with steamed basmati rice.',
            allergens: ['None'],
            badge: 'Goan Coastal',
            pairings: ['island-brew', 'poee-veg', 'kombucha-ginger-lime'],
            bakeNote: 'Kokum and roasted ground coconut gravy prepared fresh daily.'
        },
        {
            id: 'chicken-xacuti-curry',
            name: 'Chicken Xacuti Curry Bowl',
            category: 'CURRY BOWLS',
            price: 470,
            description: 'Authentic Goan culinary masterpiece. Succulent chicken simmered in a dark, complex gravy of roasted grated coconut, white poppy seeds, and whole spices with rice.',
            allergens: ['None'],
            badge: 'Goan Heritage',
            pairings: ['poee-chicken', 'kombucha-pineapple-spice', 'americano'],
            bakeNote: 'Xacuti paste slow-roasted on low flame until deep mahogany brown.'
        },
        {
            id: 'coastal-prawns-curry',
            name: 'Coastal Prawns Curry Bowl',
            category: 'CURRY BOWLS',
            price: 490,
            description: 'Plump coastal prawns cooked in a tangy, spicy coconut and red chili ambot-tik style curry, accompanied by fragrant steamed basmati rice.',
            allergens: ['Shellfish'],
            badge: 'Signature Seafood',
            pairings: ['island-brew', 'golden-panko-prawns', 'mint-mojito'],
            bakeNote: 'Fresh catch prawns simmered gently just until tender and juicy.'
        }
    ];

    /* ==========================================================================
       2. AUTOMATED PER-ITEM SVG IMAGE GENERATION ENGINE (generateItemImage)
       ========================================================================== */
    const imageCache = {};

    function generateItemImage(item) {
        if (imageCache[item.id]) {
            return imageCache[item.id];
        }

        const category = item.category || 'HOT BREWS';
        const name = item.name || 'Café Specialty';
        const price = item.price || 250;
        const initial = name.charAt(0).toUpperCase();

        // Distinct category SVG icon artwork
        let artworkSvg = '';

        if (category === 'HOT BREWS') {
            artworkSvg = `
                <!-- Ceramic Coffee Cup with Latte Art & Steam -->
                <g transform="translate(300, 260)">
                    <!-- Saucer -->
                    <ellipse cx="0" cy="110" rx="140" ry="24" fill="#0c0908" stroke="#C89D54" stroke-width="3" opacity="0.9"/>
                    <ellipse cx="0" cy="107" rx="110" ry="16" fill="#181310" stroke="#C89D54" stroke-width="1.5" opacity="0.6"/>
                    <!-- Cup Shadow -->
                    <ellipse cx="0" cy="70" rx="85" ry="16" fill="rgba(0,0,0,0.6)"/>
                    <!-- Cup Body -->
                    <path d="M-85,0 C-85,85 85,85 85,0 Z" fill="url(#cupGrad)" stroke="#C89D54" stroke-width="3.5"/>
                    <!-- Cup Handle -->
                    <path d="M82,10 C125,12 125,60 76,64" fill="none" stroke="#C89D54" stroke-width="7" stroke-linecap="round"/>
                    <!-- Cup Rim / Liquid Surface -->
                    <ellipse cx="0" cy="0" rx="85" ry="28" fill="#2d1d13" stroke="#C89D54" stroke-width="3"/>
                    <ellipse cx="0" cy="0" rx="74" ry="22" fill="#462b1a"/>
                    <!-- Latte Art Rosette / Heart -->
                    <path d="M0,8 C-25,-12 -40,-2 0,-18 C40,-2 25,-12 0,8 Z" fill="#DFC18A" opacity="0.85"/>
                    <circle cx="0" cy="-6" r="4" fill="#DFC18A"/>
                    <!-- Steam Swirls -->
                    <path d="M-25,-35 C-35,-65 -15,-85 -25,-115" fill="none" stroke="#DFC18A" stroke-width="3" stroke-linecap="round" opacity="0.45"/>
                    <path d="M0,-38 C15,-70 -5,-95 10,-125" fill="none" stroke="#C89D54" stroke-width="3.5" stroke-linecap="round" opacity="0.6"/>
                    <path d="M25,-35 C35,-65 15,-85 25,-115" fill="none" stroke="#DFC18A" stroke-width="3" stroke-linecap="round" opacity="0.45"/>
                </g>
            `;
        } else if (category === 'COLD BREWS') {
            artworkSvg = `
                <!-- Tall Ribbed Highball Glass with Ice Cubes & Straw -->
                <g transform="translate(300, 270)">
                    <!-- Glass Base Shadow -->
                    <ellipse cx="0" cy="130" rx="70" ry="16" fill="rgba(0,0,0,0.7)"/>
                    <!-- Cold Brew Liquid Body -->
                    <path d="M-55,-90 L-45,115 C-45,128 45,128 45,115 L55,-90 Z" fill="url(#coldBrewGrad)" stroke="#C89D54" stroke-width="2.5"/>
                    <!-- Cream Cascade Layer on top -->
                    <path d="M-54,-90 C-30,-75 -10,-85 10,-78 C30,-85 45,-75 54,-90 L52,-55 C35,-45 10,-60 -10,-50 C-30,-60 -45,-45 -52,-55 Z" fill="#DFC18A" opacity="0.85"/>
                    <!-- Glass Outline -->
                    <path d="M-58,-100 L-46,120 C-46,132 46,132 46,120 L58,-100 Z" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="3"/>
                    <!-- Glass Rim -->
                    <ellipse cx="0" cy="-100" rx="58" ry="14" fill="rgba(255,255,255,0.15)" stroke="#C89D54" stroke-width="2.5"/>
                    <!-- Floating Ice Cubes -->
                    <rect x="-30" y="-50" width="28" height="28" rx="4" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" transform="rotate(15 -16 -36)"/>
                    <rect x="5" y="-30" width="26" height="26" rx="4" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" transform="rotate(-20 18 -17)"/>
                    <!-- Golden Straw -->
                    <line x1="-15" y1="90" x2="35" y2="-140" stroke="#C89D54" stroke-width="5" stroke-linecap="round"/>
                </g>
            `;
        } else if (category === "POEE'S") {
            artworkSvg = `
                <!-- Freshly Baked Goan Poee Pocket with Savory Filling -->
                <g transform="translate(300, 270)">
                    <!-- Baking Stone Plate -->
                    <ellipse cx="0" cy="95" rx="145" ry="32" fill="#0c0908" stroke="#C89D54" stroke-width="2.5"/>
                    <!-- Puffed Golden Poee Bread Shell -->
                    <ellipse cx="0" cy="20" rx="125" ry="75" fill="url(#poeeGrad)" stroke="#C89D54" stroke-width="3"/>
                    <!-- Crust Blisters / Scorches -->
                    <ellipse cx="-45" cy="-15" rx="22" ry="12" fill="#6d3a17" opacity="0.75"/>
                    <ellipse cx="35" cy="5" rx="26" ry="14" fill="#582a0e" opacity="0.8"/>
                    <ellipse cx="5" cy="-35" rx="18" ry="9" fill="#75411c" opacity="0.6"/>
                    <!-- Sliced Center Pocket Mouth -->
                    <path d="M-85,25 Q0,5 85,25 Q0,45 -85,25 Z" fill="#201510" stroke="#C89D54" stroke-width="2"/>
                    <!-- Savory Rich Filling Peeking Through -->
                    <path d="M-70,24 Q0,10 70,24 Q0,38 -70,24 Z" fill="#b94a1d"/>
                    <circle cx="-30" cy="24" r="7" fill="#4d8c28"/>
                    <circle cx="20" cy="22" r="6" fill="#DFC18A"/>
                    <circle cx="-5" cy="26" r="8" fill="#e07238"/>
                    <!-- Warm Aroma Waves -->
                    <path d="M-30,-70 Q-20,-95 -30,-120" fill="none" stroke="#DFC18A" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
                    <path d="M20,-65 Q30,-90 20,-115" fill="none" stroke="#C89D54" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
                </g>
            `;
        } else if (category === 'PIZZA') {
            artworkSvg = `
                <!-- Wood-Fired Sliced Pizza on Stone Base -->
                <g transform="translate(300, 270)">
                    <ellipse cx="0" cy="95" rx="145" ry="32" fill="#0c0908" stroke="#C89D54" stroke-width="2"/>
                    <!-- Pizza Pie Base -->
                    <ellipse cx="0" cy="15" rx="125" ry="70" fill="#cf8a3c" stroke="#8c4e16" stroke-width="4"/>
                    <!-- Tomato Sauce Layer -->
                    <ellipse cx="0" cy="15" rx="112" ry="60" fill="#a82315"/>
                    <!-- Melted Cheese Layer -->
                    <path d="M-90,15 Q-50,0 0,15 Q50,0 90,15 Q50,55 0,55 Q-50,55 -90,15 Z" fill="#ffd56b"/>
                    <!-- Basil & Toppings -->
                    <circle cx="-40" cy="10" r="14" fill="#781710" stroke="#500b05" stroke-width="1.5"/>
                    <circle cx="35" cy="5" r="14" fill="#781710" stroke="#500b05" stroke-width="1.5"/>
                    <circle cx="0" cy="35" r="13" fill="#781710" stroke="#500b05" stroke-width="1.5"/>
                    <!-- Fresh Basil Leaves -->
                    <path d="M-15,-5 C-25,-25 5,-20 -5,5 Z" fill="#2d7322"/>
                    <path d="M30,25 C45,15 40,40 20,35 Z" fill="#368c29"/>
                </g>
            `;
        } else if (category === 'PASTA') {
            artworkSvg = `
                <!-- Ceramic Pasta Bowl with Basil Leaf -->
                <g transform="translate(300, 270)">
                    <ellipse cx="0" cy="100" rx="140" ry="28" fill="#0c0908"/>
                    <!-- Deep Bowl -->
                    <path d="M-120,10 C-115,95 115,95 120,10 Z" fill="#181310" stroke="#C89D54" stroke-width="3"/>
                    <ellipse cx="0" cy="10" rx="120" ry="34" fill="#2b1f18" stroke="#C89D54" stroke-width="2"/>
                    <!-- Pasta Swirls -->
                    <ellipse cx="0" cy="10" rx="95" ry="24" fill="#e89c38"/>
                    <path d="M-60,5 Q-30,-15 0,8 Q30,-15 60,5" fill="none" stroke="#fff1b8" stroke-width="9" stroke-linecap="round"/>
                    <path d="M-40,15 Q0,30 40,12" fill="none" stroke="#d4791e" stroke-width="7" stroke-linecap="round"/>
                    <!-- Basil Leaf & Parmesan Dusting -->
                    <path d="M0,0 C-15,-25 15,-25 0,15 Z" fill="#2d7322"/>
                    <circle cx="-15" cy="5" r="2.5" fill="#FFFFFF"/>
                    <circle cx="20" cy="8" r="2.5" fill="#FFFFFF"/>
                    <circle cx="5" cy="18" r="2" fill="#FFFFFF"/>
                </g>
            `;
        } else if (category === 'CURRY BOWLS') {
            artworkSvg = `
                <!-- Goan Clay Curry Bowl with Steamed Rice -->
                <g transform="translate(300, 270)">
                    <ellipse cx="0" cy="100" rx="140" ry="28" fill="#0c0908"/>
                    <!-- Traditional Clay Handi Bowl -->
                    <path d="M-115,15 C-110,95 110,95 115,15 Z" fill="#5c2c16" stroke="#C89D54" stroke-width="3"/>
                    <ellipse cx="0" cy="15" rx="115" ry="32" fill="#2e1409" stroke="#C89D54" stroke-width="2"/>
                    <!-- Rich Amber Coastal Coconut Curry -->
                    <ellipse cx="0" cy="16" rx="98" ry="24" fill="#c44e14"/>
                    <!-- Coconut Milk Swirl & Curry Essence -->
                    <path d="M-45,18 Q0,5 45,18" fill="none" stroke="#fff4de" stroke-width="5" stroke-linecap="round" opacity="0.9"/>
                    <circle cx="0" cy="14" r="16" fill="#f0f0eb" stroke="#d4af37" stroke-width="1.5"/>
                    <path d="M-10,-5 Q0,-30 10,-5 Z" fill="#2d7322"/>
                    <!-- Aromatic Steam -->
                    <path d="M-20,-30 C-30,-60 -10,-80 -20,-110" fill="none" stroke="#DFC18A" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
                    <path d="M20,-25 C30,-55 10,-75 20,-105" fill="none" stroke="#C89D54" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
                </g>
            `;
        } else if (category === 'MATCHA') {
            artworkSvg = `
                <!-- Ceremonial Matcha Bowl with Whisked Emerald Froth -->
                <g transform="translate(300, 270)">
                    <ellipse cx="0" cy="95" rx="130" ry="25" fill="#0c0908"/>
                    <path d="M-100,5 C-95,85 95,85 100,5 Z" fill="#181e14" stroke="#7aa34b" stroke-width="3"/>
                    <ellipse cx="0" cy="5" rx="100" ry="28" fill="#11170d" stroke="#7aa34b" stroke-width="2"/>
                    <!-- Emerald Matcha Microfoam -->
                    <ellipse cx="0" cy="6" rx="88" ry="22" fill="#4d7d24"/>
                    <circle cx="-25" cy="5" r="14" fill="#629c31" opacity="0.8"/>
                    <circle cx="20" cy="3" r="16" fill="#629c31" opacity="0.8"/>
                    <circle cx="0" cy="8" r="18" fill="#75ba38" opacity="0.6"/>
                    <!-- Bamboo Scoop Accent -->
                    <path d="M-75,-40 L60,45" stroke="#d4b36a" stroke-width="4.5" stroke-linecap="round"/>
                </g>
            `;
        } else if (category === 'ON THE ROCKS' || category === 'KOMBUCHA') {
            artworkSvg = `
                <!-- Chilled Rocks Glass with Mint & Citrus Slice -->
                <g transform="translate(300, 270)">
                    <ellipse cx="0" cy="115" rx="75" ry="18" fill="#0c0908"/>
                    <path d="M-60,-70 L-48,105 C-48,118 48,118 48,105 L60,-70 Z" fill="url(#rocksGrad)" stroke="#C89D54" stroke-width="2.5"/>
                    <ellipse cx="0" cy="-70" rx="60" ry="16" fill="rgba(255,255,255,0.18)" stroke="#C89D54" stroke-width="2"/>
                    <!-- Citrus Slice on Rim -->
                    <circle cx="-50" cy="-75" r="26" fill="#f5af19" stroke="#fff" stroke-width="2"/>
                    <circle cx="-50" cy="-75" r="19" fill="#e65c00" opacity="0.8"/>
                    <!-- Fresh Mint Sprig -->
                    <path d="M-30,-95 C-45,-120 -15,-110 -25,-85 Z" fill="#2d7322"/>
                    <path d="M-10,-90 C0,-115 25,-105 10,-85 Z" fill="#439634"/>
                </g>
            `;
        } else if (category === 'ARTISANAL TEAS') {
            artworkSvg = `
                <!-- Glass Teapot with Amber Brew & Aromatic Steam -->
                <g transform="translate(300, 270)">
                    <ellipse cx="0" cy="100" rx="120" ry="24" fill="#0c0908"/>
                    <!-- Teapot Body -->
                    <circle cx="0" cy="20" r="75" fill="url(#teaGrad)" stroke="#C89D54" stroke-width="3"/>
                    <!-- Teapot Lid -->
                    <ellipse cx="0" cy="-55" rx="38" ry="12" fill="#2d1d13" stroke="#C89D54" stroke-width="2.5"/>
                    <circle cx="0" cy="-68" r="9" fill="#DFC18A" stroke="#C89D54" stroke-width="2"/>
                    <!-- Spout & Handle -->
                    <path d="M-70,10 C-110,0 -120,-35 -95,-40" fill="none" stroke="#C89D54" stroke-width="6" stroke-linecap="round"/>
                    <path d="M70,-5 C115,-5 115,50 68,45" fill="none" stroke="#C89D54" stroke-width="7" stroke-linecap="round"/>
                    <!-- Steam -->
                    <path d="M-100,-50 C-115,-80 -95,-100 -105,-130" fill="none" stroke="#DFC18A" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
                </g>
            `;
        } else {
            // General All Day Plates / Starters / Smoothies
            artworkSvg = `
                <!-- Artisanal Gourmet Platter / Toast -->
                <g transform="translate(300, 270)">
                    <ellipse cx="0" cy="95" rx="145" ry="32" fill="#0c0908" stroke="#C89D54" stroke-width="2.5"/>
                    <!-- Wooden / Slate Board -->
                    <rect x="-115" y="-15" width="230" height="90" rx="16" fill="#241913" stroke="#C89D54" stroke-width="3"/>
                    <!-- Artisanal Sourdough Sandwich / Plate Element -->
                    <rect x="-85" y="-35" width="170" height="55" rx="12" fill="url(#poeeGrad)" stroke="#8c4e16" stroke-width="2.5"/>
                    <path d="M-80,-5 Q0,15 80,-5" fill="none" stroke="#2d7322" stroke-width="6" stroke-linecap="round"/>
                    <path d="M-75,10 Q0,25 75,10" fill="none" stroke="#d43922" stroke-width="5" stroke-linecap="round"/>
                    <circle cx="-35" cy="45" r="18" fill="#e69c24" stroke="#C89D54" stroke-width="2"/>
                </g>
            `;
        }

        // SVG Document String
        const svgContent = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
                <defs>
                    <radialGradient id="bgGlow" cx="50%" cy="45%" r="65%">
                        <stop offset="0%" stop-color="#2a1f18" stop-opacity="0.95"/>
                        <stop offset="50%" stop-color="#18120e" stop-opacity="0.98"/>
                        <stop offset="100%" stop-color="#0e0a08" stop-opacity="1"/>
                    </radialGradient>
                    <radialGradient id="centerGlow" cx="50%" cy="45%" r="35%">
                        <stop offset="0%" stop-color="#C89D54" stop-opacity="0.32"/>
                        <stop offset="100%" stop-color="#C89D54" stop-opacity="0"/>
                    </radialGradient>
                    <linearGradient id="cupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#30231c"/>
                        <stop offset="50%" stop-color="#1f1612"/>
                        <stop offset="100%" stop-color="#120c09"/>
                    </linearGradient>
                    <linearGradient id="coldBrewGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#462a19"/>
                        <stop offset="35%" stop-color="#2c170b"/>
                        <stop offset="100%" stop-color="#140a04"/>
                    </linearGradient>
                    <linearGradient id="poeeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#e3a758"/>
                        <stop offset="50%" stop-color="#ba752d"/>
                        <stop offset="100%" stop-color="#7a4212"/>
                    </linearGradient>
                    <linearGradient id="rocksGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#3b7a8c" stop-opacity="0.8"/>
                        <stop offset="100%" stop-color="#194857" stop-opacity="0.9"/>
                    </linearGradient>
                    <linearGradient id="teaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#d97d27" stop-opacity="0.85"/>
                        <stop offset="100%" stop-color="#803d09" stop-opacity="0.95"/>
                    </linearGradient>
                </defs>

                <!-- Studio Backdrop -->
                <rect width="600" height="600" fill="url(#bgGlow)"/>
                <circle cx="300" cy="270" r="220" fill="url(#centerGlow)"/>

                <!-- Double Gold Border & Filigree Accents -->
                <rect x="22" y="22" width="556" height="556" rx="20" fill="none" stroke="#C89D54" stroke-width="1.8" opacity="0.45"/>
                <rect x="30" y="30" width="540" height="540" rx="16" fill="none" stroke="#C89D54" stroke-width="0.8" opacity="0.25"/>

                <!-- Corner Filigrees -->
                <path d="M38,55 L38,38 L55,38" fill="none" stroke="#DFC18A" stroke-width="2"/>
                <path d="M562,55 L562,38 L545,38" fill="none" stroke="#DFC18A" stroke-width="2"/>
                <path d="M38,545 L38,562 L55,562" fill="none" stroke="#DFC18A" stroke-width="2"/>
                <path d="M562,545 L562,562 L545,562" fill="none" stroke="#DFC18A" stroke-width="2"/>

                <!-- Artwork Group -->
                ${artworkSvg}

                <!-- Bottom Banner Ribbon -->
                <g transform="translate(300, 495)">
                    <!-- Banner Backdrop -->
                    <rect x="-240" y="-32" width="480" height="64" rx="14" fill="rgba(14, 10, 8, 0.92)" stroke="#C89D54" stroke-width="1.5"/>
                    <!-- Item Initial Gold Seal -->
                    <circle cx="-195" cy="0" r="20" fill="#C89D54"/>
                    <text x="-195" y="7" font-family="'Cinzel', serif" font-size="19" font-weight="bold" fill="#110E0C" text-anchor="middle">${initial}</text>
                    <!-- Item Name -->
                    <text x="-155" y="-5" font-family="'Cinzel', serif" font-size="16" font-weight="600" fill="#FFFFFF" text-anchor="start">${escapeXml(name.length > 25 ? name.substring(0, 24) + '...' : name)}</text>
                    <!-- Category & Subtitle -->
                    <text x="-155" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="1.5" fill="#DFC18A" text-anchor="start">${escapeXml(category)}</text>
                    <!-- Price Tag -->
                    <rect x="145" y="-18" width="80" height="36" rx="8" fill="rgba(200, 157, 84, 0.18)" stroke="#C89D54" stroke-width="1.2"/>
                    <text x="185" y="6" font-family="'Cinzel', serif" font-size="16" font-weight="bold" fill="#DFC18A" text-anchor="middle">₹${price}</text>
                </g>
            </svg>
        `;

        const dataUri = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgContent.trim());
        imageCache[item.id] = dataUri;
        return dataUri;
    }

    function escapeXml(unsafe) {
        return (unsafe || '').replace(/[<>&'"]/g, c => {
            switch (c) {
                case '<': return '&lt;';
                case '>': return '&gt;';
                case '&': return '&amp;';
                case '\'': return '&apos;';
                case '"': return '&quot;';
            }
        });
    }

    /* ==========================================================================
       3. INTERACTIVE FIKA MEGA MENU & HERO DETAIL ENGINE
       ========================================================================== */
    let currentHeroIndex = 0;
    let filteredItems = [...MENU_ITEMS];

    document.addEventListener('DOMContentLoaded', () => {
        initFikaMenu();
        initHeroModal();
        wirePageMenuItems();
    });

    function initFikaMenu() {
        const toggleBtn = document.getElementById('menuDropdownToggle');
        const megaMenu = document.getElementById('fikaMegaMenu');
        const closeBtn = document.getElementById('fikaMegaClose');
        const searchInput = document.getElementById('fikaMenuSearch');
        const counterSlider = document.getElementById('fikaCounterSlider');
        const categoryTabs = document.getElementById('fikaCategoryTabs');
        const gridContainer = document.getElementById('fikaGridContainer');

        if (!megaMenu) return;

        // Populate "ON THE COUNTER TODAY" Pill Slider
        if (counterSlider) {
            const counterPicks = [
                'poee-chicken', 'orange-cold-brew', 'lotus-biscoff-frappe',
                'ros-omelette', 'tiramisu-iced-latte', 'french-toast',
                'spanish-latte', 'belgian-obsession', 'pesto-pasta', 'coastal-prawns-curry'
            ];

            const picks = counterPicks.map(id => MENU_ITEMS.find(item => item.id === id)).filter(Boolean);
            counterSlider.innerHTML = picks.map(item => `
                <div class="fika-counter-card" onclick="window.fikaOpenHero('${item.id}')">
                    <img class="fika-counter-img" src="${generateItemImage(item)}" alt="${escapeXml(item.name)}" loading="lazy">
                    <div class="fika-counter-info">
                        <span class="fika-counter-tag">${escapeXml(item.badge || 'TODAY')}</span>
                        <span class="fika-counter-name">${escapeXml(item.name)}</span>
                        <span class="fika-counter-price">₹${item.price}</span>
                    </div>
                </div>
            `).join('');
        }

        // Render Category Tabs
        if (categoryTabs) {
            const categories = ['ALL', ...new Set(MENU_ITEMS.map(i => i.category))];
            categoryTabs.innerHTML = categories.map((cat, idx) => `
                <button type="button" class="fika-tab-btn ${idx === 0 ? 'active' : ''}" data-cat="${cat}">
                    ${cat}
                </button>
            `).join('');

            categoryTabs.addEventListener('click', (e) => {
                const btn = e.target.closest('.fika-tab-btn');
                if (!btn) return;
                categoryTabs.querySelectorAll('.fika-tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const selectedCat = btn.getAttribute('data-cat');
                applyFilter(selectedCat, searchInput ? searchInput.value : '');
            });
        }

        // Search Input Filter
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const activeTab = categoryTabs ? categoryTabs.querySelector('.fika-tab-btn.active') : null;
                const selectedCat = activeTab ? activeTab.getAttribute('data-cat') : 'ALL';
                applyFilter(selectedCat, e.target.value);
            });
        }

        function applyFilter(category, query) {
            const q = (query || '').toLowerCase().trim();
            filteredItems = MENU_ITEMS.filter(item => {
                const matchCat = (category === 'ALL' || item.category === category);
                const matchQuery = !q || item.name.toLowerCase().includes(q) ||
                    (item.description && item.description.toLowerCase().includes(q)) ||
                    (item.category && item.category.toLowerCase().includes(q));
                return matchCat && matchQuery;
            });
            renderGrid(filteredItems);
        }

        function renderGrid(items) {
            if (!gridContainer) return;
            if (items.length === 0) {
                gridContainer.innerHTML = `
                    <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: rgba(255,255,255,0.6);">
                        <i class="fa-solid fa-mug-hot" style="font-size: 2rem; color: var(--accent-gold); margin-bottom: 1rem; display: block;"></i>
                        <p style="font-family: var(--font-heading); font-size: 1.1rem; color: #FFF;">No menu items matched your search.</p>
                        <p style="font-size: 0.88rem; margin-top: 0.4rem;">Try searching for "Poee", "Latte", "Pizza", or "Cold Brew".</p>
                    </div>
                `;
                return;
            }

            gridContainer.innerHTML = items.map(item => `
                <div class="fika-menu-item-row" onclick="window.fikaOpenHero('${item.id}')">
                    <img class="fika-row-thumb" src="${generateItemImage(item)}" alt="${escapeXml(item.name)}" loading="lazy">
                    <div class="fika-row-body">
                        <div class="fika-row-header">
                            <span class="fika-row-name">${escapeXml(item.name)}</span>
                            <span class="fika-row-price">₹${item.price}</span>
                        </div>
                        <p class="fika-row-desc">${escapeXml(item.description)}</p>
                    </div>
                    <i class="fa-solid fa-arrow-right fika-row-arrow"></i>
                </div>
            `).join('');
        }

        // Initial Grid Render
        renderGrid(MENU_ITEMS);

        // Toggle Open / Close
        if (toggleBtn) {
            toggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = megaMenu.classList.contains('open');
                if (isOpen) {
                    closeMenu();
                } else {
                    openMenu();
                }
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', closeMenu);
        }

        function openMenu() {
            megaMenu.classList.add('open');
            if (toggleBtn) toggleBtn.classList.add('active');
            document.body.style.overflow = 'hidden';
            if (searchInput) searchInput.focus();
        }

        function closeMenu() {
            megaMenu.classList.remove('open');
            if (toggleBtn) toggleBtn.classList.remove('active');
            document.body.style.overflow = '';
        }

        window.fikaOpenMegaMenu = openMenu;
        window.fikaCloseMegaMenu = closeMenu;

        // Dismiss when clicking outside
        document.addEventListener('click', (e) => {
            if (megaMenu.classList.contains('open') && !megaMenu.contains(e.target) && e.target !== toggleBtn && !toggleBtn.contains(e.target)) {
                closeMenu();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && megaMenu.classList.contains('open')) {
                closeMenu();
            }
        });
    }

    /* ==========================================================================
       4. HERO DETAIL MODAL ENGINE
       ========================================================================== */
    function initHeroModal() {
        const modal = document.getElementById('fikaHeroDetail');
        const closeBtn = document.getElementById('fikaHeroClose');
        const prevBtn = document.getElementById('fikaPrevBtn');
        const nextBtn = document.getElementById('fikaNextBtn');
        const backBtn = document.getElementById('fikaBackBtn');

        if (!modal) return;

        window.fikaOpenHero = function (itemId) {
            const idx = MENU_ITEMS.findIndex(i => i.id === itemId);
            if (idx === -1) return;
            currentHeroIndex = idx;
            renderHero(MENU_ITEMS[currentHeroIndex]);
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        window.fikaCloseHero = function () {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        };

        if (closeBtn) closeBtn.addEventListener('click', window.fikaCloseHero);
        if (backBtn) backBtn.addEventListener('click', window.fikaCloseHero);

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                currentHeroIndex = (currentHeroIndex - 1 + MENU_ITEMS.length) % MENU_ITEMS.length;
                renderHero(MENU_ITEMS[currentHeroIndex]);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                currentHeroIndex = (currentHeroIndex + 1) % MENU_ITEMS.length;
                renderHero(MENU_ITEMS[currentHeroIndex]);
            });
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) window.fikaCloseHero();
        });

        document.addEventListener('keydown', (e) => {
            if (!modal.classList.contains('active')) return;
            if (e.key === 'Escape') window.fikaCloseHero();
            if (e.key === 'ArrowLeft') {
                currentHeroIndex = (currentHeroIndex - 1 + MENU_ITEMS.length) % MENU_ITEMS.length;
                renderHero(MENU_ITEMS[currentHeroIndex]);
            }
            if (e.key === 'ArrowRight') {
                currentHeroIndex = (currentHeroIndex + 1) % MENU_ITEMS.length;
                renderHero(MENU_ITEMS[currentHeroIndex]);
            }
        });
    }

    function renderHero(item) {
        if (!item) return;

        // Badges
        const badgesContainer = document.getElementById('fikaHeroBadges');
        if (badgesContainer) {
            const badges = [
                `<span class="fika-pill-badge category">${escapeXml(item.category)}</span>`,
                `<span class="fika-pill-badge">${escapeXml(item.badge || 'FRESH BAKE')}</span>`
            ];
            if (item.subCategory) {
                badges.push(`<span class="fika-pill-badge">${escapeXml(item.subCategory)}</span>`);
            }
            badgesContainer.innerHTML = badges.join('');
        }

        // Title
        const titleEl = document.getElementById('fikaHeroTitle');
        if (titleEl) titleEl.textContent = item.name;

        // Price
        const priceEl = document.getElementById('fikaHeroPrice');
        if (priceEl) priceEl.textContent = `₹${item.price}`;

        // Description
        const descEl = document.getElementById('fikaHeroDesc');
        if (descEl) descEl.textContent = item.description;

        // Allergens
        const allergensEl = document.getElementById('fikaHeroAllergens');
        if (allergensEl) {
            const list = (item.allergens && item.allergens.length) ? item.allergens.join(', ') : 'None';
            allergensEl.textContent = list;
        }

        // Craft Note
        const noteEl = document.getElementById('fikaHeroNote');
        if (noteEl) {
            noteEl.textContent = item.bakeNote || 'Prepared artisanally on order using fine estate ingredients.';
        }

        // Image Showcase
        const imgEl = document.getElementById('fikaHeroShowcaseImg');
        if (imgEl) {
            imgEl.src = generateItemImage(item);
            imgEl.alt = item.name;
        }

        // Goes Well With... Pairings Slider
        const pairingsContainer = document.getElementById('fikaHeroPairings');
        if (pairingsContainer) {
            const pairIds = item.pairings || [];
            const pairedItems = pairIds.map(id => MENU_ITEMS.find(m => m.id === id)).filter(Boolean);

            if (pairedItems.length === 0) {
                pairingsContainer.innerHTML = `<p style="font-size:0.8rem; color:rgba(255,255,255,0.5);">Handcrafted on order.</p>`;
            } else {
                pairingsContainer.innerHTML = pairedItems.map(p => `
                    <div class="fika-pairing-item" onclick="window.fikaOpenHero('${p.id}')">
                        <img class="fika-pairing-img" src="${generateItemImage(p)}" alt="${escapeXml(p.name)}" loading="lazy">
                        <div>
                            <div class="fika-pairing-name">${escapeXml(p.name)}</div>
                            <div class="fika-pairing-price">₹${p.price}</div>
                        </div>
                    </div>
                `).join('');
            }
        }

        // WhatsApp Pre-Order Button Link
        const preOrderBtn = document.getElementById('fikaPreOrderBtn');
        if (preOrderBtn) {
            const waText = encodeURIComponent(`Hi Café Obregado! I'd like to pre-order: ${item.name} (₹${item.price}) for my upcoming visit.`);
            preOrderBtn.href = `https://wa.me/919819544999?text=${waText}`;
        }
    }

    /* ==========================================================================
       5. WIRE PAGE MENU ITEMS TO TRIGGER FIKA HERO VIEW
       ========================================================================== */
    function wirePageMenuItems() {
        // Any menu item click on the page opens the Fika Hero detail view
        document.querySelectorAll('.menu-item-row, .menu-item-card, .btn-menu-explore').forEach(elem => {
            elem.addEventListener('click', () => {
                const itemName = elem.querySelector('.menu-item-name, h4, h3');
                if (itemName) {
                    const text = itemName.textContent.trim().toLowerCase();
                    const match = MENU_ITEMS.find(m => text.includes(m.name.toLowerCase()) || m.name.toLowerCase().includes(text));
                    if (match) {
                        window.fikaOpenHero(match.id);
                        return;
                    }
                }
                // Fallback opens mega menu
                if (window.fikaOpenMegaMenu) window.fikaOpenMegaMenu();
            });
        });
    }

    // Export dataset globally for console testing
    window.OBREGATO_MENU = MENU_ITEMS;
    window.generateItemImage = generateItemImage;

})();
