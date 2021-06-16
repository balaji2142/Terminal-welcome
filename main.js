const about = document.getElementById('about')
const contact = document.getElementById('contact')
const aboutMe = document.getElementById('about-me')
const contactMe = document.getElementById('contact-me')

about.addEventListener('click', ()=>{

    new WinBox({
        title:'About me',
        width:'400px',
        // modal:true,
        height:'400px',
        top:50,
        left:50,
        bottom:50,
        right:50,
        mount: aboutMe,
        onfocus:function() {
            this.setBackground('#00aa00')
        },
        onblur:function() {
            this.setBackground('#777')
        }

    })

})

contact.addEventListener('click', ()=>{

    new WinBox({
        title:'Contact me',
        background:'#00aa00',
        width:'400px',
        height:'400px',
        // modal:true,
        top:150,
        left:130,
        bottom:50,
        right:50,
        mount: contactMe,
        onfocus:function() {
            this.setBackground('#00aa00')
        },
        onblur:function() {
            this.setBackground('#777')
        }
    })

})