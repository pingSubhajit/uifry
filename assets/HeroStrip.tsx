'use client'

import {useTheme} from 'next-themes'

const HeroStrip = ({ className }: { className?: string }) => {
	const { theme } = useTheme()

	return (
		theme === 'light' ? <svg width="569" height="427" viewBox="0 0 569 427" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path
				d="M313.141 245.232C313.151 240.821 316.729 237.25 321.141 237.25H561C565.418 237.25 569 240.832 569 245.25V300.24C569 304.662 565.412 308.246 560.99 308.24L321.008 307.935C316.586 307.929 313.008 304.338 313.018 299.917L313.141 245.232Z"
				fill="#FF5555"/>
			<g filter="url(#filter0_f_223_484)">
				<path d="M333.74 275.653L369.882 238.376L385.356 253.453L344.417 295.466L333.74 275.653Z" fill="black"/>
			</g>
			<path
				d="M412.808 252.242L413.792 271.801L432.697 266.692L414.399 273.672L425.1 290.073L412.808 274.828L400.516 290.073L411.217 273.672L392.919 266.692L411.825 271.801L412.808 252.242Z"
				fill="black"/>
			<rect x="449.406" y="237.211" width="1.30704" height="71.2338" fill="black"/>
			<rect x="374.904" y="237.211" width="1.30704" height="71.2338" fill="black"/>
			<path
				d="M294.795 238.089C293.998 235.33 294.742 232.355 296.744 230.295L505.514 15.4545C508.596 12.2827 513.667 12.2136 516.835 15.3001L556.69 54.1361C559.854 57.2196 559.919 62.2845 556.836 65.4489L325.839 302.506C321.557 306.901 314.125 305.038 312.423 299.143L294.795 238.089Z"
				fill="#FF5555"/>
			<text transform="translate(337.653 226.101) rotate(-45.74)" fill="black" xmlSpace="preserve"
				      style={{whiteSpace: 'pre'}}
				      fontFamily="Clash Display" fontSize="11.7634" fontWeight="600"
				      letterSpacing="0em">
				<tspan x="0" y="12.9136">Make The Best Financial Decisions</tspan>
			</text>
			<path
				d="M56.6392 250.846L521.348 3.75576C525.249 1.6815 530.093 3.16246 532.167 7.06357L558.192 56.0089C560.266 59.91 558.785 64.754 554.884 66.8283L90.1754 313.918L56.6392 250.846Z"
				fill="black"/>
			<g clipPath="url(#clip0_223_484)">
				<path
					d="M344.8 135.473L343.358 136.24C342.88 136.494 342.698 137.087 342.952 137.565C343.207 138.043 343.8 138.225 344.278 137.971L344.855 137.664C345.333 137.41 345.927 137.591 346.181 138.069C346.435 138.547 346.254 139.141 345.776 139.395L344.333 140.162M343.339 135.509L343.646 136.086M345.487 139.548L345.794 140.125M348.029 135.976L348.035 135.973M341.104 139.658L341.11 139.655M337.63 138.693L339.962 143.078C340.306 143.724 340.478 144.048 340.735 144.228C340.961 144.386 341.231 144.469 341.507 144.464C341.821 144.458 342.144 144.286 342.79 143.943L350.638 139.77C351.284 139.426 351.608 139.255 351.788 138.998C351.946 138.772 352.029 138.501 352.024 138.225C352.018 137.911 351.846 137.588 351.503 136.942L349.171 132.556C348.827 131.91 348.655 131.587 348.398 131.407C348.172 131.249 347.902 131.166 347.626 131.171C347.312 131.176 346.989 131.348 346.343 131.692L338.495 135.864C337.849 136.208 337.526 136.38 337.346 136.637C337.187 136.863 337.105 137.133 337.11 137.409C337.115 137.723 337.287 138.046 337.63 138.693ZM348.317 135.823C348.402 135.982 348.341 136.18 348.182 136.265C348.023 136.35 347.825 136.289 347.74 136.13C347.656 135.97 347.716 135.773 347.875 135.688C348.035 135.603 348.233 135.664 348.317 135.823ZM341.393 139.505C341.478 139.664 341.417 139.862 341.258 139.947C341.099 140.031 340.901 139.971 340.816 139.812C340.731 139.652 340.792 139.454 340.951 139.37C341.11 139.285 341.308 139.345 341.393 139.505Z"
					stroke="#FF5555" strokeWidth="1.30704" strokeLinecap="round" strokeLinejoin="round"/>
			</g>
			<circle cx="344.567" cy="137.817" r="15.3578" transform="rotate(-28 344.567 137.817)" stroke="#FF5555"
				        strokeWidth="0.653521"/>
			<text transform="translate(359.057 109.388) rotate(-28)" fill="white" xmlSpace="preserve"
				      style={{whiteSpace: 'pre'}} fontFamily="Clash Display" fontSize="11.7634" fontWeight="600"
				      letterSpacing="0em">
				<tspan x="0" y="12.9136">Finance</tspan>
			</text>
			<text transform="translate(367.647 125.545) rotate(-28)" fill="white" xmlSpace="preserve"
				      style={{whiteSpace: 'pre'}} fontFamily="Clash Display" fontSize="11.7634" fontWeight="500"
				      letterSpacing="0em">
				<tspan x="0" y="12.9136">Most Popular Accounting App</tspan>
			</text>
			<path
				d="M110.061 264.727C108.149 265.743 105.774 265.017 104.758 263.105L103.053 259.9C102.926 259.661 102.863 259.541 102.847 259.427C102.82 259.236 102.879 259.043 103.008 258.899C103.085 258.813 103.205 258.75 103.444 258.623L108.701 255.828C108.94 255.701 109.059 255.637 109.173 255.621C109.365 255.594 109.558 255.653 109.701 255.783C109.787 255.86 109.851 255.979 109.978 256.218L111.682 259.424C112.699 261.336 111.973 263.71 110.061 264.727ZM110.061 264.727L110.981 266.458M110.148 256.538L111.591 255.771C111.859 255.628 111.994 255.557 112.123 255.545C112.296 255.528 112.468 255.581 112.602 255.691C112.702 255.773 112.773 255.908 112.916 256.177L113.07 256.465C113.355 257.002 113.498 257.27 113.556 257.522C113.713 258.204 113.495 258.919 112.983 259.397C112.794 259.573 112.525 259.715 111.989 260.001M103.224 260.22L101.781 260.987C101.512 261.13 101.378 261.202 101.295 261.302C101.185 261.436 101.132 261.608 101.149 261.78C101.161 261.91 101.233 262.044 101.376 262.313L101.529 262.601C101.815 263.138 101.957 263.406 102.133 263.595C102.611 264.107 103.326 264.326 104.008 264.168C104.26 264.11 104.528 263.968 105.065 263.682M109.58 270.163L114.837 267.368C114.979 267.293 115.033 267.117 114.957 266.975C114.355 265.842 112.948 265.412 111.815 266.014L110.148 266.901C109.015 267.503 108.584 268.91 109.187 270.043C109.262 270.185 109.438 270.239 109.58 270.163Z"
				stroke="#FF5555" strokeWidth="1.30704" strokeLinecap="round" strokeLinejoin="round"
			/>
			<circle cx="109.141" cy="262.996" r="15.3578" transform="rotate(-28 109.141 262.996)" stroke="#FF5555"
				        strokeWidth="0.653521"/>
			<text transform="translate(123.631 234.566) rotate(-28)" fill="white" xmlSpace="preserve"
				      style={{whiteSpace: 'pre'}} fontFamily="Clash Display" fontSize="11.7634" fontWeight="600"
				      letterSpacing="0em">
				<tspan x="0" y="12.9136">Achievements</tspan>
			</text>
			<text transform="translate(132.222 250.723) rotate(-28)" fill="white" xmlSpace="preserve"
				      style={{whiteSpace: 'pre'}} fontFamily="Clash Display" fontSize="11.7634" fontWeight="500"
				      letterSpacing="0em">
				<tspan x="0" y="12.9136">Best Finance App On Playstore</tspan>
			</text>
			<line x1="308.912" y1="136.976" x2="307.498" y2="177.47" stroke="white" strokeWidth="0.653522"/>
			<text transform="translate(466.397 253.549)" fill="black" xmlSpace="preserve" style={{whiteSpace: 'pre'}}
				      fontFamily="Clash Display" fontSize="11.7634" fontWeight="600" letterSpacing="0em">
				<tspan x="0" y="12.9136">Uifry Premium</tspan>
			</text>
			<text transform="translate(466.397 273.155)" fill="black" xmlSpace="preserve" style={{whiteSpace: 'pre'}}
				      fontFamily="Clash Display" fontSize="10.4563" fontWeight="500" letterSpacing="0em">
				<tspan x="0" y="12.4953">Free Trial</tspan>
			</text>
			<text transform="translate(0 263.263) rotate(-28)" fill="black" xmlSpace="preserve"
				      style={{whiteSpace: 'pre'}} fontFamily="Clash Display" fontSize="106.385" fontWeight="bold"
				      letterSpacing="0em">
				<tspan x="0" y="87.2355">A</tspan>
			</text>
			<defs>
				<filter id="filter0_f_223_484" x="203.035" y="107.671" width="313.025" height="318.499"
					        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix"/>
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
					<feGaussianBlur stdDeviation="65.3521" result="effect1_foregroundBlur_223_484"/>
				</filter>
				<clipPath id="clip0_223_484">
					<rect width="15.6845" height="15.6845" fill="white"
						      transform="translate(333.96 134.575) rotate(-28)"/>
				</clipPath>
				<clipPath id="clip1_223_484">
					<rect width="15.6845" height="15.6845" fill="white"
						      transform="translate(98.5344 259.753) rotate(-28)"/>
				</clipPath>
			</defs>
		</svg> :
			<svg width="569" height="427" viewBox="0 0 569 427" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
				<path
					d="M313.141 245.232C313.151 240.821 316.729 237.25 321.141 237.25H561C565.418 237.25 569 240.832 569 245.25V300.24C569 304.662 565.412 308.246 560.99 308.24L321.008 307.935C316.586 307.929 313.008 304.338 313.018 299.917L313.141 245.232Z"
					fill="#FF5555"/>
				<g filter="url(#filter0_f_223_484)">
					<path d="M333.74 275.653L369.882 238.376L385.356 253.453L344.417 295.466L333.74 275.653Z" fill="black"/>
				</g>
				<path
					d="M412.808 252.242L413.792 271.801L432.697 266.692L414.399 273.672L425.1 290.073L412.808 274.828L400.516 290.073L411.217 273.672L392.919 266.692L411.825 271.801L412.808 252.242Z"
					fill="black"/>
				<rect x="449.406" y="237.211" width="1.30704" height="71.2338" fill="black"/>
				<rect x="374.904" y="237.211" width="1.30704" height="71.2338" fill="black"/>
				<path
					d="M294.795 238.089C293.998 235.33 294.742 232.355 296.744 230.295L505.514 15.4545C508.596 12.2827 513.667 12.2136 516.835 15.3001L556.69 54.1361C559.854 57.2196 559.919 62.2845 556.836 65.4489L325.839 302.506C321.557 306.901 314.125 305.038 312.423 299.143L294.795 238.089Z"
					fill="#FF5555"/>
				<text transform="translate(337.653 226.101) rotate(-45.74)" fill="black" xmlSpace="preserve"
				      style={{whiteSpace: 'pre'}} fontFamily="Clash Display" fontSize="11.7634" fontWeight="600"
				      letterSpacing="0em">
					<tspan x="0" y="12.9136">Make The Best Financial Decisions</tspan>
				</text>
				<path
					d="M56.6392 250.846L521.348 3.75576C525.249 1.6815 530.093 3.16246 532.167 7.06357L558.192 56.0089C560.266 59.91 558.785 64.754 554.884 66.8283L90.1754 313.918L56.6392 250.846Z"
					fill="white"/>
				<g clipPath="url(#clip0_223_484)">
					<path
						d="M344.8 135.473L343.358 136.24C342.88 136.494 342.698 137.087 342.952 137.565C343.207 138.043 343.8 138.225 344.278 137.971L344.855 137.664C345.333 137.41 345.927 137.591 346.181 138.069C346.435 138.547 346.254 139.141 345.776 139.395L344.333 140.162M343.339 135.509L343.646 136.086M345.487 139.548L345.794 140.125M348.029 135.976L348.035 135.973M341.104 139.658L341.11 139.655M337.63 138.693L339.962 143.078C340.306 143.724 340.478 144.048 340.735 144.228C340.961 144.386 341.231 144.469 341.507 144.464C341.821 144.458 342.144 144.286 342.79 143.943L350.638 139.77C351.284 139.426 351.608 139.255 351.788 138.998C351.946 138.772 352.029 138.501 352.024 138.225C352.018 137.911 351.846 137.588 351.503 136.942L349.171 132.556C348.827 131.91 348.655 131.587 348.398 131.407C348.172 131.249 347.902 131.166 347.626 131.171C347.312 131.176 346.989 131.348 346.343 131.692L338.495 135.864C337.849 136.208 337.526 136.38 337.346 136.637C337.187 136.863 337.105 137.133 337.11 137.409C337.115 137.723 337.287 138.046 337.63 138.693ZM348.317 135.823C348.402 135.982 348.341 136.18 348.182 136.265C348.023 136.35 347.825 136.289 347.74 136.13C347.656 135.97 347.716 135.773 347.875 135.688C348.035 135.603 348.233 135.664 348.317 135.823ZM341.393 139.505C341.478 139.664 341.417 139.862 341.258 139.947C341.099 140.031 340.901 139.971 340.816 139.812C340.731 139.652 340.792 139.454 340.951 139.37C341.11 139.285 341.308 139.345 341.393 139.505Z"
						stroke="#FF5555" strokeWidth="1.30704" strokeLinecap="round" strokeLinejoin="round"/>
				</g>
				<circle cx="344.567" cy="137.817" r="15.3578" transform="rotate(-28 344.567 137.817)" stroke="#FF5555"
				        strokeWidth="0.653521"/>
				<text transform="translate(359.057 109.388) rotate(-28)" fill="black" xmlSpace="preserve"
				      style={{whiteSpace: 'pre'}} fontFamily="Clash Display" fontSize="11.7634" fontWeight="600"
				      letterSpacing="0em">
					<tspan x="0" y="12.9136">Finance</tspan>
				</text>
				<text transform="translate(367.647 125.545) rotate(-28)" fill="black" xmlSpace="preserve"
				      style={{whiteSpace: 'pre'}} fontFamily="Clash Display" fontSize="11.7634" fontWeight="500"
				      letterSpacing="0em">
					<tspan x="0" y="12.9136">Most Popular Accounting App</tspan>
				</text>
				<g clipPath="url(#clip1_223_484)">
					<path
						d="M110.061 264.727C108.149 265.743 105.774 265.017 104.758 263.105L103.053 259.9C102.926 259.661 102.863 259.541 102.847 259.427C102.82 259.236 102.879 259.043 103.008 258.899C103.085 258.813 103.205 258.75 103.444 258.623L108.701 255.828C108.94 255.701 109.059 255.637 109.173 255.621C109.365 255.594 109.558 255.653 109.701 255.783C109.787 255.86 109.851 255.979 109.978 256.218L111.682 259.424C112.699 261.336 111.973 263.71 110.061 264.727ZM110.061 264.727L110.981 266.458M110.148 256.538L111.591 255.771C111.859 255.628 111.994 255.557 112.123 255.545C112.296 255.528 112.468 255.581 112.602 255.691C112.702 255.773 112.773 255.908 112.916 256.177L113.07 256.465C113.355 257.002 113.498 257.27 113.556 257.522C113.713 258.204 113.495 258.919 112.983 259.397C112.794 259.573 112.525 259.715 111.989 260.001M103.224 260.22L101.781 260.987C101.512 261.13 101.378 261.202 101.295 261.302C101.185 261.436 101.132 261.608 101.149 261.78C101.161 261.91 101.233 262.044 101.376 262.313L101.529 262.601C101.815 263.138 101.957 263.406 102.133 263.595C102.611 264.107 103.326 264.326 104.008 264.168C104.26 264.11 104.528 263.968 105.065 263.682M109.58 270.163L114.837 267.368C114.979 267.293 115.033 267.117 114.957 266.975C114.355 265.842 112.948 265.412 111.815 266.014L110.148 266.901C109.015 267.503 108.584 268.91 109.187 270.043C109.262 270.185 109.438 270.239 109.58 270.163Z"
						stroke="#FF5555" strokeWidth="1.30704" strokeLinecap="round" strokeLinejoin="round"/>
				</g>
				<circle cx="109.141" cy="262.996" r="15.3578" transform="rotate(-28 109.141 262.996)" stroke="#FF5555"
				        strokeWidth="0.653521"/>
				<text transform="translate(123.631 234.566) rotate(-28)" fill="black" xmlSpace="preserve"
				      style={{whiteSpace: 'pre'}} fontFamily="Clash Display" fontSize="11.7634" fontWeight="600"
				      letterSpacing="0em">
					<tspan x="0" y="12.9136">Achievements</tspan>
				</text>
				<text transform="translate(132.222 250.723) rotate(-28)" fill="black" xmlSpace="preserve"
				      style={{whiteSpace: 'pre'}} fontFamily="Clash Display" fontSize="11.7634" fontWeight="500"
				      letterSpacing="0em">
					<tspan x="0" y="12.9136">Best Finance App On Playstore</tspan>
				</text>
				<line x1="308.912" y1="136.976" x2="307.498" y2="177.47" stroke="black" strokeWidth="0.653522"/>
				<text transform="translate(466.397 253.549)" fill="black" xmlSpace="preserve" style={{whiteSpace: 'pre'}}
				      fontFamily="Clash Display" fontSize="11.7634" fontWeight="600" letterSpacing="0em">
					<tspan x="0" y="12.9136">Uifry Premium</tspan>
				</text>
				<text transform="translate(466.397 273.155)" fill="black" xmlSpace="preserve" style={{whiteSpace: 'pre'}}
				      fontFamily="Clash Display" fontSize="10.4563" fontWeight="500" letterSpacing="0em">
					<tspan x="0" y="12.4953">Free Trial</tspan>
				</text>
				<text transform="translate(0 263.263) rotate(-28)" fill="white" xmlSpace="preserve"
				      style={{whiteSpace: 'pre'}} fontFamily="Clash Display" fontSize="106.385" fontWeight="bold"
				      letterSpacing="0em">
					<tspan x="0" y="87.2355">A</tspan>
				</text>
				<defs>
					<filter id="filter0_f_223_484" x="203.035" y="107.671" width="313.025" height="318.499"
					        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix"/>
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
						<feGaussianBlur stdDeviation="65.3521" result="effect1_foregroundBlur_223_484"/>
					</filter>
					<clipPath id="clip0_223_484">
						<rect width="15.6845" height="15.6845" fill="white"
						      transform="translate(333.96 134.575) rotate(-28)"/>
					</clipPath>
					<clipPath id="clip1_223_484">
						<rect width="15.6845" height="15.6845" fill="white"
						      transform="translate(98.5344 259.753) rotate(-28)"/>
					</clipPath>
				</defs>
			</svg>
	)
}

export default HeroStrip
