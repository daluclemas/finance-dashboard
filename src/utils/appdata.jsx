import * as customIcons from "../lib/custom-icons";

export const menuItems = [
  {
    url: "#",
    pathname: "wallet",
    icon: () => <customIcons.IconWallet />,
  },
  {
    url: "#",
    pathname: "favorite",
    icon: () => <customIcons.IconFavorite />,
  },

  {
    url: "#",
    pathname: "schedule",
    icon: () => <customIcons.IconCalendar />,
  },

  {
    url: "#",
    pathname: "storage",
    icon: () => <customIcons.IconStorage />,
  },

  {
    url: "#",
    pathname: "files",
    icon: () => <customIcons.IconFiles />,
  },

  {
    url: "#",
    pathname: "delete",
    icon: () => <customIcons.IconTrash />,
  },
];

export const profileAccordionData = [
  {
    icons: () => <customIcons.IconGoals />,
    title: "goals",
    paragraph:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas quam repellat qui? Deserunt, illum eos. Enim voluptas aspernatur molestias. Aperiam.",
    bg: "bg-seashell",
  },

  {
    icons: () => <customIcons.IconColoredCalendar />,
    title: "monthly plan",
    paragraph:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas quam repellat qui? Deserunt, illum eos. Enim voluptas aspernatur molestias. Aperiam.",
    bg: "bg-ghostwhite",
  },

  {
    icons: () => <customIcons.IconColoredGear />,
    title: "settings",
    paragraph:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas quam repellat qui? Deserunt, illum eos. Enim voluptas aspernatur molestias. Aperiam.",
    bg: "bg-aliceBlue",
  },
];

export const transactionDetails = [
  {
    billType: "income:salary oct",
    status: "",
    isIncoming: true,
    bg: "bg-radicalRed",
    icon: () => <customIcons.IconDollarBill />,
    price: 280,
  },
  {
    billType: "electric bill",
    status: "successfully",
    isIncoming: false,
    bg: "bg-dodgerBlue",
    icon: () => <customIcons.IconElectricCord />,
    price: 1200,
  },
  {
    billType: "income:jane transfers",
    status: "",
    isIncoming: true,
    bg: "bg-superNova",
    icon: () => <customIcons.IconIncomeReceipt />,
    price: 500,
  },
  {
    billType: "internet bill",
    status: "successfully",
    isIncoming: true,
    bg: "bg-mediumTurquoise",
    icon: () => <customIcons.IconBillReceipt />,
    price: 100,
  },
];

export const dashCardData = [
  {
    icons: () => <customIcons.Key />,
    title: "home loan",
  },
  {
    icons: () => <customIcons.Car />,
    title: "car loan",
  },
  {
    icons: () => <customIcons.Gear />,
    title: "maintenance",
  },
  {
    icons: () => <customIcons.Battery />,
    title: "Boosters",
  },
];
