import type { NextPage } from "next";

const Tooloption: NextPage = () => {
  return (
    <div className="rounded-base flex flex-col items-center justify-start text-center text-[1.25rem] text-white font-small-heading border-[1px] border-solid border-dimgray">
      <img
        className="relative rounded-t-base rounded-b-none w-[23.31rem] h-[13.44rem] shrink-0 object-cover"
        alt=""
        src="../rectangle-10@2x.png"
      />
      <div className="flex flex-col pt-[0.63rem] px-[0rem] pb-[0.75rem] items-center justify-start gap-[2.13rem]">
        <div className="flex flex-col items-center justify-start gap-[0.31rem]">
          <div className="relative leading-[1.63rem] font-semibold">
            BMR Calculator
          </div>
          <div className="relative text-[1rem] font-paragraph flex items-center justify-center w-[22.69rem]">
            Your basal metabolic rate (BMR) is the number of calories your body
            needs to sustain itself if you do absolutely nothing all day.
          </div>
        </div>
        <div className="rounded-small bg-white flex flex-row py-[0.69rem] px-[0.94rem] items-center justify-center text-[1.13rem] text-heading font-paragraph">
          <div className="relative uppercase font-semibold">calculate now</div>
        </div>
      </div>
    </div>
  );
};

export default Tooloption;
