document.addEventListener('DOMContentLoaded', function () {
  const rootElement = document.getElementById('product-customizer-root');

  if (rootElement) {
    const e = React.createElement;

    function ProductCustomizerComponent() {
      return e('div', null, 'Hello from React inside Shopify!');
    }

    ReactDOM.createRoot(rootElement).render(e(ProductCustomizerComponent));
  } else {
    console.warn('Mount target not found.');
  }
});
