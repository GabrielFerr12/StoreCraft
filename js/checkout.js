/* =====================================================
   checkout.js — FINALIZADO
   Integração total com script.js e carrinho
   ===================================================== */

/* =============== LER CARRINHO ================ */
function getCart() {
  try {
    const raw = localStorage.getItem('cart');
    if (!raw) return [];
    const cart = JSON.parse(raw);
    return Array.isArray(cart) ? cart : [];
  } catch {
    return [];
  }
}

/* =============== RENDERIZAR RESUMO ================ */
function renderCheckoutSummary() {
  const summary = document.getElementById('checkoutSummary');
  const valorFrete = document.getElementById('valorFrete');
  const totalFinal = document.getElementById('totalFinal');
  if (!summary) return;

  const cart = getCart();
  if (!cart.length) {
    summary.innerHTML = `<div style="padding:10px;color:#bbb;">Carrinho vazio.</div>`;
    valorFrete.innerText = "R$ 0,00";
    totalFinal.innerText = "R$ 0,00";
    return;
  }

  let total = 0;

  summary.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(prod => prod.id === item.id);
    if (!p) return '';

    const subtotal = Number(p.price) * Number(item.qty);
    total += subtotal;

    return `
      <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
        <span>${item.qty}x ${p.title}</span>
        <span>R$ ${subtotal.toFixed(2)}</span>
      </div>
    `;
  }).join('');

  // SALVAR TOTAL INICIAL (antes do frete)
  summary.dataset.total = total;

  // atualiza total na tela (ainda sem frete)
  totalFinal.innerText = `R$ ${total.toFixed(2)}`;
}

/* =============== CALCULAR FRETE PELO CEP ================ */
function calcularFrete() {
  const cep = document.getElementById('cep').value.replace(/\D/g, '');
  const freteEl = document.getElementById('valorFrete');
  const totalEl = document.getElementById('totalFinal');
  const summary = document.getElementById('checkoutSummary');

  if (cep.length < 8) return;

  // FRETE SIMPLIFICADO (pode alterar)
  let frete = 0;
  if (cep.startsWith("0") || cep.startsWith("1")) frete = 5;
  else if (cep.startsWith("2") || cep.startsWith("3")) frete = 8;
  else frete = 12;

  const totalProdutos = Number(summary.dataset.total || 0);
  const totalFinal = totalProdutos + frete;

  freteEl.innerText = `R$ ${frete.toFixed(2)}`;
  totalEl.innerText = `R$ ${totalFinal.toFixed(2)}`;
}

/* =============== FINALIZAR PEDIDO ================ */
function finalizarPedido() {
  const form = document.getElementById('checkoutForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // validador simples
    const nome = document.getElementById('nome').value.trim();
    const endereco = document.getElementById('endereco').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const pagamento = document.getElementById('pagamento').value;

    if (!nome || !endereco || !telefone) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    // simulando pedido concluído
    alert("Pedido realizado com sucesso!");

    // limpa o carrinho
    localStorage.removeItem('cart');

    // redireciona para página de sucesso (pode criar)
    window.location.href = "sucesso.html";
  });
}

/* =============== INICIALIZAR CHECKOUT ================ */
document.addEventListener('DOMContentLoaded', () => {
  renderCheckoutSummary();
  calcularFrete();
  finalizarPedido();

  // recalcula frete ao digitar CEP
  document.getElementById('cep').addEventListener('input', calcularFrete);
});
