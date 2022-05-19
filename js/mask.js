const wrap = document.querySelector('main')
const btns = wrap.querySelectorAll('#navi li')
const panels = wrap.querySelectorAll('section article')
const vids = wrap.querySelectorAll('section article video')

// 초기 비디오 정지
vids.forEach(vid => {
    vid.pause();
})


// 메인페이지 비디오 재생
panels.forEach((panel, index) => {
    if(panels[index].classList.contains('on')){
        vids[index].play()
    }
})

// 버튼 클릭시 해당 비디오 재생 및 그외 비디오 정지
btns.forEach((btn, index) => {
    btn.addEventListener('click', () =>{
        
        vids.forEach(vid => {
            vid.pause();
        })

        vids[index].play()
    })
})




btns.forEach((btn, index) => {
    btn.addEventListener('click', e => {
        for(let i=0; i<btns.length; i++){
            btns[i].classList.remove('on') // 버튼의 on클래스를 제거
            
            if(panels[i].classList.contains('on')){ //패널에 on클래스가 있을시 mask클래스를 붙힌다.
                panels[i].classList.add('mask')
            }
            
            
        }
        btns[index].classList.add('on')// 이벤트가 발생한 요소에만 on클래스
        panels[index].classList.add('lower')// 이벤트가 발생한 요소에만 on클래스

        setTimeout(() => {
            for(let i=0; i<panels.length; i++){
                if(panels[i].classList.contains('on') ){
                    panels[i].classList.remove('on') // 패널의 on클래스 제거
                    panels[i].classList.remove('mask') // 패널의 mask클래스 제거
                }
            }
            panels[index].classList.remove('lower')
            panels[index].classList.add('on')              

        }, 1600)



        
    })
})


