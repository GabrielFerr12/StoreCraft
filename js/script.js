const PRODUCTS = [
  // CAPACETES
  { id: 'cap01', title: 'Antler-Horn Helmet', price: 689.90, img: 'img/cap1.jpg', category: 'cap',
    desc: '(Arm: 9, Sword Fighting +1, Axe Fighting +1, Club Fighting +1, proteção Física +3%, Gelo +7%). Um elmo resistente decorado com chifres rúnicos antigos. Possui 2 slots de imbuement. Classificação: 4. Tier Máximo: 10.' },

  { id: 'cap02', title: 'Arcanomancer Regalia', price: 4529.90, img: 'img/cap2.png', category: 'cap',
    desc: '(Arm: 9, Magic Level +3, proteção Física +3%, Terra +7%). Um capuz místico usado por magos arcanos. Possui 2 slots de imbuement. Classificação: 4. Tier Máximo: 10. Peso: 15.00 oz.' },

  { id: 'cap03', title: 'Crystal Mind Helm', price: 11159.90, img: 'img/cap3.png', category: 'cap',
    desc: 'Um elmo cristalino que amplifica o foco mental do usuário. Peso: 41.00 oz.' },

  // ESCUDOS
  { id: 'esc01', title: 'Adamant Shield', price: 600.90, img: 'img/shield1.jpg', category: 'escudo',
    desc: 'Escudo reluzente que brilha com a luz do amanhecer.' },

  { id: 'esc02', title: 'Ancient Shield', price: 899.90, img: 'img/shield2.jpg', category: 'escudo',
    desc: '(Def: 27). Escudo antigo infundido com magia esquecida. Peso: 61.00 oz.' },

  { id: 'esc03', title: 'Blessed Shield', price: 1755900.00, img: 'img/shield3.jpg', category: 'escudo',
    desc: '(Def: 40). Um escudo abençoado por forças divinas, considerado único no mundo. Peso: 68.00 oz.' },

  // ARMADURAS
  { id: 'arm01', title: 'Albino Plate', price: 7399.90, img: 'img/armor1.jpeg', category: 'armor',
    desc: '(Arm: 11). Armadura feita dos ossos de um dragão ancestral.' },

  { id: 'arm02', title: 'Calopteryx Cape', price: 1399.90, img: 'img/armor2.png', category: 'armor',
    desc: 'Manto elegante com propriedades mágicas. Classificação: 2. Tier Máximo: 2. Peso: 20.00 oz.' },

  { id: 'arm03', title: 'Crystalline Armor', price: 9999.90, img: 'img/armor3.png', category: 'armor',
    desc: '(Arm: 13, proteção Gelo +3%, Energia -3%). Armadura cristalina que reflete luz e magia. Classificação: 2. Tier Máximo: 2. Peso: 84.50 oz.' },

  // BOTAS
  { id: 'bts1', title: 'Badger Boots', price: 2309.90, img: 'img/boots1.png', category: 'boots',
    desc: '(Arm: 2, Speed +10). Botas leves feitas com couro reforçado. Possui 1 slot de imbuement. Classificação: 2. Tier Máximo: 2. Peso: 12.00 oz.' },

  { id: 'bts2', title: 'Cobra Boots', price: 5029.90, img: 'img/boots2.png', category: 'boots',
    desc: '(Arm: 3, Speed +10, proteção Física +6%). Botas criadas com escamas de cobra mística. Possui 1 slot de imbuement. Classificação: 4. Tier Máximo: 10. Peso: 9.00 oz.' },

  // PERNEIRAS
  { id: 'leg1', title: 'Alloy Legs', price: 7229.90, img: 'img/leg1.png', category: 'leg',
    desc: '(Arm: 6, Speed +10). Perneiras feitas de ligas especiais. Classificação: 2. Tier Máximo: 2. Peso: 45.00 oz.' },

  { id: 'leg2', title: 'Bast Legs', price: 1529.90, img: 'img/leg2.png', category: 'leg',
    desc: '(Arm: 8, Distance Fighting +2, proteção Energia +4%). Perneiras encantadas com energia celestial. Classificação: 4. Tier Máximo: 10. Peso: 64.00 oz.' },

  { id: 'leg3', title: 'Broken Iks Faulds', price: 1499.90, img: 'img/leg3.jpeg', category: 'leg',
    desc: '(Arm: 1). Fragmentos das antigas faulds usadas por guerreiros Iks. Peso: 15.00 oz.' },

  // PETS
  { id: 'pet01', title: 'Pet Archer', price: 150000.90, img: 'img/pet1.png', category: 'pet',
    desc: 'Pet que aumenta seus atributos: +45% de dano com flechas e +50% de capacidade de carga.' },

  { id: 'pet02', title: 'Pet Sorcerer', price: 150000.90, img: 'img/pet2.png', category: 'pet',
    desc: 'Pet que concede +70% de dano adicional em magias de Death.' },

  { id: 'pet03', title: 'Pet Melle', price: 150000.90, img: 'img/pet3.png', category: 'pet',
    desc: 'Pet voltado para cavaleiros, aumentando +70% dos skills de ataque e +45% da defesa.' },

  { id: 'pet04', title: 'Pet Druid', price: 150000.90, img: 'img/pet4.png', category: 'pet',
    desc: 'Pet que concede +45% de cura e +50% de efetividade nas poções.' },

  // LIVROS (BOOKS)
  { id: 'bk01', title: 'Alchemist’s Notepad', price: 15099.90, img: 'img/book1.png', category: 'books',
    desc: '(Def: 20, Magic Level +2, Fire +3, Energy +3, proteção Death +5%). Possui 1 slot de imbuement. Peso: 13.00 oz.' },

  { id: 'bk02', title: 'Arboreal Tome', price: 19599.90, img: 'img/book2.png', category: 'books',
    desc: '(Def: 22, Magic Level +5, Ice +1, Healing +1, proteção Física +4%, Energia +6%). Possui 1 slot de imbuement. Peso: 23.00 oz.' },

  { id: 'bk03', title: 'Book of Lies', price: 150999.90, img: 'img/book3.png', category: 'books',
    desc: '(Def: 18, Magic Level +4). Possui 1 slot de imbuement. Peso: 24.00 oz.' },

  // ANÉIS
  { id: 'ring1', title: 'Charged Spiritthorn Ring', price: 15000.90, img: 'img/ring1.png', category: 'ring',
    desc: '(Arm: 2, Sword +3, Club +3, Axe +3, proteção Física +8%, Fogo +4%, Terra +4%, Energia +4%, Gelo +4%). Peso: 0.95 oz.' },

  { id: 'ring2', title: 'Death Ring', price: 15099.90, img: 'img/ring2.png', category: 'ring',
    desc: '(Arm: 1, Shielding -10, proteção Death +5%). Um anel sombrio que enfraquece o portador, mas concede poder necromântico. Peso: 0.80 oz.' },

  { id: 'ring3', title: 'The Eye of Suon', price: 10099.90, img: 'img/ring3.png', category: 'ring',
    desc: 'Amuleto que concede visão noturna aprimorada. Peso: 6.00 oz.' },

  { id: 'ring4', title: 'Foxtail Amulet', price: 75099.90, img: 'img/ring4.png', category: 'ring',
    desc: '(Arm: 2, proteção Física +5%). Amuleto com cauda de raposa encantada. Peso: 5.00 oz.' },

  // ESPADAS (traduzidas também, mas você pode ocultá-las se quiser)
  { id: 'swd01', title: 'Amber Sabre', price: 15229.90, img: 'img/sword1.png', category: 'sword',
    desc: '(Atk: 0 + 46 Energia, Def: 32 +3, Sword +3). Sabre âmbar que emite energia quente. Possui 2 slots de imbuement. Classificação: 4. Tier Máximo: 10. Peso: 50.00 oz.' },

  { id: 'swd02', title: 'Crypt Slicer', price: 78999.90, img: 'img/sword2.png', category: 'sword',
    desc: '(Atk: 57, Def: 33, Sword +4). Espada usada em rituais antigos. Possui 3 slots. Classificação: 4. Tier Máximo: 10. Peso: 80.00 oz.' },

  { id: 'swd03', title: 'Demonrage Sword', price: 45009.90, img: 'img/sword3.png', category: 'sword',
    desc: '(Atk: 47, Def: 22). Espada dominada por energia demoníaca. Possui 3 slots. Classificação: 2. Tier Máximo: 2. Peso: 150.00 oz.' },

  { id: 'swd04', title: 'Giant Sword', price: 12029.90, img: 'img/sword4.png', category: 'sword',
    desc: '(Atk: 46, Def: 22). Forjada por gigantes antigos. Possui 3 slots. Classificação: 2. Tier Máximo: 2. Peso: 180.00 oz.' },

  { id: 'swd05', title: 'Gnome Sword', price: 78600.90, img: 'img/sword5.png', category: 'sword',
    desc: '(Atk: 10 + 42 Energia, Def: 29 +3, Sword +1, proteção Energia +6%). Espada leve desenvolvida pelos gnomos. Possui 2 slots. Classificação: 3. Tier Máximo: 3. Peso: 85.00 oz.' },

  // ARCOS
  { id: 'bw1', title: 'Amber Bow', price: 6500.90, img: 'img/bow1.png', category: 'archer',
    desc: '(Range: 6, Atk: +7, Hit% +6, Distance +3, proteção Energia +5%). Arco âmbar com energia concentrada. Possui 3 slots. Classificação: 4. Tier Máximo: 10. Peso: 37.00 oz.' },

  { id: 'bw2', title: 'Bow of Destruction', price: 7000000.00, img: 'img/bow2.png', category: 'archer',
    desc: '(Range: 6, Atk: +5, Hit% +5). Arco sombrio que consome a energia ao redor. Possui 3 slots. Classificação: 2. Tier Máximo: 2. Peso: 55.00 oz.' },

  { id: 'bw3', title: 'Crypt Spine', price: 78000.00, img: 'img/bow3.png', category: 'archer',
    desc: '(Range: 6, Atk: +8, Distance +3, proteção Gelo +5%, chance de acerto +5%). Antigo arco usado por assassinos lendários. Possui 3 slots. Classificação: 4. Tier Máximo: 10. Peso: 44.00 oz.' },

  { id: 'bw4', title: 'Draining Inferniarch Bow', price: 90000.90, img: 'img/bow4.png', category: 'archer',
    desc: '(Range: 6, Atk: +7, Hit% +5, Distance +2, proteção Terra +5%). Arco infernal que drena energia dos inimigos. Possui 2 slots. Classificação: 4. Tier Máximo: 10. Peso: 56.00 oz.' }
];



