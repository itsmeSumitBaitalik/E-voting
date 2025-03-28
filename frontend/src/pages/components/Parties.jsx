import AAPLogo from "../img/AAP.png";
import BJPIcon from "../img/BJP.png";
import CongressIcon from "../img/INC.png";
import BSPIcon from "../img/BSP.png";
import TMCIcon from "../img/AITC.png";

export const Parties = [
    {
      id: 1,
      name: "Bharatiya Janata Party",
      slogan: "Nation First, Always First",
      icon: BJPIcon,
      bgColor: "#FF9900",
      policies: ["Hindutva ideology", "Economic development", "National security"],
      leadership: { name: "Jagat Prakash Nadda", position: "National President", since: 2020 }
    },
    {
      id: 2,
      name: "Indian National Congress",
      slogan: "Congress Ka Haath, Aam Aadmi Ke Saath",
      icon: CongressIcon,
      bgColor: "#FFF5E4",
      policies: ["Secularism", "Social welfare programs", "Farmers' rights"],
      leadership: { name: "Mallikarjun Kharge", position: "National President", since: 2022 }
    },
    {
      id: 3,
      name: "Aam Aadmi Party",
      slogan: "Swaraj",
      icon: AAPLogo,
      bgColor: "#FBF8EF",
      policies: ["Anti-corruption", "Education reform", "Healthcare access"],
      leadership: { name: "Arvind Kejriwal", position: "National Convenor", since: 2012 }
    },
    {
      id: 4,
      name: "Bahujan Samaj Party",
      slogan: "Sarvajan Hitay, Sarvajan Sukhay",
      icon: BSPIcon,
      bgColor: "#F6F0F0",
      policies: ["Dalit empowerment", "Social justice", "Reservation system"],
      leadership: { name: "Mayawati", position: "National President", since: 1984 }
    },
    {
      id: 5,
      name: "All India Trinamool Congress",
      slogan: "Ma Mati Manush",
      icon: TMCIcon,
      bgColor: "#80C5F6",
      policies: ["Bengali regionalism", "Women empowerment", "Federalism"],
      leadership: { name: "Mamata Banerjee", position: "Chairperson", since: 1998 }
    }
  ];
  