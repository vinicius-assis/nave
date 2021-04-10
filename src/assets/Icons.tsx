import React from 'react'

type IconProps = {
  small?: boolean
}

export const NaveIcon = ({ small }: IconProps) => {
  const size = {
    width: small ? '37' : '61',
    height: small ? '24' : '60',
  }
  return (
    <svg
      width={size.width}
      height={size.height}
      viewBox="0 0 61 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.8491 45.2685L28.1586 60L40.5882 43.8107L41.8926 31.688L52.0972 21.4834L60.0767 0L38.5933 7.90281L28.312 18.1074L16.1893 19.4118L0 31.8414L14.7315 31.1509L28.8491 45.2685Z"
        fill="#212121"
      />
      <path
        d="M15.4216 36.1374L23.8615 44.654L11.3551 49.1809L15.4216 36.1374Z"
        fill="#212121"
      />
    </svg>
  )
}

export const NaveLogo = ({ small }: IconProps) => {
  const size = {
    width: small ? '98.21' : '160',
    height: small ? '17.24' : '29',
  }
  return (
    <svg
      width={size.width}
      height={size.height}
      viewBox="0 0 160 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.8272 27.7818H54.5544V1.69763H46.8272V4.43921H46.7499C45.8227 2.79426 43.5045 0.75766 39.2545 0.75766C32.3773 0.75766 26.2728 6.16249 26.2728 14.7006C26.2728 22.142 31.0637 28.6435 39.2545 28.6435C42.2681 28.6435 45.4363 27.4685 46.7499 24.9619H46.8272V27.7818ZM46.8272 14.6998C46.8272 17.2064 45.2044 21.358 40.4136 21.358C35.7773 21.358 34 17.2064 34 14.7782C34 11.8016 35.9318 8.0417 40.3363 8.0417C44.6635 8.0417 46.8272 11.5666 46.8272 14.6998Z"
        fill="#212121"
      />
      <path
        d="M74.1814 27.7034H66.4542L57.6451 1.61923H65.3723L70.3178 17.9121H70.395L75.5723 1.61923H83.2995L74.1814 27.7034Z"
        fill="#212121"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M103.622 26.2146C105.785 24.7263 107.64 22.4547 108.876 19.5565V19.4782H100.995C99.9127 20.8098 98.6763 21.9064 96.2809 21.9064C93.2673 21.9064 90.7173 20.1048 90.2537 16.9716H109.572C109.577 16.9349 109.582 16.8985 109.587 16.8623C109.659 16.3579 109.726 15.8851 109.726 14.935C109.726 6.94522 103.931 0.678741 96.1264 0.678741C88.2446 0.678741 82.6038 7.4152 82.6038 14.7C82.6038 22.5331 88.9401 28.5646 96.2809 28.5646C98.9082 28.5646 101.458 27.7812 103.622 26.2146ZM96.2035 7.3363C100.222 7.3363 101.767 10.2345 102.076 11.8012H90.3309C90.7172 10.2345 92.1854 7.3363 96.2035 7.3363Z"
        fill="#212121"
      />
      <path
        d="M121.703 1.61871H128.89V4.3603H128.967C129.585 3.107 130.976 0.678741 135.381 0.678741V8.51184C131.826 8.59017 129.353 9.37348 129.353 13.29V27.6246H121.626V1.61871H121.703Z"
        fill="#212121"
      />
      <path
        d="M150.912 8.98241C150.835 8.43409 150.758 7.02414 148.517 7.02414C146.894 7.02414 146.353 8.04244 146.353 8.74742C146.353 10.1574 148.285 10.9407 150.294 11.5673C154.622 12.8206 159.335 14.0739 159.335 19.7137C159.335 25.1969 154.544 28.6435 148.826 28.6435C144.963 28.6435 139.013 26.8419 138.317 19.9487H145.967C146.276 22.377 148.594 22.377 148.903 22.377C150.217 22.377 151.608 21.5937 151.608 20.3404C151.608 18.3038 149.676 18.0688 144.808 16.1889C141.485 15.0922 138.703 12.899 138.703 9.37406C138.703 4.20422 143.34 0.75766 148.672 0.75766C152.072 0.75766 157.944 2.08929 158.562 8.98241H150.912Z"
        fill="#212121"
      />
      <path
        d="M20.2453 3.02848C18.8544 1.77518 16.1499 0.756882 13.6771 0.756882C9.1181 0.756882 8.11356 3.18514 7.34084 4.43844H7.26357V1.69685H0.0772705V27.7811H7.80447V11.8799C7.80447 10.7049 8.26811 9.68661 9.04083 8.98163C9.1181 8.9033 9.19537 8.82497 9.27264 8.82497C9.34991 8.74664 9.42719 8.66831 9.50446 8.66831H9.58173C10.1999 8.27665 10.8954 8.04166 11.6681 8.04166C12.6726 8.04166 13.5226 8.43331 14.2181 9.05996C14.9908 9.76494 15.5317 10.7832 15.5317 11.9582V12.9765C15.5317 13.1332 15.5317 13.3682 15.5317 13.5248V27.7811H23.2589V11.4099C23.2589 6.31838 21.6362 4.20344 20.2453 3.02848Z"
        fill="#212121"
      />
      <path
        d="M114.749 27.7808C112.585 27.7808 110.885 26.0576 110.885 23.8643C110.885 21.671 112.585 19.9478 114.749 19.9478C116.913 19.9478 118.613 21.671 118.613 23.8643C118.613 25.9792 116.913 27.7808 114.749 27.7808Z"
        fill="#212121"
      />
    </svg>
  )
}
