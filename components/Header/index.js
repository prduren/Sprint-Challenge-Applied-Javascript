// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(date, title, temperature) {
    // state variables
  const wrapper = document.createElement('div');
  const dateSpan = document.createElement('span');
  const titleH = document.createElement('h1'); 
  const temp = document.createElement('span');
    // add classes
    wrapper.classList.add('header');
    dateSpan.classList.add('date');
    temp.classList.add('temp');
    // structure
    wrapper.appendChild(dateSpan)
    wrapper.appendChild(titleH)
    wrapper.appendChild(temp);
    // content
    dateSpan.innerHTML = date;
    titleH.innerHTML = title;
    temp.innerHTML = temperature;

    return wrapper;
}

document.querySelector('.header-container').appendChild(Header('MARCH 28, 2019','Lambda Times','98°'));
