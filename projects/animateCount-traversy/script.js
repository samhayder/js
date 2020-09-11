const counters = document.querySelectorAll('.counter');
const spreed = 300;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerHTML;

    const inc = target / spreed;

    if (count < target) {
      counter.innerHTML = Math.ceil(count + inc);
      setTimeout(updateCount, 30);
    } else {
      count.innerHTML = target;
    }
  };

  updateCount();
});
