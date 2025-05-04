import "./NeoButton.css"; // Import the CSS file for the glow effect

function NeoButton({ text, onclick }) {
 return (
  <div class="button-wrapper cursor-pointer">
   <a
    href="/request-demo/"
    onClick={onclick}
    class="button"
    target="_blank"
    className="!text-white !font-bold !px-4 py-[8px] sm:!py-[9px] text-lg sm:text-2xl !rounded-4xl hover:!text-black !bg-[#030712] !border-3 !border-grad-100 hover:!bg-linear hover:!bg-gradient-to-r hover:!from-grad-100 hover:!to-grad-300 !transition !duration-500 !ease-in-out"
   >
    <span> {text}</span>
   </a>
  </div>
 );
}

export default NeoButton;
