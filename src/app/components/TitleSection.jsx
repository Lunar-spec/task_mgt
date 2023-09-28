import React from 'react'

const TitleSection = () => {
  return (
    <>
      <div className="container mx-auto mt-8 p-6 rounded-2xl bg-[#15132B] overflow-hidden">
        <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col justify-between gap-6">

          <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col gap-x-3">
            <div className="">
              <button>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.08496 19C4.08496 25.9411 9.07398 32.1336 15.8676 33.5856C19.2622 34.311 22.8718 33.8223 25.9433 32.2039C28.8993 30.6463 31.2884 28.0927 32.6423 25.0375C34.051 21.8595 34.2965 18.2112 33.3358 14.871C32.4094 11.6486 30.376 8.79133 27.6465 6.84611C21.94 2.77897 13.9247 3.32275 8.81102 8.10771C5.81434 10.9117 4.08496 14.8953 4.08496 19ZM11.8544 18.1944L16.0196 14.0296C17.0593 12.99 18.6716 14.6023 17.6316 15.642L15.5393 17.7339L25.2133 17.7339C25.9034 17.7339 26.4795 18.3103 26.4795 19.0004C26.4795 19.6905 25.9034 20.267 25.2133 20.267L15.491 20.267L17.5423 22.368C18.5679 23.4175 16.9407 25.0151 15.9109 23.9606L11.8449 19.7965C11.4087 19.3504 11.4129 18.636 11.8544 18.1944Z" fill="#A5A5A5" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-y-3 lg:items-start md:items-start sm:items-center items-center lg:justify-start md:justify-start sm:justify-center justify-center">
              <h1 className='text-2xl font-bold text-white lg:text-start md:text-start sm:text-center text-center'>School November Tasks</h1>
              <p className='text-sm text-[#A5A5A5] lg:text-start md:text-start sm:text-center text-center'>Created by Instructor Day on November 31, 2022</p>
              <div className="flex items-center lg:flex-row md:flex-col sm:flex-col flex-col flex-wrap w-full gap-5">
                <svg width="140" height="35" viewBox="0 0 172 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22" cy="22" r="21" fill="#C4C4C4" stroke="#15132B" strokeWidth="2" />
                  <circle cx="54" cy="22" r="21" fill="#C4C4C4" stroke="#15132B" strokeWidth="2" />
                  <circle cx="86" cy="22" r="21" fill="#C4C4C4" stroke="#15132B" strokeWidth="2" />
                  <circle cx="118" cy="22" r="21" fill="#C4C4C4" stroke="#15132B" strokeWidth="2" />
                  <circle cx="150" cy="22" r="21" fill="#E328AF" stroke="#15132B" strokeWidth="2" />
                  <path d="M144.112 28.216C143.596 28.216 142.984 28.162 142.276 28.054C141.58 27.958 141.004 27.844 140.548 27.712L139.9 27.55L140.17 25.714C141.586 25.942 142.798 26.056 143.806 26.056C144.394 26.056 144.844 25.9 145.156 25.588C145.468 25.276 145.624 24.826 145.624 24.238C145.624 23.134 145.12 22.582 144.112 22.582C143.284 22.582 142.576 22.66 141.988 22.816L141.718 22.888L140.242 22.546L140.566 16.12H147.82V18.28H142.51L142.204 20.854C142.948 20.566 143.656 20.422 144.328 20.422C146.896 20.422 148.18 21.616 148.18 24.004C148.18 25.348 147.826 26.386 147.118 27.118C146.41 27.85 145.408 28.216 144.112 28.216ZM153.014 24.562H149.972V22.402H153.014V19.378H155.174V22.402H158.252V24.562H155.174V27.622H153.014V24.562Z" fill="white" />
                </svg>
                <button className='flex items-center gap-x-2 text-white bg-[#6418C3] px-3 py-2 rounded-xl'>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1572 13.328H7.81715C6.27151 13.3298 4.7897 13.9447 3.69677 15.0376C2.60383 16.1305 1.989 17.6123 1.98715 19.158V20.938C1.98715 21.0706 2.03983 21.1978 2.1336 21.2915C2.22737 21.3853 2.35454 21.438 2.48715 21.438H18.4872C18.6198 21.438 18.7469 21.3853 18.8407 21.2915C18.9345 21.1978 18.9872 21.0706 18.9872 20.938V19.158C18.9856 17.6122 18.3708 16.1303 17.2778 15.0373C16.1848 13.9443 14.7029 13.3296 13.1572 13.328Z" fill="white" />
                    <path d="M10.487 11.438C12.9723 11.438 14.987 9.42333 14.987 6.93805C14.987 4.45277 12.9723 2.43805 10.487 2.43805C8.00172 2.43805 5.987 4.45277 5.987 6.93805C5.987 9.42333 8.00172 11.438 10.487 11.438Z" fill="white" />
                    <path d="M21 10H19.5V8.5C19.5 8.23478 19.3946 7.98043 19.2071 7.79289C19.0196 7.60536 18.7652 7.5 18.5 7.5C18.2348 7.5 17.9804 7.60536 17.7929 7.79289C17.6054 7.98043 17.5 8.23478 17.5 8.5V10H16C15.7348 10 15.4804 10.1054 15.2929 10.2929C15.1054 10.4804 15 10.7348 15 11C15 11.2652 15.1054 11.5196 15.2929 11.7071C15.4804 11.8946 15.7348 12 16 12H17.5V13.5C17.5 13.7652 17.6054 14.0196 17.7929 14.2071C17.9804 14.3946 18.2348 14.5 18.5 14.5C18.7652 14.5 19.0196 14.3946 19.2071 14.2071C19.3946 14.0196 19.5 13.7652 19.5 13.5V12H21C21.2652 12 21.5196 11.8946 21.7071 11.7071C21.8946 11.5196 22 11.2652 22 11C22 10.7348 21.8946 10.4804 21.7071 10.2929C21.5196 10.1054 21.2652 10 21 10Z" fill="white" />
                  </svg>Invite People
                </button>
                <div className="flex gap-x-5">
                  <button className='flex items-center gap-x-2 text-white border border-[#7879F1] px-3 py-2 rounded-xl'>
                    Private
                  </button>
                  <button className='flex items-center gap-x-2 text-white bg-[#7879F1] px-5 py-2 rounded-xl'>
                    Edit
                  </button>
                </div>
                <button className='flex items-center gap-x-2 text-white border border-[#7879F1] px-4 py-2 rounded-xl'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 0.999939H5.99995C4.67436 1.00153 3.40351 1.52882 2.46617 2.46616C1.52884 3.4035 1.00154 4.67434 0.999954 5.99994V13.9999C1.00141 15.1521 1.40004 16.2686 2.12867 17.1612C2.8573 18.0538 3.87137 18.6678 4.99995 18.8999V21.9999C4.99993 22.181 5.04905 22.3586 5.14208 22.5139C5.23511 22.6693 5.36856 22.7964 5.52819 22.8818C5.68782 22.9672 5.86764 23.0077 6.04847 22.9989C6.2293 22.9901 6.40435 22.9324 6.55495 22.8319L12.3 18.9999H18C19.3256 18.9984 20.5964 18.4711 21.5337 17.5337C22.4711 16.5964 22.9984 15.3255 23 13.9999V5.99994C22.9984 4.67434 22.4711 3.4035 21.5337 2.46616C20.5964 1.52882 19.3256 1.00153 18 0.999939ZM16 12.9999H7.99995C7.73474 12.9999 7.48038 12.8946 7.29285 12.707C7.10531 12.5195 6.99995 12.2652 6.99995 11.9999C6.99995 11.7347 7.10531 11.4804 7.29285 11.2928C7.48038 11.1053 7.73474 10.9999 7.99995 10.9999H16C16.2652 10.9999 16.5195 11.1053 16.7071 11.2928C16.8946 11.4804 17 11.7347 17 11.9999C17 12.2652 16.8946 12.5195 16.7071 12.707C16.5195 12.8946 16.2652 12.9999 16 12.9999ZM18 8.99994H5.99995C5.73474 8.99994 5.48038 8.89458 5.29285 8.70705C5.10531 8.51951 4.99995 8.26516 4.99995 7.99994C4.99995 7.73472 5.10531 7.48037 5.29285 7.29283C5.48038 7.1053 5.73474 6.99994 5.99995 6.99994H18C18.2652 6.99994 18.5195 7.1053 18.7071 7.29283C18.8946 7.48037 19 7.73472 19 7.99994C19 8.26516 18.8946 8.51951 18.7071 8.70705C18.5195 8.89458 18.2652 8.99994 18 8.99994Z" fill="white" />
                  </svg>

                  45 Comments
                </button>
              </div>
            </div>
          </div>


          <div className="">
            <div className="flex flex-col justify-center">
              <div className="flex flex-row lg:justify-end md:justify-end sm:justify-center justify-center gap-x-4">
                <div className="flex flex-row items-center gap-x-2">
                  <div className="flex flex-col items-end">
                    <h1 className='text-[18px] font-medium text-white text-end'>Centered Martial Arts</h1>
                    <span className='text-[#A5A5A5] text-[14px]'>Sunnyvale, Ca</span>
                  </div>
                  <div className="flex">
                    <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d_1_423)">
                        <rect x="8" y="4" width="68" height="68" rx="14" fill="white" />
                      </g>
                      <g clipPath="url(#clip0_1_423)">
                        <path d="M56.905 52.9049C54.9345 54.8736 52.5933 56.4324 50.0168 57.491C47.4404 58.5497 44.6797 59.0873 41.8942 59.0728C39.1088 59.0583 36.3538 58.492 33.7885 57.4066C31.2231 56.3212 28.8983 54.7382 26.9484 52.7491C27.89 53.6306 29.1337 54.1177 30.4235 54.1102C31.7133 54.1026 32.9512 53.601 33.8824 52.7085C34.8137 51.816 35.3674 50.6006 35.4297 49.3122C35.4921 48.0239 35.0583 46.7607 34.2175 45.7824C35.2395 46.8079 36.4538 47.6216 37.7909 48.1768C39.1279 48.732 40.5614 49.0178 42.0092 49.0178C43.457 49.0178 44.8905 48.732 46.2275 48.1768C47.5646 47.6216 48.7789 46.8079 49.8009 45.7824C48.8564 46.7269 48.3257 48.008 48.3257 49.3437C48.3257 50.6794 48.8564 51.9604 49.8009 52.9049C50.7454 53.8494 52.0264 54.3801 53.3621 54.3801C54.6978 54.3801 55.9789 53.8494 56.9234 52.9049H56.905Z" fill="#FFCC66" />
                        <path d="M57.1709 30.7492C56.1922 31.6581 54.8933 32.1423 53.5585 32.0959C52.2237 32.0495 50.9616 31.4763 50.0484 30.5017C48.0427 28.383 45.2775 27.1478 42.361 27.0678C39.4446 26.9879 36.6159 28.0698 34.4971 30.0755C32.3784 32.0812 31.1432 34.8464 31.0632 37.7628C30.9833 40.6792 32.0652 43.508 34.0709 45.6267C33.1451 44.7099 31.8998 44.1879 30.597 44.1705C29.2941 44.1532 28.0354 44.6417 27.0854 45.5335C26.1355 46.4252 25.5684 47.6507 25.5035 48.952C25.4387 50.2533 25.881 51.5291 26.7375 52.5109C14.0234 39.1734 23.52 16.9167 42 16.9167C44.9335 16.9118 47.8354 17.521 50.5193 18.705C53.2031 19.8891 55.6094 21.6218 57.5834 23.7917C58.428 24.7795 58.857 26.0562 58.78 27.3536C58.7031 28.6511 58.1263 29.8681 57.1709 30.7492Z" fill="#6FABE6" />
                        <path d="M33.9609 52.7674C33.2384 53.463 32.3245 53.9268 31.3365 54.0994C30.3485 54.272 29.3315 54.1454 28.416 53.7359C27.5004 53.3265 26.7281 52.6528 26.1981 51.8013C25.6682 50.9498 25.4047 49.9594 25.4415 48.9572C25.4783 47.9549 25.8138 46.9865 26.4048 46.1762C26.9959 45.366 27.8156 44.7508 28.7587 44.4096C29.7018 44.0684 30.7253 44.0168 31.698 44.2614C32.6706 44.506 33.548 45.0357 34.2176 45.7824C35.0858 46.7542 35.544 48.0244 35.4962 49.3266C35.4483 50.6289 34.8981 51.862 33.9609 52.7674Z" fill="#9DCC6B" />
                        <path d="M56.9051 52.9049C56.4374 53.3726 55.8822 53.7435 55.2711 53.9966C54.6601 54.2497 54.0052 54.38 53.3438 54.38C52.6824 54.38 52.0275 54.2497 51.4165 53.9966C50.8054 53.7435 50.2502 53.3726 49.7826 52.9049C49.3149 52.4372 48.9439 51.882 48.6908 51.271C48.4377 50.6599 48.3074 50.005 48.3074 49.3436C48.3074 48.6823 48.4377 48.0273 48.6908 47.4163C48.9439 46.8053 49.3149 46.2501 49.7826 45.7824C51.7829 43.7841 52.9369 41.0924 53.0052 38.2658C53.0735 35.4392 52.0507 32.6949 50.1492 30.6024C51.05 31.5167 52.2655 32.053 53.5481 32.102C54.8306 32.151 56.0836 31.7091 57.0515 30.8662C58.0194 30.0234 58.6295 28.8431 58.7573 27.566C58.885 26.2889 58.521 25.0112 57.7392 23.9932C61.3127 28.0101 63.2166 33.2405 63.0616 38.6147C62.9065 43.9888 60.7042 49.1007 56.9051 52.9049Z" fill="#DB5669" />
                        <path d="M63.0009 36.1665C62.675 39.9107 61.3541 43.4997 59.1751 46.562C56.9961 49.6242 54.0382 52.0482 50.6075 53.5832C49.9761 53.1757 49.444 52.632 49.0502 51.992C48.6564 51.352 48.4109 50.6319 48.3318 49.8846C48.2527 49.1374 48.3419 48.3818 48.593 47.6735C48.844 46.9653 49.2505 46.3222 49.7825 45.7915C51.7829 43.7933 52.9369 41.1015 53.0052 38.2749C53.0735 35.4483 52.0507 32.704 50.1492 30.6115C51.05 31.5258 52.2655 32.0621 53.5481 32.1111C54.8306 32.1601 56.0835 31.7182 57.0515 30.8753C58.0194 30.0325 58.6294 28.8522 58.7572 27.5751C58.885 26.298 58.5209 25.0203 57.7392 24.0023C60.7669 27.3785 62.6137 31.6482 63.0009 36.1665Z" fill="#F26674" />
                        <path d="M57.1709 30.7491C56.1922 31.658 54.8933 32.1422 53.5585 32.0958C52.2237 32.0494 50.9616 31.4762 50.0484 30.5016C48.0427 28.3829 45.2775 27.1477 42.361 27.0677C39.4446 26.9878 36.6159 28.0697 34.4971 30.0754C32.3784 32.0811 31.1432 34.8463 31.0632 37.7627C30.9833 40.6791 32.0652 43.5079 34.0709 45.6266C33.4613 45.0034 32.7006 44.5489 31.8629 44.3074C31.0253 44.066 30.1393 44.0458 29.2916 44.249C28.4438 44.4522 27.6632 44.8717 27.026 45.4666C26.3888 46.0615 25.9167 46.8115 25.6559 47.6433C22.9812 44.3752 21.3579 40.3744 20.9992 36.1666C21.3547 32.0852 22.8915 28.1958 25.4219 24.9738C27.9523 21.7518 31.3666 19.3369 35.2474 18.0242C39.1282 16.7114 43.3074 16.5578 47.2742 17.5821C51.2409 18.6063 54.8233 20.7641 57.5834 23.7916C58.428 24.7794 58.857 26.0561 58.78 27.3535C58.7031 28.6509 58.1263 29.868 57.1709 30.7491Z" fill="#82BCF4" />
                        <path d="M33.09 53.4366C30.2054 52.0931 27.6635 50.1122 25.6559 47.6432C25.8988 46.8673 26.3262 46.1618 26.9013 45.5871C27.4764 45.0124 28.1822 44.5856 28.9583 44.3432C29.7344 44.1009 30.5577 44.0502 31.3577 44.1954C32.1577 44.3407 32.9105 44.6777 33.5519 45.1774C34.1932 45.6772 34.7039 46.3249 35.0402 47.0652C35.3765 47.8054 35.5285 48.6161 35.4831 49.4279C35.4377 50.2397 35.1963 51.0284 34.7796 51.7265C34.3628 52.4247 33.7831 53.0114 33.09 53.4366Z" fill="#B5E08C" />
                        <path d="M50.6075 53.5832C47.85 54.8232 44.8572 55.4529 41.8338 55.4291C38.8104 55.4054 35.8278 54.7288 33.09 53.4457C33.7204 53.0612 34.2583 52.5427 34.6658 51.927C35.0733 51.3112 35.3404 50.6134 35.448 49.8829C35.5556 49.1525 35.5011 48.4073 35.2885 47.7002C35.0758 46.9931 34.7102 46.3415 34.2175 45.7916C35.2395 46.8171 36.4538 47.6307 37.7909 48.1859C39.1279 48.7411 40.5614 49.0269 42.0092 49.0269C43.457 49.0269 44.8905 48.7411 46.2275 48.1859C47.5646 47.6307 48.7789 46.8171 49.8009 45.7916C49.2679 46.321 48.8602 46.963 48.6077 47.6705C48.3552 48.378 48.2643 49.133 48.3417 49.8802C48.4191 50.6274 48.6627 51.3478 49.0548 51.9886C49.4469 52.6294 49.9774 53.1742 50.6075 53.5832Z" fill="#FFDE76" />
                      </g>
                      <defs>
                        <filter id="filter0_d_1_423" x="0" y="0" width="84" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="4" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_423" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_423" result="shape" />
                        </filter>
                        <clipPath id="clip0_1_423">
                          <rect width="44" height="44" fill="white" transform="translate(20 16)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="flex items-center">
                  <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12.5" cy="3.5" r="2.5" fill="#A5A5A5" />
                      <circle cx="12.5" cy="11.5" r="2.5" fill="#A5A5A5" />
                      <circle cx="12.5" cy="19.5" r="2.5" fill="#A5A5A5" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col flex-col items-center justify-between gap-x-4">
                <div className="">
                  <p className='text-[16px] font-normal text-white'>Total Progress 60%</p>
                </div>
                <div className="flex">
                  <svg width="116" height="14" className='absolute' viewBox="0 0 116 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="116" height="14" rx="7" fill="#6418C3" />
                  </svg>
                  <svg width="258" height="14" viewBox="0 0 258 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="258" height="14" rx="7" fill="#1E1C3A" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TitleSection