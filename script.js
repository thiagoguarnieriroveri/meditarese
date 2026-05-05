window.onload = function() {
  var tabBtns = document.querySelectorAll('.tab-btn');
  var tabPanes = document.querySelectorAll('.tab-pane');
  for (var i = 0; i < tabBtns.length; i++) {
    (function(btn) {
      btn.addEventListener('click', function() {
        for (var j = 0; j < tabBtns.length; j++) tabBtns[j].classList.remove('active');
        for (var j = 0; j < tabPanes.length; j++) tabPanes[j].classList.remove('active');
        btn.classList.add('active');
        var pane = document.getElementById('tab-' + btn.getAttribute('data-tab'));
        if (pane) pane.classList.add('active');
      });
    })(tabBtns[i]);
  }
  var faqBtns = document.querySelectorAll('.faq-question');
  for (var i = 0; i < faqBtns.length; i++) {
    (function(btn) {
      btn.addEventListener('click', function() {
        var item = btn.parentElement;
        var isOpen = item.classList.contains('open');
        var items = document.querySelectorAll('.faq-item');
        for (var j = 0; j < items.length; j++) items[j].classList.remove('open');
        if (!isOpen) item.classList.add('open');
      });
    })(faqBtns[i]);
  }
};
