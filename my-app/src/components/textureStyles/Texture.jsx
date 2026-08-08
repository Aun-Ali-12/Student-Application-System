import {
  IconSchool,
  IconCode,
  IconBook,
  IconDeviceLaptop,
  IconBulb,
  IconCertificate,
} from "@tabler/icons-react";
export default function Texture() {
  return (
    <>
      {/* Background floating icons — education themed */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Top left */}
        <div className="absolute -top-4 -left-1 opacity-[0.06] rotate-[-15deg]">
          <IconSchool size={180} className="text-[#5B4FCF]" />
        </div>

        {/* Top right */}
        <div className="absolute top-10 right-10 opacity-[0.05] rotate-[10deg]">
          <IconCode size={120} className="text-[#5B4FCF]" />
        </div>

        {/* Bottom left */}
        <div className="absolute bottom-10 left-10 opacity-[0.05] rotate-[15deg]">
          <IconBook size={140} className="text-[#5B4FCF]" />
        </div>

        {/* Bottom right */}
        <div className="absolute -bottom-4 -right-4 opacity-[0.06] rotate-[-10deg]">
          <IconDeviceLaptop size={160} className="text-[#5B4FCF]" />
        </div>

        {/* Middle left */}
        <div className="absolute top-1/2 -left-8 opacity-[0.04] -translate-y-1/2 rotate-[20deg]">
          <IconBulb size={100} className="text-[#5B4FCF]" />
        </div>

        {/* Middle right */}
        <div className="absolute top-1/3 -right-6 opacity-[0.04] rotate-[-20deg]">
          <IconCertificate size={110} className="text-[#5B4FCF]" />
        </div>
      </div>
    </>
  );
}
