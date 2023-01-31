import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { IState } from '@/store/store';
import { BackButton } from '../BackButton/backButton';
import { PwmMenu } from '../PwmMenu/pwmMenu';
import { actionSetPwmFreq } from '@/store/actions/pwmActions';
import { actionSwitchMode } from '@/store/actions/commonActions';

export const PwmSettings = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state: IState) => state.common.mode)
    if (!mode) {
        dispatch(actionSwitchMode('/PWM'));
    }
    const controlType = useSelector((state: IState) => state.common.controlType);

    const handlerFreq = (e: React.FormEvent) => {
        e.preventDefault();
        const input = (e.target as HTMLElement).querySelector('input');
        const body = { pwm_freq: input.value };
        dispatch(actionSetPwmFreq(body));
    }

    return (
        <>
            <div className="pwm__header">
                Настройки ШИМ
            </div>
            <svg className='pwm__shema' width="963" height="349" viewBox="0 0 963 349" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="856" y1="179" x2="856" y2="158" stroke="black" />
                <line x1="856" y1="88" x2="856" y2="67" stroke="black" />
                <line x1="705" y1="66.5" x2="933" y2="66.5" stroke="black" />
                <line x1="763.5" y1="179" x2="763.5" y2="236" stroke="black" />
                <rect x="841.5" y="88.5" width="29" height="69" fill="#D0E9FF" stroke="black" />
                <rect x="749" y="109.5" width="29" height="69" fill="#D0E9FF" stroke="black" />
                <rect x="750.5" y="236.5" width="29" height="69" fill="#D0E9FF" stroke="black" />
                <line x1="933.5" y1="67" x2="933.5" y2="37" stroke="black" />
                <path d="M933.146 37.9393C933.342 38.1346 933.658 38.1346 933.854 37.9393L950.939 20.8536C951.135 20.6583 951.135 20.3417 950.939 20.1464L933.854 3.06066C933.658 2.8654 933.342 2.8654 933.146 3.06066L916.061 20.1464C915.865 20.3417 915.865 20.6583 916.061 20.8536L933.146 37.9393Z" fill="#D0E9FF" stroke="black" />
                <rect x="913" width="44" height="27" fill="#D0E9FF" />
                <path d="M911.418 7.148C912.486 7.148 913.38 7.25 914.1 7.454C914.832 7.658 915.378 7.994 915.738 8.462C916.11 8.93 916.296 9.554 916.296 10.334C916.296 10.838 916.2 11.288 916.008 11.684C915.828 12.068 915.552 12.392 915.18 12.656C914.82 12.908 914.376 13.082 913.848 13.178V13.268C914.388 13.352 914.874 13.508 915.306 13.736C915.75 13.964 916.098 14.288 916.35 14.708C916.602 15.128 916.728 15.674 916.728 16.346C916.728 17.126 916.548 17.792 916.188 18.344C915.828 18.884 915.312 19.298 914.64 19.586C913.98 19.862 913.188 20 912.264 20H907.746V7.148H911.418ZM911.742 12.62C912.846 12.62 913.602 12.446 914.01 12.098C914.418 11.738 914.622 11.21 914.622 10.514C914.622 9.806 914.37 9.302 913.866 9.002C913.374 8.69 912.582 8.534 911.49 8.534H909.366V12.62H911.742ZM909.366 13.97V18.632H911.958C913.098 18.632 913.89 18.41 914.334 17.966C914.778 17.522 915 16.94 915 16.22C915 15.764 914.898 15.368 914.694 15.032C914.502 14.696 914.172 14.438 913.704 14.258C913.248 14.066 912.624 13.97 911.832 13.97H909.366ZM919.237 20V10.352H920.821V14.312H923.323C924.163 14.312 924.853 14.414 925.393 14.618C925.933 14.822 926.335 15.128 926.599 15.536C926.863 15.932 926.995 16.436 926.995 17.048C926.995 17.648 926.863 18.17 926.599 18.614C926.347 19.058 925.945 19.4 925.393 19.64C924.853 19.88 924.139 20 923.251 20H919.237ZM923.107 18.722C923.791 18.722 924.349 18.608 924.781 18.38C925.213 18.14 925.429 17.726 925.429 17.138C925.429 16.55 925.231 16.154 924.835 15.95C924.439 15.734 923.869 15.626 923.125 15.626H920.821V18.722H923.107ZM928.597 20V10.352H930.181V20H928.597ZM935.533 15.068L932.203 10.352H934.003L936.487 13.988L938.953 10.352H940.735L937.405 15.068L940.915 20H939.115L936.487 16.148L933.823 20H932.041L935.533 15.068ZM950.811 15.158C950.811 15.962 950.703 16.676 950.487 17.3C950.283 17.912 949.983 18.434 949.587 18.866C949.203 19.298 948.729 19.628 948.165 19.856C947.613 20.072 946.995 20.18 946.311 20.18C945.675 20.18 945.087 20.072 944.547 19.856C944.007 19.628 943.539 19.298 943.143 18.866C942.747 18.434 942.435 17.912 942.207 17.3C941.991 16.676 941.883 15.962 941.883 15.158C941.883 14.09 942.063 13.19 942.423 12.458C942.783 11.714 943.299 11.15 943.971 10.766C944.643 10.37 945.441 10.172 946.365 10.172C947.241 10.172 948.009 10.37 948.669 10.766C949.341 11.15 949.863 11.714 950.235 12.458C950.619 13.19 950.811 14.09 950.811 15.158ZM943.521 15.158C943.521 15.914 943.617 16.574 943.809 17.138C944.013 17.69 944.325 18.116 944.745 18.416C945.165 18.716 945.699 18.866 946.347 18.866C946.995 18.866 947.529 18.716 947.949 18.416C948.369 18.116 948.675 17.69 948.867 17.138C949.071 16.574 949.173 15.914 949.173 15.158C949.173 14.39 949.071 13.736 948.867 13.196C948.663 12.656 948.351 12.242 947.931 11.954C947.523 11.654 946.989 11.504 946.329 11.504C945.345 11.504 944.631 11.828 944.187 12.476C943.743 13.124 943.521 14.018 943.521 15.158ZM960.485 10.352V18.668H961.889V23.348H960.359V20H953.645V23.348H952.133V18.668H952.907C953.459 17.9 953.915 17.066 954.275 16.166C954.647 15.254 954.923 14.306 955.103 13.322C955.295 12.326 955.397 11.336 955.409 10.352H960.485ZM956.813 11.594C956.765 12.41 956.639 13.256 956.435 14.132C956.231 14.996 955.967 15.824 955.643 16.616C955.331 17.408 954.965 18.092 954.545 18.668H958.955V11.594H956.813Z" fill="black" />
                <line x1="21" y1="66.5" x2="71" y2="66.5" stroke="black" />
                <line x1="151.5" y1="277" x2="151.5" y2="127" stroke="black" />
                <line x1="40" y1="66.5" x2="80" y2="66.5" stroke="black" />
                <line x1="80" y1="66.5" x2="101" y2="66.5" stroke="black" />
                <line x1="101" y1="66" x2="101" y2="106" stroke="black" />
                <line x1="92" y1="106.5" x2="110" y2="106.5" stroke="black" />
                <line x1="92" y1="107.5" x2="110" y2="107.5" stroke="black" />
                <line x1="116" y1="106.5" x2="134" y2="106.5" stroke="black" />
                <line x1="116" y1="107.5" x2="134" y2="107.5" stroke="black" />
                <line x1="140" y1="106.5" x2="158" y2="106.5" stroke="black" />
                <line x1="140" y1="107.5" x2="158" y2="107.5" stroke="black" />
                <line x1="149" y1="106" x2="149" y2="66" stroke="black" />
                <line x1="150" y1="66.5" x2="210" y2="66.5" stroke="black" />
                <line x1="125" y1="66.5" x2="150" y2="66.5" stroke="black" />
                <path d="M124.646 106.354C124.842 106.549 125.158 106.549 125.354 106.354L128.536 103.172C128.731 102.976 128.731 102.66 128.536 102.464C128.34 102.269 128.024 102.269 127.828 102.464L125 105.293L122.172 102.464C121.976 102.269 121.66 102.269 121.464 102.464C121.269 102.66 121.269 102.976 121.464 103.172L124.646 106.354ZM124.5 66V106H125.5V66H124.5Z" fill="black" />
                <line x1="98" y1="114.5" x2="152" y2="114.5" stroke="black" />
                <line x1="151.5" y1="114" x2="151.5" y2="157" stroke="black" />
                <circle cx="12.5" cy="12.5" r="12" transform="matrix(0 1 1 0 280 54)" fill="#D0E9FF" stroke="black" />
                <circle cx="12.5" cy="12.5" r="12" transform="matrix(0 1 1 0 304 54)" fill="#D0E9FF" stroke="black" />
                <circle cx="12.5" cy="12.5" r="12" transform="matrix(0 1 1 0 328 54)" fill="#D0E9FF" stroke="black" />
                <circle cx="12.5" cy="12.5" r="12" transform="matrix(0 1 1 0 352 54)" fill="#D0E9FF" stroke="black" />
                <rect width="13" height="97" transform="matrix(0 1 1 0 280 67)" fill="#D0E9FF" />
                <path d="M244.067 99.75C244.259 99.4167 244.741 99.4167 244.933 99.75L267.45 138.75C267.642 139.083 267.402 139.5 267.017 139.5H221.983C221.598 139.5 221.358 139.083 221.55 138.75L244.067 99.75L243.634 99.5L244.067 99.75Z" fill="#D0E9FF" stroke="black" />
                <path d="M268 99H221" stroke="black" />
                <line x1="244.5" y1="95" x2="244.5" y2="167" stroke="black" />
                <line x1="232" y1="179.5" x2="257" y2="179.5" stroke="black" />
                <line x1="244.5" y1="167" x2="244.5" y2="179" stroke="black" />
                <line x1="244.5" y1="95" x2="244.5" y2="67" stroke="black" />
                <line x1="376" y1="66.5" x2="446" y2="66.5" stroke="black" />
                <line x1="378" y1="126.5" x2="444" y2="126.5" stroke="black" />
                <path d="M378 118H444" stroke="black" />
                <line x1="411" y1="127" x2="411" y2="180" stroke="black" />
                <line x1="411" y1="118" x2="411" y2="67" stroke="black" />
                <line x1="190.5" y1="277" x2="190.5" y2="217" stroke="black" />
                <line x1="190.5" y1="277" x2="190.5" y2="337" stroke="black" />
                <line x1="191" y1="336.5" x2="310" y2="336.5" stroke="black" />
                <line x1="309.5" y1="336" x2="309.5" y2="217" stroke="black" />
                <line x1="190" y1="217.5" x2="309" y2="217.5" stroke="black" />
                <path d="M222.404 268.148V279.56H224.042V284.384H222.494V281H213.656V284.384H212.108V279.56H213.098C213.53 278.816 213.938 277.982 214.322 277.058C214.718 276.134 215.066 275.168 215.366 274.16C215.666 273.14 215.912 272.12 216.104 271.1C216.296 270.08 216.416 269.096 216.464 268.148H222.404ZM217.886 269.606C217.838 270.302 217.718 271.088 217.526 271.964C217.346 272.84 217.112 273.74 216.824 274.664C216.548 275.576 216.236 276.458 215.888 277.31C215.552 278.162 215.192 278.912 214.808 279.56H220.802V269.606H217.886ZM230.565 271.172C231.753 271.172 232.707 271.586 233.427 272.414C234.159 273.242 234.525 274.49 234.525 276.158C234.525 277.25 234.357 278.174 234.021 278.93C233.697 279.674 233.235 280.238 232.635 280.622C232.047 280.994 231.351 281.18 230.547 281.18C230.055 281.18 229.617 281.114 229.233 280.982C228.849 280.85 228.519 280.682 228.243 280.478C227.979 280.262 227.751 280.028 227.559 279.776H227.451C227.475 279.98 227.499 280.238 227.523 280.55C227.547 280.862 227.559 281.132 227.559 281.36V285.32H225.975V271.352H227.271L227.487 272.666H227.559C227.751 272.39 227.979 272.138 228.243 271.91C228.519 271.682 228.843 271.502 229.215 271.37C229.599 271.238 230.049 271.172 230.565 271.172ZM230.277 272.504C229.629 272.504 229.107 272.63 228.711 272.882C228.315 273.122 228.027 273.488 227.847 273.98C227.667 274.472 227.571 275.096 227.559 275.852V276.158C227.559 276.95 227.643 277.622 227.811 278.174C227.979 278.726 228.261 279.146 228.657 279.434C229.065 279.722 229.617 279.866 230.313 279.866C230.901 279.866 231.381 279.704 231.753 279.38C232.137 279.056 232.419 278.618 232.599 278.066C232.791 277.502 232.887 276.86 232.887 276.14C232.887 275.036 232.671 274.154 232.239 273.494C231.819 272.834 231.165 272.504 230.277 272.504ZM240.704 271.19C241.88 271.19 242.75 271.448 243.314 271.964C243.878 272.48 244.16 273.302 244.16 274.43V281H243.008L242.702 279.632H242.63C242.354 279.98 242.066 280.274 241.766 280.514C241.478 280.742 241.142 280.91 240.758 281.018C240.386 281.126 239.93 281.18 239.39 281.18C238.814 281.18 238.292 281.078 237.824 280.874C237.368 280.67 237.008 280.358 236.744 279.938C236.48 279.506 236.348 278.966 236.348 278.318C236.348 277.358 236.726 276.62 237.482 276.104C238.238 275.576 239.402 275.288 240.974 275.24L242.612 275.186V274.61C242.612 273.806 242.438 273.248 242.09 272.936C241.742 272.624 241.25 272.468 240.614 272.468C240.11 272.468 239.63 272.546 239.174 272.702C238.718 272.846 238.292 273.014 237.896 273.206L237.41 272.018C237.83 271.79 238.328 271.598 238.904 271.442C239.48 271.274 240.08 271.19 240.704 271.19ZM241.172 276.338C239.972 276.386 239.138 276.578 238.67 276.914C238.214 277.25 237.986 277.724 237.986 278.336C237.986 278.876 238.148 279.272 238.472 279.524C238.808 279.776 239.234 279.902 239.75 279.902C240.566 279.902 241.244 279.68 241.784 279.236C242.324 278.78 242.594 278.084 242.594 277.148V276.284L241.172 276.338ZM254.951 267.356C254.903 267.956 254.753 268.46 254.501 268.868C254.261 269.276 253.901 269.582 253.421 269.786C252.941 269.99 252.317 270.092 251.549 270.092C250.769 270.092 250.139 269.99 249.659 269.786C249.191 269.582 248.849 269.282 248.633 268.886C248.417 268.478 248.285 267.968 248.237 267.356H249.713C249.773 268.004 249.941 268.442 250.217 268.67C250.505 268.886 250.961 268.994 251.585 268.994C252.137 268.994 252.569 268.88 252.881 268.652C253.205 268.412 253.397 267.98 253.457 267.356H254.951ZM248.633 277.238C248.633 277.346 248.627 277.502 248.615 277.706C248.615 277.898 248.609 278.108 248.597 278.336C248.585 278.552 248.573 278.762 248.561 278.966C248.549 279.158 248.537 279.314 248.525 279.434L253.691 271.352H255.635V281H254.159V275.312C254.159 275.12 254.159 274.868 254.159 274.556C254.171 274.244 254.183 273.938 254.195 273.638C254.207 273.326 254.219 273.092 254.231 272.936L249.101 281H247.139V271.352H248.633V277.238ZM266.464 273.782C266.464 274.382 266.284 274.85 265.924 275.186C265.564 275.522 265.102 275.75 264.538 275.87V275.942C265.138 276.026 265.66 276.242 266.104 276.59C266.548 276.926 266.77 277.454 266.77 278.174C266.77 278.582 266.692 278.96 266.536 279.308C266.392 279.656 266.164 279.956 265.852 280.208C265.54 280.46 265.138 280.658 264.646 280.802C264.154 280.934 263.56 281 262.864 281H258.706V271.352H262.846C263.53 271.352 264.142 271.43 264.682 271.586C265.234 271.73 265.666 271.982 265.978 272.342C266.302 272.69 266.464 273.17 266.464 273.782ZM265.132 278.174C265.132 277.622 264.922 277.226 264.502 276.986C264.082 276.746 263.464 276.626 262.648 276.626H260.29V279.722H262.684C263.476 279.722 264.082 279.608 264.502 279.38C264.922 279.14 265.132 278.738 265.132 278.174ZM264.862 273.98C264.862 273.524 264.694 273.194 264.358 272.99C264.034 272.774 263.5 272.666 262.756 272.666H260.29V275.312H262.468C263.248 275.312 263.842 275.204 264.25 274.988C264.658 274.772 264.862 274.436 264.862 273.98ZM272.803 271.172C273.631 271.172 274.339 271.352 274.927 271.712C275.527 272.072 275.983 272.582 276.295 273.242C276.619 273.89 276.781 274.652 276.781 275.528V276.482H270.175C270.199 277.574 270.475 278.408 271.003 278.984C271.543 279.548 272.293 279.83 273.253 279.83C273.865 279.83 274.405 279.776 274.873 279.668C275.353 279.548 275.845 279.38 276.349 279.164V280.55C275.857 280.766 275.371 280.922 274.891 281.018C274.411 281.126 273.841 281.18 273.181 281.18C272.269 281.18 271.459 280.994 270.751 280.622C270.055 280.25 269.509 279.698 269.113 278.966C268.729 278.222 268.537 277.316 268.537 276.248C268.537 275.192 268.711 274.286 269.059 273.53C269.419 272.774 269.917 272.192 270.553 271.784C271.201 271.376 271.951 271.172 272.803 271.172ZM272.785 272.468C272.029 272.468 271.429 272.714 270.985 273.206C270.553 273.686 270.295 274.358 270.211 275.222H275.125C275.125 274.67 275.041 274.19 274.873 273.782C274.705 273.374 274.447 273.056 274.099 272.828C273.763 272.588 273.325 272.468 272.785 272.468ZM283.827 271.172C285.015 271.172 285.969 271.586 286.689 272.414C287.421 273.242 287.787 274.49 287.787 276.158C287.787 277.25 287.619 278.174 287.283 278.93C286.959 279.674 286.497 280.238 285.897 280.622C285.309 280.994 284.613 281.18 283.809 281.18C283.317 281.18 282.879 281.114 282.495 280.982C282.111 280.85 281.781 280.682 281.505 280.478C281.241 280.262 281.013 280.028 280.821 279.776H280.713C280.737 279.98 280.761 280.238 280.785 280.55C280.809 280.862 280.821 281.132 280.821 281.36V285.32H279.237V271.352H280.533L280.749 272.666H280.821C281.013 272.39 281.241 272.138 281.505 271.91C281.781 271.682 282.105 271.502 282.477 271.37C282.861 271.238 283.311 271.172 283.827 271.172ZM283.539 272.504C282.891 272.504 282.369 272.63 281.973 272.882C281.577 273.122 281.289 273.488 281.109 273.98C280.929 274.472 280.833 275.096 280.821 275.852V276.158C280.821 276.95 280.905 277.622 281.073 278.174C281.241 278.726 281.523 279.146 281.919 279.434C282.327 279.722 282.879 279.866 283.575 279.866C284.163 279.866 284.643 279.704 285.015 279.38C285.399 279.056 285.681 278.618 285.861 278.066C286.053 277.502 286.149 276.86 286.149 276.14C286.149 275.036 285.933 274.154 285.501 273.494C285.081 272.834 284.427 272.504 283.539 272.504Z" fill="black" />
                <line x1="151" y1="277.5" x2="190" y2="277.5" stroke="black" />
                <line x1="310" y1="277.5" x2="350" y2="277.5" stroke="black" />
                <path d="M173 66.5H281" stroke="black" />
                <line x1="20.5" y1="67" x2="20.5" y2="37" stroke="black" />
                <path d="M20.1464 37.9393C20.3417 38.1346 20.6583 38.1346 20.8536 37.9393L37.9393 20.8536C38.1346 20.6583 38.1346 20.3417 37.9393 20.1464L20.8536 3.06066C20.6583 2.8654 20.3417 2.8654 20.1464 3.06066L3.06066 20.1464C2.8654 20.3417 2.8654 20.6583 3.06066 20.8536L20.1464 37.9393Z" fill="#D0E9FF" stroke="black" />
                <rect width="44" height="27" fill="#D0E9FF" />
                <path d="M5.418 7.148C6.486 7.148 7.38 7.25 8.1 7.454C8.832 7.658 9.378 7.994 9.738 8.462C10.11 8.93 10.296 9.554 10.296 10.334C10.296 10.838 10.2 11.288 10.008 11.684C9.828 12.068 9.552 12.392 9.18 12.656C8.82 12.908 8.376 13.082 7.848 13.178V13.268C8.388 13.352 8.874 13.508 9.306 13.736C9.75 13.964 10.098 14.288 10.35 14.708C10.602 15.128 10.728 15.674 10.728 16.346C10.728 17.126 10.548 17.792 10.188 18.344C9.828 18.884 9.312 19.298 8.64 19.586C7.98 19.862 7.188 20 6.264 20H1.746V7.148H5.418ZM5.742 12.62C6.846 12.62 7.602 12.446 8.01 12.098C8.418 11.738 8.622 11.21 8.622 10.514C8.622 9.806 8.37 9.302 7.866 9.002C7.374 8.69 6.582 8.534 5.49 8.534H3.366V12.62H5.742ZM3.366 13.97V18.632H5.958C7.098 18.632 7.89 18.41 8.334 17.966C8.778 17.522 9 16.94 9 16.22C9 15.764 8.898 15.368 8.694 15.032C8.502 14.696 8.172 14.438 7.704 14.258C7.248 14.066 6.624 13.97 5.832 13.97H3.366ZM15.523 15.068L12.193 10.352H13.993L16.477 13.988L18.943 10.352H20.725L17.395 15.068L20.905 20H19.105L16.477 16.148L13.813 20H12.031L15.523 15.068ZM30.8008 15.158C30.8008 15.962 30.6928 16.676 30.4768 17.3C30.2728 17.912 29.9728 18.434 29.5768 18.866C29.1928 19.298 28.7188 19.628 28.1548 19.856C27.6028 20.072 26.9848 20.18 26.3008 20.18C25.6648 20.18 25.0768 20.072 24.5368 19.856C23.9968 19.628 23.5288 19.298 23.1328 18.866C22.7368 18.434 22.4248 17.912 22.1968 17.3C21.9808 16.676 21.8728 15.962 21.8728 15.158C21.8728 14.09 22.0528 13.19 22.4128 12.458C22.7728 11.714 23.2888 11.15 23.9608 10.766C24.6328 10.37 25.4308 10.172 26.3548 10.172C27.2308 10.172 27.9988 10.37 28.6588 10.766C29.3308 11.15 29.8528 11.714 30.2248 12.458C30.6088 13.19 30.8008 14.09 30.8008 15.158ZM23.5108 15.158C23.5108 15.914 23.6068 16.574 23.7988 17.138C24.0028 17.69 24.3148 18.116 24.7348 18.416C25.1548 18.716 25.6888 18.866 26.3368 18.866C26.9848 18.866 27.5188 18.716 27.9388 18.416C28.3588 18.116 28.6648 17.69 28.8568 17.138C29.0608 16.574 29.1628 15.914 29.1628 15.158C29.1628 14.39 29.0608 13.736 28.8568 13.196C28.6528 12.656 28.3408 12.242 27.9208 11.954C27.5128 11.654 26.9788 11.504 26.3188 11.504C25.3348 11.504 24.6208 11.828 24.1768 12.476C23.7328 13.124 23.5108 14.018 23.5108 15.158ZM40.4753 10.352V18.668H41.8793V23.348H40.3493V20H33.6353V23.348H32.1233V18.668H32.8973C33.4493 17.9 33.9053 17.066 34.2653 16.166C34.6373 15.254 34.9133 14.306 35.0933 13.322C35.2853 12.326 35.3873 11.336 35.3993 10.352H40.4753ZM36.8033 11.594C36.7553 12.41 36.6293 13.256 36.4253 14.132C36.2213 14.996 35.9573 15.824 35.6333 16.616C35.3213 17.408 34.9553 18.092 34.5353 18.668H38.9453V11.594H36.8033Z" fill="black" />
                <line x1="398" y1="179.5" x2="423" y2="179.5" stroke="black" />
                <line x1="843.5" y1="179.5" x2="868.5" y2="179.5" stroke="black" />
                <line x1="752.5" y1="348.5" x2="777.5" y2="348.5" stroke="black" />
                <line x1="763" y1="207.5" x2="663" y2="207.5" stroke="black" />
                <path d="M546.037 242.948C545.666 242.765 545.666 242.235 546.037 242.052L662.029 184.771C662.361 184.607 662.75 184.849 662.75 185.219V299.781C662.75 300.151 662.361 300.393 662.029 300.229L546.037 242.948Z" fill="#D0E9FF" stroke="black" />
                <line x1="663" y1="277.5" x2="698" y2="277.5" stroke="black" />
                <line x1="546.001" y1="242.5" x2="467" y2="242.5" stroke="black" />
                <path d="M350.037 277.948C349.666 277.765 349.666 277.235 350.037 277.052L466.029 219.771C466.361 219.607 466.75 219.849 466.75 220.219V334.781C466.75 335.151 466.361 335.393 466.029 335.229L350.037 277.948Z" fill="#D0E9FF" stroke="black" />
                <line x1="467" y1="312.5" x2="502" y2="312.5" stroke="black" />
                <line x1="458" y1="242.5" x2="447" y2="242.5" stroke="black" />
                <line x1="452.5" y1="248" x2="452.5" y2="237" stroke="black" />
                <line x1="458" y1="312.5" x2="447" y2="312.5" stroke="black" />
                <line x1="764" y1="109" x2="764" y2="67" stroke="black" />
                <line x1="765" y1="348" x2="765" y2="306" stroke="black" />
                <line x1="446" y1="66.5" x2="705" y2="66.5" stroke="black" />
                <circle cx="702.5" cy="277.5" r="5" fill="#D0E9FF" stroke="black" />
                <circle cx="506.5" cy="312.5" r="5" fill="#D0E9FF" stroke="black" />
                <line x1="654" y1="277.5" x2="643" y2="277.5" stroke="black" />
                <line x1="648.5" y1="283" x2="648.5" y2="272" stroke="black" />
                <line x1="654" y1="207.5" x2="643" y2="207.5" stroke="black" />
                <line x1="416" y1="285.5" x2="429" y2="285.5" stroke="black" />
                <line x1="421" y1="268.5" x2="434" y2="268.5" stroke="black" />
                <line x1="428.5" y1="285" x2="428.5" y2="269" stroke="black" />
                <line x1="421.5" y1="285" x2="421.5" y2="269" stroke="black" />
                <path d="M537.66 301.324C537.9 300.964 538.453 301.058 538.561 301.477L544.507 324.639C544.597 324.989 544.296 325.316 543.939 325.256L524.735 321.995C524.378 321.934 524.202 321.526 524.402 321.225L537.66 301.324Z" stroke="black" />
                <path d="M557.172 301.836C557.412 301.476 557.965 301.57 558.072 301.989L564.018 325.151C564.108 325.501 563.807 325.829 563.45 325.768L544.246 322.507C543.889 322.447 543.713 322.038 543.914 321.737L557.172 301.836Z" stroke="black" />
                <path d="M576.172 301.836C576.412 301.476 576.965 301.57 577.072 301.989L583.018 325.151C583.108 325.501 582.807 325.829 582.45 325.768L563.246 322.507C562.889 322.447 562.713 322.038 562.914 321.737L576.172 301.836Z" stroke="black" />
                <rect x="522.512" y="321.512" width="63" height="8" fill="#D0E9FF" />
                <line x1="686" y1="258.136" x2="678" y2="258.136" stroke="black" />
                <line x1="681.864" y1="262" x2="681.864" y2="254" stroke="black" />
                <path d="M691.938 264.189C690.921 264.189 690.055 263.912 689.34 263.359C688.625 262.801 688.078 261.994 687.7 260.937C687.322 259.875 687.134 258.593 687.134 257.091C687.134 255.598 687.322 254.322 687.7 253.265C688.083 252.204 688.631 251.394 689.347 250.836C690.066 250.274 690.93 249.993 691.938 249.993C692.945 249.993 693.806 250.274 694.522 250.836C695.241 251.394 695.79 252.204 696.168 253.265C696.55 254.322 696.741 255.598 696.741 257.091C696.741 258.593 696.553 259.875 696.175 260.937C695.797 261.994 695.25 262.801 694.535 263.359C693.82 263.912 692.954 264.189 691.938 264.189ZM691.938 262.705C692.945 262.705 693.728 262.219 694.286 261.247C694.843 260.276 695.122 258.89 695.122 257.091C695.122 255.894 694.994 254.876 694.738 254.034C694.486 253.193 694.121 252.552 693.645 252.112C693.172 251.671 692.603 251.45 691.938 251.45C690.939 251.45 690.158 251.943 689.596 252.928C689.034 253.908 688.753 255.296 688.753 257.091C688.753 258.287 688.879 259.304 689.131 260.141C689.383 260.977 689.745 261.614 690.217 262.05C690.694 262.486 691.267 262.705 691.938 262.705ZM698.905 263.211C698.948 262.859 699.041 262.593 699.183 262.414C699.332 262.228 699.517 262.107 699.74 262.052C699.876 262.021 700.04 262.012 700.231 262.024C700.423 262.03 700.609 262.067 700.788 262.135C701.005 262.209 701.162 262.324 701.261 262.479C701.36 262.633 701.403 262.84 701.391 263.1C701.379 263.335 701.323 263.589 701.224 263.861C701.131 264.133 701.011 264.405 700.862 264.677C700.72 264.949 700.556 265.218 700.371 265.484C700.185 265.75 700 265.998 699.814 266.227C699.628 266.455 699.449 266.656 699.276 266.83C699.103 267.009 698.951 267.148 698.821 267.247L698.246 266.867C698.357 266.718 698.484 266.52 698.626 266.273C698.775 266.032 698.917 265.766 699.053 265.475C699.195 265.184 699.322 264.888 699.434 264.584C699.551 264.281 699.638 263.997 699.693 263.731L698.905 263.211ZM708.24 264.189C707.314 264.189 706.495 264.025 705.784 263.696C705.078 263.364 704.527 262.907 704.131 262.327C703.735 261.742 703.54 261.076 703.544 260.33C703.54 259.745 703.655 259.205 703.888 258.71C704.122 258.211 704.442 257.795 704.847 257.462C705.256 257.125 705.712 256.911 706.216 256.821V256.74C705.555 256.569 705.029 256.198 704.637 255.627C704.246 255.051 704.053 254.397 704.057 253.663C704.053 252.962 704.23 252.334 704.59 251.781C704.95 251.228 705.445 250.791 706.074 250.472C706.709 250.153 707.431 249.993 708.24 249.993C709.041 249.993 709.756 250.153 710.386 250.472C711.016 250.791 711.51 251.228 711.87 251.781C712.235 252.334 712.419 252.962 712.424 253.663C712.419 254.397 712.219 255.051 711.823 255.627C711.432 256.198 710.912 256.569 710.264 256.74V256.821C710.764 256.911 711.214 257.125 711.614 257.462C712.014 257.795 712.334 258.211 712.572 258.71C712.81 259.205 712.932 259.745 712.936 260.33C712.932 261.076 712.729 261.742 712.329 262.327C711.933 262.907 711.382 263.364 710.676 263.696C709.974 264.025 709.162 264.189 708.24 264.189ZM708.24 262.705C708.866 262.705 709.405 262.603 709.86 262.401C710.314 262.199 710.665 261.913 710.912 261.544C711.16 261.175 711.286 260.743 711.29 260.249C711.286 259.727 711.151 259.266 710.885 258.865C710.62 258.465 710.258 258.15 709.799 257.921C709.345 257.691 708.825 257.577 708.24 257.577C707.651 257.577 707.125 257.691 706.661 257.921C706.203 258.15 705.841 258.465 705.575 258.865C705.314 259.266 705.186 259.727 705.191 260.249C705.186 260.743 705.305 261.175 705.548 261.544C705.796 261.913 706.149 262.199 706.608 262.401C707.066 262.603 707.611 262.705 708.24 262.705ZM708.24 256.146C708.735 256.146 709.174 256.047 709.556 255.849C709.943 255.652 710.246 255.375 710.467 255.02C710.687 254.664 710.8 254.248 710.804 253.771C710.8 253.304 710.69 252.896 710.474 252.55C710.258 252.199 709.959 251.929 709.576 251.74C709.194 251.547 708.749 251.45 708.24 251.45C707.723 251.45 707.271 251.547 706.884 251.74C706.497 251.929 706.198 252.199 705.987 252.55C705.775 252.896 705.672 253.304 705.676 253.771C705.672 254.248 705.778 254.664 705.994 255.02C706.214 255.375 706.518 255.652 706.904 255.849C707.291 256.047 707.737 256.146 708.24 256.146ZM720.38 250.182V264H718.707V251.936H718.626L715.252 254.176V252.476L718.707 250.182H720.38ZM724.597 264V250.182H729.428C730.391 250.182 731.185 250.348 731.81 250.681C732.435 251.009 732.901 251.453 733.206 252.01C733.512 252.564 733.665 253.178 733.665 253.852C733.665 254.446 733.56 254.936 733.348 255.323C733.141 255.71 732.867 256.016 732.525 256.241C732.188 256.466 731.821 256.632 731.425 256.74V256.875C731.848 256.902 732.273 257.05 732.7 257.32C733.128 257.59 733.485 257.977 733.773 258.481C734.061 258.985 734.205 259.601 734.205 260.33C734.205 261.022 734.048 261.645 733.733 262.199C733.418 262.752 732.921 263.19 732.242 263.514C731.562 263.838 730.679 264 729.59 264H724.597ZM726.27 262.516H729.59C730.683 262.516 731.459 262.304 731.918 261.881C732.381 261.454 732.613 260.937 732.613 260.33C732.613 259.862 732.494 259.43 732.255 259.034C732.017 258.634 731.677 258.314 731.236 258.076C730.796 257.833 730.274 257.712 729.671 257.712H726.27V262.516ZM726.27 256.254H729.374C729.878 256.254 730.332 256.155 730.737 255.957C731.146 255.759 731.47 255.481 731.709 255.121C731.952 254.761 732.073 254.338 732.073 253.852C732.073 253.245 731.862 252.73 731.439 252.307C731.016 251.88 730.346 251.666 729.428 251.666H726.27V256.254Z" fill="black" />
            </svg>
            <div className='main__settings'>
                {controlType ?
                    <>
                        <div className='main__settings__row'>
                            Введите частоту ШИМ:
                            <form onSubmit={handlerFreq}>
                                <input className='main__settings__input' type="text" maxLength={9} />
                            </form>
                            кГц
                        </div>
                        {controlType === 'manual' ?
                            <div className='main__settings__row'>
                                Введите коэффициент заполнения ШИМ:
                                <form>
                                    <input className='main__settings__input' type="text" maxLength={9} />
                                </form>
                                %
                            </div> :
                            <>
                                <div className='main__settings__row'>
                                    Выберите закон регулирования:
                                    <PwmMenu/>
                                </div>
                                <div className='main__settings__row'>
                                    Введите выходное напряжение:
                                    <form>
                                        <input className='main__settings__input' type="text" maxLength={9} />
                                    </form>
                                    В
                                </div>
                            </>
                        }
                    </> :
                    <div className='monitoring__off-header'>Выберите режим управления</div>
                }
            </div>
            <div className='back-button__wrapper'>
                <BackButton />
            </div>

        </>
    );
}
