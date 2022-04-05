const elList = document.querySelector(".holder__list");
let stats = 0;

elArr.forEach((item, index) => {
  let elItem = document.createElement("li");
  elItem.className = `holder__item position-relative ${index + 1}`;
  elItem.innerHTML = `
    <span class="not-show-anything">
      <div class="not-show-img">
        <img src="${item.profilePic}" alt="profile">
      </div>
    </span>
    <div class="overflow-not-show">
      <div class="holder__bio-img-holder">
  
      </div>
      <div class="holder__btn">
        <div class="holder__line d-flex justify-content-between">
            <span class="holder__real-line">
              <span class="white-it holder-bg-one">
              
              </span>
            </span>
            <span class="holder__real-line">
              <span class="white-it holder-bg-two">
                
              </span>
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

  let elImgKeep = elItem.querySelector('.holder__bio-img-holder');
  let emptyArr = item.media.map((el) => {
    return `<img src="${el}" alt="video">`
  }); 
  elImgKeep.innerHTML = emptyArr;

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
      elList.style.transform = `translate(${-count * 460}px)`;
      stats = 0;
    } else if(count > idx){
      count--;
      elList.style.transform = `translate(${-count * 460}px)`;
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

  elItems.forEach((item) => {
    let elRealNum = 0;
    let secund = 5;

    let elRealNumTwo = 1;
    let secundTwo = 5;

    if(item.classList.contains('active')){
      const elRight = item.querySelector('.right');
      const elLeft = item.querySelector('.left');
      let elImgContainer = item.querySelector(".holder__bio-img-holder");
      let elONe = item.querySelector(".holder-bg-one");
      let elTwo = item.querySelector(".holder-bg-two");

      function run() {
        if(elRealNum < 5){
          elONe.style.width = `${secund += 19}%`;
          elRealNum++;
        } else{
          clearInterval(y);
          function runTwo() {
            if(elRealNumTwo <= 5){
              elTwo.style.width = `${secundTwo += 19}%`;
              elRealNumTwo++;
            } else{
              clearInterval(v);
            }
          }
    
          let v = setInterval(runTwo, 760);
        }
      }

      let y = setInterval(run, 1000);

      let a = setInterval(function() {
        stats++;
        changeIt(elImgContainer);
      }, 5000);

      elRight.addEventListener('click', () => {
        stats++;
        changeIt(elImgContainer);
        clearInterval(a);
        clearInterval(y); 
      });
      elLeft.addEventListener("click", () => {
        stats--;
        changeIt(elImgContainer);
        clearInterval(a);
        clearInterval(y)
      });
    }
  }); 
}

function changeIt(elImgContainer) {
  let elImgCount = elImgContainer.querySelectorAll("img");
  if(stats > elImgCount.length - 1){
    stats = 0;
  } else if(stats < 0){
    stats = elImgCount.length - 1;
  }
  elImgContainer.style.transform = `translateX(${-stats * 600}px)`;
}





