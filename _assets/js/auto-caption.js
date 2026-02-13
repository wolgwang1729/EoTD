document.addEventListener('DOMContentLoaded', function () {
  var containers = document.querySelectorAll('.main');
  containers.forEach(function (container) {
    var imgs = Array.prototype.slice.call(container.querySelectorAll('img'));
    imgs.forEach(function (img) {
      if (img.closest('figure')) return;
      var alt = img.getAttribute('alt');
      if (!alt) return;

      var target = img.parentElement && img.parentElement.tagName.toLowerCase() === 'a' ? img.parentElement : img;

      var figure = document.createElement('figure');
      figure.className = 'auto-figure';

      // Replace the target (img or surrounding link) with the new figure and move the target inside it
      if (target.parentNode) {
        target.parentNode.replaceChild(figure, target);
        figure.appendChild(target);
      } else {
        // fallback: just wrap the img
        img.parentNode.insertBefore(figure, img);
        figure.appendChild(img);
      }

      var figcap = document.createElement('figcaption');
      figcap.className = 'auto-figure-caption';
      figcap.textContent = alt;
      figure.appendChild(figcap);
    });
  });
});
