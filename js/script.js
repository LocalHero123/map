// МЕНЮ
const menuLink = document.querySelector('.menu__link');
const menuContent = document.querySelector('.menu__content');
menuLink.addEventListener('click', function () {
   menuContent.classList.toggle('active');
});
document.querySelector('.map-wrapper').onclick = function () {
   menuContent.classList.remove('active');
}

// ФИЛЬТР
const checkboxBlue = document.querySelector('.checkbox-blue');
const exitsBlue = document.querySelectorAll('.exit-blue');

const checkboxGreen = document.querySelector('.checkbox-green');
const exitsGreen = document.querySelectorAll('.exit-green');

const checkboxGray = document.querySelector('.checkbox-gray');
const exitsGray = document.querySelectorAll('.exit-gray');

const checkboxKey = document.querySelector('.checkbox-key');
const Keys = document.querySelectorAll('.key');
 
document.querySelector('.filter').addEventListener('click', function () {
   if (checkboxGreen.checked) {
      for (let exitGreen of exitsGreen) {
         exitGreen.classList.add('active') 
      }
   }else {
      for (let exitGreen of exitsGreen) {
         exitGreen.classList.remove('active') 
      }
   }
   // -----------------------------------
   if (checkboxBlue.checked) {
      for (let exitBlue of exitsBlue) {
         exitBlue.classList.add('active') 
      }
   }else {
      for (let exitBlue of exitsBlue) {
         exitBlue.classList.remove('active') 
      }
   }
   // -----------------------------------
   if (checkboxGray.checked) {
      for (let exitGray of exitsGray) {
         exitGray.classList.add('active') 
      }
   }else {
      for (let exitGray of exitsGray) {
         exitGray.classList.remove('active') 
      }
   }
   // -----------------------------------
   if (checkboxKey.checked) {
      for (let Key of Keys) {
         Key.classList.add('active') 
      }
   }else {
      for (let Key of Keys) {
         Key.classList.remove('active') 
      }
   }

});



// const checkboxes = document.querySelectorAll('.checkbox');
// const exitBlue = document.querySelectorAll('.exit-blue')
// for(var checkbox of checkboxes) {
//    checkbox.addEventListener('click', function () {
//       if(this.checked) {
//          exitBlue.forEach(function () {
//             document.querySelector('.exit-blue').classList.add('active')
//          })
//       } else {
//       }
//    })
// }

// function addOnWheel(elem, handler) {
//    if (elem.addEventListener) {
//      if ('onwheel' in document) {
//        // IE9+, FF17+
//        elem.addEventListener("wheel", handler);
//      } else if ('onmousewheel' in document) {
//        // устаревший вариант события
//        elem.addEventListener("mousewheel", handler);
//      } else {
//        // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
//        elem.addEventListener("MozMousePixelScroll", handler);
//      }
//    } else { // IE8-
//      text.attachEvent("onmousewheel", handler);
//    }
//  }

//  var scale = 1;

//  addOnWheel(text, function(e) {

//    var delta = e.deltaY || e.detail || e.wheelDelta;

//    // отмасштабируем при помощи CSS
//    if (delta > 0) scale -= 0.2;
//    else scale += 0.2;

//    text.style.transform = text.style.WebkitTransform = text.style.MsTransform = 'scale(' + scale + ')';

//    // отменим прокрутку
//    e.preventDefault();
//  });