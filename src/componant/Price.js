import React from 'react'

const Price = () => {
  return (
    <section className="price py-[80px] md:px-[40px] px-[20px]">
        <div className="container_custom">
            <div className="con text-center">
                <div className="headding">
                    <div className="heddinge_main flex items-center gap-1 justify-center">
                        <img src={require("../asset/section-vec-l1 2.png")} alt="" className='w-[24px] h-[36px]' />
                        <h3 className='md:text-[48px] text-[36px] font-[700] md:leading-[60px] leading-[48px]' >Pricing Plan</h3>
                        <img src={require("../asset/section-vec-r1 2.png")} alt="" className='w-[24px] h-[36px] mt-[10px]' />
                    </div>
                    <h2 className='md:text-[64px] text-[48px] font-[600] mt-[46px]'>
                        Choose Your Perfect Plan 
                    </h2>
                    <div className="content"></div>
                </div>
                <div className="contant">
                    <div className="choose flex justify-center mt-[88px]">
                        <div className="p_1 py-[10px] px-[45px] text-white font-[500] leading-[20px]" style={{background: "linear-gradient(275.83deg, #FE704B 39.77%, #BE3F45 114.02%)" , borderRadius: "50px 0px 0px 50px"}}>
                            Per Month
                        </div>
                        <div className="p_2 py-[10px] px-[45px] bg-[#272727] text-white font-[500] leading-[20px]" style={{borderRadius: "0px 50px 50px 0px"}}>
                            Per Hour
                        </div>
                    </div>
                    <div className="price_option flex justify-center gap-[27px] mt-[60px] lg:flex-nowrap flex-wrap">
                        <div className="main_box">
                            <div className="sub_box xl:px-[46px] lg:px-[30px] xs:px-[46px] px-[20px] max-w-full py-[54px] rounded-[20px]" style={{background: "linear-gradient(90deg, #FAF0EC -24.76%, #FFFFFF 99.99%, #FFFFFF 100%)"}}>
                                <div className="name"><span className='teext-[#333237] font-[500] text-[20px] leading-[20px] xl:mb-[40px] mb-[30px] block'>Day Care Regular</span></div>
                                <div className="price_o flex items-end gap-2 mb-[20px] justify-center">
                                    <h3 className='font-[600] text-[48px]'>$32</h3>
                                    <span className='text-[20px] font-[400] text-[#FE704B]'>Per Hour</span>
                                </div>
                                <div className="feeture">
                                    <ul className='text-left'>
                                        <li><a href="" className='text-[14px] leading-[20px] text-[#70717B] font-[400] xl:py-[20px] py-[15px] block'>Socialise Exercise</a></li>
                                        <div className="bg-[#D9D9D9] h-[1px] xl:w-[326px] w-[240px] rounded-full"></div>
                                        <li><a href="" className='text-[14px] leading-[20px] text-[#70717B] font-[400] xl:py-[20px] py-[15px] block'>Handscissor Finish</a></li>
                                        <div className="bg-[#D9D9D9] h-[1px] xl:w-[326px] w-[240px] rounded-full"></div>
                                        <li><a href="" className='text-[14px] leading-[20px] text-[#70717B] font-[400] xl:py-[20px] py-[15px] block'>Watering Plants</a></li>
                                        <div className="bg-[#D9D9D9] h-[1px] xl:w-[326px] w-[240px] rounded-full"></div>
                                        <li><a href="" className='text-[14px] leading-[20px] text-[#70717B] font-[400] pt-[20px] block'>Conditioning Treatment</a></li>
                                    </ul>
                                </div>
                                <div className="btn text-center xl:mt-[64px] mt-[40px]">
                                    <button>
                                        <a href="" className='py-[18px] px-[50px] rounded-full text-[12px] font-[600] leading-[15px] mx-auto block' style={{border: "1px solid #FE704B"}}>
                                            Book Now
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="main_box">
                            <div className="sub_box xl:px-[46px] lg:px-[30px] xs:px-[46px] px-[20px] max-w-full py-[54px] rounded-[20px] bg-[#273D4D] text-white">
                                <div className="name"><span className='teext-[#333237] font-[500] text-[20px] leading-[20px] xl:mb-[40px] mb-[30px] block'>Day Care Standard</span></div>
                                <div className="price_o flex items-end gap-2 mb-[20px] justify-center">
                                    <h3 className='font-[600] text-[48px]'>$49</h3>
                                    <span className='text-[20px] font-[400] text-[#FE704B]'>Per Hour</span>
                                </div>
                                <div className="feeture">
                                    <ul className='text-left'>
                                        <li><a href="" className='text-[14px] leading-[20px] font-[400] py-[20px] block'>Socialise Exercise</a></li>
                                        <div className="bg-[#D9D9D9] h-[1px] xl:w-[326px] w-[240px] rounded-full"></div>
                                        <li><a href="" className='text-[14px] leading-[20px] font-[400] py-[20px] block'>Handscissor Finish</a></li>
                                        <div className="bg-[#D9D9D9] h-[1px] xl:w-[326px] w-[240px] rounded-full"></div>
                                        <li><a href="" className='text-[14px] leading-[20px] font-[400] py-[20px] block'>Watering Plants</a></li>
                                        <div className="bg-[#D9D9D9] h-[1px] xl:w-[326px] w-[240px] rounded-full"></div>
                                        <li><a href="" className='text-[14px] leading-[20px] font-[400] py-[20px] block'>Watering Plants</a></li>
                                        <div className="bg-[#D9D9D9] h-[1px] xl:w-[326px] w-[240px] rounded-full"></div>
                                        <li><a href="" className='text-[14px] leading-[20px] font-[400] pt-[20px] block'>Conditioning Treatment</a></li>
                                    </ul>
                                </div>
                                <div className="btn text-center xl:mt-[64px] mt-[40px]">
                                    <button>
                                        <a href="" className='py-[18px] px-[50px] rounded-full text-[12px] font-[600] leading-[15px] mx-auto block bg-[#FE704B]'>
                                            Book Now
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="main_box">
                            <div className="sub_box xl:px-[46px] lg:px-[30px] xs:px-[46px] px-[20px] max-w-full py-[54px] rounded-[20px]" style={{background: "linear-gradient(90deg, #FAF0EC -24.76%, #FFFFFF 99.99%, #FFFFFF 100%)"}}>
                                <div className="name"><span className='teext-[#333237] font-[500] text-[20px] leading-[20px] xl:mb-[40px] mb-[30px] block'>Day Care Special</span></div>
                                <div className="price_o flex items-end gap-2 mb-[20px] justify-center">
                                    <h3 className='font-[600] text-[48px]'>$99</h3>
                                    <span className='text-[20px] font-[400] text-[#FE704B]'>Per Hour</span>
                                </div>
                                <div className="feeture">
                                    <ul className='text-left'>
                                        <li><a href="" className='text-[14px] leading-[20px] text-[#70717B] font-[400] xl:py-[20px] py-[15px] block'>Socialise Exercise</a></li>
                                        <div className="bg-[#D9D9D9] h-[1px] xl:w-[326px] w-[240px] rounded-full"></div>
                                        <li><a href="" className='text-[14px] leading-[20px] text-[#70717B] font-[400] xl:py-[20px] py-[15px] block'>Handscissor Finish</a></li>
                                        <div className="bg-[#D9D9D9] h-[1px] xl:w-[326px] w-[240px] rounded-full"></div>
                                        <li><a href="" className='text-[14px] leading-[20px] text-[#70717B] font-[400] xl:py-[20px] py-[15px] block'>Watering Plants</a></li>
                                        <div className="bg-[#D9D9D9] h-[1px] xl:w-[326px] w-[240px] rounded-full"></div>
                                        <li><a href="" className='text-[14px] leading-[20px] text-[#70717B] font-[400] pt-[20px] block'>Conditioning Treatment</a></li>
                                    </ul>
                                </div>
                                <div className="btn text-center xl:mt-[64px] mt-[40px]">
                                    <button>
                                        <a href="" className='py-[18px] px-[50px] rounded-full text-[12px] font-[600] leading-[15px] mx-auto block' style={{border: "1px solid #FE704B"}}>
                                            Book Now
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Price