/* =========================
   HELPERS do carrinho (localStorage)
   O formato do cart é: [{ id: 'cap01', qty: 2 }, ...]
   ========================= */
function getCart() {
  try {
    const raw = localStorage.getItem('cart');
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch (e) {
    console.warn('Erro ao ler cart do localStorage:', e);
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem('cart', JSON.stringify(cart));
  } catch (e) {
    console.warn('Erro ao salvar cart no localStorage:', e);
  }
}

/* =========================
   Adicionar ao carrinho (com qty)
   ========================= */
function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) {
    alert('Produto não encontrado.');
    return;
  }

  const cart = getCart();
  const existing = cart.find(i => i.id === id);

  if (existing) existing.qty = (existing.qty || 0) + 1;
  else cart.push({ id, qty: 1 });

  saveCart(cart);
  updateCartCount();
  // Mensagem leve (pode remover)
  // alert(`${product.title} adicionado ao carrinho.`);
}

/* =========================
   Atualizar contador do carrinho (badge)
   Corrige NaN — garante número inteiro
   ========================= */
function updateCartCount() {
  const cart = getCart();
  const qty = cart.reduce((s, it) => s + (Number(it.qty) || 0), 0);
  const el = document.getElementById('cartCount');
  if (el) el.innerText = String(qty);
}

