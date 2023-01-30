import React from 'react';
import { ModeCard } from "@components/ModeCard/modeCard";
import { modeCards } from "@assets/svg/modeSvg"

export const MainBody = (props = null) => {
    return (
        <>
            <div className="main__selector-header">
                Выберите метод управления:
            </div>
            <div className="main__area-cards">
                {modeCards.map(
                    (curCard, i) => {
                        return ModeCard({ i, ...curCard });
                    }
                )}
            </div>
            <svg className='main__scheme' width="720" height="315" viewBox="0 0 720 315" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="604" y1="157" x2="604" y2="136" stroke="black" />
                <line x1="604" y1="66" x2="604" y2="45" stroke="black" />
                <line x1="513.5" y1="205" x2="513.5" y2="255" stroke="black" />
                <line x1="477" y1="255.5" x2="515" y2="255.5" stroke="black" />
                <line x1="357.5" y1="255" x2="357.5" y2="195" stroke="black" />
                <line x1="357.5" y1="255" x2="357.5" y2="315" stroke="black" />
                <line x1="357" y1="314.5" x2="477" y2="314.5" stroke="black" />
                <line x1="476.5" y1="314" x2="476.5" y2="195" stroke="black" />
                <line x1="357" y1="195.5" x2="476" y2="195.5" stroke="black" />
                <line x1="453" y1="44.5" x2="653" y2="44.5" stroke="black" />
                <line x1="513.5" y1="45" x2="513.5" y2="205" stroke="black" />
                <line x1="158.5" y1="255" x2="158.5" y2="92" stroke="black" />
                <line x1="67" y1="44.5" x2="108" y2="44.5" stroke="black" />
                <line x1="108" y1="44" x2="108" y2="84" stroke="black" />
                <line x1="99" y1="84.5" x2="117" y2="84.5" stroke="black" />
                <line x1="99" y1="85.5" x2="117" y2="85.5" stroke="black" />
                <line x1="123" y1="84.5" x2="141" y2="84.5" stroke="black" />
                <line x1="123" y1="85.5" x2="141" y2="85.5" stroke="black" />
                <line x1="147" y1="84.5" x2="165" y2="84.5" stroke="black" />
                <line x1="147" y1="85.5" x2="165" y2="85.5" stroke="black" />
                <line x1="156" y1="84" x2="156" y2="44" stroke="black" />
                <line x1="157" y1="44.5" x2="288" y2="44.5" stroke="black" />
                <line x1="132" y1="44.5" x2="157" y2="44.5" stroke="black" />
                <path d="M131.646 84.3536C131.842 84.5488 132.158 84.5488 132.354 84.3536L135.536 81.1716C135.731 80.9763 135.731 80.6597 135.536 80.4645C135.34 80.2692 135.024 80.2692 134.828 80.4645L132 83.2929L129.172 80.4645C128.976 80.2692 128.66 80.2692 128.464 80.4645C128.269 80.6597 128.269 80.9763 128.464 81.1716L131.646 84.3536ZM131.5 44V84H132.5V44H131.5Z" fill="black" />
                <line x1="105" y1="92.5" x2="159" y2="92.5" stroke="black" />
                <circle cx="12.5" cy="12.5" r="12" transform="matrix(0 1 1 0 287 32)" fill="#D0E9FF" stroke="black" />
                <circle cx="12.5" cy="12.5" r="12" transform="matrix(0 1 1 0 311 32)" fill="#D0E9FF" stroke="black" />
                <circle cx="12.5" cy="12.5" r="12" transform="matrix(0 1 1 0 335 32)" fill="#D0E9FF" stroke="black" />
                <circle cx="12.5" cy="12.5" r="12" transform="matrix(0 1 1 0 359 32)" fill="#D0E9FF" stroke="black" />
                <rect width="13" height="97" transform="matrix(0 1 1 0 287 45)" fill="#D0E9FF" />
                <path d="M251.067 77.75C251.259 77.4167 251.741 77.4167 251.933 77.75L274.45 116.75C274.642 117.083 274.402 117.5 274.017 117.5H228.983C228.598 117.5 228.358 117.083 228.55 116.75L251.067 77.75L250.634 77.5L251.067 77.75Z" fill="#D0E9FF" stroke="black" />
                <path d="M275 77H228" stroke="black" />
                <line x1="251.5" y1="73" x2="251.5" y2="145" stroke="black" />
                <line x1="239" y1="157.5" x2="264" y2="157.5" stroke="black" />
                <line x1="251.5" y1="145" x2="251.5" y2="157" stroke="black" />
                <line x1="251.5" y1="73" x2="251.5" y2="45" stroke="black" />
                <line x1="383" y1="44.5" x2="453" y2="44.5" stroke="black" />
                <line x1="385" y1="104.5" x2="451" y2="104.5" stroke="black" />
                <path d="M385 96H451" stroke="black" />
                <line x1="418" y1="105" x2="418" y2="158" stroke="black" />
                <line x1="418" y1="96" x2="418" y2="45" stroke="black" />
                <rect x="589.5" y="66.5" width="29" height="69" fill="#D0E9FF" stroke="black" />
                <line x1="197.5" y1="255" x2="197.5" y2="195" stroke="black" />
                <line x1="197.5" y1="255" x2="197.5" y2="315" stroke="black" />
                <line x1="198" y1="314.5" x2="317" y2="314.5" stroke="black" />
                <line x1="316.5" y1="314" x2="316.5" y2="195" stroke="black" />
                <line x1="197" y1="195.5" x2="316" y2="195.5" stroke="black" />
                <path d="M229.404 246.148V257.56H231.042V262.384H229.494V259H220.656V262.384H219.108V257.56H220.098C220.53 256.816 220.938 255.982 221.322 255.058C221.718 254.134 222.066 253.168 222.366 252.16C222.666 251.14 222.912 250.12 223.104 249.1C223.296 248.08 223.416 247.096 223.464 246.148H229.404ZM224.886 247.606C224.838 248.302 224.718 249.088 224.526 249.964C224.346 250.84 224.112 251.74 223.824 252.664C223.548 253.576 223.236 254.458 222.888 255.31C222.552 256.162 222.192 256.912 221.808 257.56H227.802V247.606H224.886ZM237.565 249.172C238.753 249.172 239.707 249.586 240.427 250.414C241.159 251.242 241.525 252.49 241.525 254.158C241.525 255.25 241.357 256.174 241.021 256.93C240.697 257.674 240.235 258.238 239.635 258.622C239.047 258.994 238.351 259.18 237.547 259.18C237.055 259.18 236.617 259.114 236.233 258.982C235.849 258.85 235.519 258.682 235.243 258.478C234.979 258.262 234.751 258.028 234.559 257.776H234.451C234.475 257.98 234.499 258.238 234.523 258.55C234.547 258.862 234.559 259.132 234.559 259.36V263.32H232.975V249.352H234.271L234.487 250.666H234.559C234.751 250.39 234.979 250.138 235.243 249.91C235.519 249.682 235.843 249.502 236.215 249.37C236.599 249.238 237.049 249.172 237.565 249.172ZM237.277 250.504C236.629 250.504 236.107 250.63 235.711 250.882C235.315 251.122 235.027 251.488 234.847 251.98C234.667 252.472 234.571 253.096 234.559 253.852V254.158C234.559 254.95 234.643 255.622 234.811 256.174C234.979 256.726 235.261 257.146 235.657 257.434C236.065 257.722 236.617 257.866 237.313 257.866C237.901 257.866 238.381 257.704 238.753 257.38C239.137 257.056 239.419 256.618 239.599 256.066C239.791 255.502 239.887 254.86 239.887 254.14C239.887 253.036 239.671 252.154 239.239 251.494C238.819 250.834 238.165 250.504 237.277 250.504ZM247.704 249.19C248.88 249.19 249.75 249.448 250.314 249.964C250.878 250.48 251.16 251.302 251.16 252.43V259H250.008L249.702 257.632H249.63C249.354 257.98 249.066 258.274 248.766 258.514C248.478 258.742 248.142 258.91 247.758 259.018C247.386 259.126 246.93 259.18 246.39 259.18C245.814 259.18 245.292 259.078 244.824 258.874C244.368 258.67 244.008 258.358 243.744 257.938C243.48 257.506 243.348 256.966 243.348 256.318C243.348 255.358 243.726 254.62 244.482 254.104C245.238 253.576 246.402 253.288 247.974 253.24L249.612 253.186V252.61C249.612 251.806 249.438 251.248 249.09 250.936C248.742 250.624 248.25 250.468 247.614 250.468C247.11 250.468 246.63 250.546 246.174 250.702C245.718 250.846 245.292 251.014 244.896 251.206L244.41 250.018C244.83 249.79 245.328 249.598 245.904 249.442C246.48 249.274 247.08 249.19 247.704 249.19ZM248.172 254.338C246.972 254.386 246.138 254.578 245.67 254.914C245.214 255.25 244.986 255.724 244.986 256.336C244.986 256.876 245.148 257.272 245.472 257.524C245.808 257.776 246.234 257.902 246.75 257.902C247.566 257.902 248.244 257.68 248.784 257.236C249.324 256.78 249.594 256.084 249.594 255.148V254.284L248.172 254.338ZM261.951 245.356C261.903 245.956 261.753 246.46 261.501 246.868C261.261 247.276 260.901 247.582 260.421 247.786C259.941 247.99 259.317 248.092 258.549 248.092C257.769 248.092 257.139 247.99 256.659 247.786C256.191 247.582 255.849 247.282 255.633 246.886C255.417 246.478 255.285 245.968 255.237 245.356H256.713C256.773 246.004 256.941 246.442 257.217 246.67C257.505 246.886 257.961 246.994 258.585 246.994C259.137 246.994 259.569 246.88 259.881 246.652C260.205 246.412 260.397 245.98 260.457 245.356H261.951ZM255.633 255.238C255.633 255.346 255.627 255.502 255.615 255.706C255.615 255.898 255.609 256.108 255.597 256.336C255.585 256.552 255.573 256.762 255.561 256.966C255.549 257.158 255.537 257.314 255.525 257.434L260.691 249.352H262.635V259H261.159V253.312C261.159 253.12 261.159 252.868 261.159 252.556C261.171 252.244 261.183 251.938 261.195 251.638C261.207 251.326 261.219 251.092 261.231 250.936L256.101 259H254.139V249.352H255.633V255.238ZM273.464 251.782C273.464 252.382 273.284 252.85 272.924 253.186C272.564 253.522 272.102 253.75 271.538 253.87V253.942C272.138 254.026 272.66 254.242 273.104 254.59C273.548 254.926 273.77 255.454 273.77 256.174C273.77 256.582 273.692 256.96 273.536 257.308C273.392 257.656 273.164 257.956 272.852 258.208C272.54 258.46 272.138 258.658 271.646 258.802C271.154 258.934 270.56 259 269.864 259H265.706V249.352H269.846C270.53 249.352 271.142 249.43 271.682 249.586C272.234 249.73 272.666 249.982 272.978 250.342C273.302 250.69 273.464 251.17 273.464 251.782ZM272.132 256.174C272.132 255.622 271.922 255.226 271.502 254.986C271.082 254.746 270.464 254.626 269.648 254.626H267.29V257.722H269.684C270.476 257.722 271.082 257.608 271.502 257.38C271.922 257.14 272.132 256.738 272.132 256.174ZM271.862 251.98C271.862 251.524 271.694 251.194 271.358 250.99C271.034 250.774 270.5 250.666 269.756 250.666H267.29V253.312H269.468C270.248 253.312 270.842 253.204 271.25 252.988C271.658 252.772 271.862 252.436 271.862 251.98ZM279.803 249.172C280.631 249.172 281.339 249.352 281.927 249.712C282.527 250.072 282.983 250.582 283.295 251.242C283.619 251.89 283.781 252.652 283.781 253.528V254.482H277.175C277.199 255.574 277.475 256.408 278.003 256.984C278.543 257.548 279.293 257.83 280.253 257.83C280.865 257.83 281.405 257.776 281.873 257.668C282.353 257.548 282.845 257.38 283.349 257.164V258.55C282.857 258.766 282.371 258.922 281.891 259.018C281.411 259.126 280.841 259.18 280.181 259.18C279.269 259.18 278.459 258.994 277.751 258.622C277.055 258.25 276.509 257.698 276.113 256.966C275.729 256.222 275.537 255.316 275.537 254.248C275.537 253.192 275.711 252.286 276.059 251.53C276.419 250.774 276.917 250.192 277.553 249.784C278.201 249.376 278.951 249.172 279.803 249.172ZM279.785 250.468C279.029 250.468 278.429 250.714 277.985 251.206C277.553 251.686 277.295 252.358 277.211 253.222H282.125C282.125 252.67 282.041 252.19 281.873 251.782C281.705 251.374 281.447 251.056 281.099 250.828C280.763 250.588 280.325 250.468 279.785 250.468ZM290.827 249.172C292.015 249.172 292.969 249.586 293.689 250.414C294.421 251.242 294.787 252.49 294.787 254.158C294.787 255.25 294.619 256.174 294.283 256.93C293.959 257.674 293.497 258.238 292.897 258.622C292.309 258.994 291.613 259.18 290.809 259.18C290.317 259.18 289.879 259.114 289.495 258.982C289.111 258.85 288.781 258.682 288.505 258.478C288.241 258.262 288.013 258.028 287.821 257.776H287.713C287.737 257.98 287.761 258.238 287.785 258.55C287.809 258.862 287.821 259.132 287.821 259.36V263.32H286.237V249.352H287.533L287.749 250.666H287.821C288.013 250.39 288.241 250.138 288.505 249.91C288.781 249.682 289.105 249.502 289.477 249.37C289.861 249.238 290.311 249.172 290.827 249.172ZM290.539 250.504C289.891 250.504 289.369 250.63 288.973 250.882C288.577 251.122 288.289 251.488 288.109 251.98C287.929 252.472 287.833 253.096 287.821 253.852V254.158C287.821 254.95 287.905 255.622 288.073 256.174C288.241 256.726 288.523 257.146 288.919 257.434C289.327 257.722 289.879 257.866 290.575 257.866C291.163 257.866 291.643 257.704 292.015 257.38C292.399 257.056 292.681 256.618 292.861 256.066C293.053 255.502 293.149 254.86 293.149 254.14C293.149 253.036 292.933 252.154 292.501 251.494C292.081 250.834 291.427 250.504 290.539 250.504Z" fill="black" />
                <path d="M388.928 236.39C388.244 236.39 387.626 236.51 387.074 236.75C386.522 236.978 386.054 237.32 385.67 237.776C385.286 238.22 384.992 238.766 384.788 239.414C384.584 240.05 384.482 240.77 384.482 241.574C384.482 242.63 384.644 243.548 384.968 244.328C385.304 245.108 385.796 245.708 386.444 246.128C387.104 246.548 387.926 246.758 388.91 246.758C389.474 246.758 390.008 246.71 390.512 246.614C391.016 246.518 391.508 246.398 391.988 246.254V247.658C391.508 247.838 391.01 247.97 390.494 248.054C389.99 248.138 389.384 248.18 388.676 248.18C387.368 248.18 386.276 247.91 385.4 247.37C384.524 246.83 383.864 246.062 383.42 245.066C382.988 244.07 382.772 242.9 382.772 241.556C382.772 240.584 382.904 239.696 383.168 238.892C383.444 238.088 383.84 237.392 384.356 236.804C384.884 236.216 385.532 235.766 386.3 235.454C387.068 235.13 387.95 234.968 388.946 234.968C389.606 234.968 390.242 235.034 390.854 235.166C391.466 235.298 392.012 235.484 392.492 235.724L391.844 237.092C391.448 236.912 391.004 236.75 390.512 236.606C390.032 236.462 389.504 236.39 388.928 236.39ZM396.071 244.238C396.071 244.346 396.065 244.502 396.053 244.706C396.053 244.898 396.047 245.108 396.035 245.336C396.023 245.552 396.011 245.762 395.999 245.966C395.987 246.158 395.975 246.314 395.963 246.434L401.129 238.352H403.073V248H401.597V242.312C401.597 242.12 401.597 241.868 401.597 241.556C401.609 241.244 401.621 240.938 401.633 240.638C401.645 240.326 401.657 240.092 401.669 239.936L396.539 248H394.577V238.352H396.071V244.238ZM410.013 248.18C409.161 248.18 408.399 248.006 407.727 247.658C407.067 247.31 406.545 246.77 406.161 246.038C405.789 245.306 405.603 244.37 405.603 243.23C405.603 242.042 405.801 241.076 406.197 240.332C406.593 239.588 407.127 239.042 407.799 238.694C408.483 238.346 409.257 238.172 410.121 238.172C410.613 238.172 411.087 238.226 411.543 238.334C411.999 238.43 412.371 238.55 412.659 238.694L412.173 240.008C411.885 239.9 411.549 239.798 411.165 239.702C410.781 239.606 410.421 239.558 410.085 239.558C409.437 239.558 408.903 239.696 408.483 239.972C408.063 240.248 407.751 240.656 407.547 241.196C407.343 241.736 407.241 242.408 407.241 243.212C407.241 243.98 407.343 244.634 407.547 245.174C407.751 245.714 408.057 246.122 408.465 246.398C408.873 246.674 409.383 246.812 409.995 246.812C410.523 246.812 410.985 246.758 411.381 246.65C411.789 246.542 412.161 246.41 412.497 246.254V247.658C412.173 247.826 411.813 247.952 411.417 248.036C411.033 248.132 410.565 248.18 410.013 248.18ZM421.452 239.684H418.302V248H416.736V239.684H413.622V238.352H421.452V239.684ZM426.902 238.172C427.73 238.172 428.438 238.352 429.026 238.712C429.626 239.072 430.082 239.582 430.394 240.242C430.718 240.89 430.88 241.652 430.88 242.528V243.482H424.274C424.298 244.574 424.574 245.408 425.102 245.984C425.642 246.548 426.392 246.83 427.352 246.83C427.964 246.83 428.504 246.776 428.972 246.668C429.452 246.548 429.944 246.38 430.448 246.164V247.55C429.956 247.766 429.47 247.922 428.99 248.018C428.51 248.126 427.94 248.18 427.28 248.18C426.368 248.18 425.558 247.994 424.85 247.622C424.154 247.25 423.608 246.698 423.212 245.966C422.828 245.222 422.636 244.316 422.636 243.248C422.636 242.192 422.81 241.286 423.158 240.53C423.518 239.774 424.016 239.192 424.652 238.784C425.3 238.376 426.05 238.172 426.902 238.172ZM426.884 239.468C426.128 239.468 425.528 239.714 425.084 240.206C424.652 240.686 424.394 241.358 424.31 242.222H429.224C429.224 241.67 429.14 241.19 428.972 240.782C428.804 240.374 428.546 240.056 428.198 239.828C427.862 239.588 427.424 239.468 426.884 239.468ZM443.687 238.352V248H442.265V241.844C442.265 241.592 442.271 241.328 442.283 241.052C442.307 240.776 442.331 240.506 442.355 240.242H442.301L439.151 248H437.819L434.759 240.242H434.705C434.729 240.506 434.741 240.776 434.741 241.052C434.753 241.328 434.759 241.61 434.759 241.898V248H433.337V238.352H435.443L438.485 246.11L441.581 238.352H443.687ZM450.42 238.19C451.596 238.19 452.466 238.448 453.03 238.964C453.594 239.48 453.876 240.302 453.876 241.43V248H452.724L452.418 246.632H452.346C452.07 246.98 451.782 247.274 451.482 247.514C451.194 247.742 450.858 247.91 450.474 248.018C450.102 248.126 449.646 248.18 449.106 248.18C448.53 248.18 448.008 248.078 447.54 247.874C447.084 247.67 446.724 247.358 446.46 246.938C446.196 246.506 446.064 245.966 446.064 245.318C446.064 244.358 446.442 243.62 447.198 243.104C447.954 242.576 449.118 242.288 450.69 242.24L452.328 242.186V241.61C452.328 240.806 452.154 240.248 451.806 239.936C451.458 239.624 450.966 239.468 450.33 239.468C449.826 239.468 449.346 239.546 448.89 239.702C448.434 239.846 448.008 240.014 447.612 240.206L447.126 239.018C447.546 238.79 448.044 238.598 448.62 238.442C449.196 238.274 449.796 238.19 450.42 238.19ZM450.888 243.338C449.688 243.386 448.854 243.578 448.386 243.914C447.93 244.25 447.702 244.724 447.702 245.336C447.702 245.876 447.864 246.272 448.188 246.524C448.524 246.776 448.95 246.902 449.466 246.902C450.282 246.902 450.96 246.68 451.5 246.236C452.04 245.78 452.31 245.084 452.31 244.148V243.284L450.888 243.338ZM365.722 263.352H367.414L369.502 268.842C369.622 269.166 369.73 269.478 369.826 269.778C369.934 270.078 370.03 270.372 370.114 270.66C370.198 270.936 370.264 271.206 370.312 271.47H370.384C370.456 271.17 370.57 270.78 370.726 270.3C370.882 269.808 371.044 269.316 371.212 268.824L373.174 263.352H374.884L370.726 274.332C370.498 274.932 370.228 275.454 369.916 275.898C369.616 276.354 369.244 276.702 368.8 276.942C368.368 277.194 367.84 277.32 367.216 277.32C366.928 277.32 366.676 277.302 366.46 277.266C366.244 277.242 366.058 277.212 365.902 277.176V275.916C366.034 275.94 366.19 275.964 366.37 275.988C366.562 276.012 366.76 276.024 366.964 276.024C367.336 276.024 367.654 275.952 367.918 275.808C368.194 275.676 368.428 275.478 368.62 275.214C368.812 274.962 368.974 274.662 369.106 274.314L369.61 273.036L365.722 263.352ZM384.564 263.352V273H382.98V264.702H377.994V273H376.41V263.352H384.564ZM392.232 263.172C393.42 263.172 394.374 263.586 395.094 264.414C395.826 265.242 396.192 266.49 396.192 268.158C396.192 269.25 396.024 270.174 395.688 270.93C395.364 271.674 394.902 272.238 394.302 272.622C393.714 272.994 393.018 273.18 392.214 273.18C391.722 273.18 391.284 273.114 390.9 272.982C390.516 272.85 390.186 272.682 389.91 272.478C389.646 272.262 389.418 272.028 389.226 271.776H389.118C389.142 271.98 389.166 272.238 389.19 272.55C389.214 272.862 389.226 273.132 389.226 273.36V277.32H387.642V263.352H388.938L389.154 264.666H389.226C389.418 264.39 389.646 264.138 389.91 263.91C390.186 263.682 390.51 263.502 390.882 263.37C391.266 263.238 391.716 263.172 392.232 263.172ZM391.944 264.504C391.296 264.504 390.774 264.63 390.378 264.882C389.982 265.122 389.694 265.488 389.514 265.98C389.334 266.472 389.238 267.096 389.226 267.852V268.158C389.226 268.95 389.31 269.622 389.478 270.174C389.646 270.726 389.928 271.146 390.324 271.434C390.732 271.722 391.284 271.866 391.98 271.866C392.568 271.866 393.048 271.704 393.42 271.38C393.804 271.056 394.086 270.618 394.266 270.066C394.458 269.502 394.554 268.86 394.554 268.14C394.554 267.036 394.338 266.154 393.906 265.494C393.486 264.834 392.832 264.504 391.944 264.504ZM402.371 263.19C403.547 263.19 404.417 263.448 404.981 263.964C405.545 264.48 405.827 265.302 405.827 266.43V273H404.675L404.369 271.632H404.297C404.021 271.98 403.733 272.274 403.433 272.514C403.145 272.742 402.809 272.91 402.425 273.018C402.053 273.126 401.597 273.18 401.057 273.18C400.481 273.18 399.959 273.078 399.491 272.874C399.035 272.67 398.675 272.358 398.411 271.938C398.147 271.506 398.015 270.966 398.015 270.318C398.015 269.358 398.393 268.62 399.149 268.104C399.905 267.576 401.069 267.288 402.641 267.24L404.279 267.186V266.61C404.279 265.806 404.105 265.248 403.757 264.936C403.409 264.624 402.917 264.468 402.281 264.468C401.777 264.468 401.297 264.546 400.841 264.702C400.385 264.846 399.959 265.014 399.563 265.206L399.077 264.018C399.497 263.79 399.995 263.598 400.571 263.442C401.147 263.274 401.747 263.19 402.371 263.19ZM402.839 268.338C401.639 268.386 400.805 268.578 400.337 268.914C399.881 269.25 399.653 269.724 399.653 270.336C399.653 270.876 399.815 271.272 400.139 271.524C400.475 271.776 400.901 271.902 401.417 271.902C402.233 271.902 402.911 271.68 403.451 271.236C403.991 270.78 404.261 270.084 404.261 269.148V268.284L402.839 268.338ZM416.564 265.782C416.564 266.382 416.384 266.85 416.024 267.186C415.664 267.522 415.202 267.75 414.638 267.87V267.942C415.238 268.026 415.76 268.242 416.204 268.59C416.648 268.926 416.87 269.454 416.87 270.174C416.87 270.582 416.792 270.96 416.636 271.308C416.492 271.656 416.264 271.956 415.952 272.208C415.64 272.46 415.238 272.658 414.746 272.802C414.254 272.934 413.66 273 412.964 273H408.806V263.352H412.946C413.63 263.352 414.242 263.43 414.782 263.586C415.334 263.73 415.766 263.982 416.078 264.342C416.402 264.69 416.564 265.17 416.564 265.782ZM415.232 270.174C415.232 269.622 415.022 269.226 414.602 268.986C414.182 268.746 413.564 268.626 412.748 268.626H410.39V271.722H412.784C413.576 271.722 414.182 271.608 414.602 271.38C415.022 271.14 415.232 270.738 415.232 270.174ZM414.962 265.98C414.962 265.524 414.794 265.194 414.458 264.99C414.134 264.774 413.6 264.666 412.856 264.666H410.39V267.312H412.568C413.348 267.312 413.942 267.204 414.35 266.988C414.758 266.772 414.962 266.436 414.962 265.98ZM426.521 273H424.919V264.666H422.075C421.955 266.19 421.805 267.492 421.625 268.572C421.445 269.64 421.217 270.51 420.941 271.182C420.665 271.854 420.335 272.346 419.951 272.658C419.567 272.97 419.117 273.126 418.601 273.126C418.445 273.126 418.289 273.114 418.133 273.09C417.989 273.078 417.869 273.048 417.773 273V271.812C417.845 271.836 417.923 271.854 418.007 271.866C418.091 271.878 418.175 271.884 418.259 271.884C418.523 271.884 418.763 271.776 418.979 271.56C419.195 271.344 419.387 271.014 419.555 270.57C419.735 270.126 419.897 269.568 420.041 268.896C420.185 268.212 420.311 267.408 420.419 266.484C420.527 265.56 420.623 264.516 420.707 263.352H426.521V273ZM433.31 263.172C434.138 263.172 434.846 263.352 435.434 263.712C436.034 264.072 436.49 264.582 436.802 265.242C437.126 265.89 437.288 266.652 437.288 267.528V268.482H430.682C430.706 269.574 430.982 270.408 431.51 270.984C432.05 271.548 432.8 271.83 433.76 271.83C434.372 271.83 434.912 271.776 435.38 271.668C435.86 271.548 436.352 271.38 436.856 271.164V272.55C436.364 272.766 435.878 272.922 435.398 273.018C434.918 273.126 434.348 273.18 433.688 273.18C432.776 273.18 431.966 272.994 431.258 272.622C430.562 272.25 430.016 271.698 429.62 270.966C429.236 270.222 429.044 269.316 429.044 268.248C429.044 267.192 429.218 266.286 429.566 265.53C429.926 264.774 430.424 264.192 431.06 263.784C431.708 263.376 432.458 263.172 433.31 263.172ZM433.292 264.468C432.536 264.468 431.936 264.714 431.492 265.206C431.06 265.686 430.802 266.358 430.718 267.222H435.632C435.632 266.67 435.548 266.19 435.38 265.782C435.212 265.374 434.954 265.056 434.606 264.828C434.27 264.588 433.832 264.468 433.292 264.468ZM441.328 263.352V267.366H446.566V263.352H448.15V273H446.566V268.698H441.328V273H439.744V263.352H441.328ZM452.699 269.238C452.699 269.346 452.693 269.502 452.681 269.706C452.681 269.898 452.675 270.108 452.663 270.336C452.651 270.552 452.639 270.762 452.627 270.966C452.615 271.158 452.603 271.314 452.591 271.434L457.757 263.352H459.701V273H458.225V267.312C458.225 267.12 458.225 266.868 458.225 266.556C458.237 266.244 458.249 265.938 458.261 265.638C458.273 265.326 458.285 265.092 458.297 264.936L453.167 273H451.205V263.352H452.699V269.238ZM463.365 273H461.529L464.283 268.95C463.911 268.854 463.551 268.704 463.203 268.5C462.855 268.284 462.573 267.99 462.357 267.618C462.141 267.234 462.033 266.76 462.033 266.196C462.033 265.272 462.345 264.57 462.969 264.09C463.593 263.598 464.421 263.352 465.453 263.352H469.773V273H468.189V269.166H465.849L463.365 273ZM463.563 266.214C463.563 266.766 463.767 267.18 464.175 267.456C464.595 267.72 465.177 267.852 465.921 267.852H468.189V264.666H465.615C464.883 264.666 464.355 264.81 464.031 265.098C463.719 265.386 463.563 265.758 463.563 266.214Z" fill="black" />
                <line x1="158" y1="255.5" x2="197" y2="255.5" stroke="black" />
                <line x1="317" y1="255.5" x2="357" y2="255.5" stroke="black" />
                <line x1="67" y1="44.5" x2="37" y2="44.5" stroke="black" />
                <path d="M37.9393 44.8536C38.1346 44.6583 38.1346 44.3417 37.9393 44.1464L20.8536 27.0607C20.6583 26.8654 20.3417 26.8654 20.1464 27.0607L3.06066 44.1464C2.8654 44.3417 2.8654 44.6583 3.06066 44.8536L20.1464 61.9393C20.3417 62.1346 20.6583 62.1346 20.8536 61.9393L37.9393 44.8536Z" fill="#D0E9FF" stroke="black" />
                <rect y="65" width="44" height="27" transform="rotate(-90 0 65)" fill="#D0E9FF" />
                <line x1="653" y1="44.5" x2="683" y2="44.5" stroke="black" />
                <path d="M682.061 44.1464C681.865 44.3417 681.865 44.6583 682.061 44.8536L699.146 61.9393C699.342 62.1346 699.658 62.1346 699.854 61.9393L716.939 44.8536C717.135 44.6583 717.135 44.3417 716.939 44.1464L699.854 27.0607C699.658 26.8654 699.342 26.8654 699.146 27.0607L682.061 44.1464Z" fill="#D0E9FF" stroke="black" />
                <rect x="720" y="24" width="44" height="27" transform="rotate(90 720 24)" fill="#D0E9FF" />
                <path d="M623.418 5.148C624.486 5.148 625.38 5.25 626.1 5.454C626.832 5.658 627.378 5.994 627.738 6.462C628.11 6.93 628.296 7.554 628.296 8.334C628.296 8.838 628.2 9.288 628.008 9.684C627.828 10.068 627.552 10.392 627.18 10.656C626.82 10.908 626.376 11.082 625.848 11.178V11.268C626.388 11.352 626.874 11.508 627.306 11.736C627.75 11.964 628.098 12.288 628.35 12.708C628.602 13.128 628.728 13.674 628.728 14.346C628.728 15.126 628.548 15.792 628.188 16.344C627.828 16.884 627.312 17.298 626.64 17.586C625.98 17.862 625.188 18 624.264 18H619.746V5.148H623.418ZM623.742 10.62C624.846 10.62 625.602 10.446 626.01 10.098C626.418 9.738 626.622 9.21 626.622 8.514C626.622 7.806 626.37 7.302 625.866 7.002C625.374 6.69 624.582 6.534 623.49 6.534H621.366V10.62H623.742ZM621.366 11.97V16.632H623.958C625.098 16.632 625.89 16.41 626.334 15.966C626.778 15.522 627 14.94 627 14.22C627 13.764 626.898 13.368 626.694 13.032C626.502 12.696 626.172 12.438 625.704 12.258C625.248 12.066 624.624 11.97 623.832 11.97H621.366ZM631.237 18V8.352H632.821V12.312H635.323C636.163 12.312 636.853 12.414 637.393 12.618C637.933 12.822 638.335 13.128 638.599 13.536C638.863 13.932 638.995 14.436 638.995 15.048C638.995 15.648 638.863 16.17 638.599 16.614C638.347 17.058 637.945 17.4 637.393 17.64C636.853 17.88 636.139 18 635.251 18H631.237ZM635.107 16.722C635.791 16.722 636.349 16.608 636.781 16.38C637.213 16.14 637.429 15.726 637.429 15.138C637.429 14.55 637.231 14.154 636.835 13.95C636.439 13.734 635.869 13.626 635.125 13.626H632.821V16.722H635.107ZM640.597 18V8.352H642.181V18H640.597ZM647.533 13.068L644.203 8.352H646.003L648.487 11.988L650.953 8.352H652.735L649.405 13.068L652.915 18H651.115L648.487 14.148L645.823 18H644.041L647.533 13.068ZM662.811 13.158C662.811 13.962 662.703 14.676 662.487 15.3C662.283 15.912 661.983 16.434 661.587 16.866C661.203 17.298 660.729 17.628 660.165 17.856C659.613 18.072 658.995 18.18 658.311 18.18C657.675 18.18 657.087 18.072 656.547 17.856C656.007 17.628 655.539 17.298 655.143 16.866C654.747 16.434 654.435 15.912 654.207 15.3C653.991 14.676 653.883 13.962 653.883 13.158C653.883 12.09 654.063 11.19 654.423 10.458C654.783 9.714 655.299 9.15 655.971 8.766C656.643 8.37 657.441 8.172 658.365 8.172C659.241 8.172 660.009 8.37 660.669 8.766C661.341 9.15 661.863 9.714 662.235 10.458C662.619 11.19 662.811 12.09 662.811 13.158ZM655.521 13.158C655.521 13.914 655.617 14.574 655.809 15.138C656.013 15.69 656.325 16.116 656.745 16.416C657.165 16.716 657.699 16.866 658.347 16.866C658.995 16.866 659.529 16.716 659.949 16.416C660.369 16.116 660.675 15.69 660.867 15.138C661.071 14.574 661.173 13.914 661.173 13.158C661.173 12.39 661.071 11.736 660.867 11.196C660.663 10.656 660.351 10.242 659.931 9.954C659.523 9.654 658.989 9.504 658.329 9.504C657.345 9.504 656.631 9.828 656.187 10.476C655.743 11.124 655.521 12.018 655.521 13.158ZM672.485 8.352V16.668H673.889V21.348H672.359V18H665.645V21.348H664.133V16.668H664.907C665.459 15.9 665.915 15.066 666.275 14.166C666.647 13.254 666.923 12.306 667.103 11.322C667.295 10.326 667.397 9.336 667.409 8.352H672.485ZM668.813 9.594C668.765 10.41 668.639 11.256 668.435 12.132C668.231 12.996 667.967 13.824 667.643 14.616C667.331 15.408 666.965 16.092 666.545 16.668H670.955V9.594H668.813Z" fill="black" />
                <path d="M49.418 5.148C50.486 5.148 51.38 5.25 52.1 5.454C52.832 5.658 53.378 5.994 53.738 6.462C54.11 6.93 54.296 7.554 54.296 8.334C54.296 8.838 54.2 9.288 54.008 9.684C53.828 10.068 53.552 10.392 53.18 10.656C52.82 10.908 52.376 11.082 51.848 11.178V11.268C52.388 11.352 52.874 11.508 53.306 11.736C53.75 11.964 54.098 12.288 54.35 12.708C54.602 13.128 54.728 13.674 54.728 14.346C54.728 15.126 54.548 15.792 54.188 16.344C53.828 16.884 53.312 17.298 52.64 17.586C51.98 17.862 51.188 18 50.264 18H45.746V5.148H49.418ZM49.742 10.62C50.846 10.62 51.602 10.446 52.01 10.098C52.418 9.738 52.622 9.21 52.622 8.514C52.622 7.806 52.37 7.302 51.866 7.002C51.374 6.69 50.582 6.534 49.49 6.534H47.366V10.62H49.742ZM47.366 11.97V16.632H49.958C51.098 16.632 51.89 16.41 52.334 15.966C52.778 15.522 53 14.94 53 14.22C53 13.764 52.898 13.368 52.694 13.032C52.502 12.696 52.172 12.438 51.704 12.258C51.248 12.066 50.624 11.97 49.832 11.97H47.366ZM59.523 13.068L56.193 8.352H57.993L60.477 11.988L62.943 8.352H64.725L61.395 13.068L64.905 18H63.105L60.477 14.148L57.813 18H56.031L59.523 13.068ZM74.8008 13.158C74.8008 13.962 74.6928 14.676 74.4768 15.3C74.2728 15.912 73.9728 16.434 73.5768 16.866C73.1928 17.298 72.7188 17.628 72.1548 17.856C71.6028 18.072 70.9848 18.18 70.3008 18.18C69.6648 18.18 69.0768 18.072 68.5368 17.856C67.9968 17.628 67.5288 17.298 67.1328 16.866C66.7368 16.434 66.4248 15.912 66.1968 15.3C65.9808 14.676 65.8728 13.962 65.8728 13.158C65.8728 12.09 66.0528 11.19 66.4128 10.458C66.7728 9.714 67.2888 9.15 67.9608 8.766C68.6328 8.37 69.4308 8.172 70.3548 8.172C71.2308 8.172 71.9988 8.37 72.6588 8.766C73.3308 9.15 73.8528 9.714 74.2248 10.458C74.6088 11.19 74.8008 12.09 74.8008 13.158ZM67.5108 13.158C67.5108 13.914 67.6068 14.574 67.7988 15.138C68.0028 15.69 68.3148 16.116 68.7348 16.416C69.1548 16.716 69.6888 16.866 70.3368 16.866C70.9848 16.866 71.5188 16.716 71.9388 16.416C72.3588 16.116 72.6648 15.69 72.8568 15.138C73.0608 14.574 73.1628 13.914 73.1628 13.158C73.1628 12.39 73.0608 11.736 72.8568 11.196C72.6528 10.656 72.3408 10.242 71.9208 9.954C71.5128 9.654 70.9788 9.504 70.3188 9.504C69.3348 9.504 68.6208 9.828 68.1768 10.476C67.7328 11.124 67.5108 12.018 67.5108 13.158ZM84.4753 8.352V16.668H85.8793V21.348H84.3493V18H77.6353V21.348H76.1233V16.668H76.8973C77.4493 15.9 77.9053 15.066 78.2653 14.166C78.6373 13.254 78.9133 12.306 79.0933 11.322C79.2853 10.326 79.3873 9.336 79.3993 8.352H84.4753ZM80.8033 9.594C80.7553 10.41 80.6293 11.256 80.4253 12.132C80.2213 12.996 79.9573 13.824 79.6333 14.616C79.3213 15.408 78.9553 16.092 78.5353 16.668H82.9453V9.594H80.8033Z" fill="black" />
                <line x1="405" y1="157.5" x2="430" y2="157.5" stroke="black" />
                <line x1="591.5" y1="157.5" x2="616.5" y2="157.5" stroke="black" />
            </svg>
        </>
    );
}