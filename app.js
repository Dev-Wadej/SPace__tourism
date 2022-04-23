let tabs = document.querySelectorAll('.moon__navbar--link');
// let tabs = document.querySelectorAll('.js--link')
let content = document.querySelectorAll('.moon');

let contentsArr = Array.prototype.slice.call(content);

//----Mistake from the tabs array and we had to concat several array to acieve the answer
let contents = contentsArr.concat(contentsArr,contentsArr,contentsArr);



// function disableScroll() {
//     // Get the current page scroll position
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
//         // if any scroll is attempted, set this to the previous value
//         window.onscroll = function() {
//             window.scrollTo(scrollLeft, scrollTop);
//         };
// }
//   disableScroll();

   
//tab container for removing and adding as well
tabs.forEach((tab,index) =>{
    tab.addEventListener('click', ()=>{
        tabs.forEach((tabrmv)=> tabrmv.classList.remove('active'))
        tab.classList.add('active')

        //-----Add and remove the contents
        contents.forEach((cnt)=> cnt.classList.remove('content__active'))
        contents[index].classList.add('content__active')
        
    })
})

//// NAVIgation for the gallery

const btnnav = document.querySelectorAll('.manual-btn');
const crewContent = document.querySelectorAll('.crew');
// console.log(crewContent, btnnav)

btnnav.forEach((btn,index) => {
    
    
   
    btn.addEventListener('click', () =>{
        btnnav.forEach(r => r.classList.remove('btn--active'))
        btn.classList.add('btn--active')
       
        crewContent.forEach((crewCnt) =>{
            crewCnt.classList.remove('crew__active')
        })
        crewContent[index].classList.add('crew__active')
    })
})

const techbtn = document.querySelectorAll('.tech__num');
const techCnt = document.querySelectorAll('.tech__content')
const techImg = document.querySelectorAll('.techImg')

techbtn.forEach((techBtn,index) =>{
    techBtn.addEventListener('click', function(){
        techbtn.forEach((t)=>{t.classList.remove('tech__active')})
        techBtn.classList.add('tech__active')

        techCnt.forEach((r)=> r.classList.remove('tech__content--active'))
        techCnt[index].classList.add('tech__content--active')

        techImg.forEach(i=> {
            i.classList.remove('img__active')
        })
        techImg[index].classList.add('img__active')
    } )
})


const hamburger = document.querySelector('.hamburger')
const sidebar = document.querySelector('.navbar__right')
const addbtn =document.querySelector('.add--btn')
const rmvbtn = document.querySelector('.hamburger--rmv')
const nav= document.querySelector('.hero__span')


// const html ='<div class="hamburger--rmv"><svg class="hamburgers "><img src="./img/remove.svg" alt="Hamburger"></svg></div>'

hamburger.addEventListener('click', ()=>{
    console.log('Worked')
    sidebar.classList.add('show__hamburger')
    hamburger.classList.remove('hamburger')

    rmvbtn.style.opacity =1
    // rmvbtn.add(rmvbtn)
    // nav.insertAdjacentHTML("afterend", html)


})

rmvbtn.addEventListener('click',(e)=>{
    sidebar.classList.remove('show__hamburger')  
    rmvbtn.remove(rmvbtn)
    rmvbtn.style.opacity =0
    // rmvbtn.classList.add('rmv--btn')
    hamburger.classList.add('hamburger')
})