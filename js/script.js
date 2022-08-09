//variables
let btn = document.querySelectorAll('button')[0];
let txt = document.querySelector('textarea');
let del;
let sec;
//click event on the + button
btn.onclick = () => {
    //condition if the txt area is empty
    if (txt.value == '') {
        alert('write something first')
    }
    //condition if the txt area is not empty
    else {
        //create a section and a text node with the the txt.value 
        let sec = document.createElement('section')
        let secTxt = document.createTextNode(txt.value)
        //create a span to delete the section and it's text node
        del = document.createElement('span')
        let delTxt = document.createTextNode('×')
        //append the span in the section
        sec.appendChild(del)
        //append the text nodes to the elements created (section and span)
        sec.appendChild(secTxt)
        del.appendChild(delTxt)
        //append the section to the body
        document.body.appendChild(sec)
        //empty the text area
        txt.value = ''
        //create an array of colors
        let colors = ['orangered', 'orange', 'yellowgreen', 'rgb(206, 206, 7)', 'skyblue', 'pink']
        //put a background color the section randomly
        sec.style.backgroundColor = colors[Math.floor(Math.random() * 6)]
        //click event on the span to delete it with it's section
        del.onclick = () => {
            //delete the section
            sec.remove()
        }
    }
}

