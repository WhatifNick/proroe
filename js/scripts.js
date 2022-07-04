$(function () {
    // init feather icons
    feather.replace();
});

// function copyToClipboard() {
//     let text = document.querySelector("#email").textContent;
//     console.log(111, text)
//     text.select();
//     text = text.value;
  
//     if (window.clipboardData && window.clipboardData.setData) {
//       // IE: prevent textarea being shown while dialog is visible
//       return window.clipboardData.setData("Text", text);
  
//     } else if (document.queryCommandSupported && 
//                document.queryCommandSupported("copy")) {
//       var textarea = document.createElement("textarea");
//       textarea.textContent = text;
//       // Prevent scrolling to bottom of page in MS Edge
//       textarea.style.position = "fixed";
//       document.body.appendChild(textarea);
//       textarea.select();
//       try {
//         // Security exception may be thrown by some browsers
//         return document.execCommand("copy");
//       } catch (ex) {
//         console.warn("Copy to clipboard failed.", ex);
//         return false;
//       } finally {
//         document.body.removeChild(textarea);
//       }
//     }
//   }