/* =========================
   Renderizar grid de produtos (home / categoria)
   - Usa #productsGrid id (como no seu index.html)
   - Se passar filterCat (string) filtra por product.category === filterCat
   ========================= */
function renderProductsGrid(filterCat = '') {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const items = filterCat ? PRODUCTS.filter(p => p.category === filterCat) : PRODUCTS;
  grid.innerHTML = items.map(p => `
    <div class="card" onclick="location.href='produto.html?id=${p.id}'">
      <img src="${p.img}" alt="${p.title}">
      <div class="title">${p.title}</div>
      <div class="price"><img src="https://static.wikia.nocookie.net/tibia/images/d/d3/Tibia_Coin_%28Item%29.gif/revision/latest/thumbnail/width/360/height/360?cb=20220107174845&path-prefix=en" alt="" style="height: 40px;"> R$ ${Number(p.price).toFixed(2)}</div>
      <div style="display:flex; gap:8px; margin-top:8px; justify-content:center;">
        <button class="buy-btn" onclick="event.stopPropagation(); addToCart('${p.id}');">Adicionar</button>
        <a class="icon-btn" style="text-decoration:none" href="produto.html?id=${p.id}">Ver</a>
      </div>
    </div>
  `).join('');
}


/* =========================
   Página de produto (produto.html)
   Espera elementos com ids:
   productImg, productTitle, productPrice, productDesc, buyBtn
   ========================= */
