// Random image selection using arrays
var iconImg;
var images = [ "Bitcoin", "Hyperledger", "Ripple", "Ethereum" ];
var descriptions = [ "Bitcoin blockchain, created by Satoshi Nakamoto",                     
"Hyperledger, created by the Linux Foundation", "Ripple, blockchain for banks using cross-border payments ",              
"Ethereum, decentralized smart-contracts platform created by Vitalik Buterin" ];                             

   // pick a random image and corresponding description, then modify
   // the img element in the document's body
function pickImage()
   {
      var index = Math.floor( Math.random() * 4 );
      iconImg.setAttribute( "src", images[ index ] + ".png" );
      iconImg.setAttribute( "alt", descriptions[ index ] );     
   } // end function pickImage

   // registers iconImg's click event handler
function start()
   {
      iconImg = document.getElementById( "iconImg" );
      iconImg.addEventListener( "click", pickImage, false );
   } // end function start

window.addEventListener( "load", start, false );

