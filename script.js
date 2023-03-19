const boxClick1 = document.getElementById("1-box")
const boxClick2 = document.getElementById("2-box")
const boxClick3 = document.getElementById("3-box")
const boxClick4 = document.getElementById("4-box")
const boxClick5 = document.getElementById("5-box")
const boxClick6 = document.getElementById("6-box")
const boxClick7 = document.getElementById("7-box")
const boxClick8 = document.getElementById("8-box")
const boxClick9 = document.getElementById("9-box")
const rstBtn = document.getElementById("rstBtn")
const xPop = document.getElementById("x-pop")
const oPop = document.getElementById("o-pop")


rstBtn.addEventListener('click', function(){
    window.location.reload()
})

const useState = function() {
    let state = {
      xTurn: true,
    };
    const setState = (newState) => {
      state = { ...newState };
    };
    const myStateObj = {
      get state() { return state; },
      setState,
    };
    return myStateObj;
};
  
const currentPlayer = useState();
  
const handleCheckPlayer = () => {
    if (currentPlayer.state.xTurn == true){
    const newPlayer = {
      xTurn: false
    };
    currentPlayer.setState(newPlayer);

    }else{
        const newPlayer = {
            xTurn: true
        };
        currentPlayer.setState(newPlayer)
    } 
};


let checkVictoryTop = () =>{
    const div1 = document.getElementById('div1')
    const div2 = document.getElementById('div2')
    const div3 = document.getElementById('div3')
    if(div1 !==null & div2 !==null & div3 !==null){
        if(div1.innerText=='x' && div2.innerText=='x' && div3.innerText=='x'){
            xPop.classList.add('x-pop-on')
        }else if(div1.innerText=='o' && div2.innerText=='o' && div3.innerText=='o'){
            oPop.classList.add('o-pop-on')
        }
    } else{
    }  
}

let checkVictoryMid = () => {
    const div4 = document.getElementById('div4')
    const div5 = document.getElementById('div5')
    const div6 = document.getElementById('div6')
    if(div4 !==null & div5 !==null & div6 !==null){
        if(div4.innerText=='x' && div5.innerText=='x' && div6.innerText=='x'){
            xPop.classList.add('x-pop-on')
        }else if(div4.innerText=='o' && div5.innerText=='o' && div6.innerText=='o'){
            oPop.classList.add('o-pop-on')
        }
    }else{
    }
}

let checkVictoryBot = () => {
    const div7 = document.getElementById('div7')
    const div8 = document.getElementById('div8')
    const div9 = document.getElementById('div9')
    if(div7 !==null & div8 !==null & div9 !==null){
        if(div7.innerText=='x' && div8.innerText=='x' && div9.innerText=='x'){
            xPop.classList.add('x-pop-on')
        }else if(div7.innerText=='o' && div8.innerText=='o' && div9.innerText=='o'){
            oPop.classList.add('o-pop-on')
        }
    }else{
    }
}

let checkVictoryLeft = () => {
    const div1 = document.getElementById('div1')
    const div4 = document.getElementById('div4')
    const div7 = document.getElementById('div7')
    if(div1 !==null & div4 !==null & div7 !==null){
        if(div1.innerText=='x' && div4.innerText=='x' && div7.innerText=='x'){
            xPop.classList.add('x-pop-on')
        }else if(div1.innerText=='o' && div4.innerText=='o' && div7.innerText=='o'){
            oPop.classList.add('o-pop-on')
        }
    }else{
    }
}
let checkVictoryCent = () => {
    const div2 = document.getElementById('div2')
    const div5 = document.getElementById('div5')
    const div8 = document.getElementById('div8')
    if(div2 !==null & div5 !==null & div8 !==null){
        if(div2.innerText=='x' && div5.innerText=='x' && div8.innerText=='x'){
            xPop.classList.add('x-pop-on')
        }else if(div2.innerText=='o' && div5.innerText=='o' && div8.innerText=='o'){
            oPop.classList.add('o-pop-on')
        }
    }else{
    }
}
let checkVictoryRight = () => {
    const div3 = document.getElementById('div3')
    const div6 = document.getElementById('div6')
    const div9 = document.getElementById('div9')
    if(div3 !==null & div6 !==null & div9 !==null){
        if(div3.innerText=='x' && div6.innerText=='x' && div9.innerText=='x'){
            xPop.classList.add('x-pop-on')
        }else if(div3.innerText=='o' && div6.innerText=='o' && div9.innerText=='o'){
            oPop.classList.add('o-pop-on')
        }
    }else{
    }
}
let checkVictoryDiag1 = () => {
    const div1 = document.getElementById('div1')
    const div5 = document.getElementById('div5')
    const div9 = document.getElementById('div9')
    if(div1 !==null & div5 !==null & div9 !==null){
        if(div1.innerText=='x' && div5.innerText=='x' && div9.innerText=='x'){
            xPop.classList.add('x-pop-on')
        }else if(div1.innerText=='o' && div5.innerText=='o' && div9.innerText=='o'){
            oPop.classList.add('o-pop-on')
        }
    }else{
    }
}
let checkVictoryDiag2 = () => {
    const div3 = document.getElementById('div3')
    const div5 = document.getElementById('div5')
    const div7 = document.getElementById('div7')
    if(div3 !==null & div5 !==null & div7 !==null){
        if(div3.innerText=='x' && div5.innerText=='x' && div7.innerText=='x'){
            xPop.classList.add('x-pop-on')
        }else if(div3.innerText=='o' && div5.innerText=='o' && div7.innerText=='o'){
            oPop.classList.add('o-pop-on')
        }
    }else{
    }
}