function renderProductPage() {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  if (!id) return;

  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  const imgEl = document.getElementById('productImg');
  const titleEl = document.getElementById('productTitle');
  const priceEl = document.getElementById('productPrice');
  const descEl = document.getElementById('productDesc');
  const buyBtn = document.getElementById('buyBtn');

  if (imgEl) imgEl.src = p.img;
  if (titleEl) titleEl.innerText = p.title;
  if (priceEl) priceEl.innerText = `R$ ${Number(p.price).toFixed(2)}`;
  if (descEl) descEl.innerText = p.desc;
  if (buyBtn) {
    buyBtn.onclick = () => {
      addToCart(p.id);
      // redirecionar para carrinho opcional:
      // location.href = 'indexcarrinho.html';
    };
  }
}


/* =========================
   Renderizar carrinho (indexcarrinho.html)
   Usa #cartList e #cartSummary (IDs do seu HTML)
   ========================= */
function renderCartPage() {
  const cartList = document.getElementById('cartList');
  const cartSummary = document.getElementById('cartSummary');
  if (!cartList || !cartSummary) return;

  const cart = getCart();
  if (!cart.length) {
    cartList.innerHTML = `
      <div style="padding:20px;background:#111;border-radius:12px;color:#bbb;text-align:center">
        Seu carrinho está vazio 😢
      </div>
    `;
    cartSummary.innerHTML = '';
    updateCartCount();
    return;
  }

  // Monta lista de itens
  cartList.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(prod => prod.id === item.id);
    if (!p) return '';

    const subtotal = (Number(p.price) * Number(item.qty)) || 0;

    return `
      <div style="
        display:flex;
        align-items:center;
        background:#111;
        padding:14px;
        border-radius:12px;
        gap:14px;
      ">
        <img src="${p.img}" width="80" height="80" style="object-fit:cover;border-radius:8px;">
        <div style="flex:1;color:white;">
          <div style="font-size:16px;font-weight:700">${p.title}</div>
          <div style="opacity:0.85">R$ ${Number(p.price).toFixed(2)}</div>

          <div style="margin-top:8px;display:flex;align-items:center;gap:8px;">
            <button onclick="changeQty('${item.id}', -1)" style="padding:6px 10px;cursor:pointer">-</button>
            <div style="min-width:26px;text-align:center">${Number(item.qty)}</div>
            <button onclick="changeQty('${item.id}', 1)" style="padding:6px 10px;cursor:pointer">+</button>
            <div style="margin-left:12px;color:var(--muted)">Subtotal: R$ ${subtotal.toFixed(2)}</div>
          </div>
        </div>

        <button onclick="removeFromCart('${item.id}')" style="
          background:#c0392b;
          border:none;
          padding:10px 14px;
          color:white;
          border-radius:8px;
          cursor:pointer;
        ">Remover</button>
      </div>
    `;
  }).join('');

  // Total
  const total = cart.reduce((acc, it) => {
    const p = PRODUCTS.find(prod => prod.id === it.id);
    return acc + ((p ? Number(p.price) : 0) * (Number(it.qty) || 0));
  }, 0);

  // Resumo com botão Finalizar -> checkout.html
  cartSummary.innerHTML = `
    <h3 style="margin-bottom:12px">Resumo</h3>
    <div style="font-size:18px;margin-bottom:14px;">
      Total: <b>R$ ${total.toFixed(2)}</b>
    </div>
    <button id="finishBtn" style="
      width:100%;
      background:#2ecc71;
      padding:14px;
      border:none;
      border-radius:10px;
      color:#fff;
      font-size:1.05rem;
      cursor:pointer;
    ">Finalizar Compra</button>
  `;

  // garantir que o botão existe e redireciona
  const finishBtn = document.getElementById('finishBtn');
  if (finishBtn) {
    finishBtn.addEventListener('click', () => {
      // opcional: você pode salvar um summary no localStorage para o checkout
      // localStorage.setItem('checkout_summary', JSON.stringify({ total, items: cart }));
      window.location.href = 'checkout.html';
    });
  }

  updateCartCount();
}


