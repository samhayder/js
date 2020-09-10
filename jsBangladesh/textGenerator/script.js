let dummyText = [
  'Croissant dessert danish chupa chups carrot cake cake jujubes.Icing topping bear claw biscuit.Jelly - o gummi bears wafer gummies gummies sesame snaps gummies.Cheesecake candy caramels croissant jujubes muffin jujubes.Topping tootsie roll soufflé biscuit topping.Chocolate muffin sesame snaps.Chocolate bar chocolate pie oat cake sweet roll carrot cake tootsie roll soufflé soufflé.Sweet powder candy canes muffin.',

  'Jelly liquorice marshmallow jujubes.Sweet cookie gummies dragée chocolate cake cookie chocolate bar.Gummies cotton candy apple pie cake oat cake icing jujubes wafer.Tart oat cake jujubes cookie.Tootsie roll bonbon cake marshmallow sesame snaps tiramisu halvah marshmallow chupa chups.Sugar plum sweet roll chupa chups bonbon tiramisu chocolate cake sweet roll caramels.Jujubes croissant brownie ice cream candy cake bonbon oat cake lollipop.Chocolate cake gingerbread sesame snaps gummies carrot cake.Cookie powder cheesecake liquorice tiramisu caramels liquorice tiramisu dragée.Biscuit jujubes donut chupa chups bear claw carrot cake.',

  'Candy dessert cake candy.Sweet tart topping oat cake caramels jelly - o ice cream.Gummi bears gummi bears cupcake danish pie pie chupa chups chocolate cake.Tiramisu chocolate candy canes.Brownie brownie pastry.Bear claw macaroon lollipop candy canes lemon drops ice cream cake.Oat cake ice cream muffin marshmallow tootsie roll chocolate bar gingerbread.Cake gingerbread lollipop sugar plum fruitcake chocolate cake apple pie bear claw tootsie roll.Powder soufflé tootsie roll powder bear claw.',

  'Sweet roll brownie chocolate bar bear claw.Chocolate cake candy canes dessert lemon drops.Lemon drops jelly beans oat cake lemon drops.Caramels powder jujubes muffin apple pie pudding topping cookie.Cookie carrot cake sweet roll pastry caramels toffee sesame snaps halvah.Tart gingerbread dessert cake chocolate danish croissant jelly beans lemon drops.',

  'Carrot cake biscuit chocolate cake pie wafer croissant gingerbread.Lollipop caramels sweet roll.Pastry icing cheesecake jelly jujubes apple pie powder.Sweet roll croissant croissant caramels halvah candy macaroon chupa chups.Pie danish dessert caramels pudding macaroon.Sugar plum oat cake liquorice.Jelly beans chocolate cotton candy chupa chups ice cream candy pudding cake.Jelly - o powder pastry oat cake jelly beans ice cream.',

  'Jujubes macaroon cookie jelly - o carrot cake cake.Soufflé oat cake oat cake chupa chups sesame snaps halvah icing dessert.Cheesecake biscuit croissant sweet roll.Cookie sweet roll cake sesame snaps powder brownie chocolate bar dragée.Sweet cake toffee liquorice.Marshmallow fruitcake sesame snaps icing croissant sugar plum.Biscuit caramels cheesecake cake jelly.Chupa chups powder pie bonbon tiramisu.Marshmallow oat cake gummies gummies lollipop.',

  'Liquorice wafer sweet roll ice cream candy gummies lollipop jelly carrot cake.Tart topping powder brownie gingerbread cheesecake ice cream dessert chocolate bar.Powder cupcake pastry chocolate bar cookie cupcake carrot cake apple pie.Wafer cheesecake cupcake.Bonbon topping biscuit cake pudding.Jelly cookie powder chocolate.Candy canes bear claw gingerbread pudding soufflé macaroon.Sweet roll ice cream cake apple pie croissant jelly beans.Gummies jelly - o bear claw cookie cotton candy sesame snaps sweet roll.',

  'Jelly beans danish danish toffee chocolate croissant lollipop bear claw.Caramels icing cotton candy candy liquorice.Pastry caramels jujubes toffee gingerbread chocolate cake.Sugar plum sugar plum marshmallow cotton candy donut sweet roll cake soufflé tart.Powder oat cake dessert ice cream dessert sweet.Muffin tootsie roll cake bonbon marzipan chocolate pudding.Jelly - o sesame snaps tootsie roll fruitcake soufflé sweet roll dessert.Bear claw gingerbread sesame snaps pudding lollipop tiramisu donut sweet roll pie.Tiramisu cake gingerbread lemon drops.',

  'Candy canes marshmallow chocolate cake danish.Cheesecake apple pie cotton candy candy canes.Toffee sweet roll soufflé lemon drops liquorice cotton candy.Danish gummies gummies cotton candy caramels oat cake.Cake jujubes sweet cookie cake carrot cake toffee wafer cookie.Biscuit chocolate cake sweet sesame snaps pie apple pie pastry gummies chocolate bar.',
];

//DOM
let form = document.querySelector('form');
let amount = document.querySelector('.amount');
let result = document.querySelector('.result');
let copy = document.querySelector('.copy');

function textGenerator(e) {
  e.preventDefault();

  let value = parseInt(amount.value);
  let randomText = Math.floor(Math.random() * dummyText.length);

  if (isNaN(value) || value <= 0 || value > 9) {
    result.innerHTML = `<p> ${dummyText[randomText]} </P>`;
  } else {
    let sliceDummyText = dummyText.slice(0, value);
    let finalDummyText = sliceDummyText
      .map((item) => {
        return `<ul> <li> ${item} </li> </ul>`;
      })
      .join('');
    result.innerHTML = finalDummyText;
    amount.value = '';
  }
}

form.addEventListener('submit', textGenerator);
