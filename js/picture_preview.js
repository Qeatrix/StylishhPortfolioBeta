let objects = document.querySelectorAll('.image');

let preview_image;
let preview_close;

let isBusy = false;

objects.forEach(el => el.addEventListener('click', event => {

  if (isBusy == false) {

    isBusy = true;
    let source_coords = el.getBoundingClientRect()

    if (el.tagName == 'IMG') {
          
      preview_image = document.createElement('img');	
      preview_close = document.createElement('div');

      preview_image.src = el.src;
      preview_container = document.createElement('div');
      
      preview_close.className = 'image_close';
      preview_image.className = 'image_preview';
      preview_container.className = 'preview_container';

      document.body.append(preview_close);
      document.body.append(preview_container);
      preview_container.append(preview_image);

      preview_image.style.top = source_coords.top + 'px';
      preview_image.style.right = source_coords.right + 'px';
      preview_image.style.bottom = source_coords.bottom + 'px';
      preview_image.style.left = source_coords.left + 'px';

      preview_image.style.height = source_coords.height + 'px';
      preview_image.style.width = source_coords.width + 'px';
    
      mode = 'img';
    } else if (el.tagName == 'VIDEO') {
      preview_image = document.createElement('video');	
      preview_container = document.createElement('div');
      video_close = document.createElement('div');
      video_close_text = document.createElement('div');

      preview_image.src = el.src;
      preview_image.preload = 'metadata';
      preview_image.controlslist = 'nodownload';
      preview_image.controls = ' ';
      preview_image.autoplay = ' ';
      preview_image.type = 'video/mp4';
      preview_image.style.zIndex = 100;

      video_close_text.textContent = 'Close Video';

      video_close.className = 'video_close';
      preview_image.className = 'image_preview';
      preview_container.className = 'preview_container';
      video_close_text.className = 'video_close_text';

      preview_container.append(video_close);
      video_close.append(video_close_text);
      document.body.append(preview_container);
      preview_container.append(preview_image);

      preview_image.style.top = source_coords.top + 'px';
      preview_image.style.right = source_coords.right + 'px';
      preview_image.style.bottom = source_coords.bottom + 'px';
      preview_image.style.left = source_coords.left + 'px';

      preview_image.style.height = source_coords.height + 'px';
      preview_image.style.width = source_coords.width + 'px';
    
      mode = 'video';
    }
    
    gsap.fromTo('.image_preview', 0.8,
      {css: {height: preview_image.style.height + 'px', width: preview_image.style.width + 'px', scale: 1}},
      {css: {height: '100%', width: '100%', scale: 0.9}, ease: "expo.out"});

    gsap.fromTo('.image_preview', 0.8,
      {css: {top: source_coords.top + 'px', right: source_coords.right + 'px', bottom: source_coords.bottom + 'px', left: source_coords.left + 'px'}},
      {css: {top: 0, right: 0, bottom: 0, left: 0}, ease: "expo.out"});

    gsap.fromTo('.preview_container', 0.3,
      {css: {background: 'rgba(0.2, 0.2, 0.2, 0)'}},
      {css: {background: 'rgba(0.2, 0.2, 0.2, 0.7)'}, ease: Sine.in});

    console.log('Image Preview Loaded');
    if (mode == 'img') {
      preview_close.addEventListener('click', event => {
      /* 
      gsap.fromTo('.image_preview', 0.8,
      {css: {height: '100%', width: '100%', scale: 0.8}},
      {css: {height: source_coords.height + 'px', width: source_coords.width + 'px', scale: 1}, ease: "power4.out"});

      gsap.fromTo('.image_preview', 0.8,
        {css: {top: 0, right: 0, bottom: 0, left: 0}},
        {css: {top: source_coords.top + 'px', right: source_coords.right + 'px', bottom: source_coords.bottom + 'px', left: source_coords.left + 'px'}, ease: "power4.out"});
      */
      gsap.fromTo('.preview_container', 0.3,
        {css: {opacity: 1}},
        {css: {opacity: 0}, ease: Sine.in});
      
      setTimeout (() => {
        preview_container.remove();
        preview_image.remove();
        preview_close.remove();

        isBusy = false;
        console.log('Image Preview Unloaded');
      }, '150' ); 

    });

    } else if (mode == 'video') {
      video_close.addEventListener('mouseenter', () => {
        gsap.fromTo('.video_close_text', 0.3,
          {css: {opacity: 0}},
          {css: {opacity: 1}, ease: Sine.in, delay: 0.25});
      });

      video_close.addEventListener('mouseleave', () => {
        gsap.fromTo('.video_close_text', 0.1,
          {css: {opacity: 1}},
          {css: {opacity: 0}, ease: Sine.in});
      });
      
      video_close.addEventListener( 'click', () => {
        gsap.fromTo('.preview_container', 0.3,
          {css: {opacity: 1}},
          {css: {opacity: 0}, ease: Sine.in});
        
        setTimeout (() => {
          preview_container.remove();
          preview_image.remove();

          isBusy = false;
          console.log('Image Preview Unloaded');
        }, '150' ); 
      })
    }

  } else {
    console.log('Image Preview is Busy');
  }
}));
