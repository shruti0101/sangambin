import { Award, BadgeCheck, Building2, FileCheck2, MapPinned } from "lucide-react";

const stats = [
  {
    icon: <Building2 size={28} />,
    value: "GeM",
    label: "Approved",
  },
  {
    icon: <BadgeCheck size={28} />,
    value: "ISO 9001",
    label: "Certified",
  },
  {
    icon: <Award size={28} />,
    value: "50+",
    label: "Years in Business",
  },
  // {
  //   icon: <FileCheck2 size={28} />,
  //   value: "1,000+",
  //   label: "Govt. Contracts",
  // },
  {
    icon: <MapPinned size={28} />,
    value: "28+",
    label: "States Delivered",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-[#13251D] py-5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-6 lg:gap-8 text-center md:grid-cols-4 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="mb-3 text-lime-400">{item.icon}</div>

              <h3 className="text-3xl font-extrabold text-white">
                {item.value}
              </h3>

              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gray-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}