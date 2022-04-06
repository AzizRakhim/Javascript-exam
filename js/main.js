const elList = document.querySelector(".holder__list");
let stats = 0;

elArr.forEach((item, index) => {
  let elItem = document.createElement("li");
  elItem.className = `holder__item position-relative`;
  elItem.innerHTML = `
    <span class="not-show-anything">
    </span>
    <div class="not-show-img">
      <img src="${item.profilePic}" alt="profile">
    </div>
    <div class="overflow-not-show">
      <div class="holder__bio-img-holder">
  
      </div>
      <div class="holder__btn">
        <div class="holder__line d-flex">
            
        </div>
        <div class="holder__info">
            <div class="holder__container w-100 d-flex align-items-center">
                <div class="holder__bio d-flex col-7 align-items-center">
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
                <div class="holder__icons col-5 d-flex justify-content-end">
                    <ul class="holder__inner-list d-flex">
                        <li class="holder__inner-item d-flex align-items-center">
                            <button class="holder__inner-btn d-flex align-items-center">
                                <i class='bx bx-play'></i>
                            </button>
                        </li>
                        <li class="holder__inner-item d-flex align-items-center">
                            <button class="holder__inner-btn d-flex align-items-center">
                                <i class='bx bxs-bell-off'></i>
                            </button>
                        </li>
                        <li class="holder__inner-item d-flex align-items-center">
                            <button class="holder__inner-btn d-flex align-items-center">
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
    </div>
    <div class="arrow-btns">
      <button class="arrow-btn left">
        <i class='bx bx-chevron-left'></i>
      </button>
      <button class="arrow-btn right">
        <i class='bx bx-chevron-right'></i>
      </button>
    </div>
  `;

  elList.appendChild(elItem);

  let elImgKeep = elItem.querySelector('.holder__bio-img-holder');
  let emptyArr = item.media.map((el) => {
    return `<img src="${el}" alt="video">`
  }); 
  elImgKeep.innerHTML = emptyArr;

  let elHolderLine = elItem.querySelector(".holder__line");
  let lineArr = item.media.map((el) => {
    return `
      <span class="holder__real-line">
        <span class="white-it holder-bg-one">
    
        </span>
      </span>
    `;
  }); 
  elHolderLine.innerHTML = lineArr.join("");

  let elBg = elItem.querySelector(".not-show-anything");
  elBg.style.backgroundImage = `url("${item.media[0]}")`
});

let elItems = elList.querySelectorAll(".holder__item");
elItems[0].classList.add("active");
let see = elItems[0].querySelector(".arrow-btns");
see.style.display = "block";

let c = Math.floor(elArr.length / 2);

let count = 0;
elItems.forEach((item, idx) => {
  item.addEventListener("click", () => {
    item.classList.add("check");
    checkIt();
    if(count < idx){
      count++;
      elList.style.transform = `translate(${-idx * 212}px)`;
      stats = 0;
    } else if(count > idx){
      count--;
      elList.style.transform = `translate(${-idx * 212}px)`;
      stats = 0;
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

let elRight = document.querySelectorAll(".right");
let elLeft = document.querySelectorAll(".left");
let elImgContainer = document.querySelectorAll(".holder__bio-img-holder");

elRight.forEach((item, index) => {
  item.addEventListener("click", () => {
    stats++;
    changeIt(elImgContainer[index]);
  });
});

elLeft.forEach((item, index) => {
  item.addEventListener("click", () => {
    stats--;
    changeIt(elImgContainer[index]);
  });
});

function changeIt(elImgContainer) {
  let elImgCount = elImgContainer.querySelectorAll("img");
  if(stats > elImgCount.length - 1){
    stats = elImgCount.length - 1;
  } else if(stats < 0){
    stats = 0;
  }

  elImgContainer.style.transform = `translateX(${-stats * 335}px)`;
}
