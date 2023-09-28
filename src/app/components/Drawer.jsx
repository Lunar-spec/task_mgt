import Link from 'next/link'
import React from 'react'

const Drawer = ({ handleLinkClick }) => {
  return (
    <>
      <div className="h-auto p-3 shadow-md">
        <h1 className='uppercase px-2 py-2 font-medium text-[#C7C7C7]'>Main menu</h1>
        <ul className="flex flex-col gap-4 w-full mt-4">
          <li className="flex">
            <Link onClick={handleLinkClick} href={"/"} className="transition-all text-[#464366] hover:text-[#6418C3] flex items-center gap-x-4 w-full px-2 py-2 rounded-lg">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2.33334C11.7518 2.3334 9.55158 2.98301 7.66391 4.20402C5.77623 5.42504 4.28154 7.16545 3.35965 9.21589C2.43775 11.2663 2.12792 13.5395 2.46742 15.7618C2.80692 17.9842 3.7813 20.0611 5.27333 21.7428C5.38236 21.8655 5.51603 21.9638 5.66561 22.0313C5.81519 22.0988 5.97733 22.1341 6.14144 22.1347C16.1002 22.1748 11.63 22.1662 21.83 22.1632C21.994 22.1633 22.1563 22.1287 22.3061 22.0618C22.4559 21.9948 22.5899 21.897 22.6992 21.7747C24.1999 20.0957 25.1826 18.0183 25.5287 15.7932C25.8748 13.5681 25.5696 11.2904 24.6498 9.23491C23.7301 7.17944 22.2351 5.43407 20.3454 4.20943C18.4556 2.98479 16.2519 2.33322 14 2.33334ZM19.3559 11.441L17.3166 12.9344C17.4333 13.2777 17.4952 13.6374 17.5 14C17.5032 14.7827 17.2451 15.5441 16.7666 16.1634C16.2881 16.7828 15.6165 17.2247 14.8583 17.419C14.1001 17.6134 13.2988 17.5492 12.5813 17.2365C11.8638 16.9238 11.2712 16.3805 10.8974 15.6928C10.5237 15.0051 10.3902 14.2124 10.5181 13.4402C10.646 12.668 11.028 11.9607 11.6035 11.4302C12.1791 10.8998 12.9152 10.5766 13.6952 10.512C14.4752 10.4474 15.2545 10.6449 15.9095 11.0734L17.9774 9.55886C18.2273 9.38209 18.5366 9.3106 18.8387 9.35981C19.1409 9.40903 19.4115 9.575 19.5924 9.82194C19.7732 10.0689 19.8498 10.377 19.8056 10.6799C19.7614 10.9828 19.5999 11.2561 19.3559 11.441Z" fill="currentColor" />
                <path d="M14 15.1667C14.6443 15.1667 15.1667 14.6444 15.1667 14C15.1667 13.3557 14.6443 12.8333 14 12.8333C13.3556 12.8333 12.8333 13.3557 12.8333 14C12.8333 14.6444 13.3556 15.1667 14 15.1667Z" fill="currentColor" />
              </svg>
              Dashboard
            </Link>
          </li>
          <li className="flex">
            <Link href={"/"} className="transition-all text-[#464366] hover:text-[#6418C3] flex items-center justify-between gap-x-4 w-full px-2 py-2 rounded-lg">
              <div className="flex items-center gap-x-4">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.9999 13.8376L25.3829 7.62872C25.0209 6.4376 24.2865 5.39389 23.2877 4.65081C22.2889 3.90772 21.0782 3.50438 19.8333 3.5H8.1666C6.92169 3.50438 5.71097 3.90772 4.71215 4.65081C3.71333 5.39389 2.97902 6.4376 2.617 7.62872L13.9999 13.8376Z" fill="currentColor" />
                  <path d="M14.5589 16.1909C14.3874 16.2843 14.1953 16.3333 14 16.3333C13.8048 16.3333 13.6126 16.2843 13.4412 16.1909L2.33337 10.132V18.6667C2.3352 20.2132 2.95036 21.6959 4.04393 22.7894C5.1375 23.883 6.62017 24.4982 8.16671 24.5H19.8334C21.3799 24.4982 22.8626 23.883 23.9562 22.7894C25.0497 21.6959 25.6649 20.2132 25.6667 18.6667V10.132L14.5589 16.1909Z" fill="currentColor" />
                </svg>
                Email
              </div>
              <div className="flex items-center gap-x-3">
                <span className='h-8 flex items-center justify-center w-8 bg-[#5ECFFF] text-white rounded-full'>17</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="#7879F1" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </Link>
          </li>
          <li className="flex">
            <Link onClick={handleLinkClick} href={"/"} className="transition-all text-[#7879F1] hover:text-[#6418C3] flex items-center gap-x-4 w-full px-2 py-2 rounded-lg">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1_510)">
                  <path d="M21 10.9375C21.0001 9.9472 20.8548 8.96224 20.5686 8.01415C20.1624 6.66553 19.4775 5.41722 18.5584 4.34998C17.6393 3.28273 16.5063 2.42034 15.2329 1.81858C13.9594 1.21682 12.5738 0.88911 11.1657 0.856647C9.7576 0.824183 8.35837 1.08769 7.05853 1.63012C5.75869 2.17255 4.5872 2.98182 3.61986 4.00557C2.65252 5.02932 1.91088 6.24475 1.44291 7.57321C0.974947 8.90168 0.791084 10.3136 0.903219 11.7176C1.01535 13.1216 1.42099 14.4864 2.09388 15.7238L0.908258 19.8853C0.871159 20.0155 0.864785 20.1525 0.889639 20.2856C0.914492 20.4187 0.969894 20.5442 1.05149 20.6523C1.13308 20.7604 1.23863 20.848 1.35984 20.9083C1.48105 20.9687 1.61461 21.0001 1.75001 21C1.83106 20.9998 1.91172 20.9887 1.98976 20.9668L6.15213 19.7803C6.7427 20.1039 7.36561 20.3646 8.01063 20.5582C8.95856 20.8515 9.94524 21.0004 10.9375 21C13.6053 20.997 16.163 19.9359 18.0494 18.0495C19.9359 16.163 20.997 13.6053 21 10.9375Z" fill="currentColor" />
                  <path d="M27.0918 26.0102L25.9062 21.8487C27.1171 19.62 27.4401 17.0157 26.8104 14.5586C26.1807 12.1016 24.6448 9.97365 22.5111 8.60211C22.8617 10.3169 22.826 12.0883 22.4065 13.7876C21.9871 15.4869 21.1944 17.0715 20.0862 18.4262C18.9779 19.7809 17.5819 20.8719 15.9994 21.6198C14.417 22.3677 12.6878 22.7537 10.9375 22.75C10.1576 22.7476 9.37995 22.667 8.61615 22.5094C9.53101 23.9186 10.7819 25.0783 12.2563 25.884C13.7307 26.6897 15.3824 27.1162 17.0625 27.125C18.7348 27.1252 20.3803 26.7062 21.8488 25.9061L26.0103 27.0917C26.0883 27.1136 26.169 27.1248 26.25 27.125C26.3854 27.125 26.519 27.0936 26.6402 27.0333C26.7614 26.973 26.867 26.8853 26.9485 26.7773C27.0301 26.6692 27.0855 26.5437 27.1104 26.4106C27.1352 26.2775 27.1289 26.1405 27.0918 26.0102Z" fill="currentColor" />
                </g>
                <defs>
                  <clipPath id="clip0_1_510">
                    <rect width="28" height="28" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Chat
            </Link>
          </li>
          <li className="flex">
            <Link href={"/"} className="transition-all text-[#7879F1] hover:text-[#6418C3] flex items-center justify-between gap-x-4 w-full px-2 py-2 rounded-lg">
              <div className="flex items-center gap-x-4">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.33331 2.33331H5.83331C3.90032 2.33331 2.33331 3.90032 2.33331 5.83331V9.33331C2.33331 11.2663 3.90032 12.8333 5.83331 12.8333H9.33331C11.2663 12.8333 12.8333 11.2663 12.8333 9.33331V5.83331C12.8333 3.90032 11.2663 2.33331 9.33331 2.33331Z" fill="currentColor" />
                  <path d="M22.1666 2.33331H18.6666C16.7336 2.33331 15.1666 3.90032 15.1666 5.83331V9.33331C15.1666 11.2663 16.7336 12.8333 18.6666 12.8333H22.1666C24.0996 12.8333 25.6666 11.2663 25.6666 9.33331V5.83331C25.6666 3.90032 24.0996 2.33331 22.1666 2.33331Z" fill="currentColor" />
                  <path d="M9.33331 15.1666H5.83331C3.90032 15.1666 2.33331 16.7336 2.33331 18.6666V22.1666C2.33331 24.0996 3.90032 25.6666 5.83331 25.6666H9.33331C11.2663 25.6666 12.8333 24.0996 12.8333 22.1666V18.6666C12.8333 16.7336 11.2663 15.1666 9.33331 15.1666Z" fill="currentColor" />
                  <path d="M22.1666 15.1666H18.6666C16.7336 15.1666 15.1666 16.7336 15.1666 18.6666V22.1666C15.1666 24.0996 16.7336 25.6666 18.6666 25.6666H22.1666C24.0996 25.6666 25.6666 24.0996 25.6666 22.1666V18.6666C25.6666 16.7336 24.0996 15.1666 22.1666 15.1666Z" fill="currentColor" />
                </svg>
                Kanban
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#7879F1" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Link>
          </li>
          <li className="flex">
            <Link onClick={handleLinkClick} href={"/"} className="transition-all text-[#7879F1] hover:text-[#6418C3] flex items-center justify-between gap-x-4 w-full px-2 py-2 rounded-lg">
              <div className="flex items-center gap-x-4">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.1667 7.21609V5.83336C22.1656 4.90541 21.7966 4.01577 21.1404 3.35961C20.4843 2.70345 19.5946 2.33438 18.6667 2.33336H7C6.08275 2.33288 5.20225 2.69386 4.5493 3.33808C3.89635 3.98229 3.52354 4.85785 3.51167 5.77503C3.51085 5.79521 3.5 5.81259 3.5 5.83336V22.1667C3.50271 23.0941 3.87233 23.9828 4.52812 24.6386C5.18391 25.2944 6.07258 25.664 7 25.6667H21C21.9274 25.664 22.8161 25.2944 23.4719 24.6386C24.1277 23.9828 24.4973 23.0941 24.5 22.1667V10.5C24.4965 9.77903 24.2704 9.0767 23.8528 8.48895C23.4352 7.9012 22.8464 7.45668 22.1667 7.21609ZM18.6667 21C18.6657 21.3092 18.5425 21.6054 18.3239 21.824C18.1053 22.0426 17.8091 22.1658 17.5 22.1667H10.5C10.1909 22.1658 9.89465 22.0426 9.67606 21.824C9.45747 21.6054 9.33426 21.3092 9.33333 21C9.18985 20.0892 9.28901 19.1567 9.62083 18.2964C9.95264 17.4362 10.5054 16.6786 11.2233 16.1C10.7582 15.4984 10.504 14.7605 10.5 14C10.5 13.0718 10.8687 12.1815 11.5251 11.5252C12.1815 10.8688 13.0717 10.5 14 10.5C14.9283 10.5 15.8185 10.8688 16.4749 11.5252C17.1313 12.1815 17.5 13.0718 17.5 14C17.496 14.7605 17.2418 15.4984 16.7767 16.1C17.4942 16.6789 18.0466 17.4365 18.3784 18.2967C18.7102 19.1569 18.8096 20.0892 18.6667 21ZM19.8333 7.00003H7.14187C6.985 7.01608 6.82651 7.00025 6.67591 6.9535C6.52532 6.90675 6.38573 6.83003 6.26554 6.72796C6.14535 6.62589 6.04703 6.50057 5.9765 6.35954C5.90597 6.21851 5.86468 6.06468 5.85511 5.90728C5.84554 5.74989 5.86789 5.59218 5.92081 5.44365C5.97374 5.29511 6.05615 5.1588 6.16309 5.04292C6.27003 4.92704 6.3993 4.83398 6.54312 4.76933C6.68694 4.70467 6.84234 4.66976 7 4.66669H18.6667C18.976 4.667 19.2726 4.79002 19.4913 5.00874C19.71 5.22747 19.833 5.52404 19.8333 5.83336V7.00003Z" fill="currentColor" />
                </svg>
                Contact
              </div>
              <div className="flex">
                <span className='bg-[#E328AF] text-white rounded-2xl text-sm px-2 py-1'>New</span>
              </div>
            </Link>
          </li>
          <li className="flex">
            <Link onClick={handleLinkClick} href={"/"} className="transition-all text-[#7879F1] hover:text-[#6418C3] flex items-center gap-x-4 w-full px-2 py-2 rounded-lg">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.167 5.83359H21.0003V3.50025C21.0003 3.19084 20.8774 2.89409 20.6586 2.6753C20.4398 2.4565 20.143 2.33359 19.8336 2.33359C19.5242 2.33359 19.2275 2.4565 19.0087 2.6753C18.7899 2.89409 18.667 3.19084 18.667 3.50025V5.83359H9.33362V3.50025C9.33362 3.19084 9.2107 2.89409 8.99191 2.6753C8.77312 2.4565 8.47637 2.33359 8.16695 2.33359C7.85753 2.33359 7.56079 2.4565 7.34199 2.6753C7.1232 2.89409 7.00028 3.19084 7.00028 3.50025V5.83359H5.83362C4.90536 5.83359 4.01512 6.20234 3.35874 6.85871C2.70237 7.51509 2.33362 8.40533 2.33362 9.33359V10.5003H25.667V9.33359C25.667 8.40533 25.2982 7.51509 24.6418 6.85871C23.9854 6.20234 23.0952 5.83359 22.167 5.83359Z" fill="currentColor" />
                <path d="M2.33362 22.1669C2.33362 23.0952 2.70237 23.9854 3.35874 24.6418C4.01512 25.2982 4.90536 25.6669 5.83362 25.6669H22.167C23.0952 25.6669 23.9854 25.2982 24.6418 24.6418C25.2982 23.9854 25.667 23.0952 25.667 22.1669V12.8336H2.33362V22.1669Z" fill="currentColor" />
              </svg>
              Calender
            </Link>
          </li>
          <li className="flex">
            <Link href={"/"} className="transition-all text-[#7879F1] hover:text-[#6418C3] flex items-center justify-between gap-x-4 w-full px-2 py-2 rounded-lg">
              <div className="flex items-center gap-x-4">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_574)">
                    <g clipPath="url(#clip1_1_574)">
                      <path d="M2.54545 0C1.14629 0 0 1.14629 0 2.54545V19.0909C0 20.4901 1.14629 21.6364 2.54545 21.6364H4.0158C3.93001 21.1123 3.83758 20.538 3.8244 20.0368C3.8244 17.7169 5.15521 15.6365 7.17898 14.6314C6.67456 14.0256 6.36985 13.248 6.36985 12.4029C6.36985 10.4805 7.94412 8.90909 9.86736 8.90909C11.7906 8.90909 13.3636 10.4805 13.3636 12.4029C13.3636 13.2483 13.059 14.0255 12.5545 14.6314C14.5789 15.6362 15.9091 17.7165 15.9091 20.0368C15.8782 20.638 15.8279 21.0623 15.6879 21.6364H25.4545C26.8537 21.6364 28 20.4901 28 19.0909V2.54545C28 1.14629 26.8537 0 25.4545 0H2.54545ZM2.54545 1.27273H25.4545C26.1706 1.27273 26.7273 1.82936 26.7273 2.54545V5.09091H1.27273V2.54545C1.27273 1.82936 1.82936 1.27273 2.54545 1.27273ZM18.764 8.98864L24.4913 12.1705C24.9289 12.4127 24.9289 13.0419 24.4913 13.2841L18.764 16.4659C18.3396 16.7021 17.8177 16.3948 17.8182 15.9091V9.54545C17.8024 9.01539 18.3463 8.758 18.764 8.98864ZM9.86736 10.1818C8.63127 10.1818 7.64258 11.169 7.64258 12.4029C7.64258 13.6367 8.63127 14.6239 9.86736 14.6239C11.1035 14.6239 12.0909 13.6367 12.0909 12.4029C12.0909 11.169 11.1035 10.1818 9.86736 10.1818ZM8.32244 15.53C6.40019 16.1859 5.09712 17.9883 5.09712 20.0368C5.11137 20.55 5.22338 21.1035 5.30344 21.6364H14.3965C14.5443 21.0322 14.6073 20.5652 14.6364 20.0368C14.6364 17.9889 13.3342 16.1875 11.4123 15.5312C10.9453 15.7633 10.4219 15.8967 9.86736 15.8967C9.31266 15.8967 8.78969 15.7622 8.32244 15.53Z" fill="currentColor" />
                      <path d="M6.36364 22.9091C5.18515 22.9091 4.18799 23.7249 3.9027 24.8182H0V26.0909H3.9027C4.18799 27.1842 5.18515 28 6.36364 28C7.54248 28 8.54211 27.1847 8.82706 26.0909H28V24.8182H8.82706C8.54211 23.7244 7.54248 22.9091 6.36364 22.9091Z" fill="currentColor" />
                      <path d="M24.1818 2.54546V3.81818H25.4546V2.54546H24.1818Z" fill="currentColor" />
                      <path d="M21.6364 2.54546V3.81818H22.9091V2.54546H21.6364Z" fill="currentColor" />
                      <path d="M19.0909 2.54546V3.81818H20.3637V2.54546H19.0909Z" fill="currentColor" />
                      <path d="M16.5455 2.54546V3.81818H17.8182V2.54546H16.5455Z" fill="currentColor" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_574">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_1_574">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Courses
              </div>
              <div className="">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#7879F1" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </Link>
          </li>
          <li className="flex">
            <Link onClick={handleLinkClick} href={"/"} className="transition-all text-[#7879F1] hover:text-[#6418C3] flex items-center gap-x-4 w-full px-2 py-2 rounded-lg">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1_545)">
                  <path d="M19.7969 25.8125H19.2493C19.2494 25.757 19.263 25.8531 19.0602 24.6375C19.047 24.5584 18.9785 24.5 18.8983 24.5H9.1017C9.02152 24.5 8.953 24.5584 8.93982 24.6375C8.73748 25.8504 8.7506 25.7576 8.75066 25.8125H8.20312C7.53867 25.8125 7 26.3512 7 27.0156V27.5625C7 27.8041 7.19589 28 7.4375 28H20.5625C20.8041 28 21 27.8041 21 27.5625V27.0156C21 26.3512 20.4613 25.8125 19.7969 25.8125Z" fill="currentColor" />
                  <path d="M5.59677 7.40474C5.13986 8.07702 4.42323 8.55854 3.59215 8.70362C3.53921 8.71287 3.5 8.75777 3.5 8.81152V16.625H24.5V8.81152C24.5 8.75777 24.4608 8.71287 24.4079 8.70362C23.5768 8.55848 22.8601 8.07702 22.4032 7.40474C22.3595 7.34048 22.2657 7.34016 22.2222 7.40458C20.9692 9.2598 18.1981 9.17995 17.0567 7.25277C17.016 7.18413 16.9187 7.18025 16.8732 7.24582C15.4845 9.24815 12.5176 9.25181 11.1267 7.24582C11.0813 7.18025 10.9839 7.18413 10.9432 7.25277C9.80306 9.17749 7.03238 9.2627 5.77779 7.40463C5.73431 7.34016 5.64047 7.34048 5.59677 7.40474ZM13.5625 10.0625H22.735C22.968 10.0625 23.1715 10.2384 23.1866 10.4709C23.203 10.7257 23.0012 10.9375 22.75 10.9375H13.5775C13.3445 10.9375 13.141 10.7616 13.1259 10.5291C13.1095 10.2743 13.3113 10.0625 13.5625 10.0625ZM13.5625 12.25H22.735C22.968 12.25 23.1715 12.4259 23.1866 12.6584C23.203 12.9132 23.0012 13.125 22.75 13.125H13.5775C13.3445 13.125 13.141 12.9491 13.1259 12.7166C13.1095 12.4618 13.3113 12.25 13.5625 12.25ZM13.5625 14.4375H19.6725C19.9055 14.4375 20.109 14.6134 20.1241 14.8459C20.1405 15.1007 19.9387 15.3125 19.6875 15.3125H13.5775C13.3445 15.3125 13.141 15.1366 13.1259 14.9041C13.1095 14.6493 13.3113 14.4375 13.5625 14.4375ZM11.3741 12.2789C11.3591 12.5115 11.1557 12.6875 10.9226 12.6875C10.8927 12.6875 10.8672 12.7091 10.8623 12.7386L10.494 14.9472C10.459 15.1577 10.2764 15.3125 10.0626 15.3125H6.56255C6.34873 15.3125 6.16607 15.1577 6.13107 14.9472L5.7628 12.7386C5.75788 12.7091 5.73234 12.6875 5.70248 12.6875C5.46941 12.6875 5.26597 12.5115 5.25104 12.2789C5.23458 12.0241 5.43621 11.8125 5.6875 11.8125H6.57284C6.62304 11.8125 6.66673 11.7784 6.67893 11.7296L7.01313 10.3939C7.07164 10.1593 7.30953 10.0171 7.54359 10.0756C7.7782 10.1341 7.92039 10.3715 7.86187 10.6061L7.59451 11.6766C7.57728 11.7456 7.62945 11.8125 7.7006 11.8125H8.9244C8.99555 11.8125 9.04777 11.7457 9.03049 11.6766L8.76313 10.6061C8.70461 10.3715 8.8468 10.1341 9.08141 10.0756C9.31602 10.0171 9.55336 10.1593 9.61187 10.3939L9.94607 11.7296C9.95827 11.7783 10.002 11.8125 10.0522 11.8125H10.9375C11.1888 11.8125 11.3904 12.0241 11.3741 12.2789Z" fill="currentColor" />
                  <path d="M7.02592 14.4375H9.59908C9.65256 14.4375 9.69817 14.3988 9.70698 14.3461L9.96253 12.8149C9.97363 12.7482 9.92223 12.6875 9.85463 12.6875H6.77042C6.70283 12.6875 6.65142 12.7482 6.66252 12.8149L6.91808 14.3461C6.92683 14.3988 6.97244 14.4375 7.02592 14.4375Z" fill="currentColor" />
                  <path d="M25.375 17.0625C25.375 17.3041 25.1791 17.5 24.9375 17.5H3.0625C2.82089 17.5 2.625 17.3041 2.625 17.0625V8.81152C2.625 8.75782 2.58579 8.71292 2.53291 8.70368C1.97427 8.60623 1.46694 8.35658 1.05596 7.9992C0.985141 7.93762 0.875 7.98755 0.875 8.08139V19.0859C0.875 19.1766 0.948445 19.25 1.03906 19.25H26.9609C27.0516 19.25 27.125 19.1766 27.125 19.0859V8.08139C27.125 7.98755 27.0149 7.93762 26.944 7.9992C26.5331 8.35658 26.0257 8.60623 25.4671 8.70368C25.4142 8.71292 25.375 8.75782 25.375 8.81152V17.0625Z" fill="currentColor" />
                  <path d="M17.5 5.6875C17.5 6.91124 18.5095 7.90316 19.7397 7.8744C20.9341 7.84645 21.875 6.8413 21.875 5.64654V5.41406C21.875 5.32345 21.8016 5.25 21.7109 5.25H17.6641C17.5734 5.25 17.5 5.32345 17.5 5.41406V5.6875Z" fill="currentColor" />
                  <path d="M21.7644 4.18398L21.0896 0.137102C21.0764 0.0579687 21.0079 0 20.9278 0H17.2785C17.1826 0 17.1071 0.0820313 17.115 0.17768L17.4524 4.22455C17.4595 4.30959 17.5306 4.375 17.616 4.375H21.6026C21.704 4.375 21.7811 4.28395 21.7644 4.18398Z" fill="currentColor" />
                  <path d="M22.75 5.41406V5.64654C22.75 6.8413 23.6909 7.84645 24.8853 7.8744C26.1155 7.90316 27.125 6.91124 27.125 5.6875V5.41406C27.125 5.32345 27.0516 5.25 26.9609 5.25H22.9141C22.8234 5.25 22.75 5.32345 22.75 5.41406Z" fill="currentColor" />
                  <path d="M26.7278 4.375C26.8398 4.375 26.9189 4.2653 26.8835 4.15904L25.597 0.299141C25.5374 0.120312 25.3706 0 25.1819 0H22.1474C22.046 0 21.9689 0.0910547 21.9856 0.191023L22.6605 4.2379C22.6736 4.31698 22.7421 4.375 22.8223 4.375H26.7278Z" fill="currentColor" />
                  <path d="M14 7.875C15.3897 7.875 16.5304 6.78995 16.6194 5.42243C16.6255 5.32875 16.5493 5.25 16.4555 5.25H11.5445C11.4506 5.25 11.3745 5.32875 11.3806 5.42243C11.4697 6.78995 12.6104 7.875 14 7.875Z" fill="currentColor" />
                  <path d="M16.0716 0H11.9285C11.8431 0 11.772 0.0654062 11.7649 0.150445L11.4275 4.19732C11.4196 4.29297 11.4951 4.375 11.591 4.375H16.4089C16.5049 4.375 16.5804 4.29297 16.5725 4.19732L16.235 0.150445C16.228 0.0654062 16.1569 0 16.0716 0V0Z" fill="currentColor" />
                  <path d="M10.7215 0H7.07228C6.99211 0 6.92364 0.0579687 6.91046 0.137102L6.23561 4.18398C6.21893 4.284 6.29604 4.375 6.39743 4.375H10.384C10.4694 4.375 10.5404 4.30959 10.5476 4.22455L10.885 0.17768C10.8929 0.0820313 10.8174 0 10.7215 0V0Z" fill="currentColor" />
                  <path d="M8.36467 7.8744C9.5591 7.84645 10.5 6.8413 10.5 5.64654V5.41406C10.5 5.32345 10.4266 5.25 10.3359 5.25H6.28906C6.19845 5.25 6.125 5.32345 6.125 5.41406V5.6875C6.125 6.91124 7.13453 7.90316 8.36467 7.8744Z" fill="currentColor" />
                  <path d="M3.11467 7.8744C4.3091 7.84645 5.25 6.8413 5.25 5.64654V5.41406C5.25 5.32345 5.17655 5.25 5.08594 5.25H1.03906C0.948445 5.25 0.875 5.32345 0.875 5.41406V5.6875C0.875 6.91124 1.88453 7.90316 3.11467 7.8744Z" fill="currentColor" />
                  <path d="M6.01443 0.191023C6.03105 0.0910547 5.95394 0 5.85255 0H2.81805C2.62938 0 2.46258 0.120312 2.40297 0.299141L1.1165 4.15904C1.08112 4.2653 1.1602 4.375 1.27214 4.375H5.17776C5.25793 4.375 5.3264 4.31703 5.33958 4.2379L6.01443 0.191023Z" fill="currentColor" />
                  <path d="M0.875 21.875C0.875 22.8415 1.65851 23.625 2.625 23.625H25.375C26.3415 23.625 27.125 22.8415 27.125 21.875V20.2891C27.125 20.1984 27.0516 20.125 26.9609 20.125H1.03906C0.948445 20.125 0.875 20.1984 0.875 20.2891V21.875ZM13.5712 21.7895C13.6462 21.4056 14.1526 21.312 14.3636 21.632C14.4979 21.831 14.443 22.1066 14.2428 22.2385C13.9201 22.4563 13.4899 22.1656 13.5712 21.7895Z" fill="currentColor" />
                </g>
                <defs>
                  <clipPath id="clip0_1_545">
                    <rect width="28" height="28" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Shop
            </Link>
          </li>
          <li className="flex">
            <Link href={"/"} className="transition-all text-[#7879F1] hover:text-[#6418C3] flex items-center justify-between gap-x-4 w-full px-2 py-2 rounded-lg">
              <div className="flex items-center gap-x-4">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.1666 1.16667H5.83329C5.55373 1.16989 5.28462 1.27339 5.07496 1.45834C5.90695 1.75106 6.63896 2.27356 7.18615 2.96528C7.73334 3.65701 8.07329 4.48964 8.16663 5.36667C8.18446 5.52172 8.18446 5.67829 8.16663 5.83334V25.6667C8.16607 25.8898 8.22953 26.1084 8.34946 26.2966C8.4694 26.4848 8.64078 26.6346 8.84329 26.7283C9.04628 26.8218 9.27183 26.855 9.49313 26.8239C9.71443 26.7929 9.92216 26.699 10.0916 26.5533L13.4166 23.7067L16.7416 26.5533C16.9529 26.7341 17.2219 26.8334 17.5 26.8334C17.778 26.8334 18.047 26.7341 18.2583 26.5533L21.5833 23.7067L24.9083 26.5533C25.1196 26.7341 25.3886 26.8334 25.6666 26.8333C25.8354 26.8321 26.0022 26.7964 26.1566 26.7283C26.3591 26.6346 26.5305 26.4848 26.6505 26.2966C26.7704 26.1084 26.8338 25.8898 26.8333 25.6667V5.83334C26.8333 4.59566 26.3416 3.40868 25.4665 2.53351C24.5913 1.65834 23.4043 1.16667 22.1666 1.16667ZM21 17.5H14C13.6905 17.5 13.3938 17.3771 13.175 17.1583C12.9562 16.9395 12.8333 16.6428 12.8333 16.3333C12.8333 16.0239 12.9562 15.7272 13.175 15.5084C13.3938 15.2896 13.6905 15.1667 14 15.1667H21C21.3094 15.1667 21.6061 15.2896 21.8249 15.5084C22.0437 15.7272 22.1666 16.0239 22.1666 16.3333C22.1666 16.6428 22.0437 16.9395 21.8249 17.1583C21.6061 17.3771 21.3094 17.5 21 17.5ZM21 12.8333H14C13.6905 12.8333 13.3938 12.7104 13.175 12.4916C12.9562 12.2728 12.8333 11.9761 12.8333 11.6667C12.8333 11.3573 12.9562 11.0605 13.175 10.8417C13.3938 10.6229 13.6905 10.5 14 10.5H21C21.3094 10.5 21.6061 10.6229 21.8249 10.8417C22.0437 11.0605 22.1666 11.3573 22.1666 11.6667C22.1666 11.9761 22.0437 12.2728 21.8249 12.4916C21.6061 12.7104 21.3094 12.8333 21 12.8333ZM21 8.16667H14C13.6905 8.16667 13.3938 8.04376 13.175 7.82496C12.9562 7.60617 12.8333 7.30942 12.8333 7.00001C12.8333 6.69059 12.9562 6.39384 13.175 6.17505C13.3938 5.95626 13.6905 5.83334 14 5.83334H21C21.3094 5.83334 21.6061 5.95626 21.8249 6.17505C22.0437 6.39384 22.1666 6.69059 22.1666 7.00001C22.1666 7.30942 22.0437 7.60617 21.8249 7.82496C21.6061 8.04376 21.3094 8.16667 21 8.16667ZM5.83329 5.83334V15.1667H2.33329C2.02387 15.1667 1.72713 15.0438 1.50833 14.825C1.28954 14.6062 1.16663 14.3094 1.16663 14V5.83334C1.16663 5.67001 1.16663 5.51834 1.16663 5.36667C1.22851 4.74783 1.53369 4.17892 2.01504 3.7851C2.49638 3.39127 3.11445 3.20479 3.73329 3.26667C4.35213 3.32856 4.92104 3.63374 5.31487 4.11508C5.70869 4.59642 5.89518 5.2145 5.83329 5.83334Z" fill="currentColor" />
                </svg>
                Invoices
              </div>
              <div className="">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#7879F1" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </Link>
          </li>
          <li className="flex">
            <Link onClick={handleLinkClick} href={"/"} className="transition-all text-[#7879F1] hover:text-[#6418C3] flex items-center gap-x-4 w-full px-2 py-2 rounded-lg">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.5588 10.36C25.0482 10.2858 24.5609 10.0975 24.1333 9.80886C23.7056 9.52027 23.3485 9.13892 23.0887 8.69321C22.8288 8.2475 22.6728 7.7489 22.6324 7.23455C22.5919 6.72021 22.668 6.20336 22.855 5.72251C22.9739 5.40814 22.9914 5.06446 22.9051 4.73964C22.8188 4.41482 22.633 4.12516 22.3738 3.91125C21.2293 2.95021 19.9266 2.19524 18.5238 1.68001C18.2043 1.56134 17.8556 1.54651 17.5272 1.63764C17.1989 1.72876 16.9076 1.92119 16.695 2.18751C16.375 2.5967 15.966 2.92765 15.4991 3.15527C15.0321 3.38288 14.5195 3.50117 14 3.50117C13.4806 3.50117 12.9679 3.38288 12.501 3.15527C12.034 2.92765 11.625 2.5967 11.305 2.18751C11.0924 1.92119 10.8012 1.72876 10.4728 1.63764C10.1445 1.54651 9.79571 1.56134 9.47627 1.68001C8.18098 2.15569 6.96991 2.83507 5.88877 3.6925C5.61625 3.90825 5.41995 4.20558 5.32863 4.54095C5.23731 4.87632 5.25575 5.23212 5.38127 5.55625C5.58318 6.04983 5.6666 6.58386 5.62485 7.1155C5.58309 7.64715 5.41731 8.1616 5.14082 8.6176C4.86433 9.07361 4.48481 9.45846 4.03271 9.7413C3.58062 10.0241 3.06853 10.1971 2.53752 10.2463C2.19278 10.2831 1.86898 10.4297 1.61379 10.6644C1.35861 10.8991 1.18552 11.2095 1.12002 11.55C0.957092 12.3565 0.875019 13.1772 0.875019 14C0.873821 14.6888 0.929427 15.3766 1.04127 16.0563C1.09693 16.4076 1.2668 16.7309 1.5246 16.976C1.78241 17.2212 2.11379 17.3746 2.46752 17.4125C3.01019 17.4634 3.53277 17.6436 3.99151 17.9379C4.45026 18.2323 4.83182 18.6322 5.10427 19.1043C5.37672 19.5764 5.53213 20.1069 5.55749 20.6513C5.58284 21.1958 5.47741 21.7384 5.25002 22.2338C5.10121 22.556 5.06429 22.9187 5.14514 23.2642C5.22599 23.6098 5.41996 23.9185 5.69627 24.1413C6.83387 25.0848 8.12402 25.8276 9.51127 26.3375C9.68867 26.3989 9.8748 26.4314 10.0625 26.4338C10.3199 26.4332 10.5734 26.3709 10.8018 26.2522C11.0302 26.1334 11.2267 25.9616 11.375 25.7513C11.6869 25.2969 12.1049 24.9255 12.5929 24.6693C13.0808 24.4131 13.6239 24.2799 14.175 24.2813C14.709 24.2819 15.2354 24.4073 15.7124 24.6473C16.1894 24.8873 16.6038 25.2354 16.9225 25.6638C17.1345 25.9488 17.4349 26.1556 17.7767 26.2522C18.1186 26.3487 18.4827 26.3295 18.8125 26.1975C20.081 25.687 21.2619 24.9814 22.3125 24.1063C22.5764 23.8881 22.7644 23.5918 22.8493 23.26C22.9342 22.9283 22.9117 22.5782 22.785 22.26C22.5792 21.7728 22.4895 21.2444 22.5229 20.7166C22.5563 20.1887 22.712 19.6759 22.9776 19.2185C23.2432 18.7611 23.6114 18.3717 24.0533 18.0811C24.4952 17.7904 24.9986 17.6065 25.5238 17.5438C25.8643 17.4967 26.181 17.3424 26.428 17.1033C26.675 16.8641 26.8394 16.5526 26.8975 16.2138C27.038 15.4839 27.1142 14.7432 27.125 14C27.1252 13.2161 27.052 12.434 26.9063 11.6638C26.8472 11.3324 26.6852 11.0281 26.4433 10.794C26.2014 10.56 25.8919 10.4081 25.5588 10.36ZM18.375 14C18.375 14.8653 18.1184 15.7112 17.6377 16.4306C17.157 17.1501 16.4737 17.7108 15.6743 18.042C14.8748 18.3731 13.9952 18.4598 13.1465 18.2909C12.2978 18.1221 11.5183 17.7055 10.9064 17.0936C10.2946 16.4817 9.87789 15.7022 9.70908 14.8535C9.54027 14.0049 9.62691 13.1252 9.95805 12.3258C10.2892 11.5263 10.8499 10.8431 11.5694 10.3623C12.2889 9.88159 13.1347 9.625 14 9.625C15.1603 9.625 16.2731 10.0859 17.0936 10.9064C17.9141 11.7269 18.375 12.8397 18.375 14Z" fill="currentColor" />
              </svg>
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Drawer