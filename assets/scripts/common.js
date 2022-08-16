'use strict';

{
  const Header = document.getElementById('js-header');
  const HeaderButton = document.getElementById('js-headerButton');

  HeaderButton.addEventListener('click', () => {
    Header.classList.toggle('is-open')
  })
}
