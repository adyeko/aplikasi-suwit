const pilcomp = function(){
    const crandom = Math.random();
    if (crandom <= 0.33)return('gajah');
    else if(crandom >= 0.33 && crandom <= 0.66 )return('orang');
    else return('semut')
    

};

const playerall =document.querySelectorAll('li img');

playerall.forEach(function(pil){
    pil.addEventListener('click',function(){

        console.log(pil);
        player = pil.className;
        computer= pilcomp();
        
        let hasil='';
        if(player == computer){
            hasil = 'SERII!';
        }else if(player == 'gajah'){
            hasil = (computer == 'orang') ? 'menang' : 'kalah';
        }else if (player ==  'orang'){
            hasil = (computer == 'gajah') ? 'kalah' : 'menang';
        }else if(player == 'semut'){
            hasil = (computer == 'orang') ? 'kalah' : 'menang';
        }
        
        const gambarcomp = document.querySelector('.img-komputer');
        gambarcomp.setAttribute('src','img/'+computer+'.png');
        const isihasil = document.querySelector('.info');
        isihasil.innerHTML = hasil;
    });

});