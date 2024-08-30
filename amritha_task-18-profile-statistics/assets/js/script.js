$(document).ready(function() {
  $('.counter').each(function() {
    $(this).text('0');
    incrementCounter($(this));
  });

  function incrementCounter(counterEl) {
    let currentNum = parseInt(counterEl.text());
    const dataCeil = counterEl.data('ceil');
    const increment = dataCeil / 15;
    currentNum = Math.ceil(currentNum + increment);

    if (currentNum < dataCeil) {
      counterEl.text(currentNum);
      setTimeout(function() {
        incrementCounter(counterEl);
      }, 100);
    } else {
      counterEl.text(dataCeil);
    }
  }
});
