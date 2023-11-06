  const textarea = document.querySelector("textarea");
  textarea.addEventListener("keyup", e =>{
    textarea.style.height = "63px";
    let scheight = e.target.scrollHeight;
    textarea.style.height = '${scHeight}px';
  });
