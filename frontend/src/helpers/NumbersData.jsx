const numbersData = [
  {
    amount: 9.4,
    label: "AGOA Impact",
    source: "(Source: USTR)",
    description: () => (
      <div className="text-zinc-500 text-sm">
        <span>AGOA has supported </span>
        <span className="font-bold text-green-700">$9.4 Billion in US imports <br /> from Africa, </span>
        <span>creating jobs and boosting economic growth in eligible countries</span>
      </div>
    )
  },
  {
    amount: 44.8,
    label: "Foreign Direct Investment",
    source: "(Source: UNCTAD)",
    description: () => (
      <div className="text-zinc-500 text-sm">
        <span>The US is one of the largest FDI in Africa,<br /> with investment totaling </span>
        <span className="font-bold text-green-700">$44.8 Billion in 2022.</span>
      </div>
    )
  },
  {
    amount: 64.3,
    label: "US-Africa Trade",
    source: "(Source: USTR)",
    description: () => (
      <div className="text-zinc-500 text-sm">
        <span>In 2022, US trade in Africa totaled </span>
        <span className="font-bold text-green-700">$64.3 Billion,</span> <br />
        <span>with US exports to Africa reaching </span>
        <span className="font-bold text-green-700">$26.8 Billion.</span>
      </div>
    )
  }
];

export default numbersData;