boxClick1.addEventListener('click', function(){

    if(boxClick1.innerText === ''){
        handleCheckPlayer()
        if(currentPlayer.state.xTurn==false){
        let div1 = document.createElement('div1')
        div1.setAttribute('id', 'div1')
        div1.classList.add('place-x')
        div1.innerHTML = 'x'
        this.append(div1)
       
       
        }else{
            let div1 = document.createElement('div')
            div1.setAttribute('id', 'div1')
            div1.classList.add('place-o')
            div1.innerHTML = 'o'
            this.append(div1)
            
        }
    }else{
        console.log('Try again')
    }
    checkVictoryBot()
    checkVictoryCent()
    checkVictoryDiag1()
    checkVictoryDiag2()
    checkVictoryLeft()
    checkVictoryMid()
    checkVictoryRight()
    checkVictoryTop()
})

boxClick2.addEventListener('click', function(){

    if(boxClick2.innerText === ''){
        handleCheckPlayer()
        if(currentPlayer.state.xTurn==false){
        let div2 = document.createElement('div')
        div2.setAttribute('id', 'div2')
        div2.classList.add('place-x')
        div2.innerHTML = 'x'
        this.append(div2)
        
        }else{
            let div2 = document.createElement('div')
            div2.classList.add('place-o')
            div2.setAttribute('id', 'div2')
            div2.innerHTML = 'o'
            this.append(div2)
            
        }
    }else{
        console.log('Try again')
    }
    checkVictoryBot()
    checkVictoryCent()
    checkVictoryDiag1()
    checkVictoryDiag2()
    checkVictoryLeft()
    checkVictoryMid()
    checkVictoryRight()
    checkVictoryTop()
})
boxClick3.addEventListener('click', function(){

    if(boxClick3.innerText === ''){
        handleCheckPlayer()
        if(currentPlayer.state.xTurn==false){
        let div3 = document.createElement('div')
        div3.setAttribute('id', 'div3')
        div3.classList.add('place-x')
        div3.innerHTML = 'x'
        this.append(div3)
        
        }else{
            let div3 = document.createElement('div')
            div3.classList.add('place-o')
            div3.setAttribute('id', 'div3')
            div3.innerHTML = 'o'
            this.append(div3)
        }
    }else{
        console.log('Try again')
    }
    checkVictoryBot()
    checkVictoryCent()
    checkVictoryDiag1()
    checkVictoryDiag2()
    checkVictoryLeft()
    checkVictoryMid()
    checkVictoryRight()
    checkVictoryTop()
})
boxClick4.addEventListener('click', function(){

    if(boxClick4.innerText === ''){
        handleCheckPlayer()
        if(currentPlayer.state.xTurn==false){
        let div4 = document.createElement('div')
        div4.setAttribute('id', 'div4')
        div4.classList.add('place-x')
        div4.innerHTML = 'x'
        this.append(div4)
        }else{
            let div4 = document.createElement('div')
            div4.setAttribute('id', 'div4')
            div4.classList.add('place-o')
            div4.innerHTML = 'o'
            this.append(div4)
        }
    }else{
        console.log('Try again')
    }
    checkVictoryBot()
    checkVictoryCent()
    checkVictoryDiag1()
    checkVictoryDiag2()
    checkVictoryLeft()
    checkVictoryMid()
    checkVictoryRight()
    checkVictoryTop()
})
boxClick5.addEventListener('click', function(){

    if(boxClick5.innerText === ''){
        handleCheckPlayer()
        if(currentPlayer.state.xTurn==false){
        let div5 = document.createElement('div')
        div5.setAttribute('id', 'div5')
        div5.classList.add('place-x')
        div5.innerHTML = 'x'
        this.append(div5)
        }else{
            let div5 = document.createElement('div')
            div5.classList.add('place-o')
            div5.setAttribute('id', 'div5')
            div5.innerHTML = 'o'
            this.append(div5)
        }
    }else{
        console.log('Try again')
    }
    checkVictoryBot()
    checkVictoryCent()
    checkVictoryDiag1()
    checkVictoryDiag2()
    checkVictoryLeft()
    checkVictoryMid()
    checkVictoryRight()
    checkVictoryTop()
})
boxClick6.addEventListener('click', function(){

    if(boxClick6.innerText === ''){
        handleCheckPlayer()
        if(currentPlayer.state.xTurn==false){
        let div6 = document.createElement('div')
        div6.setAttribute('id', 'div6')
        div6.classList.add('place-x')
        div6.innerHTML = 'x'
        this.append(div6)
        }else{
            let div6 = document.createElement('div')
            div6.classList.add('place-o')
            div6.setAttribute('id', 'div6')
            div6.innerHTML = 'o'
            this.append(div6)
        }
    }else{
        console.log('Try again')
    }
    checkVictoryBot()
    checkVictoryCent()
    checkVictoryDiag1()
    checkVictoryDiag2()
    checkVictoryLeft()
    checkVictoryMid()
    checkVictoryRight()
    checkVictoryTop()
})
boxClick7.addEventListener('click', function(){

    if(boxClick7.innerText === ''){
        handleCheckPlayer()
        if(currentPlayer.state.xTurn==false){
        let div7 = document.createElement('div')
        div7.setAttribute('id', 'div7')
        div7.classList.add('place-x')
        div7.innerHTML = 'x'
        this.append(div7)
        }else{
            let div7 = document.createElement('div')
            div7.setAttribute('id', 'div7')
            div7.classList.add('place-o')
            div7.innerHTML = 'o'
            this.append(div7)
        }
    }else{
        console.log('Try again')
    }
    checkVictoryBot()
    checkVictoryCent()
    checkVictoryDiag1()
    checkVictoryDiag2()
    checkVictoryLeft()
    checkVictoryMid()
    checkVictoryRight()
    checkVictoryTop()
})
boxClick8.addEventListener('click', function(){
    
    if(boxClick8.innerText === ''){
        handleCheckPlayer()
        if(currentPlayer.state.xTurn==false){    
        let div8 = document.createElement('div')
        div8.setAttribute('id', 'div8')
        div8.classList.add('place-x')
        div8.innerHTML = 'x'
        this.append(div8)
        }else{
            let div8 = document.createElement('div')
            div8.setAttribute('id', 'div8')
            div8.classList.add('place-o')
            div8.innerHTML = 'o'
            this.append(div8)
        }
    }else{
        console.log('Try again')
    }
    checkVictoryBot()
    checkVictoryCent()
    checkVictoryDiag1()
    checkVictoryDiag2()
    checkVictoryLeft()
    checkVictoryMid()
    checkVictoryRight()
    checkVictoryTop()
})
boxClick9.addEventListener('click', function(){

    
    if(boxClick9.innerText === ''){
        handleCheckPlayer()
        if(currentPlayer.state.xTurn==false){
        let div9 = document.createElement('div')
        div9.setAttribute('id', 'div9')
        div9.classList.add('place-x')
        div9.innerHTML = 'x'
        this.append(div9)
        }else{
            let div9 = document.createElement('div')
            div9.setAttribute('id', 'div9')
            div9.classList.add('place-o')
            div9.innerHTML = 'o'
            this.append(div9)
        }
    }else{
        console.log('Try again')
    }
    checkVictoryBot()
    checkVictoryCent()
    checkVictoryDiag1()
    checkVictoryDiag2()
    checkVictoryLeft()
    checkVictoryMid()
    checkVictoryRight()
    checkVictoryTop()
})