/* =========================
   Alterar quantidade / remover
   ========================= */
function changeQty(id, delta) {
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === id);
  if (idx === -1) return;

  cart[idx].qty = Number(cart[idx].qty || 0) + Number(delta || 0);

  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  }

  saveCart(cart);
  renderCartPage();
}

function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter(i => i.id !== id);
  saveCart(cart);
  renderCartPage();
}


/* =========================
   Busca
   ========================= */
function buscarProduto() {
  const term = (document.getElementById('searchInput')?.value || '').toLowerCase();
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = PRODUCTS.filter(p => (p.title || '').toLowerCase().includes(term) || (p.desc || '').toLowerCase().includes(term));

  grid.innerHTML = filtered.map(p => `
    <div class="card" onclick="location.href='produto.html?id=${p.id}'">
      <img src="${p.img}" alt="${p.title}">
      <div class="title">${p.title}</div>
      <div class="price">R$ ${Number(p.price).toFixed(2)}</div>
      <div style="display:flex;gap:8px;margin-top:8px;justify-content:center;">
        <button class="buy-btn" onclick="event.stopPropagation(); addToCart('${p.id}');">Adicionar</button>
        <a class="icon-btn" href="produto.html?id=${p.id}" style="text-decoration:none">Ver</a>
      </div>
    </div>
  `).join('');
}


/* =========================
   Inicialização automática
   - chama funções conforme elementos detectados na página
   ========================= */
function initCommon() {
  // atualiza badge
  updateCartCount();

  // renderiza grid se existe elemento productsGrid (home / categoria)
  const productsGrid = document.getElementById('productsGrid');
  if (productsGrid) {
    // se URL tem ?cat=... usa filtro; caso contrário mostra todos/destaques
    const params = new URLSearchParams(location.search);
    const cat = (params.get('cat') || '').toLowerCase();
    if (cat) renderProductsGrid(cat);
    else renderProductsGrid(''); // mostra todos
  }

  // se estamos em produto.html, preenche
  if (document.getElementById('productImg')) {
    renderProductPage();
  }

  // se estamos em indexcarrinho.html (ou qualquer página com cartList) renderiza
  if (document.getElementById('cartList')) {
    renderCartPage();
  }

  // atualiza carrossel se houver (se seu initCommon original fazia isso, preserve)
  // (mantive fora — se quiser, reimplemente here)
}

// auto-executa ao carregar o DOM
document.addEventListener('DOMContentLoaded', initCommon);
