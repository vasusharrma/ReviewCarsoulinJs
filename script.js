const arr = [
    
    {
        img:"portrait/casual boy headshots.jpeg" ,
        fullName:"Alexendra Grace" ,
        profession:"Musician",
        reveiw:"Attended the concert last night, and it was electrifying. The band was phenomenal, and the energy in the venue was off the charts. Great sound quality and an unforgettable performance. Can't wait for their next tour!."
    } ,


    {
        img:"portrait/Emily Johnston.jpeg" ,
        fullName:"Emily" ,
        profession:"Teaching",
        reveiw:"I absolutely adore the new boutique downtown! The clothing selection is trendy and unique, and the staff are incredibly helpful. I found the perfect dress for a wedding. A delightful shopping experience that I'll definitely repeat."
    } ,

    {
        img:"portrait/Foto ritratto corporate_ Headshots Portrait.jpeg" ,
        fullName:"Sarah" ,
        profession:"Ux-Ui Designer",
        reveiw:"Just finished reading the latest thriller novel, and it was fantastic. The plot twists kept me on the edge of my seat, and the characters were well-developed. Couldn't put it down! Highly recommend for any mystery lovers."
    },

    {
        img:"portrait/Headshots _ Topic _ Backstage.jpeg" ,
        fullName:"Mike" ,
        profession:"Actor",
        reveiw:"Bought a new set of wireless earbuds, and they exceeded my expectations. The sound quality is crystal clear, and the battery life is impressive. Comfortable to wear for long periods. A solid purchase for any music lover."
    },

    {
        img:"portrait/Top 18 Classy & Elegant Fashion Combinations for Business Woman.jpeg" ,
        fullName:"Jessica" ,
        profession:"Video Editor",
        reveiw:"Visited the new vegan restaurant and was thoroughly impressed. The food was flavorful and beautifully presented. Even my non-vegan friends enjoyed it. The atmosphere was cozy and welcoming. Will be returning soon for sure!"
    },

    {
        img:"portrait/What Is the Legacy of Ryuichi Sakamoto_.jpeg" ,
        fullName:"Michale Vough" ,
        profession:"Buisness Man",
        reveiw:"Tried out a new hiking trail over the weekend, and it was breathtaking. The scenery was stunning, and the trail was well-marked and maintained. Perfect for a weekend adventure. Highly recommend for nature enthusiasts."
    }
];

const pfpImg = document.getElementById('pfp_img_real');
const personName = document.getElementById('name');
const personProfession = document.getElementById('profession');
const reveiwPara = document.getElementById('rev_para');
const prevReveiw = document.querySelector('[prev-Rev]');
const nextReveiw = document.querySelector('[next-Rev]');
const surpriseButton = document.querySelector('#surp_btn');
let arrVal = 0;

function getRandom(min , max){
    return Math.floor(((Math.random())*(max-min)) + min);
}


function nextCard(){
    if(arrVal === arr.length-1){
        arrVal = 0;
    }
    else{
        arrVal++;
    }
    console.log("Hello");
    changeReview(arrVal);
}

function prevCard(){
    if(arrVal === 0){
        arrVal = arr.length-1;
    }
    else{
        arrVal--;
    }
    changeReview(arrVal);
}


function randomCard(){
    let tempVal = getRandom(0 , arr.length);
    while(tempVal === arrVal){
        tempVal = getRandom(0 , arr.length);
    }

    arrVal = tempVal;

    changeReview(arrVal);
}

function changeReview(val) {

    pfpImg.src = arr[val].img;
    personName.innerText = arr[val].fullName;
    personProfession.innerText = arr[val].profession;
    reveiwPara.innerText = arr[val].reveiw;

}

nextReveiw.addEventListener('click' , nextCard);
prevReveiw.addEventListener('click' , prevCard);
surpriseButton.addEventListener('click' , randomCard);