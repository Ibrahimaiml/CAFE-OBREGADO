Set-Location "c:\Users\THANSERA\OneDrive\Documents\CAFE OBREGATO"
$filePath = (Resolve-Path "index.html").Path
$content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)

# Find start and end of #menu section
$mStart = '<section class="menu-section" id="menu">'
$mEnd = '<section class="showcase-section" id="experience">'

$idxStart = $content.IndexOf($mStart)
$idxEnd = $content.IndexOf($mEnd)

if ($idxStart -eq -1 -or $idxEnd -eq -1) {
    Write-Error "Could not find start or end of menu section!"
    exit 1
}

$cleanMenuHtml = @'
    <section class="menu-section" id="menu">
        <div class="section-header center">
            <div class="section-tag">Curated Culinary Selection</div>
            <h2 class="section-title">Our Signature Menu</h2>
            <p class="section-desc">From meticulously pulled single-origin Arabica to slow-simmered coastal curry bowls and house-baked Goan poee.</p>
        </div>

        <!-- STICKY HORIZONTALLY-SCROLLABLE CATEGORY NAVIGATION BAR -->
        <div class="menu-sticky-categories-bar" id="menuCategoriesBar">
            <a href="#cat-hot-brews" class="menu-cat-pill active"><i class="fa-solid fa-mug-saucer"></i> Hot Brews</a>
            <a href="#cat-cold-brews" class="menu-cat-pill"><i class="fa-solid fa-snowflake"></i> Cold Brews</a>
            <a href="#cat-poees" class="menu-cat-pill"><i class="fa-solid fa-bread-slice"></i> Poee's</a>
            <a href="#cat-starters" class="menu-cat-pill"><i class="fa-solid fa-fire-burner"></i> Starters</a>
            <a href="#cat-pizza" class="menu-cat-pill"><i class="fa-solid fa-pizza-slice"></i> Pizza</a>
            <a href="#cat-pasta" class="menu-cat-pill"><i class="fa-solid fa-bowl-food"></i> Pasta</a>
            <a href="#cat-all-day" class="menu-cat-pill"><i class="fa-solid fa-plate-wheat"></i> All Day Plates</a>
            <a href="#cat-curry-bowls" class="menu-cat-pill"><i class="fa-solid fa-bowl-rice"></i> Curry Bowls</a>
            <a href="#cat-matcha-teas" class="menu-cat-pill"><i class="fa-solid fa-leaf"></i> Matcha &amp; Teas</a>
            <a href="#cat-beverages" class="menu-cat-pill"><i class="fa-solid fa-glass-water"></i> On The Rocks &amp; Smoothies</a>
        </div>

        <div class="menu-layout">
            <!-- Left Sticky Showcase Card -->
            <div class="menu-sticky-col">
                <div class="menu-sticky-img-card">
                    <img src="CAFE 4.jpeg" alt="Café Obregado Coffee and Freshly Baked Poee Sandwich">
                    <div class="menu-img-caption">
                        <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1.5px; color:var(--accent-gold-light); font-weight:600;">Chef's Special pairing</span>
                        <h3>Fresh Poee &amp; Specialty Latte</h3>
                        <p>Warm oven-baked poee pocket filled with savory chicken kheema alongside a silky, balanced double-shot latte.</p>
                    </div>
                </div>
            </div>

            <!-- Right Categorized Menu List (Single-Column Clean Rows) -->
            <div class="menu-categories">

                <!-- 1. HOT BREWS -->
                <div class="menu-cat-group-clean" id="cat-hot-brews">
                    <div class="menu-cat-header">
                        <h3 class="menu-cat-title"><i class="fa-solid fa-mug-saucer"></i> Hot Brews</h3>
                        <span class="menu-cat-tag">Artisanal Espresso Bar</span>
                    </div>

                    <div style="font-size:0.78rem; text-transform:uppercase; letter-spacing:1.5px; color:#D4AF37; font-weight:700; margin:0.8rem 0 0.5rem 0.5rem;">— Black —</div>
                    <div class="menu-items-list-clean">
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Espresso</h4></div>
                                <p class="menu-item-desc-clean">Intense single-origin Arabica extraction with rich golden crema and dark chocolate depth.</p>
                            </div>
                            <div class="menu-item-price-clean">₹180</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Pour Over</h4><span class="menu-item-badge-clean">Single Origin</span></div>
                                <p class="menu-item-desc-clean">Meticulously hand-dripped V60 pour over emphasizing floral notes and bright citrus clarity.</p>
                            </div>
                            <div class="menu-item-price-clean">₹240</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Americano</h4></div>
                                <p class="menu-item-desc-clean">Double-shot bold espresso pulled over hot filtered mineral water for a clean extended cup.</p>
                            </div>
                            <div class="menu-item-price-clean">₹220</div>
                        </div>
                    </div>

                    <div style="font-size:0.78rem; text-transform:uppercase; letter-spacing:1.5px; color:#D4AF37; font-weight:700; margin:1.4rem 0 0.5rem 0.5rem;">— White —</div>
                    <div class="menu-items-list-clean">
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Cortado</h4></div>
                                <p class="menu-item-desc-clean">Equal ratio of potent espresso and silky micro-foamed warm milk in a heavy glass.</p>
                            </div>
                            <div class="menu-item-price-clean">₹220</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Macchiato</h4></div>
                                <p class="menu-item-desc-clean">Robust Arabica espresso lightly stained with a velvety dollop of steamed milk froth.</p>
                            </div>
                            <div class="menu-item-price-clean">₹200</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Flat White</h4><span class="menu-item-badge-clean">Barista Choice</span></div>
                                <p class="menu-item-desc-clean">Double ristretto shots folded seamlessly with glossy whole milk micro-foam.</p>
                            </div>
                            <div class="menu-item-price-clean">₹240</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Spanish Latte</h4><span class="menu-item-badge-clean">Popular</span></div>
                                <p class="menu-item-desc-clean">Decadent sweetened condensed milk blend balanced with bold dark roast espresso.</p>
                            </div>
                            <div class="menu-item-price-clean">₹310</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Sea Salt Mocha</h4></div>
                                <p class="menu-item-desc-clean">Artisanal dark cocoa, flaky sea salt crystals, espresso, and textured warm milk.</p>
                            </div>
                            <div class="menu-item-price-clean">₹330</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Latte / Cappuccino</h4></div>
                                <p class="menu-item-desc-clean">Classic comfort brew crafted with balanced micro-foam and single-estate espresso.</p>
                            </div>
                            <div class="menu-item-price-clean">₹250</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Orange Zest Mocha</h4><span class="menu-item-badge-clean">Chef Special</span></div>
                                <p class="menu-item-desc-clean">Fragrant fresh orange peel essence expressed into molten dark chocolate mocha.</p>
                            </div>
                            <div class="menu-item-price-clean">₹340</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Signature Hot Chocolate</h4><span class="menu-item-badge-clean">Belgian Cocoa</span></div>
                                <p class="menu-item-desc-clean">Real Belgian 70% dark chocolate slow-melted into whole milk with toasted marshmallow fluff.</p>
                            </div>
                            <div class="menu-item-price-clean">₹380</div>
                        </div>
                    </div>
                </div>

                <!-- 2. COLD BREWS -->
                <div class="menu-cat-group-clean" id="cat-cold-brews">
                    <div class="menu-cat-header">
                        <h3 class="menu-cat-title"><i class="fa-solid fa-snowflake"></i> Cold Brews</h3>
                        <span class="menu-cat-tag">Chilled Signatures</span>
                    </div>

                    <div style="font-size:0.78rem; text-transform:uppercase; letter-spacing:1.5px; color:#D4AF37; font-weight:700; margin:0.8rem 0 0.5rem 0.5rem;">— Black —</div>
                    <div class="menu-items-list-clean">
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Iced Americano</h4></div>
                                <p class="menu-item-desc-clean">Double espresso extracted over artisan ice and chilled mineral water. Refreshing and crisp.</p>
                            </div>
                            <div class="menu-item-price-clean">₹240</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Iced Pour Over</h4></div>
                                <p class="menu-item-desc-clean">Flash-chilled hand-dripped Arabica preserving crisp floral aroma and fruit notes.</p>
                            </div>
                            <div class="menu-item-price-clean">₹260</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Orange Cold Brew</h4><span class="menu-item-badge-clean">Top Seller</span></div>
                                <p class="menu-item-desc-clean">18-hour slow steeped cold brew layered over fresh Valencia orange reduction.</p>
                            </div>
                            <div class="menu-item-price-clean">₹360</div>
                        </div>
                    </div>

                    <div style="font-size:0.78rem; text-transform:uppercase; letter-spacing:1.5px; color:#D4AF37; font-weight:700; margin:1.4rem 0 0.5rem 0.5rem;">— White —</div>
                    <div class="menu-items-list-clean">
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Affogato</h4></div>
                                <p class="menu-item-desc-clean">Hot double espresso poured over rich Madagascar vanilla bean gelato.</p>
                            </div>
                            <div class="menu-item-price-clean">₹310</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Iced Latte</h4></div>
                                <p class="menu-item-desc-clean">Chilled espresso and cold milk served over handcrafted ice spheres.</p>
                            </div>
                            <div class="menu-item-price-clean">₹280</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Island Brew</h4><span class="menu-item-badge-clean">Coastal Special</span></div>
                                <p class="menu-item-desc-clean">Tropical coconut milk and cold brew coffee fusion with toasted coconut flakes.</p>
                            </div>
                            <div class="menu-item-price-clean">₹350</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Coffee Milkshake</h4></div>
                                <p class="menu-item-desc-clean">Thick blended Arabica espresso, vanilla ice cream, and chilled milk.</p>
                            </div>
                            <div class="menu-item-price-clean">₹320</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Tiramisu Affogato</h4></div>
                                <p class="menu-item-desc-clean">Mascarpone gelato and ladyfinger biscuits drowned in piping hot double espresso.</p>
                            </div>
                            <div class="menu-item-price-clean">₹360</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Citrus Cloud Brew</h4></div>
                                <p class="menu-item-desc-clean">Cold brew crowned with a light aerated citrus cold foam that cascades down the glass.</p>
                            </div>
                            <div class="menu-item-price-clean">₹350</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">House Cold Coffee</h4><span class="menu-item-badge-clean">Classic</span></div>
                                <p class="menu-item-desc-clean">Our nostalgic, ultra-thick Indian café-style cold brew blended to creamy perfection.</p>
                            </div>
                            <div class="menu-item-price-clean">₹310</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Tiramisu Iced Latte</h4><span class="menu-item-badge-clean">Signature</span></div>
                                <p class="menu-item-desc-clean">Layered cold brew, house mascarpone sweet cream, and ladyfinger biscuit crumbs.</p>
                            </div>
                            <div class="menu-item-price-clean">₹420</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Iced Coconut Latte</h4><span class="menu-item-badge-clean">Plant-Based</span></div>
                                <p class="menu-item-desc-clean">Silky coconut milk and chilled espresso poured over rocks. Naturally dairy-free.</p>
                            </div>
                            <div class="menu-item-price-clean">₹390</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Lotus Biscoff Frappe</h4><span class="menu-item-badge-clean">Best Seller</span></div>
                                <p class="menu-item-desc-clean">Caramelized speculoos cookie butter whipped with espresso, ice, and biscuit crunch.</p>
                            </div>
                            <div class="menu-item-price-clean">₹380</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Vietnamese Iced Coffee</h4></div>
                                <p class="menu-item-desc-clean">Traditional slow-dripped bold coffee stirred with sweet condensed milk over ice.</p>
                            </div>
                            <div class="menu-item-price-clean">₹320</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Belgian Obsession</h4><span class="menu-item-badge-clean">The OG</span></div>
                                <p class="menu-item-desc-clean">The OG Belgian Cold Chocolate — pure Callebaut ganache shaken with cold milk and cocoa.</p>
                            </div>
                            <div class="menu-item-price-clean">₹450</div>
                        </div>
                    </div>
                </div>

                <!-- 3. POEE'S -->
                <div class="menu-cat-group-clean" id="cat-poees">
                    <div class="menu-cat-header">
                        <h3 class="menu-cat-title"><i class="fa-solid fa-bread-slice"></i> Poee's</h3>
                        <span class="menu-cat-tag">House-Baked Goan Bread</span>
                    </div>
                    <div class="menu-items-list-clean">
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Veg Poee Pocket</h4></div>
                                <p class="menu-item-desc-clean">Fermented Goan poee stuffed with roasted bell peppers, sweet corn, and spiced cottage cheese.</p>
                            </div>
                            <div class="menu-item-price-clean">₹360</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Paneer Poee Pocket</h4></div>
                                <p class="menu-item-desc-clean">Tandoori cottage cheese cubes, pickled shallots, coriander, and mint mayo in fresh poee.</p>
                            </div>
                            <div class="menu-item-price-clean">₹390</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Chicken Poee Pocket</h4><span class="menu-item-badge-clean">Chef Signature</span></div>
                                <p class="menu-item-desc-clean">Pulled Goan Cafreal spiced roast chicken, pickled onions, and herb aioli in oven poee.</p>
                            </div>
                            <div class="menu-item-price-clean">₹410</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Ros Omelette with Poee</h4><span class="menu-item-badge-clean">Goan Icon</span></div>
                                <p class="menu-item-desc-clean">Fluffy spiced coriander omelette submerged in rich coconut ros curry with 2 hot poees.</p>
                            </div>
                            <div class="menu-item-price-clean">₹380</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Mutton Kheema Poee Pocket</h4><span class="menu-item-badge-clean">Gourmet Meat</span></div>
                                <p class="menu-item-desc-clean">Slow-braised spiced minced mutton cooked with caramelized onions and aromatic spices.</p>
                            </div>
                            <div class="menu-item-price-clean">₹440</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Chicken Kheema Poee Pocket</h4><span class="menu-item-badge-clean">Guest Favorite</span></div>
                                <p class="menu-item-desc-clean">Rustic country-style minced chicken cooked with green chillies, coriander, and fresh poee.</p>
                            </div>
                            <div class="menu-item-price-clean">₹420</div>
                        </div>
                    </div>
                </div>

                <!-- 4. STARTERS -->
                <div class="menu-cat-group-clean" id="cat-starters">
                    <div class="menu-cat-header">
                        <h3 class="menu-cat-title"><i class="fa-solid fa-fire-burner"></i> Starters</h3>
                        <span class="menu-cat-tag">Crispy Small Plates</span>
                    </div>
                    <div class="menu-items-list-clean">
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Fish Fries</h4><span class="menu-item-badge-clean">Coastal Catch</span></div>
                                <p class="menu-item-desc-clean">Local coastal fish fillets marinated in recheado spices, semolina crusted and pan-fried crisp.</p>
                            </div>
                            <div class="menu-item-price-clean">₹480</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">House Fries</h4></div>
                                <p class="menu-item-desc-clean">Double-cooked crisp russet potato fries seasoned with roasted garlic sea salt and aioli.</p>
                            </div>
                            <div class="menu-item-price-clean">₹270</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Fish Fingers</h4></div>
                                <p class="menu-item-desc-clean">Crispy panko-crumbed fish batons served golden with house caper-dill tartar sauce.</p>
                            </div>
                            <div class="menu-item-price-clean">₹480</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Chicken Nuggets</h4></div>
                                <p class="menu-item-desc-clean">Buttermilk-brined tender chicken bites in golden tempura batter with chipotle dip.</p>
                            </div>
                            <div class="menu-item-price-clean">₹390</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Golden Panko Prawns</h4></div>
                                <p class="menu-item-desc-clean">Jumbo butterflied tiger prawns crusted in Japanese panko and served with sriracha lemon dip.</p>
                            </div>
                            <div class="menu-item-price-clean">₹480</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Rawa Chicken Popcorn</h4></div>
                                <p class="menu-item-desc-clean">Bite-sized chicken nuggets crusted with spiced Goan semolina, served with green dip.</p>
                            </div>
                            <div class="menu-item-price-clean">₹410</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Jalapeno Cheese Poppers</h4></div>
                                <p class="menu-item-desc-clean">Molten aged cheddar and pickled jalapenos encased in a shatteringly crisp crumb.</p>
                            </div>
                            <div class="menu-item-price-clean">₹370</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Rosemary Potato Wedges</h4></div>
                                <p class="menu-item-desc-clean">Thick skin-on potatoes roasted with fresh garden rosemary sprigs, garlic, and sea salt.</p>
                            </div>
                            <div class="menu-item-price-clean">₹350</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Za'atar Fries with Garlic Dip</h4></div>
                                <p class="menu-item-desc-clean">Hand-cut fries dusted with Middle-Eastern wild thyme, sumac, and sesame, with toum dip.</p>
                            </div>
                            <div class="menu-item-price-clean">₹330</div>
                        </div>
                    </div>
                </div>

                <!-- 5. PIZZA -->
                <div class="menu-cat-group-clean" id="cat-pizza">
                    <div class="menu-cat-header">
                        <h3 class="menu-cat-title"><i class="fa-solid fa-pizza-slice"></i> Pizza</h3>
                        <span class="menu-cat-tag">Stone-Baked</span>
                    </div>
                    <div class="menu-items-list-clean">
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Margherita</h4></div>
                                <p class="menu-item-desc-clean">San Marzano tomato sugo, fresh buffalo mozzarella, extra virgin olive oil, and sweet basil.</p>
                            </div>
                            <div class="menu-item-price-clean">₹330</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Farm Fresh</h4></div>
                                <p class="menu-item-desc-clean">Crisp bell peppers, red onions, button mushrooms, black olives, and mozzarella.</p>
                            </div>
                            <div class="menu-item-price-clean">₹350</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Loaded Chicken</h4></div>
                                <p class="menu-item-desc-clean">Barbecue pulled chicken, chicken salami, roasted onions, stringy mozzarella, and chili oil.</p>
                            </div>
                            <div class="menu-item-price-clean">₹400</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Chicken Pepperoni</h4></div>
                                <p class="menu-item-desc-clean">Crispy cured chicken pepperoni discs over mozzarella and hot honey drizzle.</p>
                            </div>
                            <div class="menu-item-price-clean">₹380</div>
                        </div>
                    </div>
                </div>

                <!-- 6. PASTA -->
                <div class="menu-cat-group-clean" id="cat-pasta">
                    <div class="menu-cat-header">
                        <h3 class="menu-cat-title"><i class="fa-solid fa-bowl-food"></i> Pasta</h3>
                        <span class="menu-cat-tag">Penne / Spaghetti</span>
                    </div>
                    <div style="font-size:0.82rem; color:var(--text-muted); margin-bottom:1rem;">Choice of Penne or Spaghetti &nbsp;|&nbsp; <strong>Add Chicken: +₹120</strong></div>
                    <div class="menu-items-list-clean">
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Pesto Pasta</h4></div>
                                <p class="menu-item-desc-clean">Al dente penne tossed in fresh Genovese pine nut and basil pesto with aged Parmigiano.</p>
                            </div>
                            <div class="menu-item-price-clean">₹460</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Creamy Arrabbiata</h4></div>
                                <p class="menu-item-desc-clean">Fiery San Marzano tomato sauce infused with garlic and chili, smoothed with mascarpone.</p>
                            </div>
                            <div class="menu-item-price-clean">₹450</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Gochujang Pasta</h4><span class="menu-item-badge-clean">Fusion</span></div>
                                <p class="menu-item-desc-clean">Korean fermented chili paste cream sauce with garlic, scallions, and parmesan.</p>
                            </div>
                            <div class="menu-item-price-clean">₹490</div>
                        </div>
                    </div>
                </div>

                <!-- 7. ALL DAY PLATES -->
                <div class="menu-cat-group-clean" id="cat-all-day">
                    <div class="menu-cat-header">
                        <h3 class="menu-cat-title"><i class="fa-solid fa-plate-wheat"></i> All Day Plates</h3>
                        <span class="menu-cat-tag">Morning to Night</span>
                    </div>
                    <div class="menu-items-list-clean">
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">French Toast</h4><span class="menu-item-badge-clean">Brunch Star</span></div>
                                <p class="menu-item-desc-clean">Thick brioche soaked in vanilla custard, seared in butter, with caramelized bananas and maple.</p>
                            </div>
                            <div class="menu-item-price-clean">₹450</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Herbed Paneer Steak</h4></div>
                                <p class="menu-item-desc-clean">Charred herb-crusted paneer served over warm ratatouille vegetables and garlic toast.</p>
                            </div>
                            <div class="menu-item-price-clean">₹450</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Chickpea Smash Toast</h4></div>
                                <p class="menu-item-desc-clean">Zesty crushed chickpeas, avocado smash, tahini dressing, and chili flakes on sourdough.</p>
                            </div>
                            <div class="menu-item-price-clean">₹380</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Desi Bombay Sandwich</h4></div>
                                <p class="menu-item-desc-clean">Layered spiced potatoes, beetroot, cucumber, and mint chutney toasted golden with butter.</p>
                            </div>
                            <div class="menu-item-price-clean">₹320</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Chilli Cheese Bruschetta</h4></div>
                                <p class="menu-item-desc-clean">Toasted baguette slices smothered in melted cheddar, green chillies, and oregano.</p>
                            </div>
                            <div class="menu-item-price-clean">₹380</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Chicken Katsu Sandwich</h4><span class="menu-item-badge-clean">Best Seller</span></div>
                                <p class="menu-item-desc-clean">Crispy panko chicken cutlet, shredded cabbage slaw, and tonkatsu mayo on brioche.</p>
                            </div>
                            <div class="menu-item-price-clean">₹450</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Roast Chicken Sandwich</h4></div>
                                <p class="menu-item-desc-clean">Herb-roasted sliced chicken breast, whole grain dijon mustard, and rocket on ciabatta.</p>
                            </div>
                            <div class="menu-item-price-clean">₹440</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Egg Akuri with Sourdough</h4></div>
                                <p class="menu-item-desc-clean">Parsi-style spiced scrambled eggs with green chillies, ginger, turmeric, and sourdough.</p>
                            </div>
                            <div class="menu-item-price-clean">₹380</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Pesto Cheese in Sourdough</h4></div>
                                <p class="menu-item-desc-clean">Melted gouda and fresh basil pesto pressed in slow-fermented crusty sourdough.</p>
                            </div>
                            <div class="menu-item-price-clean">₹320</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Cheese Capsicum Sandwich</h4></div>
                                <p class="menu-item-desc-clean">Classic grilled sandwich with melted mozzarella and crunchy green bell peppers.</p>
                            </div>
                            <div class="menu-item-price-clean">₹340</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Paneer Akuri with Sourdough</h4></div>
                                <p class="menu-item-desc-clean">Scrambled cottage cheese tempered with roasted cumin, turmeric, and fresh herbs.</p>
                            </div>
                            <div class="menu-item-price-clean">₹400</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Hummus Platter with Chicken</h4></div>
                                <p class="menu-item-desc-clean">Velvety chickpea tahini hummus topped with warm spiced chicken and pita bread.</p>
                            </div>
                            <div class="menu-item-price-clean">₹450</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Pancakes with House Blue Drip</h4></div>
                                <p class="menu-item-desc-clean">Stack of 3 fluffy buttermilk pancakes crowned with fresh blueberry compote and maple.</p>
                            </div>
                            <div class="menu-item-price-clean">₹480</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Herbed Ricotta Sourdough Toast</h4></div>
                                <p class="menu-item-desc-clean">Whipped lemon ricotta, roasted cherry tomatoes, and aged balsamic reduction.</p>
                            </div>
                            <div class="menu-item-price-clean">₹420</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Hummus Platter with Moong Falafel</h4></div>
                                <p class="menu-item-desc-clean">Crunchy moong bean falafels, olive tapenade, creamy hummus, and warm pita.</p>
                            </div>
                            <div class="menu-item-price-clean">₹400</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Garden Pesto Cottage Cheese Sandwich</h4></div>
                                <p class="menu-item-desc-clean">Grilled paneer steaks, house walnut pesto, and sun-dried tomatoes in ciabatta.</p>
                            </div>
                            <div class="menu-item-price-clean">₹390</div>
                        </div>
                    </div>
                </div>

                <!-- 8. CURRY BOWLS -->
                <div class="menu-cat-group-clean" id="cat-curry-bowls">
                    <div class="menu-cat-header">
                        <h3 class="menu-cat-title"><i class="fa-solid fa-bowl-rice"></i> Curry Bowls</h3>
                        <span class="menu-cat-tag">Served with Rice</span>
                    </div>
                    <div class="menu-items-list-clean">
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Coastal Veg Curry Bowl</h4></div>
                                <p class="menu-item-desc-clean">Seasonal vegetables simmered in coconut milk, kokum, and roasted coastal spices with rice.</p>
                            </div>
                            <div class="menu-item-price-clean">₹440</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Chicken Xacuti Curry Bowl</h4><span class="menu-item-badge-clean">Heritage</span></div>
                                <p class="menu-item-desc-clean">Goan classic with roasted grated coconut, white poppy seeds, and tender chicken.</p>
                            </div>
                            <div class="menu-item-price-clean">₹470</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Coastal Prawns Curry Bowl</h4><span class="menu-item-badge-clean">Highly Recommended</span></div>
                                <p class="menu-item-desc-clean">Coastal prawns in tangy spicy coconut ambot-tik curry served with steamed basmati rice.</p>
                            </div>
                            <div class="menu-item-price-clean">₹490</div>
                        </div>
                    </div>
                </div>

                <!-- 9. MATCHA & ARTISANAL TEAS -->
                <div class="menu-cat-group-clean" id="cat-matcha-teas">
                    <div class="menu-cat-header">
                        <h3 class="menu-cat-title"><i class="fa-solid fa-leaf"></i> Matcha &amp; Artisanal Teas</h3>
                        <span class="menu-cat-tag">Ceremonial &amp; Herbal</span>
                    </div>
                    <div class="menu-items-list-clean">
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Tonic Matcha</h4></div>
                                <p class="menu-item-desc-clean">Ceremonial grade Uji matcha whisked over botanical tonic water and fresh lime over ice.</p>
                            </div>
                            <div class="menu-item-price-clean">₹390</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Iced Matcha Latte</h4><span class="menu-item-badge-clean">Best Seller</span></div>
                                <p class="menu-item-desc-clean">Stone-ground Kyoto matcha green tea whisked with chilled milk over ice.</p>
                            </div>
                            <div class="menu-item-price-clean">₹350</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Iced Coconut Matcha</h4></div>
                                <p class="menu-item-desc-clean">Layered sweet coconut milk and vibrant emerald matcha poured over handcrafted ice.</p>
                            </div>
                            <div class="menu-item-price-clean">₹380</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Sparkling Matcha Lemonade</h4></div>
                                <p class="menu-item-desc-clean">Zesty freshly squeezed lemon juice, effervescent bubbles, and vibrant matcha.</p>
                            </div>
                            <div class="menu-item-price-clean">₹370</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Kashmiri Kahwa</h4><span class="menu-item-badge-clean">Heritage</span></div>
                                <p class="menu-item-desc-clean">Traditional green tea simmered with real saffron, cardamom, cinnamon, and roasted almonds.</p>
                            </div>
                            <div class="menu-item-price-clean">₹210</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Zingly Ginger Tea</h4></div>
                                <p class="menu-item-desc-clean">Whole leaf orthodox Assam black tea brewed with crushed ginger root and whole spices.</p>
                            </div>
                            <div class="menu-item-price-clean">₹210</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Chamomile Infusion</h4></div>
                                <p class="menu-item-desc-clean">Whole Egyptian chamomile blossoms steeped in hot water. Naturally caffeine-free.</p>
                            </div>
                            <div class="menu-item-price-clean">₹220</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Calming Lavender Tea</h4></div>
                                <p class="menu-item-desc-clean">French lavender buds delicately blended with tender white peony tea leaves.</p>
                            </div>
                            <div class="menu-item-price-clean">₹210</div>
                        </div>
                    </div>
                </div>

                <!-- 10. ON THE ROCKS, SMOOTHIES & KOMBUCHA -->
                <div class="menu-cat-group-clean" id="cat-beverages">
                    <div class="menu-cat-header">
                        <h3 class="menu-cat-title"><i class="fa-solid fa-glass-water"></i> On The Rocks, Smoothies &amp; Kombucha</h3>
                        <span class="menu-cat-tag">Chilled &amp; Fermented</span>
                    </div>
                    <div class="menu-items-list-clean">
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Mint Mojito</h4></div>
                                <p class="menu-item-desc-clean">Muddled garden mint, fresh lime wedges, organic cane sugar, and sparkling soda.</p>
                            </div>
                            <div class="menu-item-price-clean">₹260</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Blue Lagoon</h4></div>
                                <p class="menu-item-desc-clean">Citrus curacao cordial, fresh lime spritz, and effervescent sparkling soda.</p>
                            </div>
                            <div class="menu-item-price-clean">₹260</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Iced Tea (Lemon / Peach)</h4></div>
                                <p class="menu-item-desc-clean">Slow-steeped Darjeeling black tea infused with natural lemon or white peach nectar.</p>
                            </div>
                            <div class="menu-item-price-clean">₹270</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Sunshine Slurp Smoothie</h4></div>
                                <p class="menu-item-desc-clean">Alphonso mango, passion fruit, Greek yogurt, chia seeds, and raw honey.</p>
                            </div>
                            <div class="menu-item-price-clean">₹440</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Berry Smoothie Bowl</h4></div>
                                <p class="menu-item-desc-clean">Acai and wild blueberry smoothie bowl topped with granola, banana, and wildflower honey.</p>
                            </div>
                            <div class="menu-item-price-clean">₹550</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Cacao Banana Seed Elixir</h4></div>
                                <p class="menu-item-desc-clean">Raw Peruvian cacao nibs, ripe banana, pumpkin seeds, almond butter, and almond milk.</p>
                            </div>
                            <div class="menu-item-price-clean">₹390</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Kombucha Ginger Lime</h4></div>
                                <p class="menu-item-desc-clean">Raw small-batch fermented probiotic tea brewed with organic ginger root and lime.</p>
                            </div>
                            <div class="menu-item-price-clean">₹260</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Kombucha Pineapple Spice</h4></div>
                                <p class="menu-item-desc-clean">Tropical pineapple kombucha steeped with toasted cinnamon and star anise.</p>
                            </div>
                            <div class="menu-item-price-clean">₹260</div>
                        </div>
                        <div class="menu-item-row-clean">
                            <div class="menu-item-info">
                                <div class="menu-item-name-wrap"><h4 class="menu-item-name-clean">Kombucha Pomegranate Mint</h4></div>
                                <p class="menu-item-desc-clean">Ruby red pomegranate juice fermented with black tea and fresh spearmint leaves.</p>
                            </div>
                            <div class="menu-item-price-clean">₹260</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- ==========================================================================
         6. EDITORIAL SHOWCASE GALLERY (CAFE 6, CAFE 7, CAFE 8)
         ========================================================================== -->
    <section class="showcase-section" id="experience">
'@

$partBefore = $content.Substring(0, $idxStart)
$partAfter = $content.Substring($idxEnd + $mEnd.Length)

$newContent = $partBefore + $cleanMenuHtml + $partAfter
[System.IO.File]::WriteAllText($filePath, $newContent, [System.Text.Encoding]::UTF8)
Write-Host "Clean inline menu successfully written! File size: $($newContent.Length)"
