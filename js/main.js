const elList = document.querySelector(".holder__list");

elArr.forEach((item, index) => {
  let elItem = document.createElement("li");
  elItem.className = `holder__item position-relative ${index + 1}`;
  elItem.innerHTML = `
    <div class="holder__bio-img-holder">
      <img src="${item.media[0]}" alt="video">
    </div>
    <div class="holder__btn">
      <div class="holder__line d-flex justify-content-between">
          <span class="holder__real-line">

          </span>
          <span class="holder__real-line">

          </span>
      </div>
      <div class="holder__info">
          <div class="holder__container w-100 d-flex align-items-center">
              <div class="holder__bio d-flex col-6 align-items-center">
                  <div class="holder__img-holder">
                      <img src="${item.profilePic}" alt="profile">
                  </div>
                  <div class="holder__name-holder">
                      <span class="holder__real-name">
                          ${item.name}
                      </span>
                      <span class="holder__time">
                          ${item.time}
                      </span>
                  </div>
              </div>
              <div class="holder__icons col-6 d-flex justify-content-end">
                  <ul class="holder__inner-list d-flex">
                      <li class="holder__inner-item">
                          <button class="holder__inner-btn">
                              <i class='bx bx-play'></i>
                          </button>
                      </li>
                      <li class="holder__inner-item">
                          <button class="holder__inner-btn">
                              <i class='bx bxs-bell-off'></i>
                          </button>
                      </li>
                      <li class="holder__inner-item">
                          <button class="holder__inner-btn">
                              <i class='bx bx-dots-horizontal-rounded' ></i>
                          </button>
                      </li>
                  </ul>
              </div>
          </div>
          <div class="holder__input">
              <form class="holder__form d-flex align-items-center">
                  <input class="holder__text col-10" type="text" name="send-message" id="holder__text" placeholder="reply to ${item.name}..." required>
                  <button class="holder__send col-2" type="submit">
                      <i class='bx bxl-telegram'></i>
                  </button>
              </form>
          </div>
      </div>
    </div>
    <div class="arrow-btns">
      <button class="arrow-btn left">
        <
      </button>
      <button class="arrow-btn right">
        >
      </button>
    </div>
  `;

  elList.appendChild(elItem);
});

let elItems = elList.querySelectorAll(".holder__item");
elItems[0].classList.add("active");
let see = elItems[0].querySelector(".arrow-btns");
see.style.display = "block";


let c = Math.floor(elArr.length / 2);
console.log(c);

let count = 0;
elItems.forEach((item, idx) => {
  item.addEventListener("click", () => {
    item.classList.add("check");
    checkIt();
    if(count < idx){
      count++;
      elList.style.transform = `translate(${-count * 360}px)`;
    } else if(count > idx){
      count--;
      elList.style.transform = `translate(${-count * 360}px)`;
    }
  });
});

function checkIt() {
  elItems.forEach((item) => {
    if(item.classList.contains("check")){
      item.classList.add("active");
      item.classList.remove("check");
      let see = item.querySelector(".arrow-btns");
      see.style.display = "block";
    } else{
      item.classList.remove("active")
      let see = item.querySelector(".arrow-btns");
      see.style.display = "none";
    }
  });
}





