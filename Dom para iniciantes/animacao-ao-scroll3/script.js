function initTabNav() {  //para isolar uma function, colocamos dentro de outra function
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) =>{
        section.classList.remove('ativo');
      })
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) =>{
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabNav(); // for active function

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo'
  if(accordionList.length) {
  accordionList[0].classList.add(activeClass);
  accordionList[0].nextElementSibling.classList.add(activeClass);

  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
  });
 }
}
initAccordion();

  function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
 function srcollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  const topo = section.offsetTop;
  
  window.scrollTo({
  top: topo,
  behavior: 'smooth',
   });
  };
linksInternos.forEach((link) => {
  link.addEventListener('click', srcollToSection); 
 });
}
initScrollSuave();

//Forma alternativa
  //section.scrollIntoView({
  //  behavior: 'smooth',
  //  block: 'start',
  // });
function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if(sections.length) { 
  const windowMetade = window.innerHeight * 0.6;
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowMetade; 
      const isSectionVisible = (sectionTop - windowMetade) < 0;  
      if(isSectionVisible) {
        section.classList.add('ativo');
      }
    })
  }
  animaScroll();
  window.addEventListener('scroll', animaScroll);
}
}
initAnimacaoScroll();