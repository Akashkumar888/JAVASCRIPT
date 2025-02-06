
var main=document.getElementById("main");
var str="";

let arr = [
    'https://media.sketchfab.com/models/069138f6680d4dec8491fb738f3d958c/thumbnails/aca17af2459c4c4abd9b16cad08b8ae7/128562657df04e4abca2d22f845885f2.jpeg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTpaeN_RhCMKBfiMuPGOEUSk0f74bEZxB35g&s',
    'https://thangs.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-thangs-public%2Fuploads%2Fattachments%2Ff4985fd7-64bc-4feb-a00f-b53248b0b828%2Funtitled.184.png&w=3840&q=75',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKInHwZWPYR_ZEhlCfp-wGJdu8qgHIQQ0vNA&s',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/90af2477095215.5c7dad740f730.jpg',
    'https://media.printables.com/media/prints/181162/images/1692717_d0085c93-77e5-42c0-8007-abe5b21e6c18/thumbs/inside/1280x960/png/mew_0.webp',
    'https://i.pinimg.com/originals/3b/7c/03/3b7c03da333830288b0086f1a0e0498b.png',
    'https://media.sketchfab.com/models/069138f6680d4dec8491fb738f3d958c/thumbnails/aca17af2459c4c4abd9b16cad08b8ae7/128562657df04e4abca2d22f845885f2.jpeg',
    'https://media.cgtrader.com/variants/ZVm9BfMvR9MP1WSYguzoTTPK/508c09fe26e63b93baec6d888aa2950650a509b5e04f2f03a4f2af52a04363ea/tbrender_003.jpg',
    'https://preview.free3d.com/img/2018/01/2158635337679636417/2lfrktxr.jpg'
  ];
  

let len=arr.length;


for(let i=1;i<=65;i++){
   let a=Math.floor(Math.random()*len);
   str+=`<div class="card"><img src="${arr[a]}" alt=""></div>`;
}
main.innerHTML=str;
