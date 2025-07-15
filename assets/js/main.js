/*-------------------

Template Name: <
Author:  pixel-drop
Author URI: https://themeforest.net/user/pixel-drop/portfolio
Developer: Gramentheme Team
Version: 1.0.0
Description: 

--------------------
CSS TABLE OF CONTENTS
--------------------

01. preloader
02. header
03. swiper slider
04. Custom text Animation
05. Aos Animation
06. Tilt Js
07. magnificPopup
08. Odometer
09. Booststrap Customization
10. nice select
11. wow animation
12.Custom Search 

-------------------*/

(function ($) {
  "use strict";

  $(document).ready(function () {
    //--- Custom Header Start ---//

    $(".navbar-toggle-btn").on("click", function () {
      $(".navbar-toggle-item").slideToggle(300);
      $("body").toggleClass("overflow-hidden");
      $(this).toggleClass("open");
    });
    $(".menu-item button").on("click", function () {
      $(this).siblings("ul").slideToggle(300);
    });

    var fixed_top = $(".header-section");
    if ($(window).scrollTop() > 50) {
      fixed_top.addClass("animated fadeInDown header-fixed");
    } else {
      fixed_top.removeClass("animated fadeInDown header-fixed");
    }
    //--== Sticky Header ==--//

    //--== Window On Scroll ==--//
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        fixed_top.addClass("animated fadeInDown header-fixed");
      } else {
        fixed_top.removeClass("animated fadeInDown header-fixed");
      }
    });
    //--- Custom Header End ---//

    //--- Custom Sidebar ---//
    $(".remove-click").on("click", function (e) {
      $(".subside-barmenu").toggleClass("active");
    });
    //--- Custom Sidebar Start ---//

    //--- Search Popup Start ---//
    const $searchWrap = $(".search-wrap");
    const $navSearch = $(".nav-search");
    const $searchClose = $("#search-close");

    $(".search-trigger").on("click", function (e) {
      e.preventDefault();
      $searchWrap.animate({ opacity: "toggle" }, 500);
      $navSearch.add($searchClose).addClass("open");
    });

    $(".search-close").on("click", function (e) {
      e.preventDefault();
      $searchWrap.animate({ opacity: "toggle" }, 500);
      $navSearch.add($searchClose).removeClass("open");
    });

    function closeSearch() {
      $searchWrap.fadeOut(200);
      $navSearch.add($searchClose).removeClass("open");
    }

    $(document.body).on("click", function (e) {
      closeSearch();
    });

    $(".search-trigger, .main-search-input").on("click", function (e) {
      e.stopPropagation();
    });
    //--- Search Popup Start ---//

    //--- Custom Tilt Js Start ---//
    const tilt = document.querySelectorAll(".tilt");
    VanillaTilt.init(tilt, {
      reverse: true,
      max: 15,
      speed: 400,
      scale: 1.01,
      glare: true,
      reset: true,
      perspective: 800,
      transition: true,
      "max-glare": 0.45,
      "glare-prerender": false,
      gyroscope: true,
      gyroscopeMinAngleX: -45,
      gyroscopeMaxAngleX: 45,
      gyroscopeMinAngleY: -45,
      gyroscopeMaxAngleY: 45,
    });
    //--- Custom Tilt Js End ---//

    //--- Custom Line Animation ---//
    for (let i = 0; i < 3; i++) {
      const clone = $("<span></span>").clone();
      clone.appendTo(".line-shape.first");
    }
    //--- Custom Line Animation ---//

    //--- Scroll Top Start ---//
    let calcScrollValue = () => {
      let scrollProgress = document.getElementById("progress");
      let progressValue = document.getElementById("valu");
      let pos = document.documentElement.scrollTop;
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 250) / calcHeight);

      if (pos > 250) {
        scrollProgress.style.display = "grid";
      } else {
        scrollProgress.style.display = "none";
      }
      scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
      });
    };
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;
    //--- Scroll Top End ---//

    //---  Counter Start ---//
    $(".count").counterUp({
      delay: 15,
      time: 4000,
    });
    //--- Counter  End ---//

    //--- Swiper Project Study SLide End ---//
    // const serviceSlider = new Swiper(".study-slidewrap", {
    // 	spaceBetween: 0,
    // 	speed: 1500,
    // 	loop: true,
    // 	autoplay: {
    // 		delay: 1500,
    // 		disableOnInteraction: false,
    // 	},
    // 	navigation: {
    // 		nextEl: ".cmn-prev",
    // 		prevEl: ".cmn-next",
    // 	},

    // 	breakpoints: {
    // 		1199: {
    // 			slidesPerView: 1,
    // 		},
    // 		991: {
    // 			slidesPerView: 1,
    // 		},
    // 		767: {
    // 			slidesPerView: 1,
    // 		},
    // 		575: {
    // 			slidesPerView: 1,
    // 		},
    // 		0: {
    // 			slidesPerView: 1,
    // 		},
    // 	},
    // });
    //--- Swiper project SLide End ---//

    //--- Swiper service SLide start ---//
    const studyslidewrap = new Swiper(".study-slidewrap", {
      spaceBetween: 30,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".cmn-prev",
        prevEl: ".cmn-next",
      },

      breakpoints: {
        1199: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 2,
          spaceBetween: 14,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        575: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    });
    //--- Swiper service SLide End ---//

    //--- Swiper Testimonial SLide Start ---//
    const testimonialWrapv2 = new Swiper(".testimonial-wrapv2", {
      spaceBetween: 30,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".cmn-prev",
        prevEl: ".cmn-next",
      },

      breakpoints: {
        1199: {
          slidesPerView: 1,
        },
      },
    });
    //--- Swiper Testimonial SLide End ---//

    //--- Swiper Testimonial SLide Start ---//
    const testimonialVersion01 = new Swiper(".testimonial-version01", {
      spaceBetween: 10,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".cmn-prev",
        prevEl: ".cmn-next",
      },

      breakpoints: {
        767: {
          spaceBetween: 30,
          slidesPerView: 2,
        },
      },
    });
    //--- Swiper Testimonial SLide End ---//

    //--- Swiper Testimonial SLide Start ---//
    const testimonialVersion011 = new Swiper(".testimonial-version011", {
      spaceBetween: 10,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".cmn-prev",
        prevEl: ".cmn-next",
      },

      breakpoints: {
        767: {
          spaceBetween: 30,
          slidesPerView: 1,
        },
      },
    });
    //--- Swiper Testimonial SLide End ---//

    //--- Swiper Testimonial SLide Start ---//
    const testimonialVersion03 = new Swiper(".testimonial-version03", {
      spaceBetween: 20,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".cmn-prev",
        prevEl: ".cmn-next",
      },

      breakpoints: {
        1199: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 2,
        },
      },
    });
    //--- Swiper Testimonial SLide End ---//

    //--- Swiper Team SLide End ---//
    const teamslideWrap = new Swiper(".team-slidewrap", {
      spaceBetween: 30,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".cmn-prev",
        prevEl: ".cmn-next",
      },

      breakpoints: {
        1199: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 14,
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 14,
        },
        575: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    });
    //--- Swiper Team SLide End ---//

    //--- Swiper Team SLide End ---//
    const protfolioSolutionwrap = new Swiper(".protfolio-solutionwrap", {
      spaceBetween: 30,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },

      breakpoints: {
        1199: {
          slidesPerView: 1,
        },
      },
    });
    //--- Swiper Team SLide End ---//

    //--- Swiper Team SLide End ---//
    const trustedInner = new Swiper(".trusted-inner", {
      spaceBetween: 30,
      speed: 1500,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },

      breakpoints: {
        1199: {
          slidesPerView: 6,
        },
        991: {
          slidesPerView: 6,
        },
        767: {
          slidesPerView: 5,
        },
        500: {
          slidesPerView: 4,
        },
        320: {
          slidesPerView: 3,
        },
        0: {
          slidesPerView: 2,
        },
      },
    });
    //--- Swiper Team SLide End ---//

    //>> Brand Slider Start <<//
    if ($(".brand-slider").length > 0) {
      const brandSlider = new Swiper(".brand-slider", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        breakpoints: {
          1199: {
            slidesPerView: 5,
          },
          991: {
            slidesPerView: 4,
          },
          767: {
            slidesPerView: 3,
          },
          575: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    //>> Testimonial Slider Start <<//
    if ($(".testimonial-slider").length > 0) {
      const testimonialSlider = new Swiper(".testimonial-slider", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".dot",
          clickable: true,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        breakpoints: {
          1399: {
            slidesPerView: 4,
          },
          1199: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    //--- Aos Animation --- //
    $(".title").attr({
      "data-aos": "zoom-in",
      "data-aos-duration": "2000",
    });

    AOS.init({
      once: true,
    });
    //--- Aos Animation --- //

    //--- magnific Popup --- //
    $(".img-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    $(".video-popup").magnificPopup({
      type: "iframe",
      callbacks: {},
    });
    //--- magnific Popup --- //

    //--- Nice Select --- //
    $("select").niceSelect();
    //--- Nice Select --- //

    //--- Custom Accordion Tabs --- //
    $(".accordion-single .header-area").on("click", function () {
      if ($(this).closest(".accordion-single").hasClass("active")) {
        $(this).closest(".accordion-single").removeClass("active");
        $(this).next(".content-area").slideUp();
      } else {
        $(".accordion-single").removeClass("active");
        $(this).closest(".accordion-single").addClass("active");
        $(".content-area").not($(this).next(".content-area")).slideUp();
        $(this).next(".content-area").slideToggle();
      }
    });
    //--- Custom Accordion Tabs --- //
  }); // End Document Ready Function

  function loader() {
    $(window).on("load", function () {
      // Animate loader off screen
      $(".preloader").addClass("loaded");
      $(".preloader").delay(600).fadeOut();
    });
  }

  loader();
})(jQuery);



// Cal.com script
(function (C, A, L) {
  let p = function (a, ar) {
    a.q.push(ar);
  };
  let d = C.document;
  C.Cal =
    C.Cal ||
    function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () {
          p(api, arguments);
        };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ["initNamespace", namespace]);
        } else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
})(window, "https://app.cal.com/embed/embed.js", "init");

