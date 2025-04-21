export default function decorate(block) {
  [...block.children].forEach(row => {
    const [quote, name, role, img] = row.children;
    row.innerHTML = `
      <div class="testimonial">
        <img src="${img.textContent}" alt="${name.textContent}" />
        <blockquote>${quote.textContent}</blockquote>
        <p><strong>${name.textContent}</strong><br>${role.textContent}</p>
      </div>
    `;
  });
}
console.log('TESTIMONIAL BLOCK LOADED');
