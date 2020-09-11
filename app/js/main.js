let select = function(){
  let selectHeader = document.querySelectorAll
  (selectors '.select__header');

  selectHeader.forEach(callbackfn: item=>{
      item.addEventListener('click', listener: function(){
        this.parentElement.classList.toggle
        (token: 'is-active');

      })
  })
};

select();
