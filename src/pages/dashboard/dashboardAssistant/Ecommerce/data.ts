// images
import avatar1 from "../../../../assets/images/users/avatar-7.jpg";
import avatar2 from "../../../../assets/images/users/avatar-9.jpg";
import avatar3 from "../../../../assets/images/users/avatar-4.jpg";
import avatar4 from "../../../../assets/images/users/avatar-1.jpg";
import avatar5 from "../../../../assets/images/users/avatar-8.jpg";
import profilePic2 from "../../../../assets/images/users/avatar-5.jpg";

// types
import { MembersTypes } from "../../../../components/MembersList";
import { TaskItemTypes } from "../../../../components/Tasks";
import { MessageItemTypes } from "../../../../components/ChatList";

export interface OrdersItemTypes {
  id: number;
  NOM: string;
  RAISONS: string;
  SERVICE: string;
  status: string;
}

const orderDetails: OrdersItemTypes[] = [
  {
    id: 98754,
    NOM: "KHADIJA ENNOUAR",
    RAISONS: "assistance sociale",
    SERVICE: "signalement",
    status: "Pending",
  },
  {
    id: 98753,
    NOM: "ANOUAR RADI ",
    RAISONS: "PEC psychologique",
    SERVICE: "suivie psychologique",
    status: "Delivered",
  },
  {
    id: 98752,
    NOM: "AICHA ECHENNA",
    RAISONS: "renseignement",
    SERVICE: "signalement",
    status: "Declined",
  },
  {
    id: 98751,
    NOM: "WALID ELAARABI",
    RAISONS: "certificat médicale",
    SERVICE: "soins primaires",
    status: "Delivered",
  },
  {
    id: 98750,
    NOM: "IBTISSAM KALIDIY",
    RAISONS: "PEC médicale",
    SERVICE: "traitement préventif MST",
    status: "Declined",
  },
];

const topPerformers: MembersTypes[] = [
  {
    id: 1,
    name: "ABDELLAH ELHASSANI",
    avatar: avatar1,
    designation: "ASSISTANT SOCIAL",
  },
  {
    id: 2,
    name: "BOUCHRA ERRAJI",
    avatar: avatar2,
    designation: "PSYCHOLOGUE",
  },
  {
    id: 3,
    name: "KHALIL ELBADRAOUI",
    avatar: avatar3,
    designation: "MEDECIN GENERALE",
  },
  {
    id: 4,
    name: "AKRAM NAJIM",
    avatar: avatar4,
    designation: "ASSISTANT COMMUNITAIRE",
  },
  {
    id: 5,
    name: "SAKALO NAKAIRO",
    avatar: avatar5,
    designation: "PRESEDENT ONG",
  },
];

const tasks: TaskItemTypes[] = [
  {
    id: 1,
    title: "VISITE MEDECIN GENERALE ",
    dueDate: "24 NOV, 2023",
  },
  {
    id: 2,
    title: "AJOUTE VISITE DE GENDARME DOSSIER #223",
    dueDate: "23 NOV, 2023",
  },
  {
    id: 3,
    title: "DEMANDE D'ENVOIYE CERTIFICAT CHP DOSSIER #325",
    dueDate: "22 NOV, 2023",
  },
  {
    id: 4,
    title: "ATTENDRE VISITE DE ALI DOSSIER #389",
    dueDate: "21 DEC, 2023",
  },
  {
    id: 5,
    title: "SUIVI DOSSIER #908",
    dueDate: "20 Aug, 2019",
  },
  {
    id: 6,
    title: "RAPPELE GENDARME D #553",
    dueDate: "18 DEC, 2023",
  },
  {
    id: 7,
    title: "NOTIFY PROCUREUR",
    dueDate: "18 DEC, 2023",
  },
];
const chatMessages: MessageItemTypes[] = [
  {
    id: 1,
    userPic: profilePic2,
    userName: "KHALID",
    text: "Hello!",
    postedOn: "10:00",
  },
  {
    id: 2,
    userPic: avatar4,
    userName: "ALI",
    text: "Hi, How are you? What about our next meeting?",
    postedOn: "10:01",
  },
  {
    id: 3,
    userPic: profilePic2,
    userName: "KHALID",
    text: "Yeah everything is fine",
    postedOn: "10:02",
  },
  {
    id: 4,
    userPic: avatar4,
    userName: "ALI",
    text: "Wow that's great!",
    postedOn: "10:03",
  },
  {
    id: 5,
    userPic: profilePic2,
    userName: "KHALID",
    text: "Cool!",
    postedOn: "10:03",
  },
];

export { orderDetails, topPerformers, tasks, chatMessages };