Cal("init", "30min", { origin: "https://cal.com" });

Cal.ns["30min"]("inline", {
  elementOrSelector: "#my-cal-inline",
  config: { layout: "month_view", theme: "dark" },
  calLink: "hypedesign/30min",
});

Cal.ns["30min"]("ui", {
  theme: "dark",
  hideEventTypeDetails: false,
  layout: "month_view",
});


// GASP floating elements
document.addEventListener("DOMContentLoaded", function () {
  // Float left image
  gsap.to("#floaty-left", {
    y: -40,
    rotationZ: 3,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
  });

  // Float right image
  gsap.to("#floaty-right", {
    y: -40,
    rotationZ: -3,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
  });

  gsap.to("#soft-star", {
    rotation: 360,
    duration: 2,
    ease: "none", // Use "none" instead of "linear" for perfect loop
    repeat: -1,
    transformOrigin: "50% 50%" // ensures it rotates around the center
  });

});



document.querySelectorAll(".nav-link").forEach((item) => {
        item.addEventListener("mouseover", function () {
          const targetPaneId = this.getAttribute("data-bs-target");
          const targetPane = document.querySelector(targetPaneId);

          // Remove 'active' class from all nav links
          document.querySelectorAll(".nav-link").forEach((link) => {
            link.classList.remove("active");
          });

          // Remove 'show' class from all tab panes
          document.querySelectorAll(".tab-pane").forEach((pane) => {
            pane.classList.remove("show", "active");
          });

          // Add 'active' class to the hovered nav link
          this.classList.add("active");

          // Add 'show' and 'active' classes to the corresponding tab pane
          if (targetPane) {
            targetPane.classList.add("show", "active");
          }
        });
      });





  (function () {
    const items = document.querySelectorAll('.service-box-items');

    // Generate thumbnails by seeking to the last frame
    function generateThumbnails() {
      items.forEach((item) => {
        const video = item.querySelector('.service-video');

        if (video && window.innerWidth > 768) {
          if (video.readyState >= 1) {
            // Metadata already loaded
            video.currentTime = video.duration - 0.1;
          } else {
            // Wait for metadata
            video.addEventListener('loadedmetadata', () => {
              video.currentTime = video.duration - 0.1;
            });
          }
        }
      });
    }

    // Run thumbnail generation once DOM is loaded
    window.addEventListener('DOMContentLoaded', generateThumbnails);

    // Desktop hover behavior
    items.forEach((item) => {
      const video = item.querySelector('.service-video');
      if (window.innerWidth > 768 && video) {
        item.addEventListener('mouseenter', () => {
          video.currentTime = 0;
          video.play();
        });

        item.addEventListener('mouseleave', () => {
          video.pause();
          video.currentTime = video.duration - 0.1;
        });
      }
    });

    // Mobile scroll autoplay
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target.querySelector('.service-video');
          if (!video) return;

          if (entry.isIntersecting && window.innerWidth <= 768) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    items.forEach((item) => observer.observe(item));
  })();