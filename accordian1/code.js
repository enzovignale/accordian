const closeBtn = document.querySelectorAll('.fa-times'),
    card = document.querySelectorAll('.card');
    //btnAction = document.querySelectorAll('.btn');//TODO: is this needed????

    const closeCard = (event)=>{
        //console.log("I'm here")
        event.stopPropagation();
        event.target.closest('.card').classList.add("closed");
    };
    const openCard = (event)=>{
        if(event.currentTarget.classList.contains("closed")){
            event.currentTarget.classList.remove("closed");
        }
    };

    closeBtn.forEach((el)=>{
        el.addEventListener('click',closeCard);
    });
    card.forEach((el)=>{
        el.addEventListener('click', openCard)
    });
    // btnAction.forEach((el)=>{//TODO: same here, is it needed???
    //     el.addEventListener('click', clickBtn)
    // });