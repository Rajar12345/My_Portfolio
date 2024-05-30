
const bp = gsap.timeline();
    bp.from(".bq", {
      opacity: 0,
    });
    bp.to(".cq", {
      delay: 0.5,
      y: 0,
      duration: 0.8,
    });
    bp.from(".op , .kp", {
      duration: 1,
      y: -100,
      opacity: 0,
      stagger: {
        amount: 0.4,
      },
    });
    bp.to(".dq h1", {
      opacity: 1,
      letterSpacing: "-25px",
      duration: 1.2,
    }, "-=.7");
    bp.to(".bq", {
      overflow: "visible",
    });
    const ao = gsap.timeline({
      paused: "true",
    });
    ao.to(".rp", {
      duration: 1,
      x: 0,
    });
    ao.from(".qp", {
      opacity: 0,
      rotate: "180deg",
    }, "-=.2");
    ao.from(".aq", {
      duration: 1,
      stagger: {
        amount: 0.5,
      },
      width: "0%",
    }, "-=.2");
    ao.from(".wp", {
      duration: 1,
      stagger: {
        amount: 0.5,
      },
      y: 100,
    }, "-=1.5");
    ao.from(".xp", {
      duration: 1,
      stagger: {
        amount: 0.5,
      },
      y: 100,
    }, "-=1.3");
    ao.from(".yp", {
      duration: 1,
      stagger: {
        amount: 0.5,
      },
      y: 100,
    }, "-=1.1");
    ao.from(".zp", {
      duration: 1,
      stagger: {
        amount: 0.5,
      },
      y: 100,
    }, "-=1");

    function lp() {
      ao.play();
    }

    function sp() {
      ao.reverse();
    }


    
var cursor = document.querySelector('.cursor'),
cursorScale = document.querySelectorAll('.cursor-scale'),
mouseX = 0,
mouseY = 0

gsap.to({}, 0.016, {
repeat: -1,

onRepeat: function () {
    gsap.set(cursor, {
        css: {
            left: mouseX,
            top: mouseY
        }
    })
}
});

window.addEventListener("mousemove", function (e) {
mouseX = e.clientX;
mouseY = e.clientY
});

cursorScale.forEach(link => {
link.addEventListener('mouseleave', () => {
    cursor.classList.remove('grow');
    cursor.classList.remove('grow-small');
});
link.addEventListener('mousemove', () => {
    cursor.classList.add('grow');
    if(link.classList.contains('small')){
        cursor.classList.remove('grow');
        cursor.classList.add('grow-small');
    }
});
});

    (function() {
      // Add event listener
      document.addEventListener("mousemove", parallax);
      const elem = document.querySelector("#parallax");
      // Magic happens here
      function parallax(e) {
          let _w = window.innerWidth/2;
          let _h = window.innerHeight/2;
          let _mouseX = e.clientX;
          let _mouseY = e.clientY;
          let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
          let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
          let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
          let x = `${_depth3}, ${_depth2}, ${_depth1}`;
          console.log(x);
          elem.style.backgroundPosition = x;
      }
  
  })();


  document.getElementById("su-cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("su-card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }