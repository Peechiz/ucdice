var btn = document.querySelector('#roll');

btn.addEventListener('click', function() {
  document.querySelector('#result .panel-body').innerHTML = roll();
  var result = document.querySelector('#result')
  result.classList.remove('hide');
  result.classList.add('show');
})

var actions = ['countered', 'helped', 'interrupted'];
var targets = ['the location', 'an enemy', 'a teammate']

function msg(x, y, dten) {
  return `You rolled <span>${dten}</span>! You are <span>${actions[x]}</span> by <span>${targets[y]}</span>`
}

function roll() {
  var dten = Math.floor(Math.random() * 10);
  var mod = dten % 3;

  if (dten === 9) {
    return 'Critical! Your group is buffed'
  } else if (dten <= 2) {
    return msg(0, mod, dten)
  } else if (dten >= 3 && dten <= 5) {
    return msg(1, mod, dten)
  } else {
    return msg(2, mod, dten)
  }
}
