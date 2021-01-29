$(() => {
  let webcams = $('.webcams');
  let refresh = setTimeout(() => {
    webcams
      .find('img')
      .load(
        'https://turiscam.comunitatvalenciana.com/piles.jpg?0.28145689781577454'
      );
  }, 1000);
